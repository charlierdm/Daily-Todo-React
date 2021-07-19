import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { TodoInput } from "./TodoInput";

it("renders the input form", () => {
  render(<TodoInput />);
  const input = screen.getByPlaceholderText("Enter a Todo");
  expect(input).toBeInTheDocument();
});

it("renders the input button", () => {
  render(<TodoInput />);
  const button = screen.getByText("add todo");
  expect(button).toBeInTheDocument();
})

it("accepts user input", () => {
  render(<TodoInput setTodoItem={() => {}} />);
  const input = screen.getByPlaceholderText("Enter a Todo");
  fireEvent.change(input, { target: { value: "Wash my clothes" } });
  expect(input.value).toEqual("Wash my clothes")
});

