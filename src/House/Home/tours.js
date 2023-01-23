import React from 'react'
import Main from "../../Images/Diani.jpg"
import One from "../../Images/home2.jpg"
import Two from "../../Images/green2.jpg"
import Three from "../../Images/jeep.jpg"

function tours() {
  return (
    <div className='xs:mx-4 sm:px-4 ' >
        <h1 className=" mx-[100px] md:mx-[100px]  xs:mx-4  text-left  text-5xl md:text-3xl sm:text-3xl xs:text-3xl  text-[#519e51]" > <span className="font-bold text-black " > New</span> Destinations</h1>

        <div className=' shadow-2xl shadow-black  h-[300px] xs:h-auto sm:h-auto mb-[300px] flex flex-row sm:flex-col xs:flex-col flex-wrap '>
            <div className='group basis-2/3 sm:basis-full xs:basis-full h-[450px] sm:h-[250px] xs:h-[250px] relative z-50 bg-red-900'>
                <img src={Main} className=" h-full w-full" />
                <div className=' flex-col  px-[100px]  md:px-[100px] xs:px-4  flex justify-center  items-left top-0 left-0 h-full w-full absolute DarkSwiper'>
                    <h1 className='text-white group-hover:opacity-0 transition ease-in-out delay-500  text-4xl font-black'>Your Dream<br/>Vaccation</h1>
                    <p className=" xs:hidden sm:hidden font-lg group-hover:opacity-0 text-[#f2f2f290] transition ease-in-out delay-500">One of the most popular tourist destinations in Africa, Diani is well-established as one of the best wildlife-viewing destinations in the world.</p>
                    <h1 className='animate-ping text-center text-white mt-8 group-hover:opacity-0 transition ease-in-out delay-500 text-left text-4xl font-semibold'>DIA<span className='font-light'>NI</span> </h1>

                </div>
            </div>
            <div className="bg-red-900   m-0 p-0 flex flex-col basis-1/3 sm:basis-full xs:basis-full " >
                <div className='two-block sm:h-[1900px] xs:h-[190px] group relative'  >
                    <img src={One} className=" h-full w-full" />
                    <div className='flex justify-left  flex-col items-left px-4 top-0 left-0 h-full w-full absolute DarkSwiper'>
                    <h1 className='text-white mt-8 group-hover:opacity-0 transition ease-in-out delay-500 text-left text-4xl font-semibold'>Momb<span className='font-light'>asa</span> </h1>
                    <p className="font-lg group-hover:opacity-0 text-[#f2f2f290] transition ease-in-out delay-500">One of the most popular tourist destinations in Africa, Diani is well.</p>
                    </div>

                </div>
                <div className='two-block sm:h-[1900px] xs:h-[190px] group relative' >
                    <img src={Two} className="h-full w-full" />
                    <div className='flex justify-left  items-left  flex-col px-4   top-0 left-0 h-full w-full absolute DarkSwiper'>
                        <h1 className='text-white mt-8 group-hover:opacity-0 transition ease-in-out delay-500 text-left text-4xl font-semibold'>Nair<span className='font-light'>obi</span> </h1>
                        <p className="font-lg group-hover:opacity-0 text-[#f2f2f290] transition ease-in-out delay-500">One of the most popular tourist destinations in Africa,</p>          
                    </div>

                </div>
                <div className='two-block sm:h-[1900px] xs:h-[190px] relative group'  >
                    <img src={Three} className="  h-full w-full"  />
                    <div className='  px-[100px]  md:px-[100px] xs:px-4  flex flex-col justify-left  items-left px-4 top-0 left-0 h-full w-full absolute DarkSwiper'>
                        <h1 className='text-white mt-8 group-hover:opacity-0 transition ease-in-out delay-500 text-left text-4xl font-semibold'>DIA<span className='font-light'>NI</span> </h1>
                        <p className="font-lg transition ease-in-out delay-500 group-hover:opacity-0 text-[#f2f2f290] ">One of the most popular tourist destinations in Africa, Diani is well-</p>            
                    </div>

                </div>
            
            </div>
        </div>
    </div>
  )
}

export default tours