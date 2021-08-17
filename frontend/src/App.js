import './App.css'
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { useState, useEffect } from 'react'

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/')
    .then(response =>  {
      if (response.status === 204) {
        return []
      }
      return response.json()
    })
    .then(data => setTodos([...data]))
  }, [])

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
    const todosCompleted = todos.filter(t => t.completed === true)
    setTodos([...todosUnCompleted])
    todosCompleted.forEach(element => {
      fetch('http://localhost:3001/api/v1/' + element.id, {
        method: 'DELETE'
      })
      .then(res => res.text())
      .then(res =>  console.log(res))
    })
  }

  const handleEditTodo = (todoId) => {
    const inputTodo = document.getElementById('todo-name')
    const todo = todos.filter(todo => todo.id === todoId)
    console.log(todo)
    inputTodo.value = todo[0].name
  }

  return (
    <div className="App">
      <h1 className="text--white">To-do list</h1>
      <TodoForm handleSubmit={handleSubmit} />
      <TodoList todos={todos} handleEditTodo={handleEditTodo} handleClear={handleClear} change={handleChangeTodo}/>
    </div>
  )
}

export default App
