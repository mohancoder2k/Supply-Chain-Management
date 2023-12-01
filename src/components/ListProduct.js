import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [editedProduct, setEditedProduct] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleEdit = (productId) => {
    const productToEdit = products.find((product) => product.productId === productId);
    setEditedProduct(productToEdit);
  };

  const handleUpdate = async () => {
    try {
      if (editedProduct !== null) {
        await axios.put(`http://localhost:8081/api/products/${editedProduct.productId}`, editedProduct);
        await fetchData();
        setEditedProduct(null);

        console.log(`Product with ID ${editedProduct.productId} updated successfully.`);
      }
    } catch (error) {
      console.error(`Error updating product with ID ${editedProduct.productId}:`, error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:8081/api/products/${productId}`);
      await fetchData();
      console.log(`Product with ID ${productId} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting product with ID ${productId}:`, error);
    }
  };

  const handleInputChange = (e, field) => {
    setEditedProduct((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
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

  const buttonStyle = {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '0.5rem 1rem',
    border: 'none',
    cursor: 'pointer',
    marginRight: '0.5rem',
  };

  return (
    <div>
      <h2>List of Products</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Product Name</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Quantity</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.productId}>
              <td style={tdStyle}>{product.name}</td>
              <td style={tdStyle}>{product.description}</td>
              <td style={tdStyle}>{product.price}</td>
              <td style={tdStyle}>{product.quantity}</td>
              <td style={tdStyle}>{product.category}</td>
              <td style={tdStyle}>
                {editedProduct && editedProduct.productId === product.productId ? (
                  <>
                    <button style={buttonStyle} onClick={handleUpdate}>
                      Update
                    </button>
                    <button
                      style={{ ...buttonStyle, backgroundColor: '#dc3545' }}
                      onClick={() => setEditedProduct(null)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button style={buttonStyle} onClick={() => handleEdit(product.productId)}>
                      Edit
                    </button>
                    <button
                      style={{ ...buttonStyle, backgroundColor: '#dc3545' }}
                      onClick={() => handleDelete(product.productId)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editedProduct && (
        <div>
          <h2>Edit Product</h2>
          <label>Product Name:</label>
          <input
            type="text"
            value={editedProduct.name}
            onChange={(e) => handleInputChange(e, 'name')}
            style={tdStyle}
          />
          <label>Description:</label>
          <input
            type="text"
            value={editedProduct.description}
            onChange={(e) => handleInputChange(e, 'description')}
            style={tdStyle}
          />
          <label>Price:</label>
          <input
            type="number"
            value={editedProduct.price}
            onChange={(e) => handleInputChange(e, 'price')}
            style={tdStyle}
          />
          <label>Quantity:</label>
          <input
            type="number"
            value={editedProduct.quantity}
            onChange={(e) => handleInputChange(e, 'quantity')}
            style={tdStyle}
          />
          <label>Category:</label>
          <input
            type="text"
            value={editedProduct.category}
            onChange={(e) => handleInputChange(e, 'category')}
            style={tdStyle}
          />
        </div>
      )}
    </div>
  );
};

export default ListProduct;
