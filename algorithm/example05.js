/**
반복문
 for-in : 객체를 반복할 수 있다.                            객체,배열                            for(let i in  object)
 for-of : 각각의 요소들을 가져올 수 있다.                    배열                            for(let i of object)
 forEach : 배열에만 사용할수있다.                           배열                            arr.foreach(function())
 while :   최초식,조건식,증감식이 분할되어 사용                                          while()
  
 */

function sum(num) {
  let a = 0;
  for (let i = 1; i <= num; i++) {
    a += i;
  }
  return a;
}

sum(3);

function countLetter(str) {
  str = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      count++;
    }
  }
  return count;
}
countLetter("Apple Apply Array account");

function makeNumber(num) {
  let aaa = "";
  for (let i = 0; i < num.length; ++i) {
    aaa += num[i];

    if (i !== num.length - 1) {
      aaa += "-";
    }
  }
  return aaa;
}

makeNumber("12345");
