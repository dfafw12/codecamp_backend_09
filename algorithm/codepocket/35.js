// function solution(N, stages) {
//   stages.sort((a, b) => {
//     return a - b;
//   });

//   const failArr = [];

//   for (let i = 1; i <= N; i++) {
//     failArr.push({
//       stage: i, // stage num
//       users: 0, // not clear user
//       fail: 0, // failnum
//     });
//   }

//   let allUsers = stages.length;

//   for (let i = 0; i < stages.length; i++) {
//     if (failArr[stages[i] - 1] !== undefined) {
//       failArr[stages[i] - 1].users++;

//       //현재 스테이지 번호와 다음 스테이지 번호가 다를때
//       // 현재 스테이지의 정보 참조가 끝났을 때
//       if (stages[i] !== stages[i + 1]) {
//         const fail = failArr[stages[i] - 1].users / allUsers;

//         allUsers -= failArr[stages[i] - 1].users;

//         failArr[stages[i] - 1].fail = fail;
//       }
//     }
//   }
//   const answer = failArr.sort((a, b) => b.fail - a.fail);

//   return answer.map((el) => {
//     return el.stage;
//   });
// }

function solution(N, stages) {
  stages.sort((a, b) => {
    return a - b;
  });
  let allUsers = stages.length;
  const answer = new Array(N).fill(1).map((num, i) => {
    const stage = num + i;
    const arr = stages.slice(
      stages.indexOf(stage),
      stages.lastIndexOf(stage) + 1
    );
    const fail = arr.length / allUsers;
    allUsers -= arr.length;

    return { stage, fail };
  });
  answer.sort((a, b) => b.fail - a.fail);

  return answer.map((el) => el.stage);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
