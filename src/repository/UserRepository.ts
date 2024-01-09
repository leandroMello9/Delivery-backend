import { Injectable } from "@nestjs/common";
import UserRepositoryInterface from "./UserRepositoryInterface";
import CreateUserDto from "src/dtos/request/CreateUserDto";
import { User } from "src/models/User";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export default class CreateUser implements UserRepositoryInterface {

    constructor(

        @InjectRepository(User)
        private userRepository: Repository<User>,

        private dataSource: DataSource
    ) {}
    async create ({ user_email, user_password }: CreateUserDto): Promise<User> {

        const usr: User = this.userRepository.create({
            user_email,
            user_password,
            is_active: true
        })

        return await this.userRepository.save(usr);
    }

    async findOneUser(user_id: string): Promise<User> {
        return;
    };
}