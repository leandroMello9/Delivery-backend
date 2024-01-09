import UserRepo from './repository/UserRepository';
export declare class AppService {
    private userRepository;
    constructor(userRepository: UserRepo);
    getHello(): string;
}
