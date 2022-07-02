import User from "../models/user.schema.js";

export const addUserService = async (data) => {
	try {
		const { name, emailId, password } = data;
		if (name && emailId && password) {
			let output = await User.create({ name, emailId, password });
			if (output) {
				return output;
			}
		}
	} catch (e) {
		throw new Error(e);
	}
};

export const deleteUserService = async (data) => {
	try {
		const filter = data;
		const user = await User.findByIdAndDelete(filter);
		if (user) {
			return user;
		}
	} catch (e) {
		throw new Error(e);
	}
};

export const updateUserService = async (req, res) => {
	try {
	} catch (e) {
		throw new Error(e);
	}
};

export const getUserService = async (filter) => {
	try {
		const user = await User.findOne(filter);
		if (user) {
			return user;
		}
	} catch (e) {
		throw new Error(e);
	}
};


export const getAllUserService = async () => {
	try {
		const users = await User.find({});
		if (users) {
			return users;
		}
	} catch (e) {
		throw new Error(e);
	}
};
