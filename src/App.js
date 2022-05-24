import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path = "/" element = {<Home/>} />
          <Route exact path = "/cart" element = {<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
