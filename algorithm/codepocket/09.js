// function solution(n) {
//     let answer = 0;
// 		n = String(n)

//   for(let i = 0; i< n.length; i++){
//       answer += Number(n[i])
//   }
//   console.log(answer)
//     return answer;
// }

function solution(n) {
  const answer = String(n)
    .split("")
    .reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0);
  return answer;
}

n = 123;

solution(n);
