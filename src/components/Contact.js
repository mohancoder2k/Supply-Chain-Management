import React from 'react';

const Contact = () => {
  const containerStyle = {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  };

  const contactInfoStyle = {
    lineHeight: '1.6',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Contact</h2>
      <p style={contactInfoStyle}>
        Developer: Mohan<br />
        Email: mohanbalu2k5@gmail.com<br />
        Phone: +91 9488939282
      </p>
    </div>
  );
};

export default Contact;
