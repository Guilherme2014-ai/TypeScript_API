import {
	Entity,
	PrimaryColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	BeforeInsert,
	OneToMany,
} from "typeorm";
import { ComplimentEntity } from "./ComplimentEntity";
import Password from "../password";

@Entity("users") // Table's name
export class UserEntity {
	@PrimaryColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column()
	admin: boolean;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	// Relacionamentos

	@OneToMany(
		() => ComplimentEntity,
		(_complimentEntity) => _complimentEntity.userReceiver,
	)
	compliments_received: ComplimentEntity[];

	@OneToMany(
		() => ComplimentEntity,
		(_complimentEntity) => _complimentEntity.userSender,
	)
	compliments_sents: ComplimentEntity[];

	//------------------------------

	@BeforeInsert()
	async handle() {
		const password = new Password(this.password);
		const passwordHash = await password.Hash();

		this.password = passwordHash;
		this.id = Math.trunc(Math.random() * 10000);
	}
}
