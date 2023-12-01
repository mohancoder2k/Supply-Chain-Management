
import React from 'react';

const footerStyle = {
  background: '#333',
  color: '#fff',
  padding: '1rem',
  textAlign: 'center',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Supply Chain Management</p>
    </footer>
  );
};

export default Footer;
