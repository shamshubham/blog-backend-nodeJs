const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./src/routes/auth");
const userRoute = require("./src/routes/users");
const postRoute = require("./src/routes/posts");
const categoryRoute = require("./src/routes/categories");
const multer = require("multer");

dotenv.config();
app.use(express.json());

// Connect database MongoDB

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/v1/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded!");
});

// ROUTES

// app.use("/shubham", (req, res) => {
//   console.log("Hey this is shubham url");
// });

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/posts", postRoute);
app.use("/api/v1/categories", categoryRoute);

// Creating Server

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
