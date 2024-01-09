import UserRepositoryInterface from "./UserRepositoryInterface";
import CreateUserDto from "src/dtos/request/CreateUserDto";
import { User } from "src/models/User";
import { DataSource, Repository } from "typeorm";
export default class CreateUser implements UserRepositoryInterface {
    private userRepository;
    private dataSource;
    constructor(userRepository: Repository<User>, dataSource: DataSource);
    create({ user_email, user_password }: CreateUserDto): Promise<User>;
    findOneUser(user_id: string): Promise<User>;
}
