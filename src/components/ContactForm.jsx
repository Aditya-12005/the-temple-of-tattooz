import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    time: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, phone, location, time } = formData;
    const phoneRegex = /^\d{10}$/;

    if (!name.trim() || !phone.trim() || !location || !time) {
      setStatus('Please fill in all fields.');
      return false;
    }

    if (!phoneRegex.test(phone)) {
      setStatus('Phone number must be 10 digits.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    if (!validateForm()) return;

    setStatus('Sending...');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          phone: '',
          location: '',
          time: '',
        });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Something went wrong.');
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Book a Free Consultation</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} required />

        <label>Phone</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="\d{10}"
          inputMode="numeric"
        />

        <label>Location</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="location"
              value="Akota"
              checked={formData.location === 'Akota'}
              onChange={handleChange}
            />
            Akota
          </label>
          <label>
            <input
              type="radio"
              name="location"
              value="Jubelibaugh"
              checked={formData.location === 'Jubelibaugh'}
              onChange={handleChange}
            />
            Jubelibaugh
          </label>
        </div>

        <label>Preferred Call Time</label>
        <select name="time" value={formData.time} onChange={handleChange} required>
          <option value="">When can we call you</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>

        <button type="submit">Send</button>
        <p className="status">{status}</p>
      </form>
    </div>
  );
};

export default ContactForm;
