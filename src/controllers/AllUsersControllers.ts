import TyController from "../interfaces/TyController";
import { Request, Response } from "express";
import AllUsersService from "../services/AllUsersService";

class AllUsersControllers {
	async execute(req: Request, res: Response): TyController {
		try {
			const users = await new AllUsersService().execute();

			res.json({ users });
		} catch (e) {
			throw e;
		}
	}
}

export default new AllUsersControllers();
