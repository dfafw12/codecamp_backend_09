let aaa = "철수";

let bbb = aaa;

console.log(bbb);

const profile = {
  name: "철수",
  age: 8,
  school: "다람쥐초등학교",
  hobby: {
    hobby1: "독서",
    hobby2: "잠",
  },
};

const profile2 = {
  ...profile,
  hobby: {
    ...profile.hobby,
  },
};
//얕은복사
// const child1 = {
//   name: "철수",
//   age: 13,
//   school: "다람쥐초등학교",
// };

// const child2 = {
//   ...child1,
// };

// child1.name = "영희";
// child2.name = "영희"
// console.log(child1);
// console.log(child2);

//깊은복사
const child1 = {
  name: { first: "김", last: "철수" },
  age: 13,
  school: "다람쥐초등학교",
};

const child2 = JSON.parse(JSON.stringify(child1));

child2.name.first = "최";
child2.name.last = "영희";

console.log(child1);
console.log(child2);
//const 는 주소는 바뀌지 않지만 안에 내용은 바뀔수 있다
// object.freeze 는 바뀌지않게 해준다.
Object.freeze(child2);

child2.age = 15; //바뀌지 않음

console.log(child2);

// 다른 배열을 한배열에 합치고 싶을때.
const aa = ["철수", "영희", "훈이"];
const bb = ["맹구", "짱구"];

const cc = [...aa, ...bb];

console.log(cc);

// 원본에서 쓰기 싫은 값이 있을때 원본은 건들지 않고 따로 다른객체에 뺄수있다.
// ex) school 이 쓰기 싫을때
const child = {
  name: "철수",
  age: 8,
  school: "다람쥐초등학교",
  money: 2000,
  hobby: "수영",
};

const { school, ...aaaa } = child;

console.log(child);
console.log(aaaa);
