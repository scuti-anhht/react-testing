import "../../../__mocks__/matchMedia.mock";
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import axios from "axios";
import Register from ".";

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
    //   await screen.findByText("Please input your password!", { exact: false })
    // ).not.toBeVisible();
    expect(
      screen.getByRole("button", {
        name: "Login",
      })
    ).toBeDisabled();
  });

  //API call
  // test("API call", async () => {
  //   render(<Register data-testid="component" />);

  //   //click login
  //   const getSpy = jest.spyOn(axios, "get");

  //   expect(getSpy).toBeCalled();
  // });
});
