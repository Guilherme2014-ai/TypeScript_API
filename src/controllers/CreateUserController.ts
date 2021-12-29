import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import IUserRequest from "../interfaces/IUserRequest";
import TyController from "../interfaces/TyController";

class CreateUserController {
	async execute(req: Request, res: Response): TyController {
		try {
			const userInfo = req.body as IUserRequest;

			const createUserService = new CreateUserService();
			const user = await createUserService.execute(userInfo);

			return res.json({ user });
		} catch (err) {
			throw err;
		}
	}
}

export default new CreateUserController();
