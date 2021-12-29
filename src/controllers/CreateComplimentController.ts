import { Request, Response } from "express";
import CreateComplimentService from "../services/CreateComplimentService";
import IComplimentRequest from "../interfaces/IComplimentRequest";
import TyController from "../interfaces/TyController";
import IUserPayload from "../interfaces/IUserPayload";

class CreateTagController {
	async execute(req: Request, res: Response): TyController {
		try {
			const complimentRequest = req.body as IComplimentRequest;
			const userPayload = req["userPayload"] as IUserPayload;

			const compliment = await new CreateComplimentService().execute(
				complimentRequest,
				userPayload,
			);

			return res.json({ compliment });
		} catch (err) {
			throw err;
		}
	}
}

export default new CreateTagController();
