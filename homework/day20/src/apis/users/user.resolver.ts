import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserInput } from "./dto/createUser.input";
import { UpdateUserInput } from "./dto/updateUser.input";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(
    @Args({ name: "createUserInput", nullable: true }) //
    createUserInput: CreateUserInput
  ) {
    return this.userService.create({ createUserInput });
  }

  @Mutation(() => User)
  async updateUser(
    @Args("userEmail")
    userEmail: string,
    @Args("updateUserInput")
    updateUserInput: UpdateUserInput
  ) {
    return await this.userService.update({ userEmail, updateUserInput });
  }

  @Mutation(() => Boolean)
  deleteUser(@Args("userEmail") userEmail: string) {
    return this.userService.delete({ userEmail });
  }

  @Query(() => [User])
  fetchUsers() {
    return this.userService.findAll();
  }
  @Query(() => User)
  fetchUser(
    @Args("userEmail")
    userEmail: string
  ) {
    return this.userService.findOne({ userEmail });
  }
}
