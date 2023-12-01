import React, { useState } from 'react';
import ProductNavBar from './ProductNavBar';
import axios from 'axios';

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    category: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/api/products', product);
      console.log("Product Created Successfully", response.data);
      alert('Product Created Successfully');
    } catch (error) {
      console.log("Error in creating product", error);
      alert('Error in creating product');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

 
  return (
    <div className="create-product-container" >
      <ProductNavBar />
      <form className="form-container" onSubmit={handleSubmit}>
        <h2 className="form-title">Create a Product</h2>
        <div>
          <label>Name</label>
          <input name="name" type="text" value={product.name} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label>Description</label>
          <input name="description" type="text" value={product.description} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label>Price</label>
          <input name="price" type="number" value={product.price} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label>Category</label>
          <input name="category" type="text" value={product.category} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label>Quantity</label>
          <input name="quantity" type="number" value={product.quantity} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <input type="submit" value="Submit" className="submit-button" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
