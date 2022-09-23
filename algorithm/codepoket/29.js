// function solution(n, m) {
// let a = m
// let b = n
// let r = 0;

//   while((a % b) > 0){
//     r = a % b
//     a=b
//     b=r

//   }
//   // 최소 공배수는 두수를 곱한 수에 최대 공약수를 나줘준 몫의 값
//   return [b,(n*m)/b]
// }

function solution(n, m) {
  let a = m;
  let b = n;
  let r = 0;

  while (a % b > 0) {
    r = a % b;
    a = b;
    b = r;
  }
  // 최소 공배수는 두수를 곱한 수에 최대 공약수를 나줘준 몫의 값
  return [b, (n * m) / b];
}

solution(5, 10);
