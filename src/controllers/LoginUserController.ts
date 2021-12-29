import { Request, Response } from "express";
import LoginUserService from "../services/LoginUserService";
import IUserLoginRequest from "../interfaces/IUserLoginRequest";
import TyController from "../interfaces/TyController";

class LoginUserController {
	async execute(req: Request, res: Response): TyController {
		try {
			const userRequest = req.body as IUserLoginRequest;

			const token = await new LoginUserService().execute(userRequest);

			return res.json({ token });
		} catch (err) {
			throw err;
		}
	}
}

export default new LoginUserController();
