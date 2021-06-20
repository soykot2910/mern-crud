import express from "express";

const router = express.Router();

import {
  addUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

router.route("/").post(addUser).get(getUsers);

router.route("/:id").delete(deleteUser).get(getUser).put(updateUser);

export default router;
