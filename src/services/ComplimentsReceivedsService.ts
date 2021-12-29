import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentsRepository";

import Error_Status from "../factory/Error_Status";
import IUserPayload from "../interfaces/IUserPayload";

class ComplimentsReceivedsService {
	async execute(userPayload: IUserPayload) {
		try {
			const { sub: userId } = userPayload;
			const _ComplimentRepository = getCustomRepository(ComplimentRepository);

			if (!userId) throw new Error_Status("internal Server Error !", 500);

			const compliments = await _ComplimentRepository.find({
				select: ["message"],
				where: {
					user_receiver: userId,
				},
			});

			return compliments;
		} catch (e) {
			throw e;
		}
	}
}

export default ComplimentsReceivedsService;
