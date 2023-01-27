import React from 'react'
import Imga from "../../Images/home2.jpg"
import Imgb from "../../Images/hOME3.jpg"
import Imgc from "../../Images/HOME4.jpg"

function Landing() {
  return (
    <div>
        <div className='flex justify-center items-center  relative h-[800px] md:h-[600px]  xs:h-[100vh] sm:h-[100vh] top-0'>
            <img src={Imgb} className='  background bg-left-bottom h-full ' />
            <span className="absolute  h-full w-full" >
              <div className="flex-col  flex justify-center h-full items-center">
                <div className="flex flex-row">
                  <hr className="Line" />
                </div>
                <h1 className='tratext group-hover:opacity-0  text-6xl md:text-6xl sm:text-4xl xs:text-4xl   transition ease-in-out delay-500'>Your Dream<br/>Vaccation</h1>
              </div>
            </span>
          </div>
    </div>
  )
}

export default Landing