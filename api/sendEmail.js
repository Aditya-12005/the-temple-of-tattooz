import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, phone, location, time } = req.body;

  console.log('Form data received:', req.body); // <-- ✅ Vercel log

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // use verified sender
      to: 'thetempleoftattooz0@gmail.com',
      subject: `New Consultation Request from ${name}`,
      html: `
        <strong>Name:</strong> ${name} <br/>
        <strong>Phone:</strong> ${phone} <br/>
        <strong>Location:</strong> ${location} <br/>
        <strong>Preferred Time:</strong> ${time}
      `
    });

    console.log('Resend API response:', data); // <-- ✅ Vercel log

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error from Resend:', error); // <-- ✅ Vercel log
    return res.status(500).json({ success: false, message: error.message });
  }
}
