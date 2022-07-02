import { addLikeService, deleteLikeService } from "../services/like.service.js";

export const addLike = async (req, res) => {
	try {
		const likeData = req.body;
		const output = await addLikeService(likeData);
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

export const deleteLike = async (req, res) => {
	try {
		const likeData = req.query;
		const output = await deleteLikeService(likeData);
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
