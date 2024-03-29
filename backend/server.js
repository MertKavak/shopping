import express from "express";
import mongoose from "mongoose"; // Fix the typo here
import data from "./data.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js"; // Fix the typo here
import productRoter from "./routes/productRouter.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/shopping", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/users", userRouter); // Fix the typo here
app.use("/api/product", productRoter); // Fix the typo here
app.get("/", (req, res) => {
  res.send("server is ready");
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
  // Use the 'port' variable here
  console.log(`server at http://localhost:${port}`);
});
