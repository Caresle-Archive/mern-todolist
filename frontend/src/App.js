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
    const newTodo = {
      name: todo,
      completed: false
    }
    fetch('http://localhost:3001/api/v1/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    }).then(response =>  response.json())
      .then(data => setTodos([...todos, data]))
    
  }

  const deleteTodo = async (arr) => {
    for (const todo  of arr) {
      await fetch('http://localhost:3001/api/v1/' + todo.id, {
        method: 'DELETE'
      })
    }
  }

  const handleClear = (e) => {
    const todosUnCompleted = todos.filter(t => t.completed !== true)
    const todosCompleted = todos.filter(t => t.completed === true)
    setTodos([...todosUnCompleted])
    deleteTodo(todosCompleted)
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
