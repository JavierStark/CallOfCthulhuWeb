import './App.css'
import { Route, Routes } from "react-router-dom";
import Stats from "./components/Stats/Stats.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import Occupation from "./components/Occupation/Occupation.jsx";
import Skills from "./components/Skills/Skills.jsx";
import PDFCreator from "./components/PDFCreator/PDFCreator.jsx";

function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/stats'} element={<Stats />} />
        <Route path={'/occupation'} element={<Occupation />} />
        <Route path={'/skills'} element={<Skills />} />
        <Route path={'/pdf-creator'} element={<PDFCreator />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
