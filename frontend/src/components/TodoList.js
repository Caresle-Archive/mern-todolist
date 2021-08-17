import './TodoList.css'
import Todo from "./Todo"

const TodoList = ({ todos, change, handleClear, handleEditTodo }) => {
  return (
    <div className="card">
      {
        todos.map(element => <Todo handleEditTodo={handleEditTodo} change={change} key={'todos' + element.id} data={element}/>)
      }
      <button className="btn btn-danger" onClick={handleClear}>Clear</button>
    </div>
  )
}

export default TodoList