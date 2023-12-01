// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const sidebarStyle = {
  width: '200px',
  height: '100%',
  position: 'fixed',
  top: '0',
  left: '0',
  background: '#333',
  color: '#fff',
  padding: '1rem',
};

const linkStyle = {
  display: 'block',
  padding: '0.5rem 0',
  textDecoration: 'none',
  color: '#fff',
};

const Sidebar = () => {
  return (
    <div style={sidebarStyle}>
      <Link to="/dashboard" style={linkStyle}>
        Dashboard
      </Link>
      <Link to="/orders" style={linkStyle}>
        Order Management
      </Link>
      <Link to="/inventory" style={linkStyle}>
        Inventory Management
      </Link>
      <Link to="/suppliers" style={linkStyle}>
        Supplier Management
      </Link>
    </div>
  );
};

export default Sidebar;
