export const TodoInput = ({todoItem, setTodoItem, addItem, edit, setEdit}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem();
    setEdit(false);
  };

  return (
    <form className="todo-input" onSubmit={(e) => handleSubmit(e)}>
      <input
        value={todoItem}
        type="text"
        placeholder="Enter a Todo"
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <button className={edit ? "button-edit" : "button-input"}>
        {edit ? "edit todo" : "add todo"}
        <img
          className={edit ? "edit-svg" : "input-svg"}
          src={
            edit
              ? process.env.PUBLIC_URL + "/edit.svg"
              : process.env.PUBLIC_URL + "/plus.svg"
          }
          width="10px"
          alt={edit ? "edit symbol" : "plus-symbol"}
        />
      </button>
    </form>
  );
};
