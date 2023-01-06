import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Register from ".";

test("Register shows default value", async () => {
  render(<Register />);
  const data = screen.getByText(/about/i);
  console.log(data);
  // expect(screen.getAllByRole("button", { hidden: true }));
});
