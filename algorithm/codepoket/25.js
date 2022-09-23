// function solution(arr1, arr2) {
//   const answer = [[]];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr1[i].length; j++) {
//       // console.log(arr1[i][j],arr2[i][j])
//       const data = arr1[i][j] + arr2[i][j];
//       if (answer[i] === undefined) {
//         answer[i] = [];
//       }
//       answer[i][j] = data;
//     }
//   }
//   console.log(answer);
// }

function solution(arr1, arr2) {
  const answer = arr1.map((numArr, i) => {
    return numArr.map((num, j) => {
      return num + arr2[i][j];
    });
  });
  console.log(answer);
}

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
);
