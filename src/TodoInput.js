export const TodoInput = (props) => {
  return (
    <div className="todo-input">
      <input type="text" placeholder="Enter a Todo" onChange={(e) => props.setTodoItem(e.target.value)}/>
      <button type="submit">++</button>
    </div>
  )
}
