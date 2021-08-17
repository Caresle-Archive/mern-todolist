import './Todo.css'

const Todo = ({ data, change, handleEditTodo }) => {
  const { id, name, completed } = data

  return (
    <div className="todo">
      <span></span>
      <input type="checkbox" checked={completed} onChange={() => change(data)}></input>
      <h3>{name}</h3>
      <div className="btn-container">
        <button className="btn btn-todo" onClick={() => handleEditTodo(id)}>Edit</button>
      </div>
    </div>
  )
}

export default Todo