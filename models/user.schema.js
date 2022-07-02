import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	name: { type: String, required: [true, "Name is required"] },
	emailId: { type: String, required: [true, "Email is required"],unique:true },
	password: { type: String, required: [true, "Password is required"] },
});

const User = mongoose.model("user", UserSchema);
export default User;
