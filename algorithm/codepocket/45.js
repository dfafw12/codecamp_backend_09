// function solution(progresses, speeds) {
//     const answer = [];
//     let day = 0;

//    for(let i = 0 ; i < progresses.length; i++){

//      const process = Math.ceil((100-progresses[i]) / speeds[i])

//      if(day < process){
//        day = process
//        answer.push(1)
//      } else if( day >= process){
//        answer[answer.length -1 ]++;
//      }
//    }
//      return answer
//   }

function solution(progresses, speeds) {
  let day = 0;
  return progresses
    .map((el, i) => {
      const process = Math.ceil((100 - el) / speeds[i]);

      if (day < process) {
        day = process;
      }
      return day;
    })
    .reduce((acc, cur, idx, array) => {
      if (cur !== array[idx - 1]) {
        acc.push(1);
      } else {
        acc[acc.length - 1]++;
      }

      return acc;
    }, []);
}

solution([93, 30, 55], [1, 30, 5]);
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
