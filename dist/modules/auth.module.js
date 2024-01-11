"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const AuthenticateUser_1 = require("../useCases/Authenticate/AuthenticateUser");
const auth_controller_1 = require("../auth.controller");
const jwt_1 = require("@nestjs/jwt");
const auth_config_1 = require("../config/auth.config");
const HashPassword_1 = require("../providers/HashPassword");
const UserRepository_1 = require("../repository/User/UserRepository");
const UserRepositoryInterface_1 = require("../repository/User/UserRepositoryInterface");
const typeorm_1 = require("@nestjs/typeorm");
const User_1 = require("../models/User");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register(auth_config_1.authConfig),
            typeorm_1.TypeOrmModule.forFeature([User_1.User])
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [HashPassword_1.default,
            {
                useClass: UserRepository_1.default,
                provide: UserRepositoryInterface_1.default
            },
            UserRepository_1.default,
            AuthenticateUser_1.AuthenticatorUser
        ],
        exports: [],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map