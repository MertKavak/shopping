import express from "express";
import User from "../modal/userModal.js";
import data from "../data.js";
import bcrypt from "bcrypt";
import { genereteToken } from "../ultis.js";

const userRoter = express.Router();

userRoter.get("/seed", async (req, res) => {
  const creadtedUser = await User.insertMany(data.users);
  res.send({ creadtedUser });
});

userRoter.post("/signin", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: genereteToken(user),
      });
    } else {
      res.status(401).send({ message: "Hatali Giris Islemi" });
    }
  } else {
    res.status(401).send({ message: "KUllanici Kaydi Bulunamadi." });
  }
});
userRoter.post("/register", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    isAdmin: false,
    password: bcrypt.hashSync(req.body.password, 8),
  });
  const createdUser = await user.save();
  res.send({
    _id: createdUser._id,
    name: createdUser.name,
    email: createdUser.email,
    isAdmin: createdUser.isAdmin,
    token: genereteToken(user),
  });
});
export default userRoter;
