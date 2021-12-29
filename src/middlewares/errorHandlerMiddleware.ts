/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";
import Error_Status from "../factory/Error_Status";

export default (
	err: Error_Status | any,
	req: Request,
	res: Response,
	next: NextFunction,
): void | Response => {
	console.error(err);
	if (err instanceof Error_Status && err.status != 500) {
		const { message, status } = err;

		res.statusCode = status;
		return res.json({ message });
	}
	res.statusCode = 500;
	return res.json({ message: `${err}` });
};
