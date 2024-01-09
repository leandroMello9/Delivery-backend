import CreateUserDto from './dtos/request/CreateUserDto';
import CreateUserService from './useCases/CreateUser/CreateUserImplement';
import UserDto from './dtos/response/UserDto';
export declare class UserController {
    private userService;
    constructor(userService: CreateUserService);
    getHello(): string;
    create(user: CreateUserDto): Promise<UserDto>;
}
