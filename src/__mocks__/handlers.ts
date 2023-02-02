import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "1",
          title: "Bruce Wayne",
        },
        {
          id: "13",
          title: "Clark Kent",
        },
        {
          id: "3",
          title: "Princess Diana",
        },
      ])
    );
  }),
];
