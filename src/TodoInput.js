export const TodoInput = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItem();
    props.setEdit(false)
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
        {props.edit ? (
          <button className="button-input">
            <img
              src={process.env.PUBLIC_URL + "/edit.svg"}
              width="10px"
              alt="plus-symbol"
            />
          </button>
        ) : (
          <button className="button-input">
            <img
              src={process.env.PUBLIC_URL + "/plus.svg"}
              width="10px"
              alt="plus-symbol"
            />
          </button>
        )}
      </form>
    </div>
  );
};
