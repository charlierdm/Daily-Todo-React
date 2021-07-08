import "./App.css";
import uuid from "react-uuid";
import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

function App() {
  const [todoItem, setTodoItem] = useState({});
  const [todoList, setTodoList] = useState([]);

  const addItemToList = (item) => {
    const newItem = {
      id: uuid(),
      item: todoItem,
    };


  };

  return (
    <div className="TodoContainer">
      <TodoInput setTodoItem={setTodoItem} />
      <TodoList />
    </div>
  );
}

export default App;
