import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import UserRoutes from "./routes/user.routes.js";
import PostRoutes from "./routes/post.routes.js";
import LikeRoutes from "./routes/like.routes.js";
import CommentRoutes from "./routes/comment.routes.js";
import AuthRoutes from "./routes/auth.routes.js";
import { checkAuthHeader } from "./controllers/auth.controller.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
dotenv.config({});

app.use("/auth", AuthRoutes);
app.use(checkAuthHeader);

app.use("/users", UserRoutes);
app.use("/post", PostRoutes);
app.use("/like", LikeRoutes);
app.use("/comment", CommentRoutes);

export default app;
