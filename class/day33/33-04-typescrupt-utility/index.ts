interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial 타입
type aaa = Partial<IProfile>; // 전부 ? 붙임

// 2. Required 타입
type bbb = Required<IProfile>; // 전부 필수 값으로

// 3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">; // 원하는것만 가져올수있음

// 4. Omit 타입
type ddd = Omit<IProfile, "school">; // 빼고싶은거 뺄수있음.

// 5. Union, Record 타입
type eee = "철수" | "영희" | "훈이";
let child: eee;
child = "철수"; // 정해진 값만 들어갈수있음.  // Union 타입

type fff = Record<eee, IProfile>; // 각각 하나씩 만들어짐. // Record 타입

// keyof 타입
let mykey: keyof IProfile; // "name"|"age"|"school"|"hobby" // IProfile 의 키만 뽑음.
mykey = "hobby";

// ============== (type vs interface) 차이: 선언 병합 ===================
interface IProfile {
  candy: number;
}

let myProfile: Partial<IProfile> = {
  candy: 10, // 선언 병합으로 추가됨.
};
