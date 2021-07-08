import { TodoItem } from "./TodoItem";

export const TodoList = (props) => {
  return (
    <div className="todo-list">
      <div className="todo-item">
        {props.todoList.map((todo) => (
          <TodoItem item={todo.item} key={todo.id} deleteItem={() => props.deleteItem(todo.id)}/>
        ))}
        {props.todoList.length >= 1 && (
          <button onClick={() => props.clearList()}>Clear List</button>
        )}
      </div>
    </div>
  );
};
