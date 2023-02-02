import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://jsonplaceholder.typicode.com/posts",
    (request, response, context) => {
      return response(
        context.json([
          {
            id: 1,
            title: "First post",
            body: "This is the first post",
          },
          {
            id: 2,
            title: "Second post",
            body: "This is the second post",
          },
        ])
      );
    }
  ),
];
