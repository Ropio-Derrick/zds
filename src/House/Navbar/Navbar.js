// import React ,{useState} from 'react'
import React from "react"
import { ReactDOM } from "react"
import {Link } from 'react-router-dom'
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
        <nav className="shadow-lg shadow-gray-400 uppercase w-full fixed z-50 flex md:justify-between bg-white justify-between items-center p-2   sm:p-[5px] xs:p-[5px] ">
            <div className="md:flex-[0.5] flex-initial justify-center items-center p-0 m-0 ">
                <img src={Logom}  alt="Logo" className="w-40   cursor-pointer" />
            </div>
            <ul className="text-blacks md:flex hidden list-none flex-row justify-left items-center flex-initial  " >
                {[
                  <Link to="/" className='no-underline text-lg primary hover:text-black duration-300 ease-in-out delay-300 ' >
                     Home</Link>,
                  <div class="relative group">
                    <button class="uppercase flex flex-row items-center w-full  py-4 no-underline text-lg primary hover:text-black duration-300 ease-in-out delay-300 bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
                        <span>Safari</span>
                    </button>
                    <div class=" absolute hidden bg-grey-200 group-hover:block">
                        
                        <div class="px-4  pt-8 pb-4 backdrop-blur-lg Bglight border-t-4 border-black shadow-2xl rounded-b-[30px]">
                          <div class="font-semibold tracking-wider grid grid-cols-1 text-sm w-[350px] ">
                            <Link to="/contact" className='primary1 border-[#fff20] py-[5px] mt-[2px] px-4  border-b-[1px] rounded-t-[15px]   uppercase no-underline  hover:bg-white duration-200 ease-in-out delay-100 ' >
                              Coast Safaris
                            </Link>
                            <Link to="/contact" className='primary1 border-[#fff20] py-[5px] mt-[2px] px-4 border-b-[1px] rounded-t-[15px]  no-underline uppercase hover:bg-white duration-200 ease-in-out delay-100 ' >
                             Coastal excursions
                            </Link>
                            <Link to="/contact" className='primary1 border-[#fff20] py-[5px] mt-[2px] px-4 border-b-[1px] rounded-t-[15px]  no-underline uppercase hover:bg-white duration-200 ease-in-out delay-100 ' >
                              Nairobi Safaris
                            </Link>
                            <Link to="/contact" className='primary1 border-[#fff20] py-[5px] mt-[2px] px-4 border-b-[1px] rounded-t-[15px]  no-underline e uppercase hover:bg-white duration-200 ease-in-out delay-100 ' >
                              Safari From Nairobi To Coast

                            </Link>
                            <Link to="/contact" className='primary1 border-[#fff20] py-[5px] mt-[2px] px-4 border-b-[1px] rounded-t-[15px]  no-underline uppercase hover:bg-white duration-200 ease-in-out delay-100 ' >
                              Safari From Coast To Nairobi
                            </Link>
                          </div>
                        </div>
                    </div>
                  </div>  ,
                <div class="relative group">
                <button class="uppercase flex flex-row items-center w-full  py-4 no-underline text-lg primary hover:text-black duration-300 ease-in-out delay-300 bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
                    <span>Popular</span>
                </button>
                <div class=" absolute hidden bg-grey-200 group-hover:block">
                    
                    <div class="px-4  pt-8 pb-4 backdrop-blur-lg Bglight border-t-4 border-black shadow-2xl rounded-b-[30px]">
                      <div class="font-semibold tracking-wider grid grid-cols-1 text-sm w-[400px] ">
                        <Link to="/contact" className='primary1 border-[#fff20] py-[5px] mt-[2px] px-4  border-b-[1px] rounded-t-[15px]   uppercase no-underline  hover:bg-white duration-200 ease-in-out delay-100 ' >
                          6 Day Safari From Nairobi To Nairobi
                        </Link>
                        <Link to="/contact" className='primary1 border-[#fff20] py-[5px] mt-[2px] px-4 border-b-[1px] rounded-t-[15px]  no-underline uppercase hover:bg-white duration-200 ease-in-out delay-100 ' >
                          7 Day Safari From Nairobi To Nairobi
                        </Link>
                        <Link to="/contact" className='primary1 border-[#fff20] py-[5px] mt-[2px] px-4 border-b-[1px] rounded-t-[15px]  no-underline uppercase hover:bg-white duration-200 ease-in-out delay-100 ' >
                          8 Day Safari From Nairobi To Coast
                        </Link>
                        <Link to="/contact" className='primary1 border-[#fff20] py-[5px] mt-[2px] px-4 border-b-[1px] rounded-t-[15px]  no-underline e uppercase hover:bg-white duration-200 ease-in-out delay-100 ' >
                          9 Day Safari From Nairobi To Coast
                        </Link>
                        <Link to="/contact" className='primary1 border-[#fff20] py-[5px] mt-[2px] px-4 border-b-[1px] rounded-t-[15px]  no-underline uppercase hover:bg-white duration-200 ease-in-out delay-100 ' >
                          10 Day Safari From Nairobi To Coast
                        </Link>
                        <Link to="/contact" className='primary1 border-[#fff20] py-[5px] mt-[2px] px-4 border-b-[1px] rounded-t-[15px]  no-underline uppercase hover:bg-white duration-200 ease-in-out delay-100 ' >
                          12 Day Safari From Nairobi To Coast
                        </Link>
                      </div>
                    </div>
                </div>
              </div>  ,
                                
              <Link to="/about" className='no-underline text-lg primary hover:text-black duration-300 ease-in-out delay-300 ' >
              Gallery</Link>,
              <Link to="/contact" className='no-underline text-lg primary hover:text-black duration-300 ease-in-out delay-300 '  >
                Parks
              </Link>,
                            
              <div class="relative group">
              <button class="uppercase flex flex-row items-center w-full  py-4 no-underline text-lg primary hover:text-black duration-300 ease-in-out delay-300 bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
                  <span>About Us</span>
              </button>
              <div class=" absolute hidden bg-grey-200 ml-[-300px] group-hover:block">
                  
                  <div class="px-4  pt-8 pb-4 backdrop-blur-lg Bglight border-t-4 border-black shadow-2xl rounded-b-[30px]">
                    <div class="font-semibold tracking-wider grid grid-cols-1 text-sm w-[400px] ">
                      <Link to="/contact" className='primary1 border-[#fff20] py-[5px] mt-[2px] px-4  border-b-[1px] rounded-t-[15px]   uppercase no-underline  hover:bg-white duration-200 ease-in-out delay-100 ' >
                        Coast Safaris
                      </Link>
                      <Link to="/contact" className='primary1 border-[#fff20] py-[5px] mt-[2px] px-4 border-b-[1px] rounded-t-[15px]  no-underline uppercase hover:bg-white duration-200 ease-in-out delay-100 ' >
                       Coastal excursions
                      </Link>
                      <Link to="/contact" className='primary1 border-[#fff20] py-[5px] mt-[2px] px-4 border-b-[1px] rounded-t-[15px]  no-underline uppercase hover:bg-white duration-200 ease-in-out delay-100 ' >
                        Nairobi Safaris
                      </Link>
                      <Link to="/contact" className='primary1 border-[#fff20] py-[5px] mt-[2px] px-4 border-b-[1px] rounded-t-[15px]  no-underline e uppercase hover:bg-white duration-200 ease-in-out delay-100 ' >
                        Safari From Nairobi To Coa
                      </Link>
                      <Link to="/contact" className='primary1 border-[#fff20] py-[5px] mt-[2px] px-4 border-b-[1px] rounded-t-[15px]  no-underline uppercase hover:bg-white duration-200 ease-in-out delay-100 ' >
                        Safari From Coast To Nairobi
                      </Link>
                    </div>
                  </div>
              </div>
            </div>  ,   

            
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