import "./App.css";
import uuid from "react-uuid";
import { useState } from "react";
import { Header } from "./Header";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addItemToList = () => {
    const newItem = {
      id: uuid(),
      item: todoItem,
    };
    const updatedItems = [...todoList, newItem];
    setTodoList(updatedItems);
    setTodoItem("");
  };

  const clearList = () => {
    setTodoList([]);
  }

  return (
    <div className="TodoContainer">
      <Header />
      <TodoInput todoItem={todoItem} setTodoItem={setTodoItem} addItem={addItemToList}/>
      <TodoList todoList={todoList} clearList={clearList}/>
    </div>
  );
}

export default App;
