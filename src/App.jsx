import {useState} from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Stats from "./components/Stats/Stats.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import Occupation from "./components/Occupation/Occupation.jsx";
import Skills from "./components/Skills/Skills.jsx";
import PDFTest from "./components/PDFTest/PDFTest.jsx";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/stats'} element={<Stats/>}/>
        <Route path={'/occupation'} element={<Occupation/>}/>
        <Route path={'/skills'} element={<Skills/>}/>
        <Route path={'/pdf-test'} element={<PDFTest/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
