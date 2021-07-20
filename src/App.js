import "./App.css";
import uuid from "react-uuid";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

function App() {
  const localStorageLoad = JSON.parse(localStorage.todoList) || {};

  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState(localStorageLoad);
  const [editItem, setEditItem] = useState(false);

  useEffect(() => {
    setLocalStorage(todoList);
  }, [todoList]);

  const setLocalStorage = (list) => {
    window.localStorage.setItem("todoList", JSON.stringify(list));
  };

  const addItemToList = () => {
    const newItem = {
      id: uuid(),
      item: todoItem,
      check: false,
    };
    const updatedItems = [...todoList, newItem];
    setTodoList(updatedItems);
    setTodoItem("");
  };

  const handleDeleteItem = (id) => {
    const newFilteredArray = todoList.filter((todo) => todo.id !== id);
    setTodoList(newFilteredArray);
  };

  const handleEditItem = (id) => {
    const newFilteredArray = todoList.filter((todo) => todo.id !== id);
    const selectItem = todoList.find((item) => item.id === id);

    setEditItem(true);
    setTodoItem(selectItem.item);
    setTodoList(newFilteredArray);
  };

  const handleSetCheck = (id) => {
    const updatedItems = [...todoList];
    const selectItem = updatedItems.find((item) => item.id === id);
    selectItem.check = !selectItem.check;
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
}

export default App;
