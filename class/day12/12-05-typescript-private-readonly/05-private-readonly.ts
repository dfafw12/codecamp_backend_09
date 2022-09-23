// //public , private , protected , readonly

// // 5. private readonly
// class aaa1 {
//   constructor(private readonly mypower) {}

//   ggg() {
//     console.log(this.mypower); //안에서 접근 가능
//     this.mypower = 10; //안에서 수정 불가
//   }
// }

// class aaa2 extends aaa1 {
//   ggg() {
//     console.log(this.mypower); // 자식이 접근 불가
//     this.mypower = 10; // 자식이 수정 불가
//   }
// }

// const aaaa = new aaa2(50);
// console.log(aaaa.mypower); // public : 밖에서 접근 불가
// aaaa.mypower = 10; // 밖에서 수정 불가
