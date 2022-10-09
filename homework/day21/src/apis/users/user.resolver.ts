import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserInput } from "./dto/createUser.input";
import { UpdateUserInput } from "./dto/updateUser.input";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";
import * as bcrypt from "bcrypt";
import { UseGuards } from "@nestjs/common";
import { GqlAuthAccessGuard } from "src/commons/auth/gql-auth.guard";

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(
    @Args({ name: "createUserInput", nullable: true }) //
    createUserInput: CreateUserInput
  ) {
    const hashedPassword = await bcrypt.hash(createUserInput.password, 10);

    return this.userService.create({ createUserInput, hashedPassword });
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => User)
  async updateUserPwd(
    @Context() context: any,
    @Args("updateUserInput") updateUserInput: UpdateUserInput
  ) {
    return await this.userService.updatePassword({
      updateUserInput,
      userEmail: context.req.user.email,
      password: await bcrypt.hash(updateUserInput.password, 10),
    });
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => Boolean)
  deleteLoginUser(@Context() context: any) {
    const userEmail = context.req.user.email;
    return this.userService.delete({ userEmail });
  }

  @Query(() => [User])
  fetchUsers() {
    return this.userService.findAll();
  }

  @UseGuards(GqlAuthAccessGuard)
  @Query(() => User)
  fetchLoginUser(@Context() context: any) {
    return this.userService.findOne({ userEmail: context.req.user.email });
  }
}
