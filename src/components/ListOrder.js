import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListOrder = () => {
  const [orders, setOrders] = useState([]);
  const [editedOrder, setEditedOrder] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleEdit = (orderId) => {
    const orderToEdit = orders.find((order) => order.id === orderId);
    setEditedOrder(orderToEdit);
  };

  const handleUpdate = async () => {
    try {
      if (editedOrder) {
        await axios.put(`http://localhost:8080/api/orders/${editedOrder.id}`, editedOrder);
        await fetchData(); // Refresh the order list after update
        setEditedOrder(null);

        console.log(`Order with ID ${editedOrder.id} updated successfully.`);
      }
    } catch (error) {
      console.error(`Error updating order with ID ${editedOrder.id}:`, error);
    }
  };

  const handleDelete = async (orderId) => {
    try {
      await axios.delete(`http://localhost:8080/api/orders/${orderId}`);
      await fetchData(); // Refresh the order list after deletion
      console.log(`Order with ID ${orderId} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting order with ID ${orderId}:`, error);
    }
  };

  const handleInputChange = (e, field) => {
    setEditedOrder({
      ...editedOrder,
      [field]: e.target.value,
    });
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
      <h2>List of Orders</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Order Number</th>
            <th style={thStyle}>Order Date</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Supplier ID</th>
            <th style={thStyle}>Product ID</th>
            <th style={thStyle}>Quantity</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td style={tdStyle}>{order.orderNumber}</td>
              <td style={tdStyle}>{order.orderDate}</td>
              <td style={tdStyle}>{order.status}</td>
              <td style={tdStyle}>{order.supplierId}</td>
              <td style={tdStyle}>{order.productId}</td>
              <td style={tdStyle}>{order.quantity}</td>
              <td style={tdStyle}>
                {editedOrder && editedOrder.id === order.id ? (
                  <>
                    <button style={buttonStyle} onClick={handleUpdate}>
                      Update
                    </button>
                    <button
                      style={{ ...buttonStyle, backgroundColor: '#dc3545' }}
                      onClick={() => setEditedOrder(null)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button style={buttonStyle} onClick={() => handleEdit(order.id)}>
                      Edit
                    </button>
                    <button
                      style={{ ...buttonStyle, backgroundColor: '#dc3545' }}
                      onClick={() => handleDelete(order.id)}
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
      {editedOrder && (
        <div>
          <h2>Edit Order</h2>
          <label>Order Number:</label>
    <input
      type="number"
      value={editedOrder.orderNumber}
      onChange={(e) => handleInputChange(e, 'orderNumber')}
      style={{ ...tdStyle, ...{ marginBottom: '1rem' } }}
    />
    <label>Order Date:</label>
    <input
      type="text"
      value={editedOrder.orderDate}
      onChange={(e) => handleInputChange(e, 'orderDate')}
      style={tdStyle}
    />
    <label>Status:</label>
    <input
      type="text"
      value={editedOrder.status}
      onChange={(e) => handleInputChange(e, 'status')}
      style={tdStyle}
    />
    <label>Supplier ID:</label>
    <input
      type="number"
      value={editedOrder.supplierId}
      onChange={(e) => handleInputChange(e, 'supplierId')}
      style={tdStyle}
    />
    <label>Product ID:</label>
    <input
      type="number"
      value={editedOrder.productId}
      onChange={(e) => handleInputChange(e, 'productId')}
      style={tdStyle}
    />
    <label>Quantity:</label>
    <input
      type="number"
      value={editedOrder.quantity}
      onChange={(e) => handleInputChange(e, 'quantity')}
      style={tdStyle}
    />
        </div>
      )}
    </div>
  );
};

export default ListOrder;
