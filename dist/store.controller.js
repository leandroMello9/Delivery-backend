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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreController = void 0;
const common_1 = require("@nestjs/common");
const auth_1 = require("./midlewares/auth");
let StoreController = class StoreController {
    constructor(createStore) {
        this.createStore = createStore;
    }
    getHello() {
        return "Hello World";
    }
    async create(store, request, response) {
        try {
            const userCreated = await this.createStore.create(store, request['user']);
            return response.status(common_1.HttpStatus.CREATED).json(userCreated);
        }
        catch (error) {
            if (error instanceof Error) {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.BAD_REQUEST,
                    error: error.message
                }, common_1.HttpStatus.BAD_REQUEST, {
                    cause: error
                });
            }
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'Erro ao criar a loja, verifique se esse prestador já possui uma loja!'
            }, common_1.HttpStatus.BAD_REQUEST, {
                cause: error
            });
        }
    }
};
exports.StoreController = StoreController;
__decorate([
    (0, common_1.Get)('/usersGet'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], StoreController.prototype, "getHello", null);
__decorate([
    (0, common_1.UseGuards)(auth_1.AuthGuard),
    (0, common_1.Post)("/createStore"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "create", null);
exports.StoreController = StoreController = __decorate([
    (0, common_1.Controller)('store'),
    __param(0, (0, common_1.Inject)("CreateStoreInterface")),
    __metadata("design:paramtypes", [Object])
], StoreController);
//# sourceMappingURL=store.controller.js.map