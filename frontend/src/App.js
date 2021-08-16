import './App.css'
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: 'todo 1',
      completed: false
    },
    {
      id: 2,
      name: 'todo 2',
      completed: true
    }
  ])

  const handleChangeTodo = (todo) => {
    const newTodos = todos.map(t => {
      if (t.id === todo.id) {
        t.completed = !t.completed
      }
      return t
    })
    setTodos(newTodos)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const todo = document.getElementById('todo-name').value
    const ids = todos.map(t => t.id)
    const maxId = Math.max(...ids)
    const newTodo = {
      id: maxId + 1,
      name: todo,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const handleClear = (e) => {
    const todosUnCompleted = todos.filter(t => t.completed !== true)
    setTodos([...todosUnCompleted])
  }

  return (
    <div className="App">
      <h1 className="text--white">To-do list</h1>
      <TodoForm handleSubmit={handleSubmit} />
      <TodoList todos={todos} handleClear={handleClear} change={handleChangeTodo}/>
    </div>
  )
}

export default App
