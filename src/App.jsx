import {useState} from 'react'
import './App.css'
import Stats from "./components/Stats/Stats.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/'} element={<Stats/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
