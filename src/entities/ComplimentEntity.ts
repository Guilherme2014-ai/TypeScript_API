import {
	Entity,
	PrimaryColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	BeforeInsert,
	JoinColumn,
	ManyToOne,
} from "typeorm";

// Tabelas do Relacionamento
import { TagEntity } from "./TagEntity";
import { UserEntity } from "./UserEntity";

@Entity("compliments") // Table's name
export class ComplimentEntity {
	@PrimaryColumn()
	id: number;

	@Column()
	user_sender: number;

	@Column()
	user_receiver: number;

	@Column()
	tag_id: number;

	@Column()
	message: string;

	// Relacionamentos
	@JoinColumn({ name: "user_sender" })
	@ManyToOne(() => UserEntity) // Muitos Comentarios pra um usuario
	userSender: UserEntity;

	@JoinColumn({ name: "user_receiver" })
	@ManyToOne(() => UserEntity)
	userReceiver: UserEntity;

	@JoinColumn({ name: "tag_id" })
	@ManyToOne(() => TagEntity)
	tagId: TagEntity;
	//----------------------------------------

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@BeforeInsert()
	async handle() {
		this.id = Math.trunc(Math.random() * 10000);
	}
}
