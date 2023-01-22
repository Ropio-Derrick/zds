// import React ,{useState} from 'react'
import {Link } from 'react-router-dom'

// const Navigationbar = () => {

    

//     // Navbar Color Changer
//     const [colorChange, setColorchange] = useState(false);
//     const changeNavbarColor = () =>{
//        if(window.scrollY >= 80){
//          setColorchange(true);
//        }
//        else{
//          setColorchange(false);
//        }
//     };
//     window.addEventListener('scroll', changeNavbarColor);

//   return (

//     <div className="bg-transparent flex flex-row justify-between items-center  ">
//       <div className="Flex-1">
//         <h1 className='primary font-3xl'>ZPS Adventures</h1>
//       </div>
//       <div  className='flex-3'>
//                 <Link to="/" className='no-underline text-lg primary ' >
//                   Home</Link>
//                 <Link to="/about"   >
//                   Safari</Link>
//                 <Link to="/contact"  >
//                  Safari & Style</Link>
//                 <Link to="/about" >
//                    About</Link>
//                 <Link to="/contact"   >
//                   Contact</Link>
//       </div>
      
//     </div>
//   );
// }

// export default Navigationbar;




import { useState } from "react"
import {HiMenuAlt4} from "react-icons/hi"
import {AiOutlineClose} from "react-icons/ai"

import Logom from "../../Images/logo1.png"

const NavbarItem =({title,classProps})=>{
 return (<li className={"mx-4 curser-pointer  " + {classProps}  }>
        {title}
 </li>)
}

const Navbar =()=>{

    const [toggleMenu,setToggleMenu] = useState(false)

    return(
        <nav className="w-full flex md:justify-center justify-between items-center p-4  sm:p-[7px] xs:p-[7px] ">
            <div className="md:flex-[0.5] flex-initial justify-center items-center ">
                <img src={Logom}  alt="Logo" className="w-32 cursor-pointer" />
            </div>
            <ul className="text-blacks md:flex hidden list-none flex-row justify-between items-center flex-initial  " >
                {[
                  <Link to="/" className='no-underline text-lg primary hover:text-black duration-300 ease-in-out delay-300 ' >
                     Home</Link>,
                   <Link to="/about" className='no-underline text-lg primary hover:text-black duration-300 ease-in-out delay-300 '  >
                     Safari</Link>,
                   <Link to="/contact" className='no-underline text-lg primary hover:text-black duration-300 ease-in-out delay-300 ' >
                    Safari & Style</Link>,
                   <Link to="/about" className='no-underline text-lg primary hover:text-black duration-300 ease-in-out delay-300 ' >
                      About</Link>,
                   <Link to="/contact" className='no-underline text-lg primary hover:text-black duration-300 ease-in-out delay-300 '  >
                     Contact</Link>,
              ].map((item,index)=>(

                <NavbarItem  key={item + index} title={item} />
                ))}

            </ul>
            <div className="flex relative ">
                    {toggleMenu
                    ? <AiOutlineClose fontSize={28} className="text-transparent md:hidden cursor-pointer" onClick={()=>setToggleMenu(false)}/>:
                    <HiMenuAlt4 fontSize={28} className="text-black md:hidden cursor-pointer" onClick={()=>setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <ul className="z-10 fixed top-0 -right-2  p-3 width-screen h-screen shadow-2xl md:hidden list-none
                        flex flex-col justify-start items-end round-md  bg-[#519e51] text-white animate-slide-in duration-300 ease-in-out delay-300
                        " >
                            <li className="text-xl w-full my-2 " >
                                <AiOutlineClose onClick={()=>setToggleMenu(false) } />
                            </li>
                            {[
                               <Link to="/" className='no-underline text-lg text-white  hover:text-black duration-300 ease-in-out delay-300 ' >
                                 Home</Link>,
                               <Link to="/about" className='no-underline text-lg text-white  hover:text-black duration-300 ease-in-out delay-300 '  >
                                 Safari</Link>,
                               <Link to="/contact" className='no-underline text-lg text-white  hover:text-black duration-300 ease-in-out delay-300 ' >
                                Safari & Style</Link>,
                               <Link to="/about" className='no-underline text-lg text-white   hover:text-black duration-300 ease-in-out delay-300 ' >
                                  About</Link>,
                               <Link to="/contact" className='no-underline text-lg text-white hover:text-black duration-300 ease-in-out delay-300 '  >
                                 Contact</Link>,
                            ].map((item,index)=>(

                                <NavbarItem  key={item + index} title={item} classProps="my-2 text-lg" />
                            ))}
                         
                        </ul>
                    )}
            </div>
        </nav>
    )
}

export default Navbar