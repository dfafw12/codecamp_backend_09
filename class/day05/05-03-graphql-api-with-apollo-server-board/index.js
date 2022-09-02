// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from "apollo-server";
import { checkPhone, getToken, sendTokenToSMS } from "./phone.js";
// The GraphQL schema
const typeDefs = gql`
  input createBoardInput {
    writer: String
    title: String
    contents: String
  }

  type MyReturn {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    # fetchBoards: MyReturn => 객체 1개를 의미
    fetchBoards: [MyReturn] # => 배열안에 객체를 의미
  }
  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String ==> 입력 데이터를 낱게로 보냄
    createBoard(createBoardInput: createBoardInput!): String #입력 데이터를 묶어서 보냄(실무형)
    createTokenOfPhone(myPhone: String): String # asd(aa:타입) : 리턴타입
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    fetchBoards: () => {
      // context == ctx
      //1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
      const result = [
        { number: 1, writer: "철수", title: "제목입니다1", contents: "내용1" },
        { number: 2, writer: "영희", title: "제목입니다2", contents: "내용2" },
        { number: 3, writer: "훈이", title: "제목입니다3", contents: "내용3" },
      ];

      //2. DB에 저장이 잘 됐으면, 꺼내온 결과를 브라우저에 응답 주기
      return result;
    },
  },
  Mutation: {
    createBoard: (_, args) => {
      //1. 브라우저에서 보내준 데이터 확인하기.
      console.log(args.createBoardInput.writer);
      console.log(args.createBoardInput.title);
      console.log(args.createBoardInput.contents);

      // api 끼리 정보를 주고 받을때 parent 인자를 사용한다. 브라우저는 args
      // fetchBoards("철수") : "철수" parent 인자로 들어감

      //2. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기

      //3. DB에 저장이 잘 됐으면, 결과를 브라우저에 응답 주기
      return "게시물 등록 성공";
    },
    createTokenOfPhone: (_, args) => {
      const myPhone = args.myPhone;

      const isValid = checkPhone(myPhone);
      if (isValid === false) {
        return;
      }

      const myToken = getToken(); // 111111

      // 3. 핸드폰번호에 토큰 전송하기.
      sendTokenToSMS(myPhone, myToken);

      return "인증완료";
    },
  },
};

const app = new ApolloServer({
  typeDefs, // shorthand-property
  resolvers, // shorthand-property
  cors: true, // <<전체 주소, 특정 주소만 >>{origin:["http://~~~주소"]}
});

app.listen(3001).then(() => {
  console.log("프로그램을 켜는데 성공했어요.");
});
