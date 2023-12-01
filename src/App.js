import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import OrderManagement from './components/OrderManagement';
import CreateOrder from './components/CreateOrder';
import ListOrder from './components/ListOrder';
import SupplierManagement from './components/SupplierManagement';
import CreateSupply from './components/CreateSupply';
import ListSupply from './components/ListSupply';
import ProductManagement from './components/ProductManagement';
import CreateProduct from './components/CreateProduct';
import ListProduct from './components/ListProduct';
import Contact from './components/Contact';
import UpdateProduct from './components/UpdateProduct';

const App = () => {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<OrderManagement/>} />
        <Route path='/suppliers' element={<SupplierManagement/>} />     
        <Route path="/create-order" element={<CreateOrder/>} />
        <Route path="/list-order" element={<ListOrder/>} />
        <Route path="/create-supply" element={<CreateSupply/>} />
        <Route path="/list-supply" element={<ListSupply/>} />
        <Route path="/products" element={<ProductManagement/>}/>
        <Route path="/create-product" element={<CreateProduct/>} />
        <Route path="/list-product" element={<ListProduct/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/update' element={<UpdateProduct/>} />
      </Routes> 

    </Router>
  );
};

export default App;
