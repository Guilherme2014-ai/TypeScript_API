import { Request, Response } from "express";
import CreateTagService from "../services/CreateTagService";
import ITagRequest from "../interfaces/ITagRequest";
import TyController from "../interfaces/TyController";

class CreateTagController {
	async execute(req: Request, res: Response): TyController {
		try {
			const tagRequest = req.body as ITagRequest;

			const tag = await new CreateTagService().execute(tagRequest);

			return res.json({ tag });
		} catch (err) {
			throw err;
		}
	}
}

export default new CreateTagController();
