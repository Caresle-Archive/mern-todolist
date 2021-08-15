import './Todo.css'

const Todo = () => {
  const handleComplete = (e) => {
    const span = e.target.parentNode.childNodes[0]
    if (span.classList.contains('completed')) {
      span.classList.remove('completed')
    } else {
      span.classList.add('completed')
    }
  }
  
  return (
    <div className="todo">
      <span className=""></span>
      <input type="checkbox" onClick={handleComplete}></input>
      <h3>Todo</h3>
      <div className="btn-container">
        <button className="btn btn-todo">Edit</button>
      </div>
    </div>
  )
}

export default Todo