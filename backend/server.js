const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
require("dotenv").config();


const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing fields" });
  }

  try {
    await resend.emails.send({
      from: "Safeguard Website <onboarding@resend.dev>",
      to: process.env.RECEIVER_EMAIL, // this will send to tumelomokoena050@gmail.com
      subject: `📬 New message from ${name}`,
      text: `From: ${name}\nEmail: ${email}\n\n${message}`,
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


