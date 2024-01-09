"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = void 0;
const config_1 = require("@nestjs/config");
const dotenv = require("dotenv");
const User_1 = require("../models/User");
const typeorm_1 = require("typeorm");
dotenv.config({});
const config = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [User_1.User],
    migrations: ["../migrations/*.ts"],
    autoLoadEntities: true,
    synchronize: false,
};
exports.default = (0, config_1.registerAs)('typeorm', () => config);
exports.connectionSource = new typeorm_1.DataSource(config);
//# sourceMappingURL=typeorm.config.js.map