import { Request, Response } from 'express';
import { CreateStoreDto } from './dtos/request/CreateStoreDto';
import { CreateStoreInterface } from './useCases/Store/CreateStoreInterface';
export declare class StoreController {
    private readonly createStore;
    constructor(createStore: CreateStoreInterface);
    getHello(): string;
    create(store: CreateStoreDto, request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
