const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

// Register
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(201).json({ msg: "User created Successfully", user });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
