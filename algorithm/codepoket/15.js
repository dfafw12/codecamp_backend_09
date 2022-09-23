// function solution(n) {
//   const answer = [];
//   n = n.toString();

//   for (let i = n.length - 1; i >= 0; i--) {
//     answer.push(Number(n[i]));
//   }
//   return answer;
// }

function solution(n) {
  const answer = String(n)
    .split("")
    .reverse()
    .map((num) => {
      return Number(num);
    });
  console.log(answer);
  return answer;
}

solution(12345);
