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
exports.CreateStore = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const Store_1 = require("../../models/Store");
const typeorm_2 = require("typeorm");
let CreateStore = class CreateStore {
    constructor(storeRepository) {
        this.storeRepository = storeRepository;
    }
    async create(store, userSigned) {
        const storeCreated = this.storeRepository.create({
            store_isActivit: store.store_isActivit,
            store_isOpen: store.store_isOpen,
            product_list: store.product_list,
            provider_id: userSigned.sub,
            store_name: store.store_name
        });
        return await this.storeRepository.save(storeCreated);
    }
};
exports.CreateStore = CreateStore;
exports.CreateStore = CreateStore = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(Store_1.Store)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CreateStore);
//# sourceMappingURL=CreateStore.js.map