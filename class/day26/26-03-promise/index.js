// 1. .then()으로 받기.
const onClickPromiseThen = () => {
  new Promise((resolve, reject) => {
    // 시간이 걸리는 작업 api 보내기 e등등
    setTimeout(() => {
      const result = "철수"; // 2초가 걸려서 백엔드에서 "철수" 데이터 받아옴
      resolve(result); // 성공하면 이거실행 then 에서 나온걸 쓸수 있다.
      reject("에러발생!"); // 실패하면 이거 실행 => try-catch에서 실패시 사용하기.
    }, 2000);
  })
    .then((result) => {
      console.log(result); // 철수
    })
    .catch((error) => {
      console.log(error); // 에러가 발생햇어요
    });
};
onClickPromiseThen();

// 2. await로 받기.
const onClickPromiseawait = async () => {
  const qqq = await new Promise((resolve, reject) => {
    // 시간이 걸리는 작업 api 보내기 e등등
    setTimeout(() => {
      const result = "철수"; // 2초가 걸려서 백엔드에서 "철수" 데이터 받아옴
      resolve(result); // 성공하면 이거실행 then 에서 나온걸 쓸수 있다.
      reject("에러발생!"); // 실패하면 이거 실행 => try-catch에서 실패시 사용하기.
    }, 2000);
  });
};
onClickPromiseawait();
