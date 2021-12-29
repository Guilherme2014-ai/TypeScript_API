import dotenv from "dotenv";
import path from "path";
import entities from "../entities"; // todas as entities

dotenv.config({ path: path.resolve(__dirname, "..", "..", ".env") });

export default {
	host: process.env.DATABASE_HOST,
	port: 3306,
	username: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	database: "type_script_learning",
	entities,
	logging: true,
};
