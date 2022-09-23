import axios from "axios";
import Cheerio from "cheerio";
// async function aaa() {
//   // axios.get으로 요청해 html 코드 받아오기 => scraping
//   const result = await axios.get("http://www.naver.com");
// //   console.log(result.data);
// }

// aaa();

async function createMessage() {
  // 입력된 메시지 : "안녕하세요~ https:/www.naver.com 에 방문해 주세요"

  // 1. 1입력된 메시지에서 http로 시작하는 문장이 있는지 먼저 찾기.
  const url = "https://www.naver.com";

  // 2. axios.get으로 요청해 html 코드 받아오기 => scraping
  const result = await axios.get(url);
  //   console.log(result.data);

  // 3. 스크래핑 결과에서 OG(오픈그래프) 코드 골라내서 변수에 저장하기.
  // 컨트롤 쉬프트 l 같이 누르면 같은 이름을 가진것들 다 수정 가능
  const $ = Cheerio.load(result.data);
  $("meta").each((i, el) => {
    /// $ 만큼 el에 담아주고 attr 이 property 인것
    if ($(el).attr("property")?.includes("og:")) {
      // ? == 옵셔널 체이닝
      const key = $(el).attr("property");
      const value = $(el).attr("content");
      console.log(key, value);
    }
  });
}

createMessage();
