// 잘못된 괄호 체크

// function solution(s) {
//   if (s[0] === ")" || s[s.length - 1] === "(") return false;

//   let depth = 0;

//   for (let str of s) {
//     if (str === "(") depth++;
//     else if (str === ")") depth--;

//     if (depth < 0) return false;
//   }

//   return depth === 0;
// }

function solution(s) {
  if (s[0] === ")" || s[s.length - 1] === "(") return false;

  let fail = false;
  const answer = s.split("").reduce((acc, cur) => {
    console.log(acc, cur);
    if (acc < 0) {
      fail = true;
    }
    return acc + (cur === "(" ? 1 : -1);
  }, 0);

  return answer === 0 && fail === false;
}

solution("()()");
solution(")()(");
