const express = require("express");
const nodemailer = require("nodemailer"); // Import Nodemailer
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define your email sending function
const sendEmail = async (formData) => {
  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    // You need to configure your email provider here
    service: "gmail", // Example: Gmail
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Define email content
  let mailOptions = {
    from: formData.senderEmail, // Sender's email address (provided by the user)
    to: formData.recipientEmail, // Recipient's email address (provided by the user)
    subject: formData.subject, // Email subject (provided by the user)
    text: formData.message, // Email body (provided by the user)
  };

  // Send the email
  await transporter.sendMail(mailOptions);
};

// Route handler for sending email
app.post("/send-email", async (req, res) => {
  const formData = req.body; // Get form data from the request body

  try {
    // Send email using the provided form data
    await sendEmail(formData);
    // Respond with success message
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    // Respond with error message
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
