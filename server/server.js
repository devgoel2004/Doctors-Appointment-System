const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const app = express();
//middlewares
app.use(express.json());
dotenv.config();
app.use(morgan("dev"));
connectDb();
//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Server is running",
  });
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is running");
});
