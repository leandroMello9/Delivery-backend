import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from "typeorm";

export class Store1705000986916 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name : "store",
                columns: [
                    {
                        name: "store_id",
                        type: "varchar",
                        isUnique: true,
                        isPrimary: true,
                        isNullable: false,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: "provider_id",
                        type: "varchar",
                        isUnique: true,
                        isNullable: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: "store_name",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: "store_isOpen",
                        type: "boolean",
                        isNullable: false,
                    },
                    {
                        name: "store_isActivit",
                        type: "boolean",
                        isNullable: false,
                    },
                    {
                        name: "product_list",
                        type: "json",
                        isNullable: false,
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()",
                        isNullable: false,
                    },
                    {
                        
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                        isNullable: false,
                    },
                ]
            })
        )
        await queryRunner.createForeignKey(
            'store',
            new TableForeignKey({
              columnNames: ['provider_id'],
              referencedColumnNames: ['user_id'],
              referencedTableName: 'users',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
              name: 'StoreProvider',
            }),
          );

        await queryRunner.createIndex(
            "getUserId",
            new TableIndex({
                name: "GET_STORE_ID",
                columnNames: ["store_id"]
            })
        )

     
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("store")
    }

}
