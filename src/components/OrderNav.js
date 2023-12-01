import React from 'react'
import { Link } from 'react-router-dom';
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
  
const OrderNav = () => {
  return (
    <header style={headerStyle}>
   
     <nav style={navStyle}>
       <Link to="/create-order" style={linkStyle}>
         Create Order
       </Link>
       <Link to="/list-order" style={linkStyle}>
        List Order
       </Link>
     </nav>
   </header>
  )
}
export default OrderNav;
