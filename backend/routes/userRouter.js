import express from "express";
import User from "../modal/userModal.js";
import data from "../data.js";

const userRoter = express.Router();

userRoter.get("/seed", async (req, res) => {
  const creadtedUser = await User.insertMany(data.users);
  res.send({ creadtedUser });
});

export default userRoter;
