import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import HashPassword from "src/providers/HashPassword";
import UserRepositoryInterface  from "src/repository/User/UserRepositoryInterface";



@Injectable()
export class AuthenticatorUser {
    constructor(
        private userRepository: UserRepositoryInterface,
        private hashProvider: HashPassword,
        private jwtService: JwtService
    ) {

    }
    async auth(user_email: string, pass: string): Promise<any> {
         const user = await this.userRepository.findOneUserByUserEmail(user_email);
         const comparePass = await this.hashProvider.compareHash(pass, user?.user_password);
         if (comparePass === false) {
           throw new UnauthorizedException();
         }
         const { user_password, ...result } = user;

         const payload = { sub: user.user_id, user_email: user.user_email };
          //TODO: Generate a JWT and return it here
          //instead of the user object
         return {
           access_token: await this.jwtService.signAsync(payload)
         };
      }
}