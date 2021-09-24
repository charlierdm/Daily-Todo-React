import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todoList,
  setTodoList,
  deleteItem,
  editItem,
  setCheck,
}) => {
  return (
    <>
      {todoList.length > 0 && (
        <div className="todo-list">
          {todoList.map((todo) => (
            <TodoItem
              item={todo.item}
              key={todo.id}
              checkItem={todo.check}
              deleteItem={() => deleteItem(todo.id)}
              editItem={() => editItem(todo.id)}
              setCheck={() => setCheck(todo.id)}
              data-testid="list-item"
            />
          ))}
          <button className="button-clear" onClick={() => setTodoList([])}>
            clear list
            <img
              className="delete-svg"
              src={process.env.PUBLIC_URL + "/delete.svg"}
              width="15px"
              alt="plus-symbol"
            />
          </button>
        </div>
      )}
    </>
  );
};
