import React from 'react'
import Zebra from "../../Images/zebra.png"
import { DateRange, HealthAndSafety, KeyboardDoubleArrowRight, LockClock, TravelExplore } from '@mui/icons-material'

const About = () =>{
  return(
    <div className='mt-32 mb-20 mx-[100px] md:mx-[100px] sm:mx-4 xs:mx-4 flex flex-col justify-left items-left   '>
        <h2 className="text-2xl md:text-2xl sm:text-xl xs:text-xl mb-4 md:mb-4 sm:mb-[7px] xs:mb-[7px]  md:text-left sm:text-center xs:text-center">About ZP Safaris</h2>
        <h2 className="Primary text-4xl md:text-3xl sm:text-3xl xs:text-3xl mb-4 md:mb-4 sm:mb-[7px] xs:mb-[7px]  font-bold text-left  md:text-left sm:text-center xs:text-center">VOTRE SAFARI SUR MESURE</h2>
        <p className=" xs:w-full sm:w-full text-left md:text-left sm:text-center xs:text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt eget sapien eget, maximus c
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className='flex flex-row justify-between items-center   '>
          <div>
            <div className='flex flex-row'>
              <KeyboardDoubleArrowRight className='text-left Primary' />
              <p>Safety Guaranteed</p>
            </div>
            <div className='flex flex-row '>
              <KeyboardDoubleArrowRight className='text-left Primary' />
              <p>Safety Guaranteed</p>
            </div>
            <div className='flex flex-row ' >
              <KeyboardDoubleArrowRight className='text-left Primary' />
              <p>Safety Guaranteed</p>
            </div>
            <button className='shadow-xl shadow-gray-400 mix-blend-multiply bg-blend-normal Btnprimary' >Learn More</button>   

          </div>
          <div>
            <img src={Zebra} className='h-[230px] w-[250px] rounded-full shadow-2xl shadow-gray-600 ' />
          </div>
        </div>
      
    </div>
  )
}

export default About 