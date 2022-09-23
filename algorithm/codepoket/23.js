// function solution(x) {
//     let answer = 0;
//   	x = String(x)

//   for(let i = 0; i<x.length; i++){
//     console.log(i,"i")
//     answer += Number(x[i])

//   }

//   const result = x % answer === 0

//     return result
// }

function solution(x) {
  const answer = x
    .toString()
    .split("")
    .reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0);

  return x % answer === 0;
}
solution(10);
