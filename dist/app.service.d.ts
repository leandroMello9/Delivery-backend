import UserRepo from './repository/User/UserRepository';
export declare class AppService {
    private userRepository;
    constructor(userRepository: UserRepo);
    getHello(): string;
}
