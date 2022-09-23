// 배열
//기본적인 용도 외에 다른 복잡한 자료 구조들을 표현하기 위해서 또는 행렬, 벡터 등을 컴퓨터에서 표현하는 용도 등으로도 사용된다.
// let arr1 = [1, 2, 3, 4, 5, 6, 7, "8", "ASDS"];
// const arr2 = ["asd", "gdgd", "qqqq", "wwww", "asssssssssssss"];

// function arrExample() {
//   for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
//   }
//   console.log("");
//   for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i]);
//   }
//   console.log("arr1의 길이 : " + arr1.length);
//   console.log("arr2의 길이 : " + arr2.length);
// }

// arrExample();

const fruits = [];

fruits.push("사과");
fruits.push("바나나");
fruits.push("파인애플");

// fruits[0] = "사과"
// fruits[1] = "바나나"
// fruits[2] = "파인애플"

console.log(fruits);

const newFruits = [];
newFruits.push(fruits[fruits.length - 1]);

console.log(newFruits);
