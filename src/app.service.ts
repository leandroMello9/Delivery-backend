import { Injectable } from '@nestjs/common';
import UserRepo from './repository/UserRepository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(

    @InjectRepository(UserRepo)
    private userRepository: UserRepo
  ) {
  }

  getHello(): string {
    return 'Hello World!';
  }
}
