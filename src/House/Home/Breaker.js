import { BookOnline, CarRental, Hotel, HouseSiding, LocationCity, ModeOfTravel, Tour } from '@mui/icons-material'
import React from 'react'
// import {FaCity} from 

function Breaker() {
  return (
    <div className='Breaker1'>
        <div className='w-full h-full flex flex-col justify-center items-center greenMorphism' >
            <h2 className="text-2xl md:text-2xl sm:text-lg xs:text-lg mb-4 text-white">LET'S JOIN AND PROVE IT</h2>
            <h2 className="text-4xl text-white md:text-3xl sm:text-3xl xs:text-3xl mb-4 font-bold text-center">BEST TRAVEL IN AFRICA</h2>
            <div className='grid grid-cols-3 md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 justify-center items-center '>
                <div className="flex flex-row justify-center md:flex-col xs:flex-col sm:flex-col items-center">
                    <ModeOfTravel className="text-white Brecons" />
                    <h1 className=' text-xl md:text-xl sm:text-base xs:text-base text-white text-center' >Travels</h1>
                </div>
                <div className="flex flex-row justify-center  md:flex items-center sm:hidden xs:hidden">
                    <LocationCity  className="text-white Brecons"/>
                    <h1 className=' text-xl text-white text-center' >Experience</h1>
                </div>
                <div className='flex flex-row justify-center items-center md:flex sm:hidden xs:hidden'>
                    <Tour className="text-white Brecons"/>
                    <h1 className=' text-xl text-white text-center' >Moments</h1>
                </div>
            </div>
      </div>
      
    </div>
  )
}

export default Breaker