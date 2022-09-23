function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (!answer.includes(sum)) {
        answer.push(sum);
      }
    }
  }
  return answer.sort((a, b) => {
    return a - b;
  });
}

/*
Set : 
const newSet = new Set([1,2,3,4]) // 중복값이 존재하지않는 객체 
중복 데이터를 걸러줌
newSet

데이터 추가 가능
newSet.add(4) 

데이터 삭제 가능
newSet.delete(2)

데이터 조회 가능
newSet.has(3) // 숫자 3이 존자하나? 존재하면 true 아니면 false
length값을 가지지 않음
size값을 가짐.

데이터 초기화
newSet.clear()

Set은 객체이다
Set을 배열로 바꾸기
const newSet = new Set([1,2,3,4,3,2])
console.log(newSet)
console.log([...newSet])
console.log(Array.from(newSet))

//Set 반복문 사용
newSet.forEach((el) => {
  console.log(el)
})


 */
