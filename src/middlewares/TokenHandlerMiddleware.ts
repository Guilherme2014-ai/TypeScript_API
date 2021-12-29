import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { resolve } from "path";
import { config } from "dotenv";
import Error_Status from "../factory/Error_Status";
import IUserPayload from "../interfaces/IUserPayload";

config({ path: resolve(__dirname, "..", "..", ".div") });
const secret = process.env.JWT_SECRET;

class TokenHandler {
	private payload: IUserPayload;

	TokenVerification(req: Request, res: Response, next: NextFunction): void {
		const authorization = req.headers["authorization"];

		if (!authorization) throw new Error_Status("no token provided !", 400);

		const token = authorization.split(" ")[1];

		this.payload = verify(token, secret) as IUserPayload;
		const { admin } = this.payload;

		req["isAdmin"] = admin; // true | false
		next();
	}

	SetPayloadToTheRequest(
		req: Request,
		res: Response,
		next: NextFunction,
	): void {
		req["userPayload"] = this.payload;
		next();
	}

	AdminVerification(req: Request, res: Response, next: NextFunction): void {
		const isAdmin = req["isAdmin"];

		if (!isAdmin) throw new Error_Status("you must be an Admin !", 401);
		next();
	}
}

export default new TokenHandler();
