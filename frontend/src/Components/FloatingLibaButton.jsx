import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGlobeAmericas } from 'react-icons/fa';
import '../Styles/FloatingLibaButton.css';

export default function FloatingLibaButton() {
  const location = useLocation();
  
  // Don't show on Liba Migration page itself
  if (location.pathname === '/LibaMigration') {
    return null;
  }

  return (
    <Link to="/LibaMigration" className="floating-liba-btn" title="Liba Migration Services">
      <FaGlobeAmericas className="floating-icon" />
      <span className="floating-text">Liba Migration</span>
    </Link>
  );
}
