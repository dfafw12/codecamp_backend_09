import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create({ createUserInput, hashedPassword: password }: {
        createUserInput: any;
        hashedPassword: any;
    }): Promise<any>;
    findOne({ userEmail }: {
        userEmail: any;
    }): Promise<User>;
    findAll(): Promise<User[]>;
    delete({ userEmail }: {
        userEmail: any;
    }): Promise<boolean>;
    updatePassword({ updateUserInput, userEmail, password }: {
        updateUserInput: any;
        userEmail: any;
        password: any;
    }): Promise<any>;
}
