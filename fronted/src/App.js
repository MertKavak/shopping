import React from "react";

import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Product from "./page/Product";
import CardScreen from "./page/CardScreen";
import { useSelector } from "react-redux";
import Register from "./page/Register";
import Login from "./page/Login";
import Profile from "./page/Profile";
function App() {
  const cart = useSelector((state) => state.cardItem);
  const { cartItem } = cart;
  const user = useSelector((state) => state.userSignin);

console.log(user);


  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">
            Shopping
          </Link>
        </div>
        <div>
          <a href="/cart">
            Sepet
            <span>
              <i
                class="fa fa-shopping-cart"
                style={{ fontSize: "2rem", marginRight: "4px" }}
              ></i>
            </span>
            {cartItem.length > 0 && (
              <span className="badge">{cartItem.length}</span>
            )}
          </a>
          <Link to={user.userInfo.token ? "/profile": "/register"}>{user.userInfo.name ? user.userInfo.name : "Üye Ol"}</Link>
          {/* <div className="profileMenu"><Link>Logout</Link> </div> */}
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart/:id?" element={<CardScreen />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <footer className="row center">Mert Kavak</footer>
    </div>
  );
}

export default App;
