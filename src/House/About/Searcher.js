import { Call, DateRange, HealthAndSafety, LocalHotel, LocalHotelOutlined, LocalHotelRounded, LocalHotelSharp, LocalHotelTwoTone, LockClock, TravelExplore } from '@mui/icons-material'
import React from 'react'


function Searcher() {
  return (
    <div className='  mb-16 rounded-2xl gap-4 relative  text-[#519e51] mx-[100px] md:mx-[100px]  z-30  xs:mx-4 grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1  items-center width-full ' >

          
        <div className='flex justify-center items-center shadow-2xl shadow-gray-600    h-[200px] md:h-[200px] sm:h-[160px] xs:h-[160px]    bg-white flex flex-1 flex-col rounded-2xl items-left justify-start'>
          <Call  className="icon  rotator"  />
          <h1 className="text-center text-4xl lg:text-2xl md:text-3xl  sm:text-2xl xs:text-2xl text-[#519e51]" > <span className="font-bold text-black text-4xl lg:text-xl md:text2xl sm:text-2xl xs:text-2xl   " > Hotel</span> Service</h1>
        </div>
        <div className='flex justify-center items-center shadow-2xl shadow-gray-600    h-[200px] md:h-[200px] sm:h-[160px] xs:h-[160px]    bg-white flex flex-1 flex-col rounded-2xl items-left justify-start'>
          <LocalHotelRounded  className="icon  rotator"  />
          <h1 className="text-center text-4xl lg:text-2xl md:text-3xl  sm:text-2xl xs:text-2xl text-[#519e51]" > <span className="font-bold text-black text-4xl lg:text-xl md:text2xl sm:text-2xl xs:text-2xl   " > Hotel</span> Service</h1>
        </div>
        <div className='flex justify-center items-center shadow-2xl shadow-gray-600   h-[200px] md:h-[200px] sm:h-[160px] xs:h-[160px]    bg-white flex flex-1 flex-col rounded-2xl items-left justify-start'>
          <LockClock  className="icon  rotator" />
          <h1 className="text-center text-4xl lg:text-2xl md:text-3xl  sm:text-2xl xs:text-2xl text-[#519e51]" ><span  className="font-bold text-black text-4xl lg:text-xl md:text2xl sm:text-2xl xs:text-2xl  " > Tour</span> Package</h1>
        </div>
        <div className='flex justify-center items-center shadow-2xl shadow-gray-600   h-[200px] md:h-[200px] sm:h-[160px] xs:h-[160px]   bg-white flex flex-1 flex-col items-left rounded-2xl justify-start'>
          <DateRange  className="icon  rotator"  />
          <h1 className="text-center text-4xl  lg:text-2xl md:text-3xl  sm:text-2xl xs:text-2xl text-[#519e51]"> <span className="font-bold text-black text-4xl lg:text-xl md:text2xl sm:text-2xl xs:text-2xl  ">Tour</span>  Booking</h1>
        </div>
       
    </div>
  )
}   

export default Searcher