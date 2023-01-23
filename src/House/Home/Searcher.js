import { DateRange, HealthAndSafety, LockClock, TravelExplore } from '@mui/icons-material'
import React from 'react'


function Searcher() {
  return (
    <div className='  mb-16 rounded-2xl gap-4 relative mt-[-100px] text-[#519e51] mx-[100px] md:mx-[100px]  z-50  xs:mx-4 grid grid-cols-4 md:grid-cols-2 xs:grid-cols-1  items-center width-full ' >
        <div className='flex justify-center items-center  shadow-2xl shadow-black  h-[200px] rounded-2xl bg-white flex flex-1 flex-col items-left justify-start'>
          <TravelExplore className="icon"/>
          <h1 className="text-center text-4xl md:text-3xl sm:text-2xl xs:text-2xl  text-[#519e51]" > <span className="font-bold text-black " > New</span> Destinations</h1>
        </div>
        <div className='flex justify-center items-center shadow-2xl shadow-black    h-[200px]  bg-white flex flex-1 flex-col rounded-2xl items-left justify-start'>
          <HealthAndSafety  className="icon"  />
          <h1 className="text-center text-4xl md:text-3xl  sm:text-2xl xs:text-2xl text-[#519e51]" > <span className="font-bold text-black " > Safe</span> Adventure</h1>
        </div>
        <div className='flex justify-center items-center shadow-2xl shadow-black   h-[200px]   bg-white flex flex-1 flex-col rounded-2xl items-left justify-start'>
          <LockClock  className="icon " />
          <h1 className="text-center text-4xl md:text-3xl  sm:text-2xl xs:text-2xl text-[#519e51]" ><span  className="font-bold text-black " > 24hrs</span> Guidance</h1>
        </div>
        <div className='flex justify-center items-center shadow-2xl shadow-black   h-[200px]  bg-white flex flex-1 flex-col items-left rounded-2xl justify-start'>
          <DateRange  className="icon" />
          <h1 className="text-center text-4xl  md:text-3xl  sm:text-2xl xs:text-2xl text-[#519e51]"> <span className="font-bold text-black ">Flexible</span>  Date</h1>
        </div>
       
    </div>
  )
}   

export default Searcher