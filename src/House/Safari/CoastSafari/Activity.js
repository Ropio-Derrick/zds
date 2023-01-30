import React from 'react'
import { Call, DateRange, Explore, Fireplace, HealthAndSafety, LockClock, Nature, NordicWalking, Outbox, Signpost, TravelExplore } from '@mui/icons-material'


function Activity() {
  return (
    <div>
        <div className='mt-4 mb-16 mx-[100px] md:mx-[100px] sm:mx-4 xs:mx-4 flex flex-col justify-between items-center'>
            <h2 className="text-2xl md:text-2xl sm:text-xl xs:text-xl mb-4 md:mb-4 sm:mb-[7px] xs:mb-[7px]">Trip Activities</h2>
            <h2 className="text-4xl md:text-3xl sm:text-3xl xs:text-3xl mb-4 md:mb-4 sm:mb-[7px] xs:mb-[7px]  font-bold text-center">Explore Our Adventure & Activity</h2>
            <p className="w-[80%] md:w-[80%] xs:w-full sm:w-full text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt eget sapien eget, maximus c
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
        </div>
        <div className='  mb-16 rounded-2xl gap-[2px] relative  text-[#519e51] mx-[100px] md:mx-[100px]  z-30  xs:mx-4 grid grid-cols-6 lg:grid-cols-6 md:grid-cols-3 xs:grid-cols-2  items-center width-full ' >
            <div className='flex justify-center items-center  shadow-2xl shadow-gray-400 hover:shadow-gray-100 transition ease-in-out delay-200  h-[150px] md:h-[100px] sm:h-[160px] xs:h-[160px]     rounded-2xl bg-white flex flex-1 flex-col items-left justify-start'>
              <Nature className="icon  rotator"/>
              <h1 className="text-center text-2xl lg:text-xl md:text-lg sm:text-2xl xs:text-2xl  text-[#519e51]" > <span className="font-bold text-black " > Advent</span>ure</h1>
            </div>
            <div className='flex justify-center items-center shadow-2xl shadow-gray-400 hover:shadow-gray-100 transition ease-in-out delay-200  h-[150px] md:h-[100px] sm:h-[160px] xs:h-[160px]    bg-white flex flex-1 flex-col rounded-2xl items-left justify-start'>
              <NordicWalking  className="icon  rotator"  />
              <h1 className="text-center text-2xl lg:text-xl md:text-lg  sm:text-2xl xs:text-2xl text-[#519e51]" > <span className="font-bold text-black " > Treck</span>ing</h1>
            </div>
            <div className='flex justify-center items-center shadow-2xl shadow-gray-400 hover:shadow-gray-100 transition ease-in-out delay-200 h-[150px] md:h-[100px] sm:h-[160px] xs:h-[160px]    bg-white flex flex-1 flex-col rounded-2xl items-left justify-start'>
              <Fireplace className="icon  rotator" />
              <h1 className="text-center text-2xl lg:text-xl md:text-lg  sm:text-2xl xs:text-2xl text-[#519e51]" ><span  className="font-bold text-black " >Camp</span> Fire</h1>
            </div>
            <div className='flex justify-center items-center shadow-2xl shadow-gray-400 hover:shadow-gray-100 transition ease-in-out delay-200 h-[150px] md:h-[100px] sm:h-[160px] xs:h-[160px]   bg-white flex flex-1 flex-col items-left rounded-2xl justify-start'>
              <Signpost  className="icon  rotator"  />
              <h1 className="text-center text-2xl  lg:text-xl md:text-lg  sm:text-2xl xs:text-2xl text-[#5119e51]"> <span className="font-bold text-black ">Off</span> Road</h1>
            </div>
            <div className='flex justify-center items-center shadow-2xl shadow-gray-400 hover:shadow-gray-100 transition ease-in-out delay-200 h-[150px] md:h-[100px] sm:h-[160px] xs:h-[160px]   bg-white flex flex-1 flex-col items-left rounded-2xl justify-start'>
              <Outbox  className="icon  rotator"  />
              <h1 className="text-center text-2xl  lg:text-xl md:text-lg  sm:text-2xl xs:text-2xl text-[#519e51]"> <span className="font-bold text-black ">Camp</span>ing</h1>
            </div>
            <div className='flex justify-center items-center shadow-2xl shadow-gray-400 hover:shadow-gray-100 transition ease-in-out delay-200 h-[150px] md:h-[100px] sm:h-[160px] xs:h-[160px]   bg-white flex flex-1 flex-col items-left rounded-2xl justify-start'>
              <Explore  className="icon  rotator"  />
              <h1 className="text-center text-2xl  lg:text-xl md:text-lg  sm:text-2xl xs:text-2xl text-[#519e51]"> <span className="font-bold text-black ">Expor</span>ing</h1>
            </div>



        </div>
    </div>
  )
}

export default Activity