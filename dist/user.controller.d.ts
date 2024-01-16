import CreateUserDto from './dtos/request/CreateUserDto';
import CreateUserService from './useCases/CreateUser/CreateUserImplement';
import { Response } from 'express';
export declare class UserController {
    private userService;
    constructor(userService: CreateUserService);
    create(user: CreateUserDto, response: Response): Promise<Response<any, Record<string, any>>>;
}
