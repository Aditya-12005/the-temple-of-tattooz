import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {Phone, Mail,MessageCircle} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="end-content-section">
      <div className="end-content-box">

        <h3><img src="/logo.png" alt="logo" className='logo'/></h3>
        <br />
        <a href="tel:+918200646165"><Phone  size={17 } /> +918200646165</a>
        <br />
        <a href="mailto:thetempleoftattoo@gmail.com"><Mail size={17}/> thetempleoftattoo@gmail.com</a>
        <br /><br />
        <p>Jubelibaugh: <br /> 3rd floor, Lakeview Complex, near Gandhi Nagar Gruh, Mangal Bazar, Bajwada, Jubelibaugh, Vadodara, Gujarat 390001</p>
        <br />
        <p>Akota: <br /> First Floor, Parshwa Darshan Complex, near Gaay Circle, above Sony Center, Shrenikpark, Tarangan Society, Akota, Vadodara, Gujarat 390020</p><br />
        <h4>Studio Timing: 11:30AM - 08:30PM</h4>
      </div>

      <div className="end-content-box">
        <h3>Learn From Us</h3>
        <p>
          With 11+ years of experience, we’ve trained
          many successful tattoo artists who now run
          their own businesses or work with us. <br /><br />
          Connect with us, Advance with us.
        </p><br /><br />

        <h3>Other Links</h3>
        <p><a href="https://www.instagram.com/the_temple_of_tattooz/?hl=en"><img src="/instaIcon.svg" alt="" className='icon'/></a>
            <a href="https://www.facebook.com/TheTattooTemple1629/"><img src="/fbIcon.svg" alt="" className='icon'/></a>
            <a href="https://wa.me/8200646165"><img src="/wpIcon.svg" alt="" className='icon' /></a>
            <a href=" https://pin.it/3qgb7wCB5"><img src="/pinterestIcon.svg" alt="" className='icon' /></a>
        </p>
      </div>

    </footer>
  );
};

export default Footer;
