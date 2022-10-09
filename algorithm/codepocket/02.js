// function solution(phone_number) {
//     var answer = '';
//   for(let i=0; i<phone_number.length; ++i){
//     if(i <phone_number.length-4){
//       answer += "*"
//     } else{
//       answer+=phone_number[i]
//     }
//   }
//   console.log(phone_number)

//     return answer;
// }
//>>
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
