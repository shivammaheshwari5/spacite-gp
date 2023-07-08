const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db");
require("dotenv").config();
connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(process.env.PORT, console.log("server started on 5000"));
