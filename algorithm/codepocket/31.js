// function solution(answers) {
//   const data = [
//     [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
//     [2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5],
//     [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
//   ];

//   const count = [0, 0, 0];

//   for (let i = 0; i < answers.length; i++) {
//     for (let j = 0; j < data.length; j++) {
//       if (answers[i] === data[j][i % data[j].length]) {
//         count[j]++;
//       }
//     }
//   }
//   // console.log(count)
//   const biggest = Math.max(...count);
//   const result = [];

//   for (let i = 0; i < count.length; i++) {
//     if (biggest === count[i]) {
//       result.push(i + 1);
//     }
//   }
//   console.log(result);
//   return result;
// }

function solution(answers) {
  var answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == man1[i % man1.length]) count[0]++;
    if (answers[i] == man2[i % man2.length]) count[1]++;
    if (answers[i] == man3[i % man3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }

  return answer;
}

solution([1, 2, 3, 4, 5]);
