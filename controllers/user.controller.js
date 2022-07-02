import { getUserService, addUserService, deleteUserService, getAllUserService } from "../services/user.service.js";

export const addUser = async (req, res) => {
	try {
		const userData = req.body;
		const output = await addUserService(userData);
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

export const deleteUser = async (req, res) => {
	try {
		const userData = req.query;
		const output = await deleteUserService(userData);
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

export const updateUser = async (req, res) => {
	try {
		const userData = req.body;
		const userId = req.query;
		const output = addUserService({ id: userId, data: userData });
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

export const getUser = async (req, res) => {
	try {
		const userId = req.query;
		const userInfo = req.body;
		const filter = { _id: userId, ...userInfo };
		const output = await getUserService(filter);
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

export const getAllUser = async (req, res) => {
	try {
		const output = await getAllUserService();
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
