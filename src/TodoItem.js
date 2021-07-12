export const TodoItem = (props) => {
  return (
    <div className="todo-item">
      <p key={props.id}>
        {props.item}
        <br></br>
        <div className="svg">
          <img
            className="edit-delete-svg"
            src={process.env.PUBLIC_URL + "/edit.svg"}
            width="15px"
            alt="plus-symbol"
            onClick={() => props.editItem()}
          />
          <img
            className="edit-delete-svg"
            src={process.env.PUBLIC_URL + "/delete.svg"}
            width="15px"
            alt="plus-symbol"
            onClick={() => props.deleteItem()}
          />
        </div>
      </p>
    </div>
  );
};
