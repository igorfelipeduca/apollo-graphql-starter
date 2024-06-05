import { server } from "../index";
import request from "supertest";

describe("e2e", () => {
  it("should return Hello World", async () => {
    //@ts-ignore
    const res = await request(server)
      .post("http://localhost:4000/graphql")
      .send({
        query: "{ helloWorld }",
      });

    expect(res.body).toEqual({
      data: {
        helloWorld: "Hello World",
      },
    });
  });
});
