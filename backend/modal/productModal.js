import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    countInstock: { type: Number, required: true },
    description: { type: String, required: true },
    raiting: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("Products", productsSchema); // Fix the typo here

export default Products;
