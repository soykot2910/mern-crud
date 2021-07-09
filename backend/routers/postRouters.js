import express from "express";
const router = express.Router();
import fileUpload from "../middleware/fileUpload.js";
import { addPost, getPosts } from "../controller/postController.js";

router.route("/").get(getPosts);

router.post("/", fileUpload.array("imgCollection", 6), addPost);

export default router;
