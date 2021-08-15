import './Todo.css'

const Todo = () => {
  return (
    <div className="todo">
      <input type="checkbox"></input>
      <h3>Todo</h3>
      <button className="btn btn-todo">Edit</button>
      <button className="btn btn-todo btn-danger">Del</button>
    </div>
  )
}

export default Todo