function solution(participant, completion) {
  let data = "";
  let result = "";

  data = completion.toString();

  for (let i = 0; i < participant.length; i++) {
    if (!data.includes(participant[i])) {
      result = participant[i];
    }
  }
  return result;
}
