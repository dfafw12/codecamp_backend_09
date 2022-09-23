// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  console.log("!!!!!!!!!");
  document.querySelector("#ValidationInputWrapper").style.display = "flex";
  const pNum1 = document.getElementById("PhoneNumber01").value;
  const pNum2 = document.getElementById("PhoneNumber02").value;
  const pNum3 = document.getElementById("PhoneNumber03").value;

  const myPhone = pNum1 + pNum2 + pNum3;

  await axios.post("http://localhost:3001/phone", { myPhone }).then((res) => {
    console.log(res);
  });
  console.log("인증 번호 전송");
};

// 회원 가입 API 요청
const submitSignup = async () => {
  const pNum1 = document.getElementById("PhoneNumber01").value;
  const pNum2 = document.getElementById("PhoneNumber02").value;
  const pNum3 = document.getElementById("PhoneNumber03").value;

  const myPhone = pNum1 + pNum2 + pNum3;

  let data = {
    name: document.getElementById("SignupName").value,
    myPhone,
    page: document.getElementById("SignupPrefer").value,
    email: document.getElementById("SignupEmail").value,
  };
  console.log("!!!!!!!");
  await axios.post("http://localhost:3001/email", data).then((res) => {
    console.log(res);
    console.log(email, " : email");
    return res;
  });
  console.log("회원가입완료.");
};
