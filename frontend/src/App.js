import './App.css'
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

const App = () => {
  return (
    <div className="App">
      <h1 className="text--white">To-do list</h1>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default App
