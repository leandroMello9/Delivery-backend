import CreateUserDto from "src/dtos/request/CreateUserDto";
import { User } from "src/models/User";
import { Repository } from "typeorm";
import UserRepositoryInterface from "./UserRepositoryInterface";
export default class CreateUser implements UserRepositoryInterface {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create({ user_email, user_password }: CreateUserDto): Promise<User>;
    findOneUserByUserEmail(user_email: string): Promise<User>;
}
