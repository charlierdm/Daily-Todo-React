import "./App.css";
import uuid from "react-uuid";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const App = () => {
  const localStorageLoad = localStorage.length > 0 ? JSON.parse(localStorage.todoList) : [];

  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState(localStorageLoad);
  const [editItem, setEditItem] = useState(false);

  useEffect(() => {
    setLocalStorage(todoList);
  }, [todoList]);

  const setLocalStorage = (list) =>
    localStorage.setItem("todoList", JSON.stringify(list));

  const addItemToList = () => {
    if (todoItem === "") return;
    const newItem = {
      id: uuid(),
      item: todoItem,
      check: false,
    };
    const updatedItems = [...todoList, newItem];
    setTodoList(updatedItems);
    setTodoItem("");
  };

  const filterList = (id) => [...todoList].filter((todo) => todo.id != id);

  const selectItem = (id) => [...todoList].find((item) => item.id === id);

  const handleDeleteItem = (id) => {
    setTodoList(filterList(id));
  };

  const handleEditItem = (id) => {
    if (editItem) return;
    setEditItem(true);
    setTodoItem(selectItem(id).item);
    setTodoList(filterList(id));
  };

  const handleSetCheck = (id) => {
    const updatedItems = [...todoList];
    selectItem(id).check = !selectItem.check;
    setTodoList(updatedItems);
  };

  return (
    <div className="TodoContainer">
      <Header />
      <TodoInput
        todoItem={todoItem}
        setTodoItem={setTodoItem}
        addItem={addItemToList}
        edit={editItem}
        setEdit={setEditItem}
      />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        deleteItem={handleDeleteItem}
        editItem={handleEditItem}
        setCheck={handleSetCheck}
      />
    </div>
  );
};
