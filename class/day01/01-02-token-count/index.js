// console.log("안녕하세요");

// function getToken() {
//   const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
//   console.log(result);
// }

// function getToken(a) {
//   const result = String(Math.floor(Math.random() * 10 ** a)).padStart(a, "0");
//   console.log(result);
// }

// else if 는 잘 사용 하는지?
// function getToken(a) {
//   if (a === undefined) {
//     console.log("갯수를 제대로 입력해주세요.");
//     return;
//   } else if (a < 2) {
//     console.log("갯수가 너무 적습니다.");
//     return;
//   } else if (a >= 10) {
//     console.log("갯수가 너무 많습니다.");
//     return;
//   } else {
//     const result = String(Math.floor(Math.random() * 10 ** a)).padStart(a, "0");
//     console.log(result);
//   }
// }

function getToken(a) {
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
}
getToken(4);
