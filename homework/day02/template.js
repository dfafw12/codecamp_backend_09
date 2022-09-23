import {
  checkEmail,
  checkRegistrationNumber,
  getWelcomeTemplate,
  customRegistrationNumber,
} from "./util.js";

function welcomeTemplate(email, registrationNumber, phoneNum, FavorSite) {
  const EmailValid = checkEmail(email);
  if (EmailValid === false) {
    return;
  }
  const registrationNumValid = checkRegistrationNumber(registrationNumber);
  if (registrationNumValid === false) {
    return;
  }

  const myTemplate = getWelcomeTemplate(
    email,
    registrationNumber,
    phoneNum,
    FavorSite
  );

  console.log(myTemplate);
}

const email = "qwe@qwe.com";
const registrationNumber = "122426-1234567";
const phoneNum = "010-1234-1234";
const FavorSite = "naver.com";

welcomeTemplate(email, registrationNumber, phoneNum, FavorSite);
