import { Call, DateRange, HealthAndSafety, LockClock, TravelExplore } from '@mui/icons-material'
import React from 'react'
import Two from "../../../Images/HOME4.jpg"



function Searcher() {
  return (
    <div className='shadow shadow-gray-400 mb-16 rounded-2xl relative    text-[#519e51] mx-[100px] md:mx-[100px]  z-30  xs:mx-4 grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1  items-center width-full ' >

        <div className='two-block sm:h-[190px] xs:h-[190px] group relative' >
          <img src={Two} className="h-full w-full " />
          <div className='flex justify-center  items-center flex-col px-4  sm:items-center xs:items-center  top-0 left-0 h-full w-full absolute DarkSwiper'>
              <h1 className='text-white mt-8 group-hover:opacity-0 transition ease-in-out delay-500 text-center md:text-center sm:text-center xs:text-center  text-2xl font-semibold'>Mombasa<span className='font-normal'> Marine</span> </h1>
              <p className="text-xl group-hover:opacity-0 text-[#f2f2f290] md:text-center sm:text-center xs:text-center  transition ease-in-out delay-500">Nairobi to Coast</p>          

          </div>
        </div>
    
        <div className='two-block sm:h-[190px] xs:h-[190px]  group relative' >
          <img src={Two} className="h-full w-full  " />
          <div className='flex justify-center  items-center  flex-col px-4  sm:items-center xs:items-center  top-0 left-0 h-full w-full absolute DarkSwiper'>
              <h1 className='text-white mt-8 group-hover:opacity-0 transition ease-in-out delay-500  text-center md:text-center sm:text-center xs:text-center  text-2xl font-semibold'>Taita<span className='font-normal'> Hills</span> </h1>
              <p className="text-xl group-hover:opacity-0 text-[#f2f2f290] md:text-center sm:text-center xs:text-center  transition ease-in-out delay-500">Nairobi to Coast</p>          

          </div>
        </div>
        <div className='two-block sm:h-[190px] xs:h-[190px] group relative' >
          <img src={Two} className="h-full w-full " />
          <div className='flex justify-center  items-center  flex-col px-4  sm:items-center xs:items-center  top-0 left-0 h-full w-full absolute DarkSwiper'>
              <h1 className='text-white mt-8 group-hover:opacity-0 transition ease-in-out delay-500  text-center md:text-center sm:text-center xs:text-center  text-2xl font-semibold'>Mama <span className='font-normal'>Savana</span> </h1>
              <p className="text-xl group-hover:opacity-0 text-[#f2f2f290] md:text-center sm:text-center xs:text-center  transition ease-in-out delay-500">Nairobi to Coast</p>          

          </div>
        </div>
        <div className='two-block sm:h-[190px] xs:h-[190px]   group relative' >
          <img src={Two} className="h-full w-full " />
          <div className='flex justify-center  items-center flex-col px-4  sm:items-center xs:items-center  top-0 left-0 h-full w-full absolute DarkSwiper'>
              <h1 className='text-white mt-8 group-hover:opacity-0 transition ease-in-out delay-500  text-center md:text-center sm:text-center xs:text-center  text-2xl font-semibold'>Watamu <span className='font-normal'>Park</span> </h1>
              <p className="text-xl group-hover:opacity-0 text-[#f2f2f290] md:text-center sm:text-center xs:text-center  transition ease-in-out delay-500">Nairobi to Coast</p>          

          </div>
        </div>
       
    </div>
  )
}   

export default Searcher