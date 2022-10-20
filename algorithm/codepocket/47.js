// 영단어 끝말잇기

// function solution(n, words) {
//   for (let i = 1; i < words.length; i++) {
//     const player = (i % n) + 1;
//     const turn = Math.floor(i / n) + 1;
//     // 이전 사람이 말한 단어의 가장 뒷부분(마지막글자)
//     const preWord = words[i - 1][words[i - 1].length - 1];
//     // 현재 사람이 말한 단어의 가장 앞부분(첫글자)
//     const nowWord = words[i][0];

//     console.log(player, words[i], turn);

//     if (preWord !== nowWord || words.indexOf(words[i]) !== i) {
//       return [player, turn];
//     }
//   }

//   return [0, 0];
// }

function solution(n, words) {
  let stop = false; // 최초 탈락자가 생길 경우 종료하는 스위치 변수
  return words.slice(1).reduce(
    (acc, cur, i) => {
      const preWord = words[i];

      i++;
      const player = (i % n) + 1;
      const turn = Math.floor(i / n) + 1;
      if (stop === false) {
        if (
          preWord[preWord.length - 1] !== cur[0] ||
          words.indexOf(cur) !== i
        ) {
          stop = true;
          return [player, turn];
        }
      }
      return acc;
    },
    [0, 0]
  );
}

solution(3, [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
]);
