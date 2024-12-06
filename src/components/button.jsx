
import React from 'react';
import '../components/button.css';

const Button = ({ label, onClick, className }) => {
  return (
    <button onClick={onClick} className={`default-button ${className}`}>
      {label}
    </button>
  );
};

export default Button;


