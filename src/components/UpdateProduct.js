import React, { useState, useEffect } from 'react';
import ProductNavBar from './ProductNavBar';
import axios from 'axios';

const UpdateProduct = () => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:8081/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  const handleUpdateProduct = async () => {
    try {
      const updatedProduct = {
        id: productId,
        name: productName,
        description: productDescription,
        price: productPrice,
        quantity: productQuantity,
        category: productCategory,
      };

      await axios.put(`http://localhost:8081/api/products/${productId}`, updatedProduct);
      fetchData(); // Refresh the product list after update
      resetForm();
    } catch (error) {
      console.error(`Error updating product with ID ${productId}:`, error);
    }
  };

  const resetForm = () => {
    setProductId('');
    setProductName('');
    setProductDescription('');
    setProductPrice('');
    setProductQuantity('');
    setProductCategory('');
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem',
  };

  const thStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '0.75rem',
    textAlign: 'left',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '0.75rem',
  };

  return (
    <div>
      <ProductNavBar />
      <h2>Update Product</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Quantity</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={tdStyle}>{product.name}</td>
              <td style={tdStyle}>{product.description}</td>
              <td style={tdStyle}>{product.price}</td>
              <td style={tdStyle}>{product.quantity}</td>
              <td style={tdStyle}>{product.category}</td>
              <td style={tdStyle}>
                <button
                  style={{ backgroundColor: '#28a745', color: '#fff', padding: '0.5rem 1rem', border: 'none', cursor: 'pointer' }}
                  onClick={() => {
                    setProductId(product.id);
                    setProductName(product.name);
                    setProductDescription(product.description);
                    setProductPrice(product.price);
                    setProductQuantity(product.quantity);
                    setProductCategory(product.category);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {productId && (
        <div>
          <h2>Edit Product</h2>
          <label>
            Name:
            <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
          </label>
          <label>
            Description:
            <input type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
          </label>
          <label>
            Price:
            <input type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
          </label>
          <label>
            Quantity:
            <input type="text" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)} />
          </label>
          <label>
            Category:
            <input type="text" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} />
          </label>
          <button onClick={handleUpdateProduct}>Update Product</button>
        </div>
      )}
    </div>
  );
};

export default UpdateProduct;
