import './TodoForm.css'

const TodoForm = ({ handleSubmit }) => {

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <input id="todo-name" className="input-no-border" type="text" placeholder="New Task"></input>
      <button type="submit" className="btn btn-no-outline">Add</button>
    </form>
  )
}

export default TodoForm