import { Body, Controller, Injectable, Post, Res } from "@nestjs/common";
import { AuthenticatorUser } from "./useCases/Authenticate/AuthenticateUser";
import { Response } from "express";
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