import Like from "../models/like.schema.js";

export const addLikeService = async (data) => {
	try {
		const { _postId, _userId } = data;
		if (_postId && _userId) {
			const output = await Like.create({ _postId, _userId });
			if (output) {
				return output;
			}
		}
	} catch (e) {
		throw new Error(e);
	}
};

export const deleteLikeService = async (data) => {
	try {
		if (data) {
			const output = await Like.findByIdAndDelete(data);
			if (output) {
				return output;
			}
		}
	} catch (e) {
		throw new Error(e);
	}
};
