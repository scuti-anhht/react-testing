import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Register from ".";
import { act } from "react-dom/test-utils";
import axios from "axios";

jest.mock("axios");

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
    //   await screen.findByText("Please input your password!")
    // ).not.toBeVisible();
    expect(
      screen.getByRole("button", {
        name: "Login",
      })
    ).toBeDisabled();
  });

  //API call
  test("API call", async () => {
    render(<Register data-testid="component" />);

    //click login
    const getSpy = jest.spyOn(axios, "get");

    expect(getSpy).toBeCalled();
  });
});

// test("Register shows default value", async () => {
//   render(<Register />);
//   await act(async () => {
//     fireEvent.change(screen.getByLabelText("username"), {
//       target: { value: "0966666666" },
//     });
//     fireEvent.change(screen.getByLabelText("password"), {
//       target: { value: "1232113" },
//     });
//     fireEvent.click(screen.getByRole("button", { name: "Login" }));
//   });
//   expect(screen.getByLabelText("username")).toHaveValue("0966666666");
//   expect(screen.getByLabelText("password")).toHaveValue("1232113");
//   expect(screen.getByTestId("username")).toBeInTheDocument();
//   expect(screen.getByTestId("password")).toBeInTheDocument();
// });

// it("renders with or without a name", () => {
//   act(async () => {
//     render(<Register />);
//     const button = screen.getByRole("button", { name: "Change Button" });
//     fireEvent.click(button);
//   });
//   expect(screen.getByText("Initial State").textContent).toBe(
//     "Initial State Changed"
//   );
// });
