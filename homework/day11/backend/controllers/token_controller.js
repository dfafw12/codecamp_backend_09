import { Token } from "../models/tokenSchema.js";
import { PhoneService } from "./services/phone.js";

const phoneService = new PhoneService();

export class TokenController {
  sendToken = async (req, res) => {
    //  휴대폰 번호 자릿수 체크
    console.log(req.body);
    const phone = req.body.phone;

    //  핸드폰 토큰 6자리 만들기
    const myToken = phoneService.getToken(); // 111111

    const phoneToken = new Token({
      token: myToken,
      phone: req.body.phone,
      isAuth: false,
    });
    console.log(phoneToken.phone, ": phoneToken");

    const isValid = phoneService.checkPhone(phone);
    if (isValid === false) {
      return;
    }

    let data = await Token.findOne({ phone });

    const phone1 = phone.substring(0, 3);
    const phone2 = phone.substring(3, 7);
    const phone3 = phone.substring(7);

    if (data === null) {
      phoneToken.save();
      //  핸드폰번호에 토큰 전송하기.
      // sendTokenToSMS(phone, myToken);
      res.send(
        `${phone1}-${phone2}-${phone3}으로 인증 문자가 전송되었습니다1.`
      );
    } else if (data.phone != phone) {
      res.send(
        `${phone1}-${phone2}-${phone3}으로 인증 문자가 전송되었습니다2.`
      );
      //  핸드폰번호에 토큰 전송하기.
      // sendTokenToSMS(phone, myToken);
      phoneToken.save();
    } else {
      //  핸드폰번호에 토큰 전송하기.
      // sendTokenToSMS(phone, myToken);
      await Token.updateOne(
        { phone: phone },
        { token: myToken, isAuth: false }
      );
      res.send(
        `${phone1}-${phone2}-${phone3}으로 인증 문자가 전송되었습니다3.`
      );
    }
  };

  checkToken = async (req, res) => {
    const phone = req.body.phone;
    const token = req.body.token;

    let data = await Token.findOne({ phone: phone });

    if (data == null) {
      res.send(false);
    } else if (data.phone == phone && data.token == token) {
      console.log("인증완료!");
      await Token.updateOne({ phone: phone }, { isAuth: true });
      res.send(true);
    } else {
      res.send(false);
    }
  };
}
