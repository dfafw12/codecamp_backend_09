// function solution(seoul) {
//   for (let i = 0; i < seoul.length; ++i) {
//     if (seoul[i] === "Kim") {
//       return `김서방은 ${i}에 있다`;
//     }
//   }
// }
// >>
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}
console.log(solution(["Jane", "Moon", "Park", "Kim", "Gang"]));
