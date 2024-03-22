const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Server is running",
  });
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is running");
});
