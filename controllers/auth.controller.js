import { addUserService, getUserService } from "../services/user.service.js";
import bcrypt from "bcrypt";
import pkg from "jsonwebtoken";
const { sign, verify } = pkg;

const company = "vishal.nath.chauhan";
const subject = "generatetoken";
const audience = "users";
const algorithm = "RS256";

const saltRounds = 10;
const signOptions = {
	issuer: company,
	subject,
	audience,
};

export const signUpUser = async (req, res) => {
	try {
		const userData = req.body;
		const encryptedPassword = await bcrypt.hash(userData.password, saltRounds);
		userData.password = encryptedPassword;
		let output = await addUserService(userData);
		let updatedOutput = { name: output.name, emailId: output.emailId, _id: output._id };
		// Normal
		// const token = sign({ name: output.name, _id: output._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });

		// PRIVATE-PUBLIC key
		const token = sign({ name: output.name, _id: output._id }, process.env.PRIVATE_KEY, { ...signOptions, expiresIn: process.env.JWT_EXPIRES });

		console.log({ token });
		if (output) {
			res.status(200).json({
				success: true,
				data: { user: { ...updatedOutput }, token },
			});
		}
	} catch (e) {
		res.status(500).json({
			success: false,
			message: `${e}`,
		});
	}
};

export const loginUser = async (req, res) => {
	try {
		const userData = req.body;
		const dbUser = await getUserService({ emailId: userData.emailId });
		if (dbUser) {
			let dbPassword = dbUser.password;
			let userPassword = userData.password;
			const decryptedPassword = await bcrypt.compare(userPassword, dbPassword);
			const token = sign({ name: dbUser.name, _id: dbUser._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });
			if (decryptedPassword) {
				res.status(200).json({
					success: true,
					data: { user: dbUser, token },
				});
			} else {
				res.status(500).json({
					success: false,
					message: `Authentication Failed`,
				});
			}
		} else {
			res.status(500).json({
				success: false,
				message: `Authentication Failed`,
			});
		}
	} catch (e) {
		res.status(500).json({
			success: false,
			message: `${e}`,
		});
	}
};

export const checkAuthHeader = async (req, res, next) => {
	try {
		if (req.headers["authorization"] && req.headers["authorization"].startsWith("Bearer")) {
			const reqToken = req.headers["authorization"].split(" ")[1];
			// console.log(reqToken);
			// const isVerified = await verify(reqToken, process.env.JWT_SECRET,signOptions);
			const isVerified = await verify(reqToken, process.env.PRIVATE_KEY, signOptions);

			if (isVerified) {
				next();
			} else {
				res.status(500).json({
					success: false,
					message: `Wrong Credentials`,
				});
			}
		} else {
			res.status(500).json({
				success: false,
				message: `Please login`,
			});
		}
	} catch (e) {
		res.status(500).json({
			success: false,
			message: `${e}`,
		});
	}
};
