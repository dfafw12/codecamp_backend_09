//객체

function objectExample() {
  let a = {
    name: "철수",
    age: 16,
    school: { name: "방화중" },
  };
  // dot notation
  console.log("a 의 이름 : " + a.name);
  console.log("a 의 나이 : " + a.age);
  console.log("a 의 학교 : " + a.school);
  console.log("a 의 학교 : " + a.school.name);
  a.address = "강서구";
  console.log("a 의 주소 : " + a.address);

  //bracket notation
  // 꼭 "" 로 감싸야 한다.
  let name = "age";
  console.log(a[name]);
  console.log(a["name"]);
  console.log(a["age"]);
  //==========================

  a.friends = ["영희", "훈이"];

  console.log(a);
}

// objectExample();

function objExample() {
  const student = {};
  student.name = "철수";
  console.log(student);
  console.log(student.name);
}

// objExample();

function objExample2() {
  const student = {
    name: "철수",
    age: 8,
  };

  const school = {
    name: "다람쥐초",
    teacher: "다람이",
  };

  student.school = school;
  console.log(student);
}

objExample2();
