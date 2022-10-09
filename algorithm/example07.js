// function solution(s, n) {
//   const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const lower = "abcdefghijklmnopqrstuvwxyz";

//   let answer = "";

//   for(let i = 0 ; i <s.length; i++){

//     if(s[i] === ""){
//       answer += s[i]
//     }else{
//       const word = lower.includes(s[i]) ? lower : upper
//       let idx = word.indexOf(s[i])+n
//       if(idx>=26){
//         idx -=26
//       }
//       answer += word[idx]
//     }
//   }
// }

// function solution(s, n) {
//   const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const lower = "abcdefghijklmnopqrstuvwxyz";
//   const answer = s.split("").reduce((acc, cur) => {
//     const word = lower.includes(cur) ? lower : upper;
//     let idx = word.indexOf(cur) + n;

//     if (idx >= 26) idx -= 26;
//     return acc + (cur === " " ? "" : word[idx]);
//   }, "");

//   return answer;
// }

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    //
    if (s[i] === " ") {
      answer += " ";
    } else {
      let idx = s[i].charCodeAt() + n;
      if (idx > 122 || (idx > 90 && idx - n < 97)) {
        idx -= 26;
      }
      answer += String.fromCharCode(idx);
    }
  }
  return answer;
}

solution("a", 1);
