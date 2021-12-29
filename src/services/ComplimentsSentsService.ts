import { getCustomRepository } from "typeorm";
import Error_Status from "../factory/Error_Status";
import IUserPayload from "../interfaces/IUserPayload";
import { ComplimentRepository } from "../repositories/ComplimentsRepository";

export default class ComplimentsSentsService {
	async execute(userPayload: IUserPayload) {
		try {
			const _ComplimentRepository = getCustomRepository(ComplimentRepository);
			const { sub: userId } = userPayload;

			if (!userId) throw new Error_Status("Internal Server Error !", 500);

			const complimentsSents = await _ComplimentRepository.find({
				select: ["message"],
				where: {
					user_sender: userId,
				},
			});

			return complimentsSents;
		} catch (e) {
			throw e;
		}
	}
}
