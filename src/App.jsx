import { useState } from 'react'
import Navigation from './components/NavBar/NavBar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navigation/>
    </>
  )
}

export default App
