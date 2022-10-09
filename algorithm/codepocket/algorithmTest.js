// 기준점 비교
function specialDay(month, day) {
  // 여기에서 작업하세요.
  console.log(month);
  console.log(day);
  const data = month * 100 + day;
  console.log(data);
  if (data > 219) {
    return "After";
  } else if (data == 219) {
    return "Special";
  } else {
    return "Before";
  }
}

// 객체 합치기 중복값 덮어쓰기 (뒤에 있는 프로퍼티가 앞 프로퍼티위에 덮어씌운다.)
function addNew(obj1, obj2) {
  // 여기에서 작업하세요.
  const result = { ...obj2, ...obj1 };

  return result;
}

// 문자열에서 특정 문자 지우기.
function noSpaces(str) {
  let result = "";
  const data = str.split(" ");
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    result += data[i];
  }
  return result;
}
