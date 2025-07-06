import nodemailer from 'nodemailer';
import { parse } from 'querystring';

export const config = {
  api: {
    bodyParser: false, // We'll handle body manually
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  // Collect raw form data
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    const parsedBody = parse(body);
    const email = parsedBody.email;

    if (!email?.trim()) {
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

      const mailOptions = {
        from: `"BioVault Signup" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: '🧠 New Newsletter Signup - BioVault Health',
        text: `New subscriber: ${email}`,
      };

      await transporter.sendMail(mailOptions);

      // ✅ Redirect to thank-you page
      res.writeHead(302, { Location: '/thank-you.html' });
      return res.end();
    } catch (error) {
      console.error('Email send failed:', error);
      return res.status(500).send('Email send failed.');
    }
  });
}

