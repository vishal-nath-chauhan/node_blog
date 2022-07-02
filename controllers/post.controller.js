import { addPostService, deletePostService, updatePostService, getAllPostService, getPostService } from "../services/post.service.js";

export const addPost = async (req, res) => {
	try {
		const userData = req.body;
		const output = await addPostService(userData);
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

export const deletePost = async (req, res) => {
	try {
		const userData = req.query;
		const output = await deletePostService(userData);
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

export const updatePost = async (req, res) => {
	try {
		const userData = req.body;
		const userId = req.query;
		const output = await updatePostService({ id: userId, data: userData });
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

export const getPost = async (req, res) => {
	try {
		const userId = req.query;
		const output = await getPostService(userId);
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

export const getAllPost = async (req, res) => {
	try {
		const output = await getAllPostService();
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
