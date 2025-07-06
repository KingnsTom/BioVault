import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email } = req.body;

  if (!email?.trim()) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // e.g., phonesbackupz@gmail.com
        pass: process.env.EMAIL_PASS,  // App Password
      },
    });

    const mailOptions = {
      from: `"BioVault Signup" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: '🧠 New Newsletter Signup - BioVault Health',
      text: `New subscriber: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    // ✅ Redirect to Thank You page
    res.writeHead(302, { Location: '/thank-you.html' });
    return res.end();

  } catch (err) {
    console.error('Email send failed:', err);
    return res.status(500).json({ message: 'Email send failed.' });
  }
}
