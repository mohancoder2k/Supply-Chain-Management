import React from 'react'
import { Link } from 'react-router-dom';
const ProductNavBar = () => {
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
     <Link to="/create-product" style={linkStyle}>
       Create Product
     </Link>
     <Link to="/list-product" style={linkStyle}>
      List Product
     </Link>
   </nav>
 </header>
    </div>
  )
};
export default ProductNavBar;
