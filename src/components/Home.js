// Home.js

import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="heading">Welcome to the Supply Chain Management System</h2>
  
      <section className="section">
        <h3 className="subheading">Overview</h3>
        <p className="paragraph">
          The Supply Chain Management System is a comprehensive solution designed to streamline and optimize the
          management of the entire supply chain process. From ordering and inventory management to supplier
          relationships, this system provides the tools necessary for efficient and effective supply chain operations.
        </p>
        <p className="paragraph">
          Whether you are a small business managing local supply chains or a large enterprise with complex
          international logistics, this system is tailored to meet your needs. It offers real-time visibility into
          inventory levels, order statuses, and supplier interactions, empowering you to make informed decisions and
          enhance overall business performance.
        </p>
      </section>

      <section className="section">
        <h3 className="subheading">Key Features</h3>
        <ul className="key-features-list paragraph">
          <li>Efficient Order Management: Track and manage orders from initiation to fulfillment.</li>
          <li>Inventory Control: Monitor inventory levels, track stock movements, and optimize stock levels.</li>
          <li>Supplier Management: Build and maintain strong relationships with suppliers for a reliable supply chain.</li>
          <li>Dashboard Insights: Get real-time insights through a comprehensive and intuitive dashboard.</li>
        </ul>
      </section>

      <section className="section">
        <h3 className="subheading">Getting Started</h3>
        <p className="paragraph">
          To get started, navigate to the respective sections using the sidebar. The dashboard provides an at-a-glance
          overview of key metrics. The order management, inventory management, and supplier management sections offer
          detailed functionalities to manage and track specific aspects of your supply chain.
        </p>
        <p className="paragraph">
          Explore the system, customize it to fit your business needs, and enjoy the benefits of a well-organized and
          efficient supply chain.
        </p>
      </section>

      <section className="section">
        <h3 className="subheading">Contact Us</h3>
        <p className="paragraph">
          If you have any questions or need assistance, feel free to reach out to our support team. We are here to help
          you make the most of the Supply Chain Management System and ensure a smooth and successful implementation for
          your business.
        </p>
      </section>
    </div>
  );
};

export default Home;
