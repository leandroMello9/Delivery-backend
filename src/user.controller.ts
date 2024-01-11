import { Body, Controller, Get, HttpException, HttpStatus, Inject, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import CreateUserDto from './dtos/request/CreateUserDto';
import { User } from './models/User';
import CreateUserService  from './useCases/CreateUser/CreateUserImplement';
import UserDto from './dtos/response/UserDto';
import { Response } from 'express';
import { AuthGuard } from './midlewares/auth';

@Controller('users')
export class UserController {
  constructor(
    
    private userService: CreateUserService
  ) {}

  @Get('/usersGet')
  getHello(): string {
    return "Hello World"
  }

  @Post("/createUser")
  async create(@Body() user: CreateUserDto, @Res() response: Response ) {
      try {
        return await this.userService.execute({
          user_email: user.user_email,
          user_password: user.user_password
         });
      }catch(error) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'User already exist, use a e-mail different!'
        }, HttpStatus.BAD_REQUEST, {
          cause: error
        })
      }
  }
}
