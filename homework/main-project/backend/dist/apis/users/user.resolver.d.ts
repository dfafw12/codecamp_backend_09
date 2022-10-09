import { CreateUserInput } from "./dto/createUser.input";
import { UpdateUserInput } from "./dto/updateUser.input";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserInput: CreateUserInput): Promise<any>;
    updateUserPwd(context: any, updateUserInput: UpdateUserInput): Promise<any>;
    deleteLoginUser(context: any): Promise<boolean>;
    fetchUsers(): Promise<User[]>;
    fetchLoginUser(context: any): Promise<User>;
}
