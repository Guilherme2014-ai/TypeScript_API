import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class tag1640484975378 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.createTable(
			new Table({
				name: "tags",
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
						type: "varchar(20)",
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
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.dropTable("tags");
	}
}
