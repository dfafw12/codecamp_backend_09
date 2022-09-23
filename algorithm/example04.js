// 조건문

function evenOdd(num) {
  if (num === 0) {
    console.log("Zero");
  } else if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

function temperature(num) {
  if (num <= 18) {
    console.log("조금 춥네요");
  } else if (num >= 24) {
    console.log("조금 덥습니다.");
  } else {
    console.log("날씨가 좋네요.");
  }
}

const monthList = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

function day(month) {
  return monthList[month];
}
