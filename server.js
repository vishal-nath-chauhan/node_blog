import app from "./app.js";
import mongoose from "mongoose";
import mongooseConfig from "./config/mongo.config.js";

const PORT = process.env.PORT;

mongoose
	.connect(mongooseConfig.uri)
	.then(() => console.log("Database Connected"))
	.catch(() => console.log("Failed to connect Database"));

app.listen(PORT, () => console.log("Server running on PORT : ", PORT));
