import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

export default class AllUsersService {
	async execute() {
		try {
			const _UserRepository = getCustomRepository(UsersRepository);

			const users = await _UserRepository.find({
				relations: ["compliments_received", "compliments_sents"],

				select: ["name", "email", "admin"],
			});

			return users;
		} catch (e) {
			throw e;
		}
	}
}

/*
join: {
					alias: "user",
					leftJoinAndSelect: {
						compliments_received: "user.compliments_received",
						compliments_sents: "user.compliments_sents",
					},
				},
*/
