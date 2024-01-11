import { AuthenticatorUser } from "./useCases/Authenticate/AuthenticateUser";
import CreateUserDto from "./dtos/request/CreateUserDto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthenticatorUser);
    auth(usr: CreateUserDto): Promise<any>;
}
