import { CreateStoreDto } from "src/dtos/request/CreateStoreDto";
import { UserLoggedDto } from "./CreateStore";
import { Store } from "src/models/Store";
export declare const int: unique symbol;
export interface CreateStoreInterface {
    create: (store: CreateStoreDto, userSigned: UserLoggedDto) => Promise<Store>;
}
