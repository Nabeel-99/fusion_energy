import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});
app.use(
  cors({
    origin: [
      process.env.DEPLOYED_URL,
      "http://localhost:5173" || process.env.FRONTEND_URL,
    ],
  })
);

app.get("/", (req, res) => {
    console.log("works")
    return res.status(200).json({message: "Working.."})
})
app.post("/api/send-email", async (req, res) => {
  try {
    const { fullname, email, phone, message } = req.body;
    const mailOptions = {
      from: `Fusion energy contact form ${process.env.GMAIL}`,
      to: process.env.GMAIL,
      subject: "Inquiry about Fusion Energy Solutions",
      replyTo: email,
      html: ` 

<p>Inquiry about Fusion Energy Solutions:</p>

<p>
${message}
</p>

<p>
– ${fullname}<br/>
${email}<br/>
${phone}
</p>`,
    };
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error sending email" });
  }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
