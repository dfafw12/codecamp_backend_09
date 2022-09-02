const apple = 3;
const banana = 2;

console.log(
  "철수는 사과를 " + apple + "개, 바나나를 " + banana + " 개 가지고 있습니다."
);
console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana} 개 가지고 있습니다.`);

function getWelcomeTemplate({ name, age, school, createdAt }) {
  const myTemplate = `
    <html>
      <body>
          <h1>
            ${name}님의 가입을 환영합니다.
          </h1>
          </hr>
          <div>이름 : ${name}</div>
          <div>나이 : ${age}</div>
          <div>학교 : ${school}</div>
          <div>가입일 : ${createdAt}</div>
      </body>
    </html>
    `;
  console.log(myTemplate);
}

const name = "영희";
const age = 5;
const school = "떡잎유치원";
const createAt = "2022-08-30";

getWelcomeTemplate({ name, age, school, createAt });

// 구조분해 할당

// const child = {
//   name : "철수",
//   age : 13,
//   school : "다람쥐 초등학교"
// }

// const {name, age, school} = child;

// const classmate = ["철수", "영희", "훈이"];

// const [child1, child2, child3] = classmate;
// console.log(child1);
// console.log(child2);
// console.log(child3);

// 이름이중요하다, 순서는 중요하지 않음.
// const profile = {
//   pname: "철수",
//   page: 8,
//   pschool: "다람쥐초등학교",
// };

// const { pname, page } = profile;
// console.log(pname);
// console.log(page);

// 이름은 중요하지않다, 순서가 중요하다. 순서에 따라 값이 바뀜. 필요없는 변수일때는 빈 콤마를 붙여줌.
// const classmates = ["철수", "영희", "훈이"];

// const aaa = classmates[0];
// const bbb = classmates[1];

// const [, aaa, bbb] = classmates;
// console.log(aaa);
// console.log(bbb);

// function getClassMate(aaa, bbb) {
//   const classmates = [bbb, aaa];
//   return classmates;
// }

// const [child1, child2] = getClassMate("훈이", "맹구");
// console.log(child1);
// console.log(child2);
