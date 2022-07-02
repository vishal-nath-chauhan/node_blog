import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
	text: { type: String, required: [true, "Comment body is required"] },
	_userId: { type: String, required: [true, "User Id is required"] },
	_postId: { type: String, required: [true, "Post Id is required"] },


});

const Comment = mongoose.model("comment", CommentSchema);
export default Comment;
