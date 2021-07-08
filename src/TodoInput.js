export const TodoInput = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItem();
  };

  return (
    <div className="todo-input">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter a Todo"
          onChange={(e) => props.setTodoItem(e.target.value)}
        />
        <button>++</button>
      </form>
    </div>
  );
};
