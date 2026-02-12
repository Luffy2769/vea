import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import '../Styles/Toast.css';

export default function Toast({ message, type, onClose }) {
  return (
    <div className={`toast-notification ${type}`}>
      <div className="toast-icon">
        {type === 'success' ? <FaCheckCircle /> : <FaTimesCircle />}
      </div>
      <div className="toast-message">{message}</div>
      <button className="toast-close" onClick={onClose}>&times;</button>
    </div>
  );
}
