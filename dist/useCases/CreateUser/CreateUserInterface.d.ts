import CreateUserDto from "src/dtos/request/CreateUserDto";
import UserDto from "src/dtos/response/UserDto";
export default interface CreateUserInterface {
    execute: (createUser: CreateUserDto) => Promise<UserDto>;
}
