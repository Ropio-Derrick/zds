import React from 'react'
import Two from "../../../Images/hOME3.jpg"
import One from "../../../Images/HOME4.jpg"

function Trips() {
  return (
    <div className='grid grid-cols-2 pb-16 mt-[-120px] gap-[10px] mx-4 '>
        <div className=' grid grid-cols-2 gap-[10px] ' >
        <div className='two-block sm:h-[190px] h-[440px] md:h-[440px] xs:h-[190px] shadow-2xl shadow-gray-300 rounded-2xl  group relative' >
          <img src={Two} className="h-full w-full rounded-2xl " />
          <div className='flex justify-center  items-center rounded-2xl  flex-col px-4  sm:items-center xs:items-center  top-0 left-0 h-full w-full absolute DarkSwiper'>
              <h1 className='text-white mt-8 group-hover:opacity-0 transition ease-in-out delay-500 text-left md:text-left sm:text-center xs:text-center  text-2xl font-semibold'>8 <span className='font-normal'>Days</span> </h1>
              <p className="text-xl group-hover:opacity-0 text-white md:text-center sm:text-center xs:text-center  transition ease-in-out delay-500">Nairobi to Coast</p>          

          </div>
        </div>
            
        <div className='two-block sm:h-[190px] h-[440px] md:h-[440px] xs:h-[190px] shadow-2xl shadow-gray-300 rounded-2xl  group relative' >
          <img src={Two} className="h-full w-full rounded-2xl " />
          <div className='flex justify-center  items-center rounded-2xl  flex-col px-4  sm:items-center xs:items-center  top-0 left-0 h-full w-full absolute DarkSwiper'>
              <h1 className='text-white mt-8 group-hover:opacity-0 transition ease-in-out delay-500 text-left md:text-left sm:text-center xs:text-center  text-2xl font-semibold'>9 <span className='font-normal'>Days</span> </h1>
              <p className="text-   xl group-hover:opacity-0 text-white md:text-center sm:text-center xs:text-center  transition ease-in-out delay-500">Nairobi to Coast</p>          

          </div>
        </div>
        </div>
        <div className=' grid grid-cols-2 gap-[10px] ' >
            <div className='two-block sm:h-[190px] h-[190px] md:h-[190px] xs:h-[190px] shadow-2xl shadow-gray-300 rounded-2xl  group relative' >
              <img src={Two} className="h-full w-full rounded-2xl " />
              <div className='flex justify-center  items-center rounded-2xl  flex-col px-4  sm:items-center xs:items-center  top-0 left-0 h-full w-full absolute DarkSwiper'>
                  <h1 className='text-white mt-8 group-hover:opacity-0 transition ease-in-out delay-500 text-left md:text-left sm:text-center xs:text-center  text-2xl font-semibold'>10 <span className='font-normal'>Days</span> </h1>
                  <p className="text-xl group-hover:opacity-0 text-[#f2f2f290] md:text-center sm:text-center xs:text-center  transition ease-in-out delay-500">Nairobi to Coast</p>          

              </div>
            </div>
             <div className='two-block sm:h-[190px] h-[190px] md:h-[190px] xs:h-[190px] shadow-2xl shadow-gray-300 rounded-2xl  group relative' >
              <img src={Two} className="h-full w-full rounded-2xl " />
              <div className='flex justify-center  items-center rounded-2xl  flex-col px-4  sm:items-center xs:items-center  top-0 left-0 h-full w-full absolute DarkSwiper'>
                  <h1 className='text-white mt-8 group-hover:opacity-0 transition ease-in-out delay-500 text-left md:text-left sm:text-center xs:text-center  text-2xl font-semibold'>12 <span className='font-normal'>Days</span> </h1>
                  <p className="text-xl group-hover:opacity-0 text-[#f2f2f290] md:text-center sm:text-center xs:text-center  transition ease-in-out delay-500">Nairobi to Coast</p>          

              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Trips