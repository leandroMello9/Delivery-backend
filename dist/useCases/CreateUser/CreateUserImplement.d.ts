import CreateUserInterface from './CreateUserInterface';
import UserDto from 'src/dtos/response/UserDto';
import CreateUserDto from 'src/dtos/request/CreateUserDto';
import HashPassword from 'src/providers/HashPassword';
import UserRepositoryInterface from 'src/repository/UserRepositoryInterface';
export default class CreateUserService implements CreateUserInterface {
    private userRepostory;
    private hashPassword;
    constructor(userRepostory: UserRepositoryInterface, hashPassword: HashPassword);
    execute({ user_email, user_password }: CreateUserDto): Promise<UserDto>;
}
