import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // async create({ email, hashedPassword, name, age }) {
  async create({ email, hashedPassword: password, name, age }) {
    const user = await this.userRepository.findOne({ where: { email: email } });
    if (user) throw new ConflictException('이미 등록된 이메일 입니다.');

    return await this.userRepository.save({
      email,
      password,
      // password: hashedPassword,
      name,
      age,
    });
  }
}
