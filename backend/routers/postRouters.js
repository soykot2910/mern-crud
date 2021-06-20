import express from "express";
const router = express.Router();

import { addPost } from "../controller/postController.js";

router.route("/").post(addPost);

export default router;
