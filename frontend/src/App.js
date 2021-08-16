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

  return (
    <div className="App">
      <h1 className="text--white">To-do list</h1>
      <TodoForm />
      <TodoList todos={todos} change={handleChangeTodo}/>
    </div>
  )
}

export default App
