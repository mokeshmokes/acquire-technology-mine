import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fullName, email, phone, course, message } = body;

        // Validation
        if (!fullName || !email || !phone || !course || !message) {
            return NextResponse.json(
                { success: false, error: 'All fields are required.' },
                { status: 400 }
            );
        }

        const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

        if (!scriptUrl) {
            console.warn('GOOGLE_SCRIPT_URL environment variable is not defined.');
            // Fallback for development/testing if no URL is provided yet
            return NextResponse.json({
                success: true,
                warning: 'GOOGLE_SCRIPT_URL not configured. Submission logged locally.',
                data: body,
            });
        }

        const response = await fetch(scriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullName,
                email,
                phone,
                course,
                message,
            }),
        });

        if (!response.ok) {
            throw new Error(`Failed to submit to Google Apps Script: ${response.statusText}`);
        }

        const responseText = await response.text();

        try {
            const result = JSON.parse(responseText);
            return NextResponse.json(result);
        } catch (e) {
            console.error('Apps Script response is not valid JSON. Response:', responseText);

            if (responseText.includes('<!DOCTYPE') || responseText.includes('<html')) {
                return NextResponse.json(
                    {
                        success: false,
                        error: 'Google Apps Script returned an HTML page instead of JSON. Please make sure the Web App is deployed with "Who has access: Anyone" and you have authorized all permissions.'
                    },
                    { status: 500 }
                );
            }

            return NextResponse.json(
                { success: false, error: `Invalid response from Apps Script: ${responseText.substring(0, 100)}` },
                { status: 500 }
            );
        }
    } catch (error: any) {
        console.error('Error submitting form:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
