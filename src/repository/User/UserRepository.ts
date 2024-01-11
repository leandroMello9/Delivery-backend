import { Injectable } from "@nestjs/common";
import CreateUserDto from "src/dtos/request/CreateUserDto";
import { User } from "src/models/User";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import UserRepositoryInterface  from "./UserRepositoryInterface";


@Injectable()
export default class CreateUser implements UserRepositoryInterface {

    constructor(

        @InjectRepository(User)
        private userRepository: Repository<User>,

    ) {}
    async create ({ user_email, user_password }: CreateUserDto): Promise<User> {

        const usr: User = this.userRepository.create({
            user_email,
            user_password,
            is_active: true
        })

        return await this.userRepository.save(usr);
    }

    async findOneUserByUserEmail(user_email: string): Promise<User> {

        const usr = await this.userRepository.findOne({
            where: {
                user_email
            }
        })
        return usr;
    };
}