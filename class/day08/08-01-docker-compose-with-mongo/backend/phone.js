import "dotenv/config";
import coolsms from "coolsms-node-sdk";
const mysms = coolsms.default;

export default function qqq() {}

export function checkPhone(myPhone) {
  if (myPhone.length !== 10 && myPhone.length !== 11) {
    console.log("에러발생. 핸드폰 번호를 확인후 다시 입력하세요.");
    return false;
  } else {
    return true;
  }
}

export function getToken() {
  const a = 6;
  if (a === undefined) {
    console.log("에러 발생 갯수를 제대로 입력하세요.");
    return;
  }
  if (a < 2) {
    console.log("에러 발생 갯수가 너무 적습니다.");
    return;
  }
  if (a >= 10) {
    console.log("에러발생 갯수가 너무 많습니다.");
    return;
  }
  const result = String(Math.floor(Math.random() * 10 ** a)).padStart(a, "0");
  return result;
  // console.log(result);
}

export async function sendTokenToSMS(myPhone, result) {
  const AAA = process.env.SMS_KEY;
  const QQQ = process.env.SMS_SECRET;
  const ZZZ = process.env.SMS_SENDER;

  const messageService = new mysms(AAA, QQQ);

  const response = await messageService.sendOne({
    to: myPhone,
    from: ZZZ,
    text: `안녕 인증번호 [${result}]임`,
  });
  console.log(response);
}
