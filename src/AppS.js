import App from './App'
import React from 'react';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import { Egrowopen } from './components/Egrowopen'
import {PaymentDrop } from './components/PaymentDrop'
import { Login } from './components/Login';
import CreditCard from './components/CreditCard' 

function AppS() {
  return (
    <div className="App">
      <Router>
      <Routes >
        <Route exact path = "/"  element={<App/>} />
        <Route  path = "/Egrowopen"  element={<Egrowopen/>} />
        <Route path="/Egrow" element={<Egrowopen />} /> 
        <Route path="/payment" element={<PaymentDrop />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Card" element={<CreditCard />} />
      </Routes >
      </Router>
      
    </div>
  );
}

export default AppS;
