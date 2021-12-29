import { getCustomRepository } from "typeorm";
import Error_Status from "../factory/Error_Status";
import IUserLoginRequest from "../interfaces/IUserLoginRequest";
import { UsersRepository } from "../repositories/UsersRepository";
import jwt from "jsonwebtoken";
import Password from "../password";
import IUserModelDbs from "../interfaces/IUserModelDbs";
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(__dirname, "..", "..", ".env") });

class LoginUserService {
	async execute(userRequest: IUserLoginRequest) {
		try {
			const _userRepository = getCustomRepository(UsersRepository);
			const { email, password } = userRequest;
			const secret = process.env.JWT_SECRET;

			if (!email || !password)
				throw new Error_Status("Email or Password Wasn't Filled !", 400);

			const userExists = (await _userRepository.findOne({
				email,
			})) as IUserModelDbs;

			if (!userExists) throw new Error_Status("No user with this Email !", 406);

			const passwordMatch = await new Password(password).Compare(
				userExists.password,
			);

			if (!passwordMatch)
				throw new Error_Status("The Pass Doesn't Match !", 401);

			const token = jwt.sign(
				{
					email: userExists.email,
					admin: userExists.admin,
					name: userExists.name,
				},
				secret,
				{
					subject: `${userExists.id}`,
					expiresIn: "4d",
				},
			);

			return token;
		} catch (e) {
			throw e;
		}
	}
}

export default LoginUserService;
