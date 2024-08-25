import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from './Components/ProductListing'
import Header from './Components/Header';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/CartComponent/Cart';
function App() {
  return (
    <div className="App">  
     <BrowserRouter>
     <Header />
     <div className="content-container">
        <Routes>
          <Route path="/" element={<ProductListing/>} />
          <Route path="/product/:productId" element={<ProductDetails/>} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route>404 Not Found!</Route> */}
          {/* <Route path="*" element={<div>404 Not Found!</div>} /> */}
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
