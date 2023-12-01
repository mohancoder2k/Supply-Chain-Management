import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListSupply = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [editedSupply, setEditedSupply] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8082/api/suppliers');
      setSuppliers(response.data);
    } catch (error) {
      console.error('Error fetching suppliers:', error);
    }
  };

  const handleEdit = (supplyId) => {
    const supplierToEdit = suppliers.find((supply) => supply.id === supplyId);
    setEditedSupply(supplierToEdit);
  };

  const handleUpdate = async () => {
    try {
      if (editedSupply) {
        await axios.put(`http://localhost:8082/api/suppliers/${editedSupply.id}`, editedSupply);
        await fetchData(); // Refresh the supplier list after update
        setEditedSupply(null);

        console.log(`Supplier with ID ${editedSupply.id} updated successfully.`);
      }
    } catch (error) {
      console.error(`Error updating supplier with ID ${editedSupply.id}:`, error);
    }
  };

  const handleDelete = async (supplyId) => {
    try {
      await axios.delete(`http://localhost:8082/api/suppliers/${supplyId}`);
      await fetchData(); // Refresh the supplier list after deletion
      console.log(`Supplier with ID ${supplyId} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting supplier with ID ${supplyId}:`, error);
    }
  };

  const handleInputChange = (e, field) => {
    setEditedSupply({
      ...editedSupply,
      [field]: e.target.value,
    });
  };

  const handleCancelEdit = () => {
    setEditedSupply(null);
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
      <h2>List of Suppliers</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Contact Name</th>
            <th style={thStyle}>Contact Email</th>
            <th style={thStyle}>Contact Phone</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supply) => (
            <tr key={supply.id}>
              <td style={tdStyle}>{supply.name}</td>
              <td style={tdStyle}>{supply.contactName}</td>
              <td style={tdStyle}>{supply.contactEmail}</td>
              <td style={tdStyle}>{supply.contactPhone}</td>
              <td style={tdStyle}>
                {editedSupply && editedSupply.id === supply.id ? (
                  <>
                    <button style={buttonStyle} onClick={handleUpdate}>
                      Update
                    </button>
                    <button
                      style={{ ...buttonStyle, backgroundColor: '#dc3545' }}
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button style={buttonStyle} onClick={() => handleEdit(supply.id)}>
                      Edit
                    </button>
                    <button
                      style={{ ...buttonStyle, backgroundColor: '#dc3545' }}
                      onClick={() => handleDelete(supply.id)}
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
      {editedSupply && (
        <div>
          <h2>Edit Supplier</h2>
          <label>Name:</label>
          <input
            type="text"
            value={editedSupply.name}
            onChange={(e) => handleInputChange(e, 'name')}
            style={{ ...tdStyle, ...{ marginBottom: '1rem' } }}
          />
          <label>Contact Name:</label>
          <input
            type="text"
            value={editedSupply.contactName}
            onChange={(e) => handleInputChange(e, 'contactName')}
            style={tdStyle}
          />
          <label>Contact Email:</label>
          <input
            type="email"
            value={editedSupply.contactEmail}
            onChange={(e) => handleInputChange(e, 'contactEmail')}
            style={tdStyle}
          />
          <label>Contact Phone:</label>
          <input
            type="number"
            value={editedSupply.contactPhone}
            onChange={(e) => handleInputChange(e, 'contactPhone')}
            style={tdStyle}
          />
        </div>
      )}
    </div>
  );
};

export default ListSupply;
