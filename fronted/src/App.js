import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import CardScreen from "./page/CardScreen";
import Register from "./page/Register";
import Login from "./page/Login";
import Profile from "./page/Profile";
import Layout from "./components/Layout";
import ProductDetail from "./page/ProductDetail";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart/:id?" element={<CardScreen />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
}

export default App;
