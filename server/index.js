// 4 steps procedure to make Service
// call express in this File

const express = require("express");
const dotenv = require("dotenv");
const {readdirSync}=require("fs");
const { Server } = require("http");
// import the route here
// const authRoute = require("./routes/authRoutes");
const {connectDb} = require("./connection");

// binding this env
dotenv.config()
// call express in one variable
const app = express();

// define port
const port = process.env.PORT || 5000;

connectDb()
// making routes
app.get("/", (req, res) => {
  res.send("Server Running...");
});
// how to use routes
// app.use("/api",authRoute);


// importing and using routes dynamically
readdirSync("./routes").map((route)=>{
app.use("/api",require(`./routes/${route}`))
});


// readdirSync("./routes")
// console.log(`Server is running on port ${port}`);

// types of requests
// 1. GET -> to get the data from the Server
// 2. POST -> to post the data to the Server
// 3. PUT -> to update the data on the Server
// 4. DELETE -> to delete the  data from the server

// listen to server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

