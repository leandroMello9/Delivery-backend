import { Inject } from "@nestjs/common";
import { CreateStoreInterface } from "./CreateStoreInterface";
import { InjectRepository } from "@nestjs/typeorm";
import { Store } from "src/models/Store";
import { Repository } from "typeorm";
import { CreateStoreDto } from "src/dtos/request/CreateStoreDto";



export interface UserLoggedDto {
    sub: string
}

export class CreateStore implements CreateStoreInterface {
    constructor(
        @InjectRepository(Store)
        private storeRepository: Repository<Store>,
    ) {}
    async create(store: CreateStoreDto, userSigned: UserLoggedDto): Promise<Store> {
        const storeCreated =  this.storeRepository.create({
            store_isActivit: store.store_isActivit,
            store_isOpen: store.store_isOpen,
            product_list: store.product_list,
            provider_id: userSigned.sub,
            store_name: store.store_name
        });

        return await this.storeRepository.save(storeCreated);
    } 
}