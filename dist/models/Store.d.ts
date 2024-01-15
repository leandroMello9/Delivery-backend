import { User } from './User';
import { Product } from './Product';
export declare class Store {
    store_id: string;
    provider_id: string;
    provider: User;
    store_name: string;
    store_isOpen: boolean;
    store_isActivit: boolean;
    product_list: Product[];
    created_at: Date;
    updated_at: Date;
}
