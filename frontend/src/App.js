import './App.css'
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { useState, useEffect } from 'react'

const url = 'http://localhost:3001/api/v1/'

const App = () => {
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState({
    edit: false,
    id: ''
  })

  useEffect(() => {
    fetch(url)
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
    const input = document.getElementById('todo-name')
    const todo = input.value
    const newTodo = {
      name: todo,
      completed: false
    }
    if (editTodo.edit) {
      fetch(url + editTodo.id, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(newTodo)
      }).then(response => response.json())
        .then(data => {
          let todoUpdate = todos.find(element => element.id === editTodo.id)
          todoUpdate.name = data.name
          const newTodos = todos.map(element => {
            if (element.id === todoUpdate.id) {
              element = todoUpdate
            }
            return element
          })
          setTodos(newTodos)
        })
    } else {
      fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(newTodo)
      }).then(response =>  response.json())
        .then(data => setTodos([...todos, data]))
    }
    setEditTodo({edit: false, id: ''})
    input.value = ''
  }

  const deleteTodo = async (arr) => {
    for (const todo  of arr) {
      await fetch(url + todo.id, {
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
    inputTodo.value = todo[0].name
    setEditTodo({edit: true, id: todoId})
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
