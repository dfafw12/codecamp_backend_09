// function solution(arr) {
//   const answer = [];
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//       console.log(min);
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== min) {
//       answer.push(arr[i]);
//     }
//   }
//   return answer.length === 0 ? [-1] : answer;
// }
//
//

// function solution(arr) {
//   const answer = [];
//   const min = Math.min(...arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (min !== arr[i]) {
//       answer.push(arr[i]);
//     }
//   }

//   return answer.length === 0 ? [-1] : answer;
// }

function solution(arr) {
  const min = Math.min(...arr);
  const answer = arr.filter((num) => {
    return num != min;
  });
  return answer.length === 0 ? [-1] : answer;
}

solution([4, 3, 2, 1]);
