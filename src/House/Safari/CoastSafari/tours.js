import React from 'react'
import Main from "../../../Images/Diani.jpg"
import One from "../../../Images/home2.jpg"
import Two from "../../../Images/green2.jpg"
import Three from "../../../Images/jeep.jpg"

function tours() {
  return (
    <div className='mx-[50px] md:mx-50px xs:mx-4 sm:mx-4 ' >
        <h1 className=" mx-[50px] md:mx-[50px]  xs:mx-4  text-left  text-5xl md:text-3xl sm:text-3xl xs:text-3xl  text-[#519e51]" > <span className="font-bold text-black " > New Coast</span> Destinations</h1>

        <div className=' shadow-2xl shadow-black  h-[300px] xs:h-auto sm:h-auto mb-[50px] grid grid-cols-3  '>
            <div className='group col-span-2 md:xs:col-span-2 xs:col-span-full sm:col-span-full  h-[450px] md:h-[570px] sm:h-[250px] xs:h-[250px] relative'>
                <img src={Main} className="  h-full w-full" />
                <div className=' flex-col  px-[50px]  md:px-[50px] xs:px-4  flex justify-center  items-left sm:items-center xs:items-center  top-0 left-0 h-full w-full absolute DarkSwiper'>
                    <h1 className='tratext group-hover:opacity-0  text-6xl transition ease-in-out delay-500'>Lets Go<br/>Amboseli</h1>
                    <p className=" xs:hidden sm:hidden font-lg group-hover:opacity-0 text-[#f2f2f290] md:text-left sm:text-center xs:text-center  transition ease-in-out delay-500">One of the most popular tourist destinations in Africa, Diani is well-established as one of the best wildlife-viewing destinations in the world.</p>
                    <h1 className='animate-ping text-center text-white mt-8 group-hover:opacity-0 transition ease-in-out delay-500 text-left md:text-left sm:text-center xs:text-center  text-3xl font-semibold'>Wild<span className='font-light'>life</span> </h1>

                </div>
            </div>
            <div className="bg-red-900   m-0 p-0 flex flex-col col-span-1 md:xs:col-span-1 xs:col-span-full sm:col-span-full " >
                <div className='two-block sm:h-[190px] xs:h-[190px] group relative'  >
                    <img src={One} className=" h-full w-full" />
                    <div className='flex justify-left  flex-col items-left sm:items-center xs:items-center  px-4 top-0 left-0 h-full w-full absolute DarkSwiper'>
                    <h1 className='text-white mt-8 group-hover:opacity-0 transition ease-in-out delay-500 text-left md:text-left sm:text-center xs:text-center  text-4xl font-semibold'>Tsavo <span className='font-light'>East</span> </h1>
                    <p className="font-lg group-hover:opacity-0 text-[#f2f2f290] transition ease-in-out delay-500 md:text-left sm:text-center xs:text-center ">One of the most popular tourist destinations in Africa, Diani is well.</p>
                    </div>

                </div>
                <div className='two-block sm:h-[190px] xs:h-[190px] group relative' >
                    <img src={Two} className="h-full w-full" />
                    <div className='flex justify-left  items-left  flex-col px-4  sm:items-center xs:items-center  top-0 left-0 h-full w-full absolute DarkSwiper'>
                        <h1 className='text-white mt-8 group-hover:opacity-0 transition ease-in-out delay-500 text-left md:text-left sm:text-center xs:text-center  text-4xl font-semibold'>Tsavo <span className='font-light'>West</span> </h1>
                        <p className="font-lg group-hover:opacity-0 text-[#f2f2f290] md:text-left sm:text-center xs:text-center  transition ease-in-out delay-500">One of the most popular tourist destinations in Africa,</p>          
         
                    </div>

                </div>
                <div className='two-block sm:h-[190px] xs:h-[190px] relative group'  >
                    <img src={Three} className="  h-full w-full"  />
                    <div className='  px-[100px]  md:px-[100px] xs:px-4  flex flex-col justify-left  items-left sm:items-center xs:items-center px-4 top-0 left-0 h-full w-full absolute DarkSwiper'>
                        <h1 className='text-white mt-8 group-hover:opacity-0 transition ease-in-out delay-500 text-left md:text-left sm:text-center xs:text-center   text-4xl font-semibold'>Maasai <span className='font-light'>Mara</span> </h1>
                        <p className="font-lg transition ease-in-out delay-500 group-hover:opacity-0 text-[#f2f2f290] md:text-left sm:text-center xs:text-center ">One of the most popular tourist destinations in Africa, Diani is well-</p>            
          
                    </div>

                </div>
            
            </div>
        </div>
    </div>
  )
}

export default tours