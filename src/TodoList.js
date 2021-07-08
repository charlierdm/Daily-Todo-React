import { TodoItem } from "./TodoItem";

export const TodoList = (props) => {
  return (
    <div className="todo-list">
      <div className="todo-item">
        {props.todoList.map((todo) => (
          <TodoItem item={todo.item} key={todo.id}/>
        ))}
      </div>
    </div>
  );
};
