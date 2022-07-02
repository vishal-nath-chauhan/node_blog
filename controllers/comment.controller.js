import { addCommentService, deleteCommentService, updateCommentService, getAllCommentService, getCommentService } from "../services/comment.service.js";

export const addComment = async (req, res) => {
	try {
		const commentData = req.body;
		const output = await addCommentService(commentData);
		if (output) {
			res.status(200).json({
				success: true,
				data: output,
			});
		}
	} catch (e) {
		res.status(500).json({
			success: false,
			message: `${e}`,
		});
	}
};

export const deleteComment = async (req, res) => {
	try {
		if (data) {
			const output = await Comment.findByIdAndDelete(data);
			if (output) {
				return output;
			}
		}
	} catch (e) {
		res.status(500).json({
			success: false,
			message: `${e}`,
		});
	}
};

export const updateComment = async (req, res) => {
	try {
	} catch (e) {
		res.status(500).json({
			success: false,
			message: `${e}`,
		});
	}
};

export const getComment = async (req, res) => {
	try {
		const commentData = req.query;
		const output = await getCommentService(commentData);
		if (output) {
			res.status(200).json({
				success: true,
				data: output,
			});
		}
	} catch (e) {
		res.status(500).json({
			success: false,
			message: `${e}`,
		});
	}
};

export const getAllComment = async (req, res) => {
	try {
		const output = await getAllCommentService();
		if (output) {
			res.status(200).json({
				success: true,
				data: output,
			});
		}
	} catch (e) {
		res.status(500).json({
			success: false,
			message: `${e}`,
		});
	}
};
