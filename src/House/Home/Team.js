import { BookOnline } from '@mui/icons-material'
import React from 'react'

function Team() {
  return (
    <div className='mt-16 mb-12 mx-[50px] md:mx-50px xs:mx-4 sm:mx-4 flex flex-col justify-center items-center'>
        <h2 className="text-2xl md:text-2xl sm:text-xl xs:text-xl mb-4 md:mb-4 sm:mb-[7px] xs:mb-[7px] ">OUR TEAM</h2>
        <h2 className="text-4xl  Primary  md:text-3xl sm:text-3xl xs:text-3xl mb-4 md:mb-4 sm:mb-[7px] xs:mb-[7px] font-bold text-center">Experienced People Behind Us</h2>
        <p className="w-[80%] md:w-[80%] xs:w-full sm:w-full text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt eget sapien eget, maximus c
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        {/* <button className='shadow-xl shadow-gray-400 mix-blend-multiply bg-blend-normal Btnprimary' >Learn More</button> */}
    </div>  
  )
}

export default Team