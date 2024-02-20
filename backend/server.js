import express from "express";
import data from "./data.js";
const app = express();

app.get("/api/product/:id", (req, res) => {
  const product = data.products.find((item) => item._id.toString() === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(400).send({ message: "Error Product" });
  }
});

app.get("/api/product", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("server is ready");
});
const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`server at http://localhost:${port}`);
});
