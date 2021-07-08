export const TodoList = (props) => {
  return (
    <div className="todo-list">
      {props.todoList.map(
      todo => <p>{todo.item}</p>
      )}
    </div>
  )
}
