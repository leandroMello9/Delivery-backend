import { Module } from '@nestjs/common';
import { AuthenticatorUser } from 'src/useCases/Authenticate/AuthenticateUser';
import { AuthController } from 'src/auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { authConfig } from 'src/config/auth.config';
import HashPassword from 'src/providers/HashPassword';
import UserRepository  from 'src/repository/User/UserRepository';
import UserRepositoryInterface  from 'src/repository/User/UserRepositoryInterface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/User';

@Module({
  imports: [
    JwtModule.register(authConfig),
    TypeOrmModule.forFeature([User])
],
  controllers: [AuthController],
  providers: [HashPassword,
    {
    useClass: UserRepository,
    provide: UserRepositoryInterface
  },
  UserRepository,
  AuthenticatorUser
],
  exports: [],
})

export class AuthModule {}