import { ConflictException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UserService } from '../user.service';

//나만의 미니 TypeOrm 만들기
class MockUsersRepository {
  mydb = [
    { email: 'qwe123@qwe123.com', password: '0000', name: '짱구', age: 8 },
    { email: 'qwe@qwe.com', password: '0000', name: '징징이', age: 13 },
  ];

  findOne({ where }) {
    const users = this.mydb.filter((el) => {
      el.email === where.email;
    });
    if (users.length) {
      return users[0];
    }
    return undefined;
  }

  save({ email, password, name, age }) {
    this.mydb.push({ email, password, name, age });
    return { email, password, name, age };
  }
}

describe('UserService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const usesModule = await Test.createTestingModule({
      //   imports: [TypeOrmModule],
      //   controllers: [],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: MockUsersRepository,
        },
      ],
    }).compile();

    userService = usesModule.get<UserService>(UserService);
  });
  describe('findOne', () => {
    // const result = userService.findOne({ email: email });
    // expect(result).toBe('결과');
  });

  describe('create', () => {
    it('이미 존재하는 이메일 검증하기', async () => {
      const myData = {
        email: 'qwe1234@qwe123.com',
        hashedPassword: 'qwe123',
        name: '철수',
        age: 13,
      };
      try {
        await userService.create({ ...myData });
      } catch (error) {
        expect(error).toBeInstanceOf(ConflictException);
      }
    });

    it('회원등록 잘 됐는지 검증', async () => {
      const myData = {
        email: 'asd123@asd123.com',
        hashedPassword: '1234',
        name: '철수',
        age: 13,
      };

      const result = await userService.create({ ...myData });

      expect(result).toStrictEqual({
        email: 'asd123@asd123.com',
        password: '1234',
        name: '철수',
        age: 13,
      });
    });
  });
});
