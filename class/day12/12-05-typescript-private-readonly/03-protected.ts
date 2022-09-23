// //public , private , protected , readonly

// // 3. protected
// class aaa1 {
//   constructor(protected mypower) {}

//   ggg() {
//     console.log(this.mypower); //안에서 접근 가능
//     this.mypower = 10; //안에서 수정가능
//   }
// }

// class aaa2 extends aaa1 {
//   ggg() {
//     console.log(this.mypower); // 자식이 접근 가능
//     this.mypower = 10; // 자식이 수정 가능
//   }
// }

// const aaaa = new aaa2(50);
// console.log(aaaa.mypower); // public : 밖에서 접근 불가
// aaaa.mypower = 10; // 밖에서 수정불가
