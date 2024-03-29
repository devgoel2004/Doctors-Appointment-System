const userModel = require("../models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(200).send({
        message: "User not found",
        success: false,
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(200).send({
        success: false,
        message: "Invalid credentials",
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).send({
      success: true,
      message: "Login Success",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ messgae: `Error in Login CTRL ${error}` });
  }
};
const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already exists",
        existingUser,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({
      success: true,
      message: "Register successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register controller ${error.message}`,
    });
  }
};
module.exports = { loginController, registerController };
