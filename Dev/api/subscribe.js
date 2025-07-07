import nodemailer from 'nodemailer';
import { parse } from 'querystring';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    return res.end('Method Not Allowed');
  }

  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    const { email } = parse(body);

    if (!email || !email.trim()) {
      res.statusCode = 400;
      return res.end('Email is required.');
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

      // ✅ Redirect to your thank-you page
      res.writeHead(302, { Location: '/thank-you.html' });
      res.end();
    } catch (err) {
      console.error('❌ Error sending email:', err);
      res.statusCode = 500;
      res.end('Error sending email.');
    }
  });
}
