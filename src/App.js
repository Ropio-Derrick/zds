import React from "react"
import { Routes,Route } from "react-router-dom";
import Home from "./House/Home/Home";
import About from "./House/About/Index"
import Contact from './House/Contact/Index'
import Navbar from "./House/Navbar/Navbar"
import "./App.css"
import Footer from "./House/Footer/Footer";

let App = ()=>{
  return(
    <div>
      <Navbar className="NavbarSet" />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
