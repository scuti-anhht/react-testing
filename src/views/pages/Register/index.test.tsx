import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Register from ".";

test("Register shows default value", () => {
  render(<Register />);
  expect(screen.queryByRole("heading")).toBeInTheDocument();
});
