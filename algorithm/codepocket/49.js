// function solution(priorities, location) {
//   const origin = priorities[location];
//   //내가 뽑을 문서가 어떤 위치에 있는지를 체크
//   priorities[location] = "A";
//   let answer = 0;
//   while (true) {
//     const search = priorities.indexOf("A");
//     priorities[search] = origin;
//     const max = Math.max(...priorities);
//     priorities[search] = "A";

//     if (priorities[0] === "A") {
//       if (origin === max) {
//         return ++answer;
//       }
//     }
//     if (priorities[0] === max) {
//       // 현재 인쇄하려는 문서가 대기열의 가장 큰 중요도를 가진다면,
//       // 현재 문서를 인쇄한다.
//       priorities.shift();
//       answer++;
//     } else {
//       // 현재 인쇄하려는 문서가 대기열의 가장 큰 중요도를 가지지 않는다면,
//       // 현재 문서를 뒤로 넘긴다.
//       priorities.push(priorities.shift());
//     }
//   }
// }

function solution(priorities, location) {
  const origin = priorities[location];
  //내가 뽑을 문서가 어떤 위치에 있는지를 체크
  priorities[location] = "A";

  const recursion = function (count) {
    const search = priorities.indexOf("A");
    priorities[search] = origin;
    const max = Math.max(...priorities);
    priorities[search] = "A";

    if (priorities[0] === "A" && origin === max) return ++count;

    priorities[0] === max ? count++ : priorities.push(priorities[0]);

    priorities.shift();

    return recursion(count);
  };
  return recursion(0);
}

solution([2, 1, 3, 2], 2);
