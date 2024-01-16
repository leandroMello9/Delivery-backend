"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users1704816687508 = void 0;
const typeorm_1 = require("typeorm");
class Users1704816687508 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
        await queryRunner.createIndex("getUserId", new typeorm_1.TableIndex({
            name: "GET_USER_ID",
            columnNames: ["user_id"]
        }));
        await queryRunner.createIndex("getUserEmail", new typeorm_1.TableIndex({
            name: "GET_USER_EMAIL",
            columnNames: ["user_email"]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropIndex("getUserId", "GET_USER_ID");
        await queryRunner.dropIndex("getUserEmail", "GET_USER_EMAIL");
        await queryRunner.dropTable("users");
    }
}
exports.Users1704816687508 = Users1704816687508;
//# sourceMappingURL=1704816687508-users.js.map