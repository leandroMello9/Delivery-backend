import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/User';
import HashPassword from 'src/providers/HashPassword';
import UserRepository from 'src/repository/User/UserRepository';
import UserRepositoryInterface from 'src/repository/User/UserRepositoryInterface';
import CreateUserService from 'src/useCases/CreateUser/CreateUserImplement';
import { UserController } from 'src/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [HashPassword, {
    useClass: UserRepository,
    provide: UserRepositoryInterface
  }, UserRepository, CreateUserService],
  exports: [CreateUserService],
})

export class UsersModule {}