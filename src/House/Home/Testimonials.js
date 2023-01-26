import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { DateRange, HealthAndSafety, LockClock, TravelExplore } from '@mui/icons-material'


function Testimonials() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className=' mb-20 mx-[100px] md:mx-[100px] xs:mx-4 sm:mx-4 gap-4 grid grid-cols-2 md:grid-cols-2  md:grid grid-cols-2 sm:grid grid-cols-1 xs:grid grid-cols-1' >
        <div className='flex flex-col justify-left items-left'>
            <h2 className=" w-full text-2xl md:text-2xl sm:text-xl xs:text-xl mb-[10px] md:mb-[10px] sm:mb-[7px] xs:mb-[7px] text-right">TESTIMONIALS</h2>
            <h2 className="w-full  text-4xl Primary md:text-3xl sm:text-3xl xs:text-3xl mb-[10px] md:mb-[10px]sm:mb-[7px] xs:mb-[7px] font-bold text-right">Message From Adventurers</h2>
            <p className="w-full text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt eget sapien eget, maximus c
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>  
        <div className='flex flex-col justify-left items-left h-[100%] w-full bg-white'>
            <AutoplaySlider className='my-4 h-full  bg-white top-0 '
                  play={true}
                  cancelOnInteraction={false} // should stop playing on user interaction
                  interval={2000}
                >
                    <div className='flex justify-center items-center  shadow-2xl shadow-black  h-full     rounded-2xl bg-white flex flex-1 flex-col items-left justify-start'>
                      <TravelExplore className="icon  rotator"/>
                      <h1 className="text-center text-4xl lg:text-2xl md:text-3xl sm:text-2xl xs:text-2xl  text-[#519e51]" > <span className="font-bold text-black " > New</span> Destinations</h1>
                    </div>
                    <div className='flex justify-center items-center  shadow-2xl shadow-black  h-full     rounded-2xl bg-white flex flex-1 flex-col items-left justify-start'>
                      <TravelExplore className="icon  rotator"/>
                      <h1 className="text-center text-4xl lg:text-2xl md:text-3xl sm:text-2xl xs:text-2xl  text-[#519e51]" > <span className="font-bold text-black " > New</span> Destinations</h1>
                    </div>
                     <div className='flex justify-center items-center  shadow-2xl shadow-black  h-full     rounded-2xl bg-white flex flex-1 flex-col items-left justify-start'>
                      <TravelExplore className="icon  rotator"/>
                      <h1 className="text-center text-4xl lg:text-2xl md:text-3xl sm:text-2xl xs:text-2xl  text-[#519e51]" > <span className="font-bold text-black " > New</span> Destinations</h1>
                    </div>
                    <div className='flex justify-center items-center  shadow-2xl shadow-black  h-full     rounded-2xl bg-white flex flex-1 flex-col items-left justify-start'>
                      <TravelExplore className="icon  rotator"/>
                      <h1 className="text-center text-4xl lg:text-2xl md:text-3xl sm:text-2xl xs:text-2xl  text-[#519e51]" > <span className="font-bold text-black " > New</span> Destinations</h1>
                    </div>
                   

            </AutoplaySlider> 
        </div>  
    </div>
  )
}

export default Testimonials