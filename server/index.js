// 4 steps procedure to make Service
// call express in this File
const express = require("express");
const dotenv = require("dotenv");

// binding this env
dotenv.config()
// call express in one variable
const app = express();

// define port
const port = process.env.PORT || 5000;

// making routes
app.get("/", (req, res) => {
  res.send("Server Running...");
});

// listen to server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
