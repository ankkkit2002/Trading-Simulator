import { useState } from 'react'
import Navigation from './components/NavBar/NavBar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navigation/>
    </>
  )
}

export default App
