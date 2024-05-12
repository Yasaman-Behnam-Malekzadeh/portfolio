const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const sendEmail = async (formData) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: formData.senderEmail,
    to: formData.recipientEmail,
    subject: formData.subject,
    text: formData.message,
  };

  await transporter.sendMail(mailOptions);
};

app.post("/send-email", async (req, res) => {
  const formData = req.body;

  try {
    await sendEmail(formData);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
