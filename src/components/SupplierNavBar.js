import React from 'react';
import { Link } from 'react-router-dom';

const SupplierNavBar = () => {
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
      const headerStyle = {
        background: '#333',
        color: '#fff',
        padding: '1rem',
        textAlign: 'center',
      };
  return (
    <div>
       <header style={headerStyle}>
   
   <nav style={navStyle}>
     <Link to="/create-supply" style={linkStyle}>
       Create Supplier
     </Link>
     <Link to="/list-supply" style={linkStyle}>
      List Supplier
     </Link>
   </nav>
 </header>
    </div>
  )
};
export default SupplierNavBar;
