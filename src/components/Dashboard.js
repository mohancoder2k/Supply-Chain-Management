// Dashboard.js

import React from 'react';

const dashboardStyle = {
  marginLeft: '200px', // Adjust this value based on your sidebar width
  padding: '1rem',
};

const Dashboard = () => {
  return (
    <div style={dashboardStyle}>
      <h2>Dashboard</h2>
      <p>Welcome to the Supply Chain Management Dashboard!</p>

      <section>
        <h3>Overview</h3>
        <p>
          This dashboard provides an overview of the key metrics and activities related to the supply chain.
        </p>
      </section>

      <section>
        <h3>Recent Orders</h3>
        <ul>
          <li>Order #123 - In Progress</li>
          <li>Order #124 - Shipped</li>
          <li>Order #125 - Pending</li>
        </ul>
      </section>

      <section>
        <h3>Inventory Status</h3>
        <p>
          Current inventory levels: 500 units in stock, 200 units pending restock.
        </p>
      </section>

      {/* Add more content as needed */}
    </div>
  );
};

export default Dashboard;
