import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Register from ".";

it("Register shows default value", () => {
  render(<Register />);
  // const input = screen.getByTestId('test')
  // console.log('inddd',input);

  expect(screen.queryByRole("heading")).toBeInTheDocument();
});
