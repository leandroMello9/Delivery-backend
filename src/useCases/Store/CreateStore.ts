import { HttpException, HttpStatus, Inject } from "@nestjs/common";
import { CreateStoreInterface } from "./CreateStoreInterface";
import { InjectRepository } from "@nestjs/typeorm";
import { Store } from "src/models/Store";
import { Repository, TypeORMError } from "typeorm";
import { CreateStoreDto } from "src/dtos/request/CreateStoreDto";



export interface UserLoggedDto {
    sub: string
    is_provider: boolean
}

export class CreateStore implements CreateStoreInterface {
    constructor(
        @InjectRepository(Store)
        private storeRepository: Repository<Store>,
    ) {}
    async create(store: CreateStoreDto, userSigned: UserLoggedDto): Promise<Store> {
        
        if(!userSigned.is_provider) {
                throw new Error('Erro ao criar a loja, verifique se o usuário é um prestador de serviço!')
            }
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