import { Body, Controller, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import CreateUserDto from './dtos/request/CreateUserDto';
import CreateUserService  from './useCases/CreateUser/CreateUserImplement';
import { Response } from 'express';

@Controller('users')
export class UserController {
  constructor(
    
    private userService: CreateUserService
  ) {}

  @Post("/createUser")
  async create(@Body() user: CreateUserDto, @Res() response: Response ) {
      try {

        const userCreated = await this.userService.execute({
          user_email: user.user_email,
          user_password: user.user_password
         })
        return response.status(HttpStatus.CREATED).json(userCreated);
       
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
