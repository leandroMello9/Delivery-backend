"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const HashPassword_1 = require("../../providers/HashPassword");
const UserRepositoryInterface_1 = require("../../repository/User/UserRepositoryInterface");
let CreateUserService = class CreateUserService {
    constructor(userRepostory, hashPassword) {
        this.userRepostory = userRepostory;
        this.hashPassword = hashPassword;
    }
    async execute({ user_email, user_password }) {
        const hash = await this.hashPassword.generateHash(user_password);
        const usr = await this.userRepostory.create({
            user_email,
            user_password: hash
        });
        const userReturned = {
            user_id: usr.user_id,
            user_email: usr.user_email,
            is_active: true,
            is_provider: usr.is_provider,
        };
        return userReturned;
    }
};
CreateUserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [UserRepositoryInterface_1.default,
        HashPassword_1.default])
], CreateUserService);
exports.default = CreateUserService;
//# sourceMappingURL=CreateUserImplement.js.map