import { TodoItem } from "./TodoItem";

export const TodoList = (props) => {
  const clearList = () => {
    props.setTodoList([]);
  };

  return (
    <>
      {props.todoList.length >= 1 && (
        <div className="todo-list" >
          <div className="todo-item">
            {props.todoList.map((todo) => (
              <TodoItem
                item={todo.item}
                key={todo.id}
                checkItem={todo.check}
                deleteItem={() => props.deleteItem(todo.id)}
                editItem={() => props.editItem(todo.id)}
                setCheck={() => props.setCheck(todo.id)}
                data-testid="list-item"
              />
            ))}
          </div>
          {props.todoList.length >= 1 && (
            <button className="button-clear" onClick={() => clearList()}>
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
