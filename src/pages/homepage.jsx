import React from 'react';
import './homepage.css';
import { Phone} from 'lucide-react';
import GallerySection from '../components/GallerySection.jsx';
import ImageSlider from '../components/happyCustomer.jsx';
import permanentTattoos from '../data/tattoos.js';
import piercing from '../data/piercings.js';
import smppmu from '../data/smppmu.js';  
import tattooRemoving from '../data/tattooRemoving.js';    
import Footer from '../components/Footer.jsx';   

const HomePage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="homepage-container">
        <div className="hero-content">
           <h1>The Temple Of Tattooz</h1>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="info-section">
        <div className="info-top">
          <div className="info-item"><h3>Call The Shop</h3><p><a href="tel:+918200646165"> +91 8200646165</a></p></div>
          <div className="info-item"><h3>Our Hours</h3><p>11:30AM - 08:30PM</p></div>
          <div className="info-item"><h3>Visit Us</h3><p>Vadodara, Gujarat</p></div>
          <div className="info-item"><h3>Email Us</h3><a href="mailto:thetempleoftattoo@gmail.com"> thetempleoftattoo@gmail.com</a></div>
        </div>

        <div className="info-bottom">
          <div className="info-overlay"></div>
          <div className="info-description">
            <h2>Walk In Tattoos <br />+<br />Tattoos By Appointment</h2>
            <p>
              The Temple of Tattoo is in the centre of Akota & the Best  place to get tattoos in Vadodara with 2 Branches first in Akota  and Second in Jubelibaugh . Being the best tattoo shop in Vadodara , we are well known for our ability to create one-of-a-kind, custom tattoo designs that fit your style. Our skilled and knowledgeable artists are committed to provide outstanding tattoo services, making sure that each work of art is painstakingly and precisely created. Whether you're searching for elaborate patterns, striking statements, or significant symbols, The Temple of Tattooz in  Vadodara studio has what you need. Experience the best tattoo art in Gujarat by coming to The Temple of Tattooz today. In search of a "tattoo shop near me"? There's nowhere else to look.
            </p>
          </div>
        </div>
      </div>
      <ImageSlider />

      {/* GALLERY SECTIONS */}
        
        <GallerySection title="Permanent Tattoos" images={permanentTattoos} />
        <GallerySection title="Piercings" images={piercing} />
        <GallerySection title="SMP-PMU" images={smppmu} />
        <GallerySection title="Tattoo Removing" images={tattooRemoving} />
        
      <Footer/>

      
    </>
  );
};

export default HomePage;