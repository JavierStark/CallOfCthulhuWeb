import { useState } from 'react'
import './App.css'
import Stats from "./components/Stats.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Stats/>
    </div>
  )
}

export default App
