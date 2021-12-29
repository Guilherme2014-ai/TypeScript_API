import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PostRefactoring1640040885501 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.createTable(
			new Table({
				name: "users",
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
						name: "name",
						type: "varchar",
						isNullable: false,
					},
					{
						name: "email",
						type: "varchar",
						isNullable: false,
					},
					{
						name: "password",
						type: "varchar",
						isNullable: false,
					},
					{
						name: "admin",
						type: "boolean",
						default: false,
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
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.dropTable("users");
	}
}
