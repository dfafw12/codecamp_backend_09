// function solution(a, b) {
//   const month = {
//     1: 31,
//     2: 29,
//     3: 31,
//     4: 30,
//     5: 31,
//     6: 30,
//     7: 31,
//     8: 31,
//     9: 30,
//     10: 31,
//     11: 30,
//     12: 31,
//   };
//   const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

//   let answer = 0;
//   let count = 0;
//   const arr = ["금", "토", "일", "월", "화", "수", "목"];
//   for (let i = 1; i < a; i++) {
//     answer += month[i];
//   }
//   answer += b - 1;
//   answer = week[answer % 7];
//   console.log(answer);

//   return answer;
// }

function solution(a, b) {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date(`2016-${a}-${b}`);
  return week[date.getDay()];
}

console.log(solution(2, 1));
