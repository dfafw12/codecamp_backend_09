// function solution(n) {
//   let answer = n;

//   for (let i = 1; i <= n / 2; i++) {
//     if (n % i === 0) {
//       answer += i;
//     }
//   }
//   return answer;
// }
// // 약수 구하기
// >>
function solution(n) {
  const answer = new Array(n).fill(1).reduce((acc, cur, idx) => {
    const num = cur + idx;
    return n % num === 0 ? acc + num : acc;
  });
  return answer;
}
