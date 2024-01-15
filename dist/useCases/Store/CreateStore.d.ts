import { CreateStoreInterface } from "./CreateStoreInterface";
import { Store } from "src/models/Store";
import { Repository } from "typeorm";
import { CreateStoreDto } from "src/dtos/request/CreateStoreDto";
export interface UserLoggedDto {
    sub: string;
}
export declare class CreateStore implements CreateStoreInterface {
    private storeRepository;
    constructor(storeRepository: Repository<Store>);
    create(store: CreateStoreDto, userSigned: UserLoggedDto): Promise<Store>;
}
