import { useState } from 'react'
import './App.css'

//Import do router
import { Outlet } from 'react-router-dom'

//Import de componentes
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
