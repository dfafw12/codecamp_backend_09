import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../users/user.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService, //
    private readonly userService: UserService
  ) {}

  getAccessToken({ user }) {
    return this.jwtService.sign(
      { email: user.email, sub: user.id }, //
      { secret: "myAccessKey", expiresIn: "1d" }
    );
  }

  setRefreshToken({ user, res }) {
    const refreshToken = this.jwtService.sign(
      { email: user.email, sub: user.id },
      { secret: "myRefreshKey", expiresIn: "2w" }
    );

    res.setHeader("Set-Cookie", `refreshToken=${refreshToken}; path=/;`);
  }

  async isUser({ res, req }) {
    let user = await this.userService.findOne({ userEmail: req.user.email });

    if (!user) {
      const changePwd = await bcrypt.hash(req.user.password, 10);
      user = await this.userService.create({
        createUserInput: req.user,
        hashedPassword: changePwd,
      });
    }
    this.setRefreshToken({ user, res });
    res.redirect(
      "http://localhost:5501/homework/main-project/frontend/login/index.html"
    );
  }
}
