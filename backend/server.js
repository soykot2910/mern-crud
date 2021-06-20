import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";
import userRoute from "./routers/userRoutes.js";
import postRoute from "./routers/postRouters.js";
import cors from "cors";

import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

//parse request to body-parser
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
  res.send("API is running....");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server running in  on port ${PORT}`.yellow.bold));
