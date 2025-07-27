import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, phone, location, time } = req.body;

  try {
    await resend.emails.send({
      from: 'thetempleoftattooz0@gmail.com',  // ✅ Verified domain or email
      to: 'thetempleoftattooz0@gmail.com',              // ✅ Receiver email
      subject: `New Consultation Request from ${name}`,
      html: `
        <strong>Name:</strong> ${name}<br/>
        <strong>Phone:</strong> ${phone}<br/>
        <strong>Location:</strong> ${location}<br/>
        <strong>Preferred Time:</strong> ${time}
      `
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
}
