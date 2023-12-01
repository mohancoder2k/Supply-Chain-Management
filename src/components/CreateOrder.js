import React, { useState } from 'react';
import axios from 'axios';
import OrderNav from './OrderNav';
import '../App.css'
const createOrderStyle = {
  padding: '2rem',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
};

const formStyle = {
  maxWidth: '400px',
  margin: '0 auto',
};

const inputStyle = {
  width: '100%',
  marginBottom: '1rem',
  padding: '0.5rem',
  fontSize: '1rem',
};

const buttonStyle = {
  backgroundColor: '#007BFF',
  color: '#fff',
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  border: 'none',
  cursor: 'pointer',
};

const CreateOrder = () => {
  const [orderData, setOrderData] = useState({
   id:'',
   orderNumber:'',
   orderDate:'',
   status:'',
   productId :'',
   supplierId:'',
   quantity:''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData({
      ...orderData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {   
      const response = await axios.post('http://localhost:8080/api/orders', orderData);
      console.log('Order created successfully:', response.data);
      alert('order created sucessfully');
    } catch (error) {
      console.error('Error creating order:', error);

    }
  };

  return (
    <div style={createOrderStyle}>
         <OrderNav/>
      <h2>Create Order</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
      <label>
          Order Number:
          <input
            type="number"
            name="orderNumber"
            value={orderData.orderNumber}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        </label>

        <label>
          Order Date:
          <input
            type="text"
            name="orderDate"
            value={orderData.orderDate}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        </label>

        <label>
         Status
          <input
            type="text"
            name="status"
            value={orderData.status}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        </label>
        <label>
  Supplier ID:
  <input
    type='number'
    name='supplierId' 
    value={orderData.supplierId}
    onChange={handleInputChange}
    style={inputStyle}
  />
</label>

        <label>
        Product ID 
          <input
            type="number"
            name="productId"
            value={orderData.productId}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        </label>
      
        <label>
        Quantity
          <input
            type="number"
            name="quantity"
            value={orderData.quantity}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        </label>
        <button onClick={handleSubmit} type="submit" style={buttonStyle}>
          Create Order
        </button>
      </form>
    </div>
  );
};

export default CreateOrder;
