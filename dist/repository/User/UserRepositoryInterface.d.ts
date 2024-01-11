import CreateUserDto from "src/dtos/request/CreateUserDto";
import { User } from "src/models/User";
export default abstract class UserRepositoryInterface {
    abstract create: ({ user_email, user_password }: CreateUserDto) => Promise<User>;
    abstract findOneUserByUserEmail: (user_email: string) => Promise<User | null>;
}
