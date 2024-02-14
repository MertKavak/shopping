import React, { useState } from "react";
import cardProp from "./data/cardProp";
import Products from "./components/Products";
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
        <div className="row center">
          {cardProp.map((item, index) => (
            <Products data={item} />
          ))}
        </div>
      </main>
      <footer className="row center">Mert Kavak</footer>
    </div>
  );
}

export default App;
