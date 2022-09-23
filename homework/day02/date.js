function ToDate() {
  const time = new Date();

  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  console.log(
    `오늘은 ${year}년 ${month}월 ${day}일 ${hour}:${min}:${sec} 입니다.`
  );
}

ToDate();
