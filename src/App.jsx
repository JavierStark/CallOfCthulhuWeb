import {useState} from 'react'
import './App.css'
import Stats from "./components/Stats/Stats.jsx";
import {Route, Routes} from "react-router-dom";

function Header() {
  return null;
}

function Footer() {
  return null;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/Stats'} element={<Stats/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
