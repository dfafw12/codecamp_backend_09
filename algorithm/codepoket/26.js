// function solution(absolutes, signs) {
//   let result = 0;
//   for (let i = 0; i < signs.length; i++) {
//     if (signs[i] === false) {
//       absolutes[i] *= -1;
//     }
//     result += absolutes[i];
//   }
//   return result;
// }

// function solution(absolutes, signs) {
//   let answer = 0;
//   for (let i = 0; absolutes.length; i++) {
//     answer += signs[i] ? absolutes[i] : -absolutes[i];
//   }
//   return answer;
// }

function solution(absolutes, signs) {
  const answer = absolutes.reduce((acc, cur, i) => {
    return acc + (signs[i] ? cur : -cur);
  }, 0);

  return answer;
}

solution([4, 7, 2], [true, false, true]);
