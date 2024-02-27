import React, { useState } from "react";

import Products from "./components/Products";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Product from "./page/Product";
import CardScreen from "./page/CardScreen";
import { useSelector } from "react-redux";
import Register from "./page/Register";
import Login from "./page/Login";
function App() {
  const cart = useSelector((state) => state.cardItem);
  const { cartItem } = cart;
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">
            Shopping
          </Link>
        </div>
        <div>
         
          <a  href="/cart">
            Sepet
          <span>
        <i class="fa fa-shopping-cart"style={{fontSize:"2rem", marginRight:"4px"}}></i>
          </span>
            {cartItem.length > 0 && (
              <span className="badge">{cartItem.length}</span>
            )}
          </a>
          <Link to="/register">Üye ol</Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart/:id?" element={<CardScreen />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </main>
      <footer className="row center">Mert Kavak</footer>
    </div>
  );
}

export default App;
