import {CreateDeliveryDTO} from "src/dtos/request/CreateDeliveryDto";
import { UserLoggedDto } from "../Store/CreateStore";
import { Delivery } from "src/models/Delivery";


export const int = Symbol("CreateDeliveryInterface")
export interface CreateDeliveryInterface {
    createDelivery: (delivery: CreateDeliveryDTO, userSigned: UserLoggedDto) => Promise<Delivery>;
}