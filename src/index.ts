import { ApolloServer, gql } from "apollo-server";
import { helloWorld } from "./__graphql__/resolvers/hello";

const typeDefs = gql`
  type Query {
    helloWorld: String
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      helloWorld,
    },
  },
});

server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
