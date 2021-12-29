import {
	Entity,
	PrimaryColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	BeforeInsert,
} from "typeorm";

@Entity("tags") // Table's name
export class TagEntity {
	@PrimaryColumn()
	id: number;

	@Column()
	name: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@BeforeInsert()
	async handle() {
		this.id = Math.trunc(Math.random() * 10000);
	}
}
