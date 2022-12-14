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

  async create({ createUserInput }) {
    const { ...user } = createUserInput;
    const userEmail = createUserInput.email;
    const prevUser = await this.userRepository.findOne({
      where: { email: userEmail },
    });

    if (prevUser) {
      throw new ConflictException("이미 가입한 회원입니다.");
    }

    return await this.userRepository.save({ ...user });
  }

  async findOne({ userEmail }) {
    return await this.userRepository.findOne({
      where: { email: userEmail },
    });
  }

  findAll() {
    console.log("@@@@@@@");
    return this.userRepository.find();
  }

  async delete({ userEmail }) {
    const result = await this.userRepository.softDelete({
      email: userEmail,
    });
    return result.affected ? true : false;
  }

  async update({ userEmail, updateUserInput }) {
    const updateUser = await this.userRepository.findOne({
      where: { email: userEmail },
    });
    const result = this.userRepository.save({
      ...updateUser,
      email: userEmail,
      ...updateUserInput,
    });
    return result;
  }
}
