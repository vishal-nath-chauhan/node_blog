import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
	title: { type: String, required: [true, "Blog title is required"] },
	text: { type: String, required: [true, "Blog body is required"] },
    _userId: { type: String, required: [true, "User Id is required"] },
});

const Post = mongoose.model("post", PostSchema);
export default Post;
