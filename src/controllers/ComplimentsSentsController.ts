import { Request, Response } from "express";
import ComplimentsSentsService from "../services/ComplimentsSentsService";
import TyController from "../interfaces/TyController";
import IUserPayload from "../interfaces/IUserPayload";

class ComplimentsSentsController {
	async execute(req: Request, res: Response): TyController {
		try {
			const userPayload = req["userPayload"] as IUserPayload;

			const complimentsSents = await new ComplimentsSentsService().execute(
				userPayload,
			);

			return res.json(complimentsSents);
		} catch (err) {
			throw err;
		}
	}
}

export default new ComplimentsSentsController();
