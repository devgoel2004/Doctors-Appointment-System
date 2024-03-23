const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");
const router = express.Router();

//Routes
router.post("/login", loginController); //login route
router.post("/register", registerController); //register route

module.exports = router;
