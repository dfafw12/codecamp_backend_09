// function solution(s) {
//   var answer = "";
//   let center = Math.round(s.length / 2);
//   if (s.length % 2 === 0) {
//     answer = s.substring(center + 1, center - 1);
//   } else {
//     answer = s.substring(center, center - 1);
//   }
//   return answer;
// }
// >>>
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
