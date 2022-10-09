// 예산 나누기.

// function solution(d, budget) {
//   let count = 0;
//   d.sort((a, b) => a - b);
//   for (let i = 0; i < d.length; i++) {
//     if (budget >= d[i]) {
//       count++;
//       budget -= d[i];
//     }
//   }
//   return count;
// }

// function solution(d, budget) {
//   d.sort((a, b) => a - b);
//   let sum = 0;
//   let answer = 0;
//   for (let i = 0; i < d.length; i++) {
//     sum += d[i];
//     if (sum <= budget) {
//       answer++;
//     }
//   }
//   return answer;
// }

// function solution(d, budget) {
//   d.sort((a, b) => a - b);
//   let answer = 0;

//   while (budget - d[answer] >= 0) {
//     budget -= d[answer];
//     answer++;
//   }
//   console.log(answer);
// }

function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .filter((money) => {
      budget -= money;
      return budget >= 0;
    }).length;
}

console.log(solution([1, 3, 2, 5, 4], 9));
