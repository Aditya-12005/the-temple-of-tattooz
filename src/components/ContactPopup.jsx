// ContactPopup.jsx
import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import './ContactForm.css';

const ContactPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <ContactForm isPopup={true} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default ContactPopup;
