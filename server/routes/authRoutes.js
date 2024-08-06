// // this is the normal method
// const express = require("express")
// const router = express.Router()
const {login} = require("../controllers/authControllers")
const {signup} = require("../controllers/authControllers")
// this is advanced method
const router = require("express").Router();

router.post("/login",login);
router.post("/signup",signup);

module.exports = router;