import { Delivery } from "src/models/Delivery";
import { CreateDeliveryInterface } from "./CreateDeliveryInterface";
import {CreateDeliveryDTO} from "src/dtos/request/CreateDeliveryDto";
import { UserLoggedDto } from "../Store/CreateStore";
import { Repository } from "typeorm";
import { Store } from "src/models/Store";
import { InjectRepository } from "@nestjs/typeorm";


export class CreateDelivery implements CreateDeliveryInterface {

    constructor(
        @InjectRepository(Store)
        private storeRepository: Repository<Store>,
        @InjectRepository(Delivery)
        private deliveryRepository: Repository<Delivery>
    ) {}

    async createDelivery(delivery: CreateDeliveryDTO, userLogged: UserLoggedDto): Promise<Delivery> {
        // Verificar se usuário for um prestador de serviço, caso for ele não pode realizar um pedido.
        // Verificar se Loja esta aberta e ativa no momento, caso não, não podera realizar um pedido.
        if(!userLogged.is_provider) {
            //Verificar se Loja esta aberta e ativa no momento, caso não, não podera realizar um pedido.
            const findStore = await this.storeRepository.findOne({
                where: {
                    store_id: delivery.delivery_store
                }
            })

            if(findStore && findStore.store_isActivit && findStore.store_isOpen) {
                //Criando uma pedido
                const createDelivery = await this.deliveryRepository.create({
                    delivery_client: userLogged.sub,
                    delivery_status: 0,
                    delivery_store: delivery.delivery_store,
                    product_delivery: delivery.delivery_products

                })
                return await this.deliveryRepository.save(createDelivery);
            }

            throw new Error("Verifique se a loja esta aberta, ou esta ativa!")
        }
        throw new Error("Prestadores de serviço não podem fazer um pedido, logue com uma conta comum!")
    }
}