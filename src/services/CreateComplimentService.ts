import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentsRepository";

import Error_Status from "../factory/Error_Status";
import IComplimentRequest from "../interfaces/IComplimentRequest";
import IUserPayload from "../interfaces/IUserPayload";
import { UsersRepository } from "../repositories/UsersRepository";

class CreateTagService {
	async execute(
		complimentRequest: IComplimentRequest,
		userPayload: IUserPayload,
	) {
		try {
			const _ComplimentRepository = getCustomRepository(ComplimentRepository);
			const _UserRepository = getCustomRepository(UsersRepository);

			const userId = Number(userPayload.sub);
			const { tag_id, user_receiver, user_sender, message } = complimentRequest;

			const allFieldsFilled = tag_id && user_receiver && user_sender && message;

			if (!allFieldsFilled)
				throw new Error_Status("some field wasn't filled !", 400);

			const userReceiver = await _UserRepository.findOne({ id: user_receiver });
			const userSender = await _UserRepository.findOne({ id: user_sender });

			if (!userReceiver || !userSender)
				throw new Error_Status(
					"User Sender or Receiver User doesn't exists !",
					400,
				);

			if (userId != user_sender)
				throw new Error_Status("The User Sender should be you !", 406);

			if (user_receiver == user_sender)
				throw new Error_Status(
					"You can't make a compliment to yourself ;D",
					406,
				);

			const compliment = await _ComplimentRepository.create(complimentRequest);
			_ComplimentRepository.save(compliment);

			return compliment;
		} catch (e) {
			throw e;
		}
	}
}

export default CreateTagService;
