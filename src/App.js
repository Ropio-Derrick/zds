import React,{useState,useEffect} from "react"
import { Routes,Route } from "react-router-dom";
import Home from "./House/Home/Home";
import About from "./House/About/Index"
import Contact from './House/Contact/Index'
import "./App.css"
import Footer from "./House/Footer/Footer";
import Loader from "./loader";
import Navbar from "./House/Navbar/Navbar";
import CoastSafari from "./House/Safari/CoastSafari/CSafari"

let App = ()=>{

  const[loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
    setLoading(false)

    },3000)
  
    
  }, [])
  

  return(
    <div>
      {
        loading ? <Loader/> : 
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="about" element={ <About/> } />
            <Route path="contact" element={ <Contact/> } />
            <Route path="CoastSafari" element={ <CoastSafari/> } />

          </Routes>
          <Footer/>
        </div>
      }
      
    </div>
  )
}

export default App;
