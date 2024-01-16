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
                        generationStrategy: 'uuid',
                    },
                    {
                        name: "user_email",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "user_password",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "is_active",
                        type: "boolean",
                        isNullable: false
                        
                    },
                    {
                        name: "is_provider",
                        type: "boolean",
                        isNullable: false
                        
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                        isNullable: false
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                        isNullable: false

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
        await queryRunner.createIndex(
            "getUserEmail",
            new TableIndex({
                name: "GET_USER_EMAIL",
                columnNames: ["user_email"]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex("getUserId", "GET_USER_ID");
        await queryRunner.dropIndex("getUserEmail", "GET_USER_EMAIL");
        await queryRunner.dropTable("users")
    }

}
