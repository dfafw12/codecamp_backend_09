import axios from "axios";
import Cheerio from "cheerio";

export class UserService {
  checkMark = (registrationNumber) => {
    if (!registrationNumber.includes("-")) {
      return false;
    } else {
      return true;
    }
  };

  checkNumber = (registrationNumber) => {
    const result = registrationNumber.split("-");
    if (result[0].length !== 6 || result[1].length !== 7) {
      return false;
    } else {
      return true;
    }
  };

  changeStar = (registrationNumber) => {
    console.log(registrationNumber);
  };

  customRegistrationNumber = (registrationNumber) => {
    // 1. 주민번호 가 "-"포함하는지 확인하기
    const isValid = checkMark(registrationNumber);
    if (isValid === false) return;

    // 2. "-" 기준 앞이 6, 뒤가 7자리 인지 확인하기
    const answer = checkNumber(registrationNumber);
    if (answer === false) return;

    // 3. 뒤 7자리 중 끝 6자리 *로 변경해서 콘솔에 출력하기
    changeStar(registrationNumber);
  };

  createOg = async (url) => {
    const data = {
      title: "",
      description: "",
      image: "",
    };

    // 1. 1입력된 메시지에서 http로 시작하는 문장이 있는지 먼저 찾기.

    // 2. axios.get으로 요청해 html 코드 받아오기 => scraping
    const result = await axios.get(url);
    //   console.log(result.data);

    // 3. 스크래핑 결과에서 OG(오픈그래프) 코드 골라내서 변수에 저장하기.
    const $ = Cheerio.load(result.data);
    $("meta").each((i, el) => {
      if ($(el).attr("property")?.includes("og:title")) {
        data.title = $(el).attr("content");
        //   console.log(data.title);
      }

      if ($(el).attr("property")?.includes("og:description")) {
        data.description = $(el).attr("content");
        //   console.log(data.description);
      }
      if ($(el).attr("property")?.includes("og:image")) {
        data.image = $(el).attr("content");
        //   console.log(data.image);
      }
    });

    return data;
  };
}
