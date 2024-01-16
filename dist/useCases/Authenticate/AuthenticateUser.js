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
exports.AuthenticatorUser = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const HashPassword_1 = require("../../providers/HashPassword");
const UserRepositoryInterface_1 = require("../../repository/User/UserRepositoryInterface");
let AuthenticatorUser = class AuthenticatorUser {
    constructor(userRepository, hashProvider, jwtService) {
        this.userRepository = userRepository;
        this.hashProvider = hashProvider;
        this.jwtService = jwtService;
    }
    async auth(user_email, pass) {
        const user = await this.userRepository.findOneUserByUserEmail(user_email);
        const comparePass = await this.hashProvider.compareHash(pass, user?.user_password);
        if (comparePass === false) {
            throw new common_1.UnauthorizedException();
        }
        const payload = { sub: user.user_id, user_email: user.user_email, is_provider: user.is_provider };
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
};
exports.AuthenticatorUser = AuthenticatorUser;
exports.AuthenticatorUser = AuthenticatorUser = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [UserRepositoryInterface_1.default,
        HashPassword_1.default,
        jwt_1.JwtService])
], AuthenticatorUser);
//# sourceMappingURL=AuthenticateUser.js.map