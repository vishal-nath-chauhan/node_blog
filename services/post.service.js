import Post from "../models/post.schema.js";
export const addPostService = async (data) => {
	try {
		const { title, text, _userId } = data;
		if (title && text && _userId) {
			const output = await Post.create({ title, text, _userId });
			if (output) {
				return output;
			}
		}
	} catch (e) {
		throw new Error(e);
	}
};

export const deletePostService = async (data) => {
	try {
		if (data) {
			const output = await Post.findByIdAndDelete(data);
			if (output) {
				return output;
			}
		}
	} catch (e) {
		throw new Error(e);
	}
};

export const updatePostService = async (data) => {
	try {
		if (data) {
			const output = await Post.findOneAndUpdate(data.id,{...data.data},{new: true});
			if (output) {
				return output;
			}
		}
	} catch (e) {
		throw new Error(e);
	}
};

export const getPostService = async (data) => {
	try {
		if (data) {
			const output = await Post.find(data);
			if (output) {
				return output;
			}
		}
	} catch (e) {
		throw new Error(e);
	}
};

export const getAllPostService = async () => {
	try {
		const output = await Post.find({});
		if (output) {
			return output;
		}
	} catch (e) {
		throw new Error(e);
	}
};
