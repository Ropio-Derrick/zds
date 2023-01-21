import React ,{useState} from 'react'
import {Link } from 'react-router-dom'

const Navigationbar = () => {

    

    // Navbar Color Changer
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);

  return (

    <div className="bg-transparent flex flex-row justify-between items-center  ">
      <div className="Flex-1">
        <h1 className='primary font-3xl'>ZPS Adventures</h1>
      </div>
      <div  className='flex-3'>
                <Link to="/" className='no-underline text-lg primary ' >
                  Home</Link>
                <Link to="/about"   >
                  Safari</Link>
                <Link to="/contact"  >
                 Safari & Style</Link>
                <Link to="/about" >
                   About</Link>
                <Link to="/contact"   >
                  Contact</Link>
      </div>
      
    </div>
  );
}

export default Navigationbar;