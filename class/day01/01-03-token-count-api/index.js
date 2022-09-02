// function getToken(a) {
//   if (a === undefined) {
//     console.log("에러 발생 갯수를 제대로 입력하세요.");
//     return;
//   }
//   if (a < 2) {
//     console.log("에러 발생 갯수가 너무 적습니다.");
//     return;
//   }
//   if (a >= 10) {
//     console.log("에러발생 갯수가 너무 많습니다.");
//     return;
//   }
//   const result = String(Math.floor(Math.random() * 10 ** a)).padStart(a, "0");
//   console.log(result);
// }
// getToken(4);

function createTokenOfPhone(myPhone) {
  // 1. 휴대폰 번호 자릿수 체크
  if (myPhone.length >= 10 || myPhone.length !== 11) {
    console.log("에러발생. 핸드폰 번호를 확인후 다시 입력하세요.");
    return;
  }
  // 2. 핸드폰 토큰 6자리 만들기
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
  console.log(result);
  // 3. 핸드폰번호에 토큰 전송하기.
  console.log(myPhone + "번호로 인증번호" + result + "를 전송합니다.");
}

createTokenOfPhone("01012345678");
