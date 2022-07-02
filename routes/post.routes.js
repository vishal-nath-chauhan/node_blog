import { Router } from "express";
import { addPost, getAllPost, getPost, deletePost, updatePost } from "../controllers/post.controller.js";

const router = Router();
router.route("/").get(getPost).post(addPost).delete(deletePost);
router.route("/all").get(getAllPost);
router.route('/update').patch(updatePost)

export default router;
