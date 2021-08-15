import './TodoList.css'
import Todo from "./Todo"

const TodoList = () => {
  return (
    <div className="card">
      <Todo />
      <Todo />
      <button className="btn btn-danger">Clear</button>
    </div>
  )
}

export default TodoList