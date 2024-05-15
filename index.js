const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./src/routes/auth");

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

// Creating Server
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
