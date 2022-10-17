// 최소값, 최대값 구하기

function solution(s) {
  s = s.split(" ");

  return Math.min(...s) + " " + Math.max(...s);
}

solution("1 2 3 4");
solution("-1 -2 -3 -4");
