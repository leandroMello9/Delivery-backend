"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store1705000986916 = void 0;
const typeorm_1 = require("typeorm");
class Store1705000986916 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "store",
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
        }));
        await queryRunner.createForeignKey('store', new typeorm_1.TableForeignKey({
            columnNames: ['provider_id'],
            referencedColumnNames: ['user_id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
            name: 'StoreProvider',
        }));
        await queryRunner.createIndex("getUserId", new typeorm_1.TableIndex({
            name: "GET_STORE_ID",
            columnNames: ["store_id"]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("store");
    }
}
exports.Store1705000986916 = Store1705000986916;
//# sourceMappingURL=1705000986916-store.js.map