import { Request, Response } from "express";
import ComplimentsReceivedsService from "../services/ComplimentsReceivedsService";
import TyController from "../interfaces/TyController";
import IUserPayload from "../interfaces/IUserPayload";

class ComplimentsReceivedsController {
	async execute(req: Request, res: Response): TyController {
		try {
			const userPayload = req["userPayload"] as IUserPayload;

			const complimentsReceiveds =
				await new ComplimentsReceivedsService().execute(userPayload);

			return res.json(complimentsReceiveds);
		} catch (err) {
			throw err;
		}
	}
}

export default new ComplimentsReceivedsController();
