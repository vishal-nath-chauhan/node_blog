import { Router } from "express";
import { addUser, deleteUser, getAllUser, getUser } from "../controllers/user.controller.js";
const router = Router();
router.route("/").get(getUser).post(addUser).delete(deleteUser);
router.route("/all").get(getAllUser);

export default router;
