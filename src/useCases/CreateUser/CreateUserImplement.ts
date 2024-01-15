import { Inject, Injectable } from '@nestjs/common';
import CreateUserInterface from './CreateUserInterface';
import UserDto from 'src/dtos/response/UserDto';
import CreateUserDto from 'src/dtos/request/CreateUserDto';
import CreateUser  from 'src/repository/User/UserRepository';
import HashPassword from 'src/providers/HashPassword';
import UserRepositoryInterface  from 'src/repository/User/UserRepositoryInterface';

@Injectable()
export default class CreateUserService implements CreateUserInterface {

  constructor(
    private userRepostory: UserRepositoryInterface,
    
    private hashPassword: HashPassword
  ) {

  }
  async execute({
    user_email,
    user_password
  }: CreateUserDto): Promise<UserDto> {

    const hash = await this.hashPassword.generateHash(user_password);



     const usr = await this.userRepostory.create({
       user_email,
      user_password: hash
     });

     const userReturned: UserDto = {
       user_id: usr.user_id,
       user_email: usr.user_email,
       is_active: true,
       is_provider: usr.is_provider,

     }
     return userReturned;

  }
}
