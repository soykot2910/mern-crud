import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";

import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

//log request
app.use(morgan("tiny"));

//parse request to body-parser
app.use(express.urlencoded({ extended: true }));

//middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "helo" });
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
