import { Router } from "express";
import { addLike,deleteLike } from "../controllers/like.controller.js";
const router = Router()
router.route('/').post(addLike).delete(deleteLike)

export default router