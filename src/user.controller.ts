import { Body, Controller, Get, Inject, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import CreateUserDto from './dtos/request/CreateUserDto';
import { User } from './models/User';
import CreateUserService  from './useCases/CreateUser/CreateUserImplement';
import UserDto from './dtos/response/UserDto';

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
  async create(@Body() user: CreateUserDto ): Promise<UserDto> {
     return await this.userService.execute({
      user_email: user.user_email,
      user_password: user.user_password
     });
  }
}
