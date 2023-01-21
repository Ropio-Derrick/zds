import React,{useState,useEffect} from "react"
import { Routes,Route } from "react-router-dom";
import Home from "./House/Home/Home";
import About from "./House/About/Index"
import Contact from './House/Contact/Index'
import Navbar from "./House/Navbar/Navbar"
import "./App.css"
import Footer from "./House/Footer/Footer";
import Loader from "./loader";


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
          <Navbar className="NavbarSet" />
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="about" element={ <About/> } />
            <Route path="contact" element={ <Contact/> } />

          </Routes>
          <Footer/>
        </div>
      }
      
    </div>
  )
}

export default App;
