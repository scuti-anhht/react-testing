import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Register from ".";
import { act } from "react-dom/test-utils";

test("Register shows default value", async () => {
  render(<Register />);
  await act(async () => {
    fireEvent.change(screen.getByLabelText("username"), {
      target: { value: "0966666666" },
    });
    fireEvent.change(screen.getByLabelText("password"), {
      target: { value: "1232113" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Login" }));
  });
  expect(screen.getByLabelText("username")).toHaveValue("0966666666");
  expect(screen.getByLabelText("password")).toHaveValue("1232113");
  expect(screen.getByTestId("username")).toBeInTheDocument();
  expect(screen.getByTestId("password")).toBeInTheDocument();
});

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
