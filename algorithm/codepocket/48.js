// for문 사용
function solution(record) {
  const result = [];
  const users = {};
  for (let i = 0; i < record.length; i++) {
    const infos = record[i].split(" ");
    if (infos[2]) {
      users[infos[1]] = infos[2];
    }
    if (infos[0] !== "Change") {
      result.push({
        action: infos[0],
        uid: infos[1],
      });
    }
  }

  for (let idx in result) {
    result[idx] =
      users[result[idx].uid] +
      (result[idx].action === "Enter"
        ? "님이 들어왔습니다."
        : "님이 나갔습니다.");
  }
  return result;
}

// 메소드 사용
// function solution(record) {
//   record = record.map((el) => el.split(" "));
//   const users = record.reduce((acc, cur) => {
//     if (cur[2]) {
//       acc[cur[1]] = cur[2];
//     }

//     return acc;
//   }, {});
//   const answer = record.reduce((acc, cur) => {
//     // console.log(users)
//     if (cur[0] !== "Change") {
//       acc.push(
//         `${users[cur[1]]}님이` +
//           (cur[0] === "Enter" ? "들어왔습니다." : "나갔습니다.")
//       );
//     }

//     return acc;
//   }, []);
//   console.log(answer);
// }

solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
]);
