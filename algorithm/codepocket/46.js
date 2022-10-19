// function solution(skill, skill_trees) {
//   let answer = 0;

//   for (let i = 0; i < skill_trees.length; i++) {
//     let currentIdx = 0; // 선행 스킬의 순서를 비교하기 위한 변수

//     for (let j = 0; j < skill_trees[i].length; j++) {
//       const idx = skill.indexOf(skill_trees[i][j]);

//       if (idx !== -1) {
//         // 선행스킬 순서에 포함되는 스킬이라면
//         console.log(skill, idx, skill_trees[i][j]);
//         if (idx !== currentIdx) {
//           break;
//         }
//         currentIdx++;
//       }
//       if (j === skill_trees[i].length - 1) answer++;
//     }
//     console.log(currentIdx, answer);
//   }
//   return answer;
// }

function solution(skill, skill_trees) {
  let answer = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    let filtered = "";

    for (let j = 0; j < skill_trees[i].length; j++) {
      if (skill.includes(skill_trees[i][j])) {
        filtered += skill_trees[i][j];
      }
    }
    if (filtered === "") {
      filtered = skill;
    }

    if (skill.includes(filtered)) {
      if (skill[0] === filtered[0]) {
        answer++;
      }
    }
  }
  return answer;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);
//                  x        o      o       x
