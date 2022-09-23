// function customRegistrationNumber() {
//   let registrationNumber = "124456-2224567";
//   const isValid = registrationNumber.charAt(6);
//   const startNumber = registrationNumber.substring(0, 6);
//   const endNumber = registrationNumber.substring(7);
//   const customNumber = registrationNumber.slice(0, -6).padEnd(14, "*");
//   if (isValid !== "-") {
//     console.log("에러 발생!!! 형식이 올바르지 않습니다!!!");
//     return;
//   } else if (startNumber.length !== 6 || endNumber.length !== 7) {
//     console.log("에러 발생!!! 개수를 제대로 입력해 주세요!!!");
//     return;
//   } else {
//     console.log(customNumber);
//   }
// }

function checkForm(registrationNumber) {
  const isValid = registrationNumber.charAt(6);

  if (isValid !== "-") {
    console.log("에러 발생!!! 주민번호 형식이 올바르지 않습니다!!!");
    return false;
  } else {
    return true;
  }
}

function checkNumber(registrationNumber) {
  const startNumber = registrationNumber.substring(0, 6);
  const endNumber = registrationNumber.substring(7);

  if (startNumber.length !== 6 || endNumber.length !== 7) {
    console.log("에러 발생!!! 주민번호를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}

function customNumber(registrationNumber) {
  const myCustomNumber = registrationNumber.slice(0, -6).padEnd(14, "*");
  console.log(myCustomNumber);
}

function customRegistrationNumber(registrationNumber) {
  const isValid = checkForm(registrationNumber);
  if (isValid === false) {
    return;
  }
  const myCheckNumber = checkNumber(registrationNumber);
  if (myCheckNumber === false) {
    return;
  }
  customNumber(registrationNumber);
}

customRegistrationNumber("210510-1010101");
customRegistrationNumber("210510-1010101010101");
customRegistrationNumber("2105101010101");
