export const TodoInput = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItem();
    props.setEdit(false);
  };

  return (
    <div className="todo-input">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={props.todoItem}
          type="text"
          placeholder="Enter a Todo"
          onChange={(e) => props.setTodoItem(e.target.value)}
        />
        <button className={props.edit ? "button-edit" : "button-input"}>
          {props.edit ? "edit todo" : "add todo"}
          <img
            className={props.edit ? "edit-svg" : "input-svg"}
            src={
              props.edit
                ? process.env.PUBLIC_URL + "/edit.svg"
                : process.env.PUBLIC_URL + "/plus.svg"
            }
            width="10px"
            alt={props.edit ? "edit symbol" : "plus-symbol"}
          />
        </button>
      </form>
    </div>
  );
};
