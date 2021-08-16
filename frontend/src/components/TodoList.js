import './TodoList.css'
import Todo from "./Todo"

const TodoList = ({ todos, change }) => {
  return (
    <div className="card">
      {
        todos.map(element => <Todo change={change} key={'todos' + element.id} data={element}/>)
      }
      <button className="btn btn-danger">Clear</button>
    </div>
  )
}

export default TodoList