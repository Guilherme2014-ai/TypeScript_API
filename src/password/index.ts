import { hash, genSalt, compare } from "bcrypt";

export default class Password {
	constructor(private password: string) {}

	async Hash(): Promise<string> {
		const salt = await genSalt(10);
		return await hash(this.password, salt);
	}
	async Compare(hashedPass: string): Promise<boolean> {
		return await compare(this.password, hashedPass);
	}
}
