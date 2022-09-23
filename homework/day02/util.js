export function getWelcomeTemplate(
  email,
  registrationNumber,
  phoneNum,
  FavorSite
) {
  const myTemplate = `
          <html>
            <body>
                <h1>
                  문주연 님의 가입을 환영합니다.
                </h1>
                </hr>
                <div>이메일 : ${email}</div>
                <div>주민번호 : ${customRegistrationNumber(
                  registrationNumber
                )}</div>
                <div>휴대폰번호 : ${phoneNum}</div>
                <div>내가좋아하는사이트 : ${FavorSite}</div>
            </body>
          </html>
          `;
  return myTemplate;
}

export function checkEmail(email) {
  if (email === undefined || email.includes("@") === false) {
    console.log("이메일을 형식이 올바르지 않습니다.");
    return false;
  } else {
    return true;
  }
}

export function checkRegistrationNumber(registrationNumber) {
  const result = registrationNumber.split("-");
  const startNumber = result[0];
  const endNumber = result[1];

  if (!registrationNumber.includes("-")) {
    console.log("주민번호 형식이 다릅니다.");
    return false;
  }

  if (startNumber.length !== 6 || endNumber.length !== 7) {
    console.log("올바른 주민번호 갯수가 아닙니다.");

    return false;
  }
}

export function customRegistrationNumber(registrationNumber) {
  const myCustomNumber = registrationNumber.slice(0, -6).padEnd(14, "*");
  return myCustomNumber;
}
