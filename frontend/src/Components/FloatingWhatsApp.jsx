import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../Styles/FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const phoneNumber = '918850285886'; 
  const message = 'Hi! I would like to inquire about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="floating-whatsapp-btn" 
      target="_blank" 
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-text">WhatsApp</span>
    </a>
  );
}
