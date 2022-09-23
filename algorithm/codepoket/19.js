// function solution(num) {
//   let answer = 0;
//   for (let i = 1; i <= 500; i++) {
//     if (num % 2 == 0) {
//       num = num / 2;
//     } else {
//       num = num * 3 + 1;
//     }
//     if (num === 1) {
//       return i;
//     }
//   }
//   return -1;
// }

function solution(num) {
  let answer = 0;

  const result = new Array(500).fill(1).forEach((el) => {
    if (num !== 1) {
      // console.log(num)
      answer++;
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    }
  });
  return num !== 1 ? -1 : answer;
}

solution(626331);
// 이런 코드의 경우 가독성은 메소드를 사용하는편이 좋지만 값을 가져오는
// 것은 일반 for문이 더 효율이 좋다.
