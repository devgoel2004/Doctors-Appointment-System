const express = require("express");
const {
  loginController,
  registerController,
  authController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//Routes
router.post("/login", loginController); //login route
router.post("/register", registerController); //register route
router.post("/getUserData", authMiddleware, authController);
module.exports = router;
