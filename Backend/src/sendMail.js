// sendMail.js
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");



// 1. User Schema

const userSchema = new mongoose.Schema({
  email: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

// 2. Nodemailer Transport

const transporter = nodemailer.createTransport({
  service: "gmail", // or configure with host/port if using custom SMTP
  auth: {
    user: "gpilaniaiit@gmail.com",   
    pass: "xldu rmrq htiq eetm"       
  }
});


// 3. Function to Send Mail

async function sendProfileUpdateMail(toEmail) {
  try {
    const info = await transporter.sendMail({
      from: '"Post Placement Tracker" <gpilaniaiit@gmail.com>',
      to: toEmail,
      subject: "Reminder: Please Update Your Profile",
      text: `Hi!! we hope you are doing well. 
This is a gentle reminder to update your profile on the Post Placement Tracker to ensure that your information is accurate and up to date.

If you have already updated your profile, please ignore this message.

Keeping your profile updated helps us track your placement status effectively and provide you with relevant opportunities and support.

Please log in to the portal and update your details at your earliest convenience.

For any queries or assistance, feel free to reach out to us at [Support Email/Contact].

Thank you for your prompt attention to this matter.

Best regards,
Post Placement Tracker Team
`,
      html: `
        <p> Hi !! We hope you are doing well.</p>
        <p>This is a gentle reminder to update your profile on the <strong>Post Placement Tracker</strong> to ensure that your information is accurate and up to date.</p>
        <p>If you have already updated your profile, please ignore this message.</p>
        <p>Keeping your profile updated helps us track your placement status effectively and provide you with relevant opportunities and support.</p>
        <p>Please log in to the portal and update your details at your earliest convenience:<br>
        <a href="[Insert Portal Link]" style="padding:10px 15px;background:#007BFF;color:#fff;text-decoration:none;border-radius:5px;">Update Profile</a></p>
        <p>For any queries or assistance, feel free to reach out to us at <a href="mailto:[Support Email]">[Support Email/Contact]</a>.</p>
        <p>Thank you for your prompt attention to this matter.</p>
        <p><strong>Best regards,<br/>Post Placement Tracker Team</strong></p>
      `
    });

    console.log('📧 Mail sent to: ${toEmail} (MessageId: ${info.messageId})');
  } catch (err) {
    console.error('❌ Failed to send to ${toEmail}:, err.message');
  }
}


// 5. Fetch Users & Send Mails

async function main() {
  const users = await User.find({});
  if (!users.length) {
    console.log("⚠ No users found in DB");
    process.exit();
  }

  for (const user of users) {
    await sendProfileUpdateMail(user.email);
  }

  console.log("✅ All mails processed");
  mongoose.connection.close();
}

main();