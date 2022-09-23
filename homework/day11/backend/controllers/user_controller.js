import { User } from "../models/userSchema.js";
import { UserService } from "./services/user.js";
import { EmailService } from "./services/email.js";
import { Token } from "../models/tokenSchema.js";

const userService = new UserService();
const emailService = new EmailService();

export class UserController {
  userList = async (req, res) => {
    const result = await User.find();

    res.send(result);
  };

  signUp = async (req, res) => {
    let personal = req.body.personal;

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      pwd: req.body.pwd,
      personal: personal,
      phone: req.body.phone,
      prefer: req.body.prefer,
      og: {
        title: "",
        description: "",
        image: "",
      },
    });

    const checkForm = await userService.checkMark(personal);
    const checkNum = await userService.checkNumber(personal);
    const name = user.name;
    const email = user.email;
    const phone = user.phone;
    const prefer = user.prefer;

    const myTemplate = emailService.getWelcomeTemplate({
      name,
      email,
      phone,
      prefer,
    });

    const og = await userService.createOg(user.prefer);
    // console.log(og.title);
    const token = new Token();

    let tokenData = await Token.findOne({ phone: user.phone });
    console.log(personal);
    if (tokenData === null || tokenData.isAuth === false) {
      res.status(422).json({
        message: "에러!! 핸드폰 인증이 완료되지 않았습니다.",
      });
    } else if (tokenData.isAuth === true) {
      if (checkForm === false || checkNum === false) {
        res.status(422).json({
          message: "에러! 주민번호가 형식(갯수) 이 다릅니다.",
        });
      } else {
        user.og = { ...og };
        res.status(200).json({
          message: user.id,
        });
        user.save();
        emailService.sendEmail(email, myTemplate);
      }
    }
  };
}
