import { Product } from "src/models/Product";
export interface CreateStoreDto {
    store_name: string;
    store_isOpen: boolean;
    store_isActivit: boolean;
    product_list: Product[];
}
