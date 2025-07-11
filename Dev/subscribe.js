import nodemailer from 'nodemailer';
import { parse } from 'querystring';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    const { email } = parse(body);

    if (!email || !email.trim()) {
      return res.status(400).send('Email is required.');
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

      res.writeHead(302, { Location: '/thank-you.html' });
      res.end();
    } catch (error) {
      console.error('❌ Email send error:', error);
      return res.status(500).send('Failed to send email.');
    }
  });
}
