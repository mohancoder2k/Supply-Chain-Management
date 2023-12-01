import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  background: '#333',
  color: '#fff',
  padding: '1rem',
  textAlign: 'center',
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textDecoration: 'none',
  color: '#fff',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
};

const linkStyle = {
  margin: '0 1rem',
  textDecoration: 'none',
  color: '#fff',
};

const Header = () => {
  return (
    <header style={headerStyle}>
     <div className="logo" style={logoStyle}>
        <Link to="/" style={logoStyle}>
          Supply Chain Management
        </Link>
      </div>
      <nav style={navStyle}>
      <Link to="/home" style={linkStyle}>
          Home
        </Link>
        <Link to="/dashboard" style={linkStyle}>
          Dashboard
        </Link>
        <Link to="/orders" style={linkStyle}>
          Order Management
        </Link>
        <Link to="/suppliers" style={linkStyle}>
          Supplier Management
        </Link>
        <Link to="/products" style={linkStyle}>
          Product Management
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
        <Link to="/update" style={linkStyle}>
          UpdateProduct
        </Link>
      </nav>
    </header>
  );
};

export default Header;
