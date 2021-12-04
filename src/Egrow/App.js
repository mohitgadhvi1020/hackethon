import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import { HomeSlider } from './component/Slider';
import { Egrow } from './component/Egrow';
import { Egrowopen } from './component/Egrowopen'

function App() {
  return (
    <div className="App">
      <Router>
      <Routes >
        <Route exact path = "/"  element={<Egrowopen/>} />
        <Route path="/Egrow" element={<Egrowopen />} /> 
      </Routes >
      </Router>
      
    </div>
  );
}

export default App;
