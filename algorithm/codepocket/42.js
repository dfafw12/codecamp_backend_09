//신규 아이디 추천
// function solution(new_id) {
//   let str = new_id.toLowerCase();
//   let result = "";
//   const permission = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";
//   for (let i = 0; i < str.length; i++) {
//     if (permission.includes(str[i])) {
//       result += str[i];
//     }
//   }
//   while (result.includes("..")) {
//     result = result.replace("..", ".");
//   }

//   if (result[0] === ".") {
//     result = result.replace(".", "");
//   }

//   const removeDot = function () {
//     if (result[result.length - 1] === ".") {
//       result = result.slice(0, -1);
//     }
//   };
//   removeDot();

//   if (result === "") {
//     result = "a";
//   }

//   if (result.length >= 16) {
//     result = result.substring(0, 15);
//     removeDot();
//   }

//   if (result.length <= 2) {
//     console.log(result[result.length - 1]);
//     result = result.padEnd(3, result[result.length - 1]);
//   }
//   return result;
// }

function solution(new_id) {
  const permission = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";
  let str = new_id.toLowerCase().split("");

  let result = str.filter((obj) => permission.includes(obj));

  result = result.filter((str, i) => {
    return str != "." || (str === "." && result[i + 1] !== ".");
  });

  if (result[0] === ".") {
    result.splice(0, 1);
  }
  const removeDot = function () {
    if (result[result.length - 1] === ".") {
      result.splice(result.length - 1, 1);
    }
  };
  removeDot();
  console.log(result);
  if (result.length === 0) {
    result = ["a"];
  }

  if (result.length >= 16) {
    result.splice(15);
    removeDot();
  }

  if (result.length <= 2) {
    const add = new Array(3 - result.length).fill(result[result.length - 1]);
    result = result.concat(add);
  }

  return result.join("");
}

solution("...!@BaT#*..y.abcdefghijklm");
solution("z-+.^.");
solution("=.=");
