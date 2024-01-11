import { JwtService } from "@nestjs/jwt";
import HashPassword from "src/providers/HashPassword";
import UserRepositoryInterface from "src/repository/User/UserRepositoryInterface";
export declare class AuthenticatorUser {
    private userRepository;
    private hashProvider;
    private jwtService;
    constructor(userRepository: UserRepositoryInterface, hashProvider: HashPassword, jwtService: JwtService);
    auth(user_email: string, pass: string): Promise<any>;
}
