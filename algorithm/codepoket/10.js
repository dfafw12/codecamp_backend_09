// function solution(x, n) {
//     const answer = []
//     for(let i = 1; i <=n; i++ ){
//         answer.push( i * x)
//     }
//     console.log(answer)
// return answer
// }

function solution(x, n) {
  const answer = new Array(n).fill(1).map((num, idx) => {
    return (idx + 1) * x;
  });
  return answer;
}

solution(2, 5);
