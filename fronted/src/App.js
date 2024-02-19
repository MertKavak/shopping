import React, { useState } from "react";
import cardProp from "./data/cardProp";
import Products from "./components/Products";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">
            Shopping
          </a>
        </div>
        <div>
          <a href="index.html">Giris yap</a>
          <a href="index.html">Uye ol</a>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/urun/:id" element={<Product />} />
        </Routes>
      </main>
      <footer className="row center">Mert Kavak</footer>
    </div>
  );
}

export default App;
