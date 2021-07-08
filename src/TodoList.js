export const TodoList = (props) => {
  return (
    <div className="todo-list">
      <div className="todo-item">
        {props.todoList.map((todo) => (
          <p key={todo.id}>{todo.item}</p>
        ))}
      </div>
    </div>
  );
};
