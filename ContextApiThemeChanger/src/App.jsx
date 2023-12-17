import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Profile />
      <Login/>
    </UserContextProvider>
  )
}

export default App
