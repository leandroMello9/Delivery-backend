import { Body, Controller, Post } from "@nestjs/common";
import { AuthenticatorUser } from "./useCases/Authenticate/AuthenticateUser";
import CreateUserDto from "./dtos/request/CreateUserDto";


@Controller()
export class AuthController {

    constructor(
        private authService: AuthenticatorUser
    ) {

    }

    @Post("/auth")
    async auth(@Body() usr: CreateUserDto) {

        return this.authService.auth(usr.user_email, usr.user_password);
    }
}