//1. shorthand-property

function qqq(aaa) {
  console.log(aaa);
  console.log(aaa.name);
  console.log(aaa.age);
  console.log(aaa.school);
}

const name = "철수";
const age = 12;
const school = "다람쥐초등학교";

// const profile = {
//   name: name,
//   age: age,
//   school: school,
// };

// 키와 값의 이름이 같다면 값을 생략 해도 된다. >> shorthand-property
const profile = {
  name,
  age,
  school,
};

// qqq({ name, age, school});
qqq(profile); // 위와 같음

//2. destructuring
function www(aaa) {
  console.log(aaa); // {apple: 3, banana:3} ==> const aaa =basket 과 같은얘t;
}

const basket = {
  apple: 3,
  banana: 10,
};

www(basket);
