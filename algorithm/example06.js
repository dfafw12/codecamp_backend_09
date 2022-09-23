// function bigNum(str) {
//   let a = Number(str[0]);
//   for (let i = 0; i < str.length; i++) {
//     if (Number(str[i]) > a) {
//       a = Number(str[i]);
//     }
//   }
//   console.log(a);
//   return a;
// }

function bigNum(str) {
  const arr = str.split("");

  let a = Math.max(...arr);

  return a;
}

bigNum("12345");
bigNum("87135");

function grade(score) {
  if (score > 100 || score < 0) {
    return "잘못된 점수입니다.";
  }
  if (score <= 59) {
    return "F";
  }
  if (score <= 69) {
    return "D";
  }
  if (score <= 79) {
    return "C";
  }
  if (score <= 89) {
    return "B";
  }
  if (score >= 90) {
    return "A";
  }
}

grade(105); // "잘못된 점수입니다"
grade(-10); // "잘못된 점수입니다"
grade(97); // "A"
grade(86); // "B"
grade(75); // "C"
grade(66); // "D"
grade(52); // "F"

const myShopping = [
  { category: "과일", price: 12000 },
  { category: "의류", price: 10000 },
  { category: "의류", price: 20000 },
  { category: "장난감", price: 9000 },
  { category: "과일", price: 5000 },
  { category: "의류", price: 10000 },
  { category: "과일", price: 8000 },
  { category: "의류", price: 7000 },
  { category: "장난감", price: 5000 },
  { category: "의류", price: 10000 },
];

function grade(list) {
  let count = 0;
  let amount = 0;
  let gr = "";

  for (let i = 0; i < list.length; i++) {
    if (list[i].category === "의류") {
      count++;
      amount += list[i].price;
    }
  }

  if (count >= 5) {
    gr = "Gold";
  } else if (count >= 3) {
    gr = "Silver";
  } else {
    ("Bronze");
  }

  return `의류를 구매한 횟수는 총 ${count}회 금액은 ${amount}원이며 등급은 ${gr}입니다.`;
}

grade(myShopping);
