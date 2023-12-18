import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './context/TodoContext'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const todosArr = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0)
      setTodos(todosArr)
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  const addTodo = (todo) => {
    setTodos((prevTodos) => [{
      id: Date.now(),
      ...todo
    }, ...prevTodos])
  }

  const updateTodo = (todo, id) => {
    setTodos((prevTodos) => prevTodos.map(
      (prevTodo) => prevTodo.id === id ? todo : prevTodo
    ))
  }

  const toggleComplete = (id) => {
    setTodos((prevTodos) => prevTodos.map(
      (prevTodo) => prevTodo.id === id ?
        {
          ...prevTodo,
          completed: !prevTodo.completed
        }
        : prevTodo
    ))
  }

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <TodoContextProvider value={{
      todos, addTodo,
      updateTodo,
      removeTodo,
      toggleComplete
    }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
