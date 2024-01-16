import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from "typeorm";

export class Delivery1705415047974 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'delivery',
                columns: [
                    {
                        name: "develiry_id",
                        isPrimary: true,
                        isNullable: false,
                        type: "varchar",
                        generationStrategy: "uuid",
                    },
                    {
                        name: "delivery_status",
                        isPrimary: false,
                        isNullable: false,
                        type: "varchar",
                    },
                    {
                        name: "delivery_store",
                        isNullable: false,
                        type: "varchar",
                    },
                    {
                        name: "delivery_client",
                        isNullable: false,
                        type: "varchar",
                    },
                    {
                        name: "product_delivery",
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
                    }
                ]
            })
        )
        await queryRunner.createForeignKey(
            'delivery_store',
            new TableForeignKey({
              columnNames: ['delivery_store'],
              referencedColumnNames: ['store_id'],
              referencedTableName: 'store',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
              name: 'DeliveryStore',
            }),
          );
          await queryRunner.createForeignKey(
            'delivery_client',
            new TableForeignKey({
              columnNames: ['delivery_client'],
              referencedColumnNames: ['user_id'],
              referencedTableName: 'users',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
              name: 'DeliveryClient',
            }),
          );

          await queryRunner.createIndex(
            "getDeliveryWithStoreId",
            new TableIndex({
                name: "GET_DELIVERY_STORE_ID",
                columnNames: ["delivery_store"]
            })
        )
        await queryRunner.createIndex(
            "getDeliveryWithClientId",
            new TableIndex({
                name: "GET_DELIVERY_CLIENT_ID",
                columnNames: ["delivery_client"]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex("getDeliveryWithStoreId", "GET_DELIVERY_STORE_ID");
        await queryRunner.dropIndex("getDeliveryWithClientId", "GET_DELIVERY_CLIENT_ID");
        await queryRunner.dropTable("delivery")
    }

}
