import { CreateStoreDto } from "src/dtos/request/CreateStoreDto";
import { UserLoggedDto } from "./CreateStore";
import { Store } from "src/models/Store";


export const int = Symbol("CreateStoreInterface")
export interface CreateStoreInterface {
    create: (store: CreateStoreDto, userSigned: UserLoggedDto) => Promise<Store>;
}