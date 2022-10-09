// 포켓몬 

// function solution(nums) {
//     const answer = []

//     nums.forEach((monster) =>{
//       if(!answer.includes(monster) && nums.length/2 !== answer.length){
//         answer.push(monster)
//       }
//     })
//       return answer.length
//     }

// function solution(nums) {
//   const data = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (!data.includes(nums[i]) && nums.length / 2 !== data.length) {
//       data.push(nums[i]);
//     }
//   }
//   console.log(data);

//   return data.length;
// }

function solution(nums) {
  const answer = new Set(nums).size;
  const limit = nums.length / 2;
  console.log(nums, answer, limit);

  return limit >= answer ? answer : limit;
}
