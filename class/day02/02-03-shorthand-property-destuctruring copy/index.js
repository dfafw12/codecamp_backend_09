//1. shorthand-property

function getWelcomeTemplate({ name, age, school, createdAt }) {
  const myTemplate = `
    <html>
      <body>
          <h1>
            ${name}님의 가입을 환영합니다.
          </h1>
          </hr>
          <div>이름 : ${name}</div>
          <div>나이 : ${age}</div>
          <div>학교 : ${school}</div>
          <div>가입일 : 2022-10-10</div>
      </body>
    </html>
    `;
  console.log(myTemplate);
}

const name = "훈이";
const age = 10;
const school = "공룡초등하교";
const createAt = "2022=08-30";
getWelcomeTemplate(name, age, school, createAt);
