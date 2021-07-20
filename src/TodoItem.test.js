import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { TodoItem } from "./TodoItem";

const editItem = jest.fn();
const deleteItem = jest.fn();

const todo = {
  check: false,
  id: "0a352b-e776-65c-6861-3a2c2df181",
  item: "Hello",
};

it("renders a Todo item", () => {
  render(<TodoItem item={todo.item} />);
  const newItem = screen.getByText("Hello");
  expect(newItem).toBeInTheDocument();
});

it('allows the user to select edit item', () => {
  render(<TodoItem item={todo.item} editItem={editItem} />);
  fireEvent.click(screen.getByTestId("edit"));
  expect(editItem).toHaveBeenCalledTimes(1)
})

it('allows the user to select delete item', () => {
  render(<TodoItem item={todo.item} deleteItem={deleteItem} />);
  fireEvent.click(screen.getByTestId("delete"));
  expect(deleteItem).toHaveBeenCalledTimes(1)
})

it("lets the user check the checkbox", () => {
  render(<TodoItem item={todo.item} />);
  const checkBox = screen.getByTestId("checkbox");
  fireEvent.change(checkBox, { target: { value: true } });
  expect(checkBox.value).toEqual("true");
});
