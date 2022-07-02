import Comment from "../models/comment.schema.js";

export const addCommentService = async (data) => {
	try {
		const { _userId, _postId, text } = data;
		if (_userId && _postId && text) {
			const output = await Comment.create({ _userId, _postId, text });
			if (output) {
				return output;
			}
		}
	} catch (e) {
		throw new Error(e);
	}
};

export const deleteCommentService = async (req, res) => {
	try {
	} catch (e) {
		throw new Error(e);
	}
};

export const updateCommentService = async (req, res) => {
	try {
	} catch (e) {
		throw new Error(e);
	}
};

export const getCommentService = async (data) => {
	try {
		if (data) {
			const output = await Comment.find(data);
			if (output) {
				return output;
			}
		}
	} catch (e) {
		throw new Error(e);
	}
};

export const getAllCommentService = async () => {
	try {
		const output = await Comment.find({});
		if (output) {
			return output;
		}
	} catch (e) {
		throw new Error(e);
	}
};
