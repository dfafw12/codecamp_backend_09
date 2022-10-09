import {
  HttpException,
  Injectable,
  UnprocessableEntityException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import axios from "axios";
import "dotenv/config";
import { Repository } from "typeorm";
import {
  MovieUser,
  MOVIE_USER_ISPAYMENT_ENUM,
} from "../movieUser/entities/movieUser.entity";
import { User } from "../users/entities/user.entity";

@Injectable()
export class IamportService {
  constructor(
    @InjectRepository(MovieUser)
    private readonly movieUserRepository: Repository<MovieUser>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async getAccessToken() {
    const result = await axios({
      url: "https://api.iamport.kr/users/getToken",
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: {
        imp_key: process.env.IAMPORT_API_KEY,
        imp_secret: process.env.IAMPORT_API_SECRET,
      },
    });

    return result.data.response.access_token;
  }

  async paymentInfo({ impUid, amount, token }) {
    try {
      const getPaymentInfo: any = await axios({
        url: `https://api.iamport.kr/payments/${impUid}`, // imp_uid 전달
        method: "get", // GET method
        headers: { Authorization: token }, // 인증 토큰 Authorization header에 추가
      });
      if (getPaymentInfo.data.response.status !== "paid") {
        throw new UnprocessableEntityException("결제 ㄴㄴ");
      }
      if (getPaymentInfo.data.response.amount !== amount) {
        throw new UnprocessableEntityException(" 금액 일치 ㄴㄴ");
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        throw new HttpException(
          error.response.data.message,
          error.response.status
        );
      } else {
        throw error;
      }
    }
  }

  async cancelPayment({ impUid, amount, token }) {
    try {
      const getCancelInfo = await axios({
        url: "https://api.iamport.kr/payments/cancel/",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        data: {
          imp_uid: impUid, // imp_uid를 환불 `unique key`로 입력
          amount, // 가맹점 클라이언트로부터 받은 환불금액
        },
      });
      // impUid = getCancelInfo.data.response.imp_uid
      console.log(getCancelInfo, ": getCanceInfo");
      console.log(getCancelInfo.data.response.amount, ": getCancelInfo amount");
      console.log(
        getCancelInfo.data.response.imp_uid,
        ": getCancelInfo impUid"
      );
      return getCancelInfo;
    } catch (error) {
      throw new HttpException(
        error.response.data.message,
        error.response.status
      );
    }
  }
}
