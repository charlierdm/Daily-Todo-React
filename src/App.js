import "./App.css";
import uuid from "react-uuid";
import { useState } from "react";
import { Header } from "./Header";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

function App() {
  const localStorageLoad = JSON.parse(localStorage.todoList) || {};

  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState(localStorageLoad);
  const [editItem, setEditItem] = useState(false);

  console.log(todoList);

  const addItemToList = () => {
    const newItem = {
      id: uuid(),
      item: todoItem,
      check: false,
    };
    const updatedItems = [...todoList, newItem];
    setTodoList(updatedItems);
    setLocalStorage(updatedItems);
    setTodoItem("");
  };

  const setLocalStorage = (list) => {
    window.localStorage.setItem("todoList", JSON.stringify(list));
  };

  const clearList = () => {
    setTodoList([]);
    setLocalStorage([]);
  };

  const handleDeleteItem = (id) => {
    const newFilteredArray = todoList.filter((todo) => todo.id !== id);
    setLocalStorage(newFilteredArray);
    setTodoList(newFilteredArray);
  };

  const handleEditItem = (id) => {
    const newFilteredArray = todoList.filter((todo) => todo.id !== id);
    const selectItem = todoList.find((item) => item.id === id);

    setEditItem(true);
    setTodoItem(selectItem.item);
    setLocalStorage(newFilteredArray);
    setTodoList(newFilteredArray);
  };

  const handleSetCheck = (id) => {
    const selectItem = todoList.find((item) => item.id === id);
    selectItem.check = !selectItem.check;
    setLocalStorage(todoList);
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
        clearList={clearList}
        deleteItem={handleDeleteItem}
        editItem={handleEditItem}
        setCheck={handleSetCheck}
      />
    </div>
  );
}

export default App;
