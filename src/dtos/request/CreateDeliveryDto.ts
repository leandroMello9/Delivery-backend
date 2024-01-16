
export interface ProductDelivery {
    procut_name: string;
    product_summary: string;

} 

export interface CreateDeliveryDTO {
    delivery_store: string,
    delivery_products: ProductDelivery[]
}

