import './Todo.css'

const Todo = ({ data, change }) => {
  const { name, completed } = data

  return (
    <div className="todo">
      <span></span>
      <input type="checkbox" checked={completed} onChange={() => change(data)}></input>
      <h3>{name}</h3>
      <div className="btn-container">
        <button className="btn btn-todo">Edit</button>
      </div>
    </div>
  )
}

export default Todo