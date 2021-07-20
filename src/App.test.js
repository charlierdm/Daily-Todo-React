import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { App } from "./App";

afterEach(() => {
  window.localStorage.clear();
});

it("allows the user to enter a todo item and the input bar to reset", () => {
  render(<App />);
  const userInput = screen.getByPlaceholderText("Enter a Todo");
  fireEvent.change(userInput, { target: { value: "Read my book" } });
  fireEvent.click(screen.getByText("add todo"));
  expect(userInput.value).toEqual("");
  expect(screen.getByText("Read my book")).toBeInTheDocument();
});

it("allows the user to edit a todo item", () => {
  render(<App />);
  const userInput = screen.getByPlaceholderText("Enter a Todo");
  fireEvent.change(userInput, { target: { value: "Read my book" } });
  fireEvent.click(screen.getByText("add todo"));
  fireEvent.click(screen.getAllByTestId("edit")[0]);
  fireEvent.change(userInput, { target: { value: "Ride my bike" } });
  fireEvent.click(screen.getByText("edit todo"));
  expect(screen.getByText("Ride my bike")).toBeInTheDocument();
});

it("allows the user to delete a todo item", () => {
  render(<App />);
  const userInput = screen.getByPlaceholderText("Enter a Todo");
  fireEvent.change(userInput, { target: { value: "Read my book" } });
  fireEvent.click(screen.getByText("add todo"));
  fireEvent.click(screen.getAllByTestId("delete")[0]);
  expect(screen.queryAllByTestId("list-item").length).toEqual(0);
  expect(screen.queryByText("Read my book")).toEqual(null);
});
