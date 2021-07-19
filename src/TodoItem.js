export const TodoItem = (props) => {
  return (
    <div className="todo-item">
      <div key={props.id}>
        <input
          className="checkbox"
          type="checkbox"
          data-testid="checkbox"
          onChange={() => props.setCheck()}
          defaultChecked={props.checkItem}
        />
        {props.item}
        <img
          className="edit-svg"
          src={process.env.PUBLIC_URL + "/edit.svg"}
          width="16px"
          alt="plus-symbol"
          onClick={() => props.editItem()}
        />
        <img
          className="delete-svg"
          src={process.env.PUBLIC_URL + "/delete.svg"}
          width="16px"
          alt="plus-symbol"
          onClick={() => props.deleteItem()}
        />
      </div>
    </div>
  );
};
