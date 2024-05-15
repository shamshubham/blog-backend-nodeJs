const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./src/routes/auth");
const userRoute = require("./src/routes/users");
const postRoute = require("./src/routes/posts");
const categoryRoute = require("./src/routes/categories");

dotenv.config();
app.use(express.json());

const PORT = 8000;

// Connect database MongoDB

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes

// app.use("/shubham", (req, res) => {
//   console.log("Hey this is shubham url");
// });

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/posts", postRoute);
app.use("/api/v1/categories", categoryRoute);

// Creating Server
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
