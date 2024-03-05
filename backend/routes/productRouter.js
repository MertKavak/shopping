import express from "express";
import data from "../data.js";
import Products from "../modal/productModal.js";

const productRoter = express.Router();

productRoter.get("/seed", async (req, res) => {
  const creadtedProducts = await Products.insertMany(data.products);
  res.send({ creadtedProducts });
});

productRoter.get("/", async (req, res) => {
  const product = await Products.find({});
  if (product) {
    res.send({ product });
  } else {
    res.send({ message: "Ürün Bulunamadı" });
  }
});

productRoter.get("/:id", async (req, res) => {
  const product = await Products.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.send({ message: "Ürün Bulunamadı"});
  }
});



export default productRoter;
