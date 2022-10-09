function solution(s) {
  let answer = "";
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
  }

  arr.sort((a, b) => {
    return a > b ? -1 : 1;
  });

  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer;
}

function solution(s) {
  const arr = s.split("");
  arr.sort((a, b) => {
    return a > b ? -1 : 1;
  });
  const answer = arr.join("");
  return answer;
}

solution("Zbcdefg");
