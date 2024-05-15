const router = require("express").Router();
const Category = require("../models/category");

// CREATE CATEGORY

router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json({ msg: "Category created!", newCat });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL CATEGORIES

router.get("/", async (req, res) => {
  try {
    const cats = await Category.find();
    res.status(200).json({ msg: "All categories!", cats });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
