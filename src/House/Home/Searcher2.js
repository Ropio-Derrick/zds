import React from 'react'
import { DateRange, HealthAndSafety, LockClock, TravelExplore } from '@mui/icons-material'


function Searcher2() {
  return (
    <div className='  mb-20 md:mb-16 sm:mb-8 xs:mb-8 rounded-2xl gap-4 relative mt-4  text-[#519e51] mx-[100px] md:mx-[100px]  z-30  xs:mx-4 grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1  items-center width-full ' >
        <div className='flex justify-center items-center  shadow-2xl shadow-gray-600 h-[200px] md:h-[200px] sm:h-[160px] xs:h-[160px]     rounded-2xl bg-white flex flex-1 flex-col items-left justify-start'>
          <TravelExplore className="icon  rotator"/>
          <h1 className="text-center text-4xl lg:text-2xl md:text-3xl sm:text-2xl xs:text-2xl  text-[#519e51]" > <span className="font-bold text-black " > New</span> Destinations</h1>
        </div>
        <div className='flex justify-center items-center shadow-2xl shadow-gray-600    h-[200px] md:h-[200px] sm:h-[160px] xs:h-[160px]    bg-white flex flex-1 flex-col rounded-2xl items-left justify-start'>
          <HealthAndSafety  className="icon  rotator"  />
          <h1 className="text-center text-4xl lg:text-2xl md:text-3xl  sm:text-2xl xs:text-2xl text-[#519e51]" > <span className="font-bold text-black " > Safe</span> Adventure</h1>
        </div>
        <div className='flex justify-center items-center shadow-2xl shadow-gray-600   h-[200px] md:h-[200px] sm:h-[160px] xs:h-[160px]    bg-white flex flex-1 flex-col rounded-2xl items-left justify-start'>
          <LockClock  className="icon  rotator" />
          <h1 className="text-center text-4xl lg:text-2xl md:text-3xl  sm:text-2xl xs:text-2xl text-[#519e51]" ><span  className="font-bold text-black " > 24hrs</span> Guidance</h1>
        </div>
        <div className='flex justify-center items-center shadow-2xl shadow-gray-600   h-[200px] md:h-[200px] sm:h-[160px] xs:h-[160px]   bg-white flex flex-1 flex-col items-left rounded-2xl justify-start'>
          <DateRange  className="icon  rotator"  />
          <h1 className="text-center text-4xl  lg:text-2xl md:text-3xl  sm:text-2xl xs:text-2xl text-[#519e51]"> <span className="font-bold text-black ">Flexible</span>  Date</h1>
        </div>
    </div>
  )
}

export default Searcher2