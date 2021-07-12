export const TodoItem = (props) => {
  return (
    <div>
      <p key={props.id}>
        {props.item}
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
      </p>
    </div>
  );
};
