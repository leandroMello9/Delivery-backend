import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class Users1704816687508 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "user_id",
                        type: "varchar",
                        isPrimary: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: "user_email",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "user_password",
                        type: "varchar",
                    },
                    {
                        name: "is_active",
                        type: "boolean"
                        
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
                ]
            })
        )
        await queryRunner.createIndex(
            "getUserId",
            new TableIndex({
                name: "GET_USER_ID",
                columnNames: ["user_id"]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
