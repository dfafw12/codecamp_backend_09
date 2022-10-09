// function solution(n) {
//     let answer = -1;

//   for(let i=1; i*i<=n; i++){
//     if( i*i === n){

//       return (i+1)**2
//     }
//   }
//   return answer
// }

function solution(n) {
  let sqrt = Math.sqrt(n);

  if (Number.isInteger(sqrt)) {
    // return (sqrt+1)**2
    return Math.pow(sqrt + 1, 2); // (무엇을,얼마나제곱할것인지)
  } else {
    return -1;
  }
}
solution(121);
