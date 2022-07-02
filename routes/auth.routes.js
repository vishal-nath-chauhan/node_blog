import { Router } from "express";
import { loginUser, signUpUser } from "../controllers/auth.controller.js";
const router = Router();
router.route("/login").get(loginUser);
router.route("/signup").post(signUpUser);

export default router;
