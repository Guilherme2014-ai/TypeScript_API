import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Compliments1640628764296 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.createTable(
			new Table({
				name: "compliments",
				columns: [
					{
						name: "id",
						type: "int",
						isPrimary: true,
						unsigned: true,
						isUnique: true,
						isNullable: false,
					},
					{
						name: "user_receiver",
						type: "int",
						isNullable: false,
						unsigned: true,
					},
					{
						name: "user_sender",
						type: "int",
						isNullable: false,
						unsigned: true,
					},
					{
						name: "tag_id",
						type: "int",
						isNullable: false,
						unsigned: true,
					},
					{
						name: "message",
						type: "varchar",
						isNullable: false,
					},

					{
						name: "created_at",
						type: "timestamp",
						default: "now()",
					},
					{
						name: "updated_at",
						type: "timestamp",
						default: "now()",
					},
				],
				foreignKeys: [
					{
						name: "FK_UserSender_USER",
						referencedTableName: "users",
						referencedColumnNames: ["id"],
						columnNames: ["user_sender"],
						onDelete: "CASCADE",
						onUpdate: "CASCADE",
					},
					{
						name: "FK_UserReceiver_USER",
						referencedTableName: "users",
						referencedColumnNames: ["id"],
						columnNames: ["user_receiver"],
						onDelete: "CASCADE",
						onUpdate: "CASCADE",
					},
					{
						name: "FK_TAGID_TAG",
						referencedTableName: "tags",
						referencedColumnNames: ["id"],
						columnNames: ["tag_id"],
						onDelete: "CASCADE",
						onUpdate: "CASCADE",
					},
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.dropTable("compliments");
	}
}
