// 3진법으로 만들어서 뒤집고 10진법으로 표현

// function solution(n) {
//   n = n.toString(3);
//   let reverse = "";
//   for (let i = n.length - 1; i >= 0; i--) {
//     reverse += n[i];
//   }
//   return parseInt(reverse, 3);
// }

function solution(n) {
  n = n.toString(3).split("").reverse().join("");

  return parseInt(n, 3);
}

solution(45);
