import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { TodoList } from "./TodoList";

const setTodoList = jest.fn();

const todoList = [
  {
    check: false,
    id: "0a352b-e776-65c-6861-3a2c2df181",
    item: "Zoom meeting",
  },
  {
    check: false,
    id: "23f884b-4828-44b6-4e1-441b377e4ab",
    item: "Wash clothes",
  },
  {
    check: true,
    id: "5bafe3-afe7-47f3-b73-18d25333bbe2",
    item: "Ride bike",
  },
];

it('renders a list of todo items', () => {
  render(<TodoList todoList={todoList} />)
  expect(screen.getByText("Zoom meeting")).toBeInTheDocument();
  expect(screen.getByText("Wash clothes")).toBeInTheDocument();
  expect(screen.getByText("Ride bike")).toBeInTheDocument();
})

it('allows the user to clear the list', () => {
  render(<TodoList todoList={todoList} setTodoList={setTodoList} />)
  fireEvent.click(screen.getByText("Clear List"));
  expect(setTodoList).toHaveBeenLastCalledWith([])
})