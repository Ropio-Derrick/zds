import React from 'react'
import { DateRange, HealthAndSafety, LockClock, TravelExplore } from '@mui/icons-material'

const About = () =>{
  return(
    <div className='mt-32 mb-20 mx-[100px] md:mx-[100px] sm:mx-4 xs:mx-4 flex flex-col justify-between items-center'>
        <h2 className="text-2xl md:text-2xl sm:text-xl xs:text-xl mb-4 md:mb-4 sm:mb-[7px] xs:mb-[7px]">About ZP Safaris</h2>
        <h2 className="text-4xl md:text-3xl sm:text-3xl xs:text-3xl mb-4 md:mb-4 sm:mb-[7px] xs:mb-[7px]  font-bold text-center">Explore Mysterious Places With Us</h2>
        <p className="w-[80%] md:w-[80%] xs:w-full sm:w-full text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt eget sapien eget, maximus c
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className='shadow-xl shadow-gray-400 mix-blend-multiply bg-blend-normal Btnprimary' >Learn More</button>
    
    </div>
  )
}

export default About 