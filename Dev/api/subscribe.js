import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email } = req.body || {};

  if (!email?.trim()) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"BioVault Signup" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: '🧠 New Subscriber - BioVault Health',
      text: `New subscriber: ${email}`,
    });

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error('❌ Email send failed:', err);
    return res.status(500).json({ message: 'Email failed to send.' });
  }
}
