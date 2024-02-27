import express from "express";
import User from "../modal/userModal.js";
import data from "../data.js";
import bcrypt from "bcrypt";
import { genereteToken } from "../ultis.js";

const userRoter = express.Router();

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
    }
    return;
  } else {
    res.status(401).send({ message: "KUllanici Kaydi Bulunamadi." });
  }
  res.send({ creadtedUser });
});

userRoter.get("/seed", async (req, res) => {
  const creadtedUser = await User.insertMany(data.users);
  res.send({ creadtedUser });
});

export default userRoter;
