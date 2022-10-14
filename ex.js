// 영화 예매 사이트 로 erd만듬
// 1~다
// 다~다
// 1:1

// 고민
// 1. 1:1 관계가 무엇이있을까
// 2. 뭐 추가테이블이 뭐가있을까.
// 3.

// const el = 1280;
// console.log(el === 320 ? "s" : el === 640 ? "m" : "l");

function random() {
  let int = 0;
  const random = Math.floor(Math.random() * 100 + 1);
  console.log(random);

  random >= 75
    ? (int = 4)
    : random >= 50
    ? (int = 3)
    : random >= 25
    ? (int = 2)
    : (int = 1);

  console.log(int);
}

random();
