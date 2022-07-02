import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
	_postId: { type: String, required: [true, "Blog title is required"]},
    _userId: { type: String, required: [true, "User Id is required"]},
});

const Like = mongoose.model("like", LikeSchema);
export default Like;
