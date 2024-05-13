const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const sendEmail = async (formData) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yasaman.bmk@gmail.com",
      pass: "wskg rfjd hugx epxe",
    },
  });

  let mailOptions = {
    from: formData.senderEmail,
    to: "yasaman.bmk@gmail.com",
    subject: "From Website : " + formData.emailTopic,
    text: `Sender's Name: " ${formData.senderEmail}" with email : "${formData.emailAddress}"\n\n${formData.message}`,
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
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
