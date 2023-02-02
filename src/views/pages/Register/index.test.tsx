import "../../../__mocks__/matchMedia.mock";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import fetchMock from "jest-fetch-mock";
import React from "react";
import { act } from "react-dom/test-utils";
import Register from ".";
import { setupServer, SetupServerApi } from "msw/node";
import { rest } from "msw";
import { Post } from "@utils/Types";

jest.mock("axios");
fetchMock.enableMocks();

describe("Login", () => {
  //Invalid inputs
  test("Invalid inputs", async () => {
    render(<Register data-testid="component" />);

    //click login
    await userEvent.click(
      screen.getByRole("button", {
        name: "Login",
      })
    );

    expect(
      screen.getByRole("button", {
        name: "Login",
      })
    ).toBeDisabled();
  });

  //Invalid email value
  test("Invalid email value", async () => {
    render(<Register />);

    const inputEmail = screen.getByPlaceholderText("Enter your email");
    const inputPassword = screen.getByPlaceholderText("Enter your password");

    //change email
    await act(async () => {
      fireEvent.change(inputEmail, {
        target: { value: "0966666666" },
      });
      fireEvent.change(inputPassword, {
        target: { value: "0966666666" },
      });
    });

    expect(await screen.findByText("Invalid email format")).toBeVisible();
    // expect(
    //   await screen.findByText("Please input your password!", { exact: false })
    // ).not.toBeVisible();
    expect(
      screen.getByRole("button", {
        name: "Login",
      })
    ).toBeDisabled();
  });

  //API call
  test("API call", async () => {
    render(<Register />);

    await waitFor(() => {
      const postsItems = screen.getAllByRole("listitem");
      expect(postsItems).toHaveLength(2);
    });
  });
});

// describe("The PostsList component", () => {
//   let server: SetupServerApi;
//   afterEach(() => {
//     server.close();
//   });
//   describe("if fetching posts is a success", () => {
//     let posts: Post[];
//     beforeEach(() => {
//       posts = [
//         {
//           id: "1",
//           title: "First post",
//         },
//         {
//           id: "2",
//           title: "Second post",
//         },
//       ];
//       server = setupServer(
//         rest.get(
//           "https://jsonplaceholder.typicode.com/posts",
//           (request, response, context) => {
//             return response(context.json(posts));
//           }
//         )
//       );
//       server.listen();
//     });
//     it("should display the titles of all of the posts", async () => {
//       const postsList = render(<Register />);

//       expect(postsList.getByText("Second post")).toBeInTheDocument();
//     });
//   });
// });
