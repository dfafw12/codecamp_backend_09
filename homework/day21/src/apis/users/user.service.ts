import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create({ createUserInput, hashedPassword: password }) {
    const { ...user } = createUserInput;
    const userEmail = createUserInput.email;
    const prevUser = await this.userRepository.findOne({
      where: { email: userEmail },
    });

    if (prevUser) {
      throw new ConflictException("이미 가입한 회원입니다.");
    }

    return await this.userRepository.save({
      ...user,
      password,
    });
  }

  async findOne({ userEmail }) {
    console.log("111111", userEmail);
    // console.log(userEmail, ": userEmail");
    const result = await this.userRepository.findOne({
      where: { email: userEmail },
    });
    console.log(result, ": result");
    return result;
  }

  findAll() {
    return this.userRepository.find();
  }

  async delete({ userEmail }) {
    const result = await this.userRepository.softDelete({
      email: userEmail,
    });
    console.log(result, ": delete result");
    return result.affected ? true : false;
  }

  async updatePassword({ updateUserInput, userEmail, password }) {
    const updateUser = await this.userRepository.findOne({
      where: { email: userEmail },
    });

    const result = await this.userRepository.save({
      ...updateUser,
      ...updateUserInput,
      password,
    });
    return result;
  }
}
