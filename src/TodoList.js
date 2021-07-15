import { TodoItem } from "./TodoItem";

export const TodoList = (props) => {
  return (
    <>
      {props.todoList.length >= 1 && (
        <div className="todo-list">
          <div className="todo-item">
            {props.todoList.map((todo) => (
              <TodoItem
                item={todo.item}
                key={todo.id}
                deleteItem={() => props.deleteItem(todo.id)}
                editItem={() => props.editItem(todo.id)}
              />
            ))}
          </div>
          {props.todoList.length >= 1 && (
            <button className="button-clear" onClick={() => props.clearList()}>
              Clear List
              <img
                className="delete-svg"
                src={process.env.PUBLIC_URL + "/delete.svg"}
                width="15px"
                alt="plus-symbol"
              />
            </button>
          )}
        </div>
      )}
    </>
  );
};
