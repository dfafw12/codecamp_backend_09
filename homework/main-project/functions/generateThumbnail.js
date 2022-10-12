/**
 * Triggered from a change to a Cloud Storage bucket.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */

const { Storage } = require("@google-cloud/storage");
const sharp = require("sharp");

// buffer : 데이터를 일시적으로 보관하는 메모리 영역(buffer 형태로)

// Stream : buffer 형태의 파일을 Stream 이라는 형태로 읽을수 있게 해주는것
//(배열이나 문자열같은 데이터 컬렉션) 노드의 I/O 추상화 4가지 형태가 있음.

// pipe : pipe 는 연결? 해준느 역할 그안에서 이렇게저렇게 만들어줄수있는거같음.
// 스트림을 가져와 쓰기 가능한 스트림에 연결하는데 사용한다고함. 데이터 스트림을 쉽게 전달함.
// 계속 이어붙일수?있다고하는거같음..

exports.helloGCS = async (event, context) => {
  //   console.log("Hello");
  const gcsEvent = event;
  console.log(gcsEvent);
  console.log(`Processing file: ${gcsEvent.name}`);
  console.log(`event : ,${JSON.stringify(event)}`);
  console.log(`context : , ${JSON.stringify(context)}`);

  //중복 생성 방지
  if (event.name.includes("thumb/")) {
    return;
  }

  //   console.log(event.name, ": event.name");

  // event.bucket에 이미 bucket 정보가 들어가 있기 때문에 storage에 정보를 적지 않아도 된다
  const storage = new Storage().bucket(event.bucket);
  console.log(event.bucket);

  // 파일 사이즈
  const size = [320, 640, 1280];

  // 수업 내용 참고.
  const result = await Promise.all(
    size.map((el) => {
      new Promise((resolve, reject) => {
        storage
          .file(event.name) // storage 에서 파일이름 가져옴
          .createReadStream() // Stream형태로 만듦 (createReadStream 은 출력이라고함..)
          .pipe(sharp().resize({ width: el })) // sharp로 사이즈 바꾸기
          .pipe(
            storage
              .file(
                `thumb/${el === 320 ? "s" : el === 640 ? "m" : "l"}/${
                  event.name
                }`
              )
              .createWriteStream() // (createWriteStream 은 입력 이라고함..)
          ) // 320 이면 s 640이면 m 1280 이면 l 폴더 로 들어가서 event.name 이라는 이름으로 Stream을 저장함.
          .on("finish", () => {
            resolve(
              `thumb/${el === 320 ? "s" : el === 640 ? "m" : "l"}/${event.name}`
            ); // 성공하면 resolve 실행
          })
          .on("error", () => {
            reject("실패"); // 실패하면 reject 실행
          });
      });
    })
  );
  return result; // 다운로드 url 브라우저에 돌려줌.
};
