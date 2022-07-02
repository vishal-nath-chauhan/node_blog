import { Router } from "express";
import { addComment, getComment, getAllComment, deleteComment, updateComment } from "../controllers/comment.controller.js";
const router = Router();
router.route("/").get(getComment).post(addComment).delete(deleteComment);
router.route("/all").get(getAllComment);
router.patch("/update").patch(updateComment);
export default router;
