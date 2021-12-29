import { getCustomRepository } from "typeorm";
import Error_Status from "../factory/Error_Status";
import { UsersRepository } from "../repositories/UsersRepository";
import IUserRequest from "../interfaces/IUserRequest";

class CreateUserService {
	async execute(userinfo: IUserRequest) {
		try {
			const { email, password, name } = userinfo;

			if (!name || !email || !password)
				throw new Error_Status("Some Field not Filled !", 400);

			const usersRepository = getCustomRepository(UsersRepository); // Responsável por instanciar o Repositório do User

			const existsInDbs = await usersRepository.findOne({ email });

			if (existsInDbs)
				throw new Error_Status("This User Already Exists !", 400);

			const user = usersRepository.create(userinfo);
			usersRepository.save(user);

			return user;
		} catch (e) {
			throw e;
		}
	}
}

export default CreateUserService;
