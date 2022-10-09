// 문자열 숫자로 변환

const num = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

// function solution(s) {

//     for(let i = 0; i<num.length; i++){
//       while(s.includes(num[i])){
//         s = s.replace(num[i],i)
//       }
//     }

//     return Number(s)
//   }

// function solution(s) {

//     for(let i = 0; i<num.length; i++){

//         s = s.replaceAll(num[i],i)
//      }
//     return Number(s)

//   }

// function solution(s) {
//   num.forEach((el, idx) => {
//     // console.log(el,idx)
//     s = s.split(el).join(idx);
//     console.log(s, el);
//   });
//   return Number(s);
// }

function solution(s) {
  for (let i = 0; i < num.length; i++) {
    const regExp = new RegExp(num[i], "g");
    s = s.replace(regExp, i);
    // console.log(s)
  }
  return Number(s);
}

solution("one4seveneight");
