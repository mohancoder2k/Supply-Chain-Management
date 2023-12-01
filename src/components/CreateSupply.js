import axios from 'axios';
import React, { useState } from 'react';

const CreateSupply = () => {
  const [supply, setSupply] = useState({
    name: '',
    contactName: '',
    contactEmail: '',
    contactPhone: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8082/api/suppliers', supply);
      console.log("Supplier Created Successfully ", response.data);
      alert('Supplier Created Successfully');
    } catch (error) {
      console.log("Error in Creating Supplier", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSupply({
      ...supply,
      [name]: value,
    });
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const formStyle = {
    width: '300px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const formTitleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '1.5em',
    color: '#007BFF',
  };

  const formInputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1em',
  };

  const submitButtonStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1em',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle}>
        <h2 style={formTitleStyle}>Create a Supplier</h2>
        <div>
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={supply.name}
            onChange={handleInputChange}
            style={formInputStyle}
          />
        </div>
        <div>
          <label>Contact Name</label>
          <input
            name="contactName"
            type="text"
            value={supply.contactName}
            onChange={handleInputChange}
            style={formInputStyle}
          />
        </div>
        <div>
          <label>Contact Email</label>
          <input
            name="contactEmail"
            type="email"
            value={supply.contactEmail}
            onChange={handleInputChange}
            style={formInputStyle}
          />
        </div>
        <div>
          <label>Contact Phone</label>
          <input
            name="contactPhone"
            type="number"
            value={supply.contactPhone}
            onChange={handleInputChange}
            style={formInputStyle}
          />
        </div>
        <div>
          <button onClick={handleSubmit} style={submitButtonStyle}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSupply;
