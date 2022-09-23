// function solution(s){

//     const obj = {p:0,y:0}
//   s= s.toLowerCase();

// for(let i =0; i<s.length; i++){
//   obj[s[i]]++

// }
//   console.log(obj)

//   return obj.p === obj.y
// }

function solution(s) {
  const obj = { p: 0, y: 0 };
  s = s.toLowerCase();

  s.split("").forEach((str) => {
    obj[str] === undefined ? (obj[str] = 1) : obj[str]++;
  });
}

solution("pPoooyY");
solution("Pyy");
