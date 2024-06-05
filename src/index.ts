import { ApolloServer, gql } from "apollo-server";
import { helloWorld } from "./__graphql__/resolvers/hello";
import * as dotenv from "dotenv";

dotenv.config();

const typeDefs = gql`
  type Query {
    helloWorld: String
  }
`;

export const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      helloWorld,
    },
  },
});

server
  .listen(process.env.APOLLO_PORT)
  .then(({ url }) => console.log(`Server ready at ${url}`));
