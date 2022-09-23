// let aaa = "ㅎㅇ";
// // aaa = 3;
// // 타입 추론 : 처음 들어온 값의 타입을 가지고 추론된 결과로만 가능.

// // 타입 명시
// // let bbb: string = "ㅂㄳㄴㄷ";
// // bbb = 10;

// //타입 명시가 필요한 상황
// let ccc: string | number = 1000;
// ccc = "1000원";

// // 숫자타입
// let ddd: number = 10;
// // ddd = "철수";

// // boolean 타입
// let eee: boolean = true;
// eee = false;
// // eee = "false"; // js의 경우 true 로 작동함

// // 배열타입
// // let fff: number[] = [1, 2, 3, 4, 5, "a"]; // 넘버타입배열인데 문자열들어감
// // let ggg: string[] = ["a", "b", "c", 1]; // 스트링타입배열인데 숫자들어감
// let hhh = ["a", 1, "b", 2, "c", true]; // 타입을 추론해서 어떤 타입을 사용하는지 알아보기

// //객체타입
// interface IProfile {
//   name: string;
//   age: number;
//   school: string;
//   hobby?: string;
// }
// // ? : 있어도 되고 없어도 돼
// const profile: IProfile = {
//   name: "철수",
//   age: 8,
//   school: "다람쥐초등학교",
// };
// profile.hobby = "수영"; // 추가 불가능
// profile.name = "영희"; // 수정 가능
// // profile.age = "8살" // 같은타입으로만 수정가능

// // 함수타입 -> 어디서든 몇번이든 호출 가능하므로, 타입추론 할 수 없음 (반드시! 타입명시 필요!)
// //화살표함수ver
// const add1 = (num1, num2, unit) => {
//   return num1 + num2 + unit;
// };
// add1(1000, 2000, "원");
// //타입 추론이 안됌

// const add2 = (num1: number, num2: number, unit: string): string => {
//   return num1 + num2 + unit;
// };
// add2(1000, 2000, "원");
// // const aaa = () :반환받을타입 => {}
// const result1 = add2(1000, 2000, "원"); // string 타입 리턴타입 예측 가능

// //일반 함수 ver
// function add3(num1: number, num2: number, unit: string): string {
//   return num1 + num2 + unit;
// }
// const result2 = add3; // string 타입 리턴타입 예측 가능

// // any 타입
// let qqq: any = "철수"; // js와 동일하다. 이거 하면 타입스크립트 쓰는이유가?없다
// qqq = 123;
// qqq = true;
