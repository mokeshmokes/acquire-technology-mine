import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'Acquiring Technology - Premier Technology Education',
    description: 'Academic institution specializing in technology education, industry certifications, placements, and career development.',
    keywords: ['technology education', 'certifications', 'placements', 'career development'],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="min-h-screen">{children}</body>
        </html>
    );
}
