/**
 * Google Apps Script for handling contact form submissions from Acquiring Technology.
 * 
 * Instructions:
 * 1. Open your Google Spreadsheet (https://docs.google.com/spreadsheets/d/14-9q8ZlauWznDMBxIBNIs-mb-aDjf_-Eg5ZH1D_qRmU/edit)
 * 2. Go to 'Extensions' -> 'Apps Script' in the top menu.
 * 3. Delete any existing code and paste this script.
 * 4. Click 'Save' (the floppy disk icon).
 * 5. Click 'Deploy' -> 'New deployment' (top right).
 * 6. Select type 'Web app' (gear icon -> Web app).
 * 7. Set:
 *    - Description: Acquiring Tech Form Submission
 *    - Execute as: Me (your-email@gmail.com)
 *    - Who has access: Anyone
 * 8. Click 'Deploy'.
 * 9. Authorize the access request when prompted.
 * 10. Copy the generated 'Web app' URL.
 * 11. Paste this URL into your project's `.env` file under `GOOGLE_SCRIPT_URL`.
 */

function doPost(e) {
  try {
    const spreadsheetId = "14-9q8ZlauWznDMBxIBNIs-mb-aDjf_-Eg5ZH1D_qRmU";
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Parse JSON payload
    const data = JSON.parse(e.postData.contents);
    const timestamp = new Date();
    
    // Append row: Timestamp, Full Name, Email, Phone, Course, Message
    sheet.appendRow([
      timestamp,
      data.fullName || "",
      data.email || "",
      data.phone || "",
      data.course || "",
      data.message || ""
    ]);
    
    // 1. Send confirmation email to the student (applied person)
    const adminEmail = Session.getEffectiveUser().getEmail(); // Sends to you, the owner of the script
    if (data.email) {
      const studentSubject = "Your Counselling Session Registration - Acquiring Technology";
      
      const studentPlain = "Hi " + (data.fullName || "Student") + ",\n\n" +
        "Thank you for registering for a free career counselling session with Acquiring Technology.\n\n" +
        "We've successfully received your registration.\n\n" +
        "Your submitted details:\n" +
        "• Name: " + (data.fullName || "N/A") + "\n" +
        "• Email: " + data.email + "\n" +
        "• Selected Course: " + (data.course || "N/A") + "\n\n" +
        "One of our career counsellors will contact you within the next 24 hours by phone or email to schedule your counselling session.\n\n" +
        "If you need to update your information or have any questions before then, simply reply to this email and we'll be happy to help.\n\n" +
        "We appreciate your interest in Acquiring Technology and look forward to speaking with you.\n\n" +
        "Best regards,\n\n" +
        "Acquiring Technology\n" +
        "Website: https://acquiring.in\n" +
        "Email: acquiringtechnology@gmail.com\n" +
        "Phone: +91 XXXXX XXXXX";

      const studentHtml = 
        "<div style=\"font-family: Arial, sans-serif; font-size: 15px; color: #333333; line-height: 1.6; max-width: 600px;\">" +
          "<p>Hi " + (data.fullName || "Student") + ",</p>" +
          "<p>Thank you for registering for a free career counselling session with <strong>Acquiring Technology</strong>.</p>" +
          "<p>We've successfully received your registration.</p>" +
          "<p><strong>Your submitted details:</strong><br />" +
          "• Name: " + (data.fullName || "N/A") + "<br />" +
          "• Email: <a href=\"mailto:" + data.email + "\" style=\"color: #c71838; text-decoration: underline;\">" + data.email + "</a><br />" +
          "• Selected Course: " + (data.course || "N/A") + "</p>" +
          "<p>One of our career counsellors will contact you within the next <strong>24 hours</strong> by phone or email to schedule your counselling session.</p>" +
          "<p>If you need to update your information or have any questions before then, simply reply to this email and we'll be happy to help.</p>" +
          "<p>We appreciate your interest in Acquiring Technology and look forward to speaking with you.</p>" +
          "<p>Best regards,</p>" +
          "<p><strong>Acquiring Technology</strong><br />" +
          "Website: <a href=\"https://acquiring.in\" style=\"color: #c71838; text-decoration: underline;\">https://acquiring.in</a><br />" +
          "Email: <a href=\"mailto:acquiringtechnology@gmail.com\" style=\"color: #c71838; text-decoration: underline;\">acquiringtechnology@gmail.com</a><br />" +
          "Phone: +91 XXXXX XXXXX</p>" +
        "</div>";
      
      GmailApp.sendEmail(data.email, studentSubject, studentPlain, {
        htmlBody: studentHtml,
        name: "Acquiring Technology",
        replyTo: adminEmail
      });
    }

    // 2. Send notification email to Admin (so they know immediately about new leads)
    if (adminEmail) {
      const adminSubject = `🚨 New Lead: ${data.fullName} - ${data.course}`;
      const adminHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ccc; padding: 20px; border-radius: 8px;">
          <h2 style="color: #c71838; margin-top: 0;">New Lead Registered!</h2>
          <p>A new user has submitted the contact form on the website.</p>
          <hr />
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td><strong>Name:</strong></td><td>${data.fullName}</td></tr>
            <tr><td><strong>Email:</strong></td><td>${data.email}</td></tr>
            <tr><td><strong>Phone:</strong></td><td>${data.phone}</td></tr>
            <tr><td><strong>Course:</strong></td><td>${data.course}</td></tr>
            <tr><td><strong>Message:</strong></td><td>${data.message || "None"}</td></tr>
            <tr><td><strong>Timestamp:</strong></td><td>${timestamp}</td></tr>
          </table>
          <hr />
          <p><a href="https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit" style="color: #c71838; font-weight: bold; text-decoration: none;">View Spreadsheet</a></p>
        </div>
      `;
      
      GmailApp.sendEmail(adminEmail, adminSubject, "", {
        htmlBody: adminHtml,
        name: "Acquiring Technology Admin Portal"
      });
    }
    
    return ContentService.createTextOutput(JSON.stringify({ 
      success: true, 
      message: "Data successfully written to spreadsheet and emails sent" 
    }))
    .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      success: false, 
      error: error.toString() 
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}
