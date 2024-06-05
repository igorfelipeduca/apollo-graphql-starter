import { ApolloServer, gql } from "apollo-server";
import { createTestClient } from "apollo-server-testing";
import { server } from "../index";

describe("Query: helloWorld", () => {
  it('returns "Hello, world!"', async () => {
    //@ts-ignore
    const { query } = createTestClient(server);

    const res = await query({
      query: gql`
        query {
          helloWorld
        }
      `,
    });

    expect(res.data).toEqual({ helloWorld: "hello world" });
  });
});
