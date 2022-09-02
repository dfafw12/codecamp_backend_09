// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from "apollo-server";

// The GraphQL schema
const typeDefs = gql`
  type Query {
    fetchBoards: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    fetchBoards: () => {
      return "응애";
    },
  },

  //   Mutation: {
  //     createQqq: () =>{

  //     }
  //   },
};

const app = new ApolloServer({
  typeDefs, // shorthand-property
  resolvers, // shorthand-property
});

app.listen(3001).then(() => {
  console.log("프로그램을 켜는데 성공했어요.");
});
