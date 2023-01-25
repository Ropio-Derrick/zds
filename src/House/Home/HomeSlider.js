// import React from 'react'
// import AwesomeSlider from 'react-awesome-slider';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
// import 'react-awesome-slider/dist/styles.css';
import Imga from "../../Images/home2.jpg"
import Imgb from "../../Images/hOME3.jpg"
import Imgc from "../../Images/HOME4.jpg"


import React from 'react';
import { Slide, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function HomeSlider() {

  // const AutoplaySlider = withAutoplay(AwesomeSlider);

  // return (
  //   <AutoplaySlider className='z-30 h-[800px] md:h-[600px]  xs:h-[100vh] sm:h-[100vh] top-0 '
  //   play={true}
  //   cancelOnInteraction={false} // should stop playing on user interaction
  //   interval={6000}
  // >
  //   <div className=' top-0 h-full'>
  //     <img src={Imga} className='  background bg-left-bottom h-full ' />
  //   </div>
  //   <div className=' top-0   h-full' >
  //     <img src={Imgb} className='  background bg-right-bottom h-full ' />

  //   </div>
  //   <div className='top-0  h-full' >
  //     <img src={Imgc} className='background h-full  bg-center-bottom' />

  //   </div>

  // </AutoplaySlider>
  // )
  return(
    <div className="z-30 h-[800px] md:h-[600px]  xs:h-[100vh] sm:h-[100vh] top-0">
        <Zoom scale={2} easing="linear" duration={2000} transitionDuration={2500} arrows={false} 
        autoplay={true} infinite={true} canSwipe={true}  className=' h-[800px] md:h-[600px]  xs:h-[100vh] sm:h-[100vh] top-0'>
          <div className='flex justify-center items-center  relative h-[800px] md:h-[600px]  xs:h-[100vh] sm:h-[100vh] top-0'>
            <img src={Imga} className='  background bg-left-bottom h-full ' />
            <span className="absolute  h-full w-full" >
              <div className="flex-col  flex justify-center h-full items-center">
                <div className="flex flex-row">
                  <hr className="Line" />
                </div>
                <h1 className=" text-white text-center text-6xl md:text-6xl sm:text-4xl xs:text-4xl font-black">
                  Wild
                </h1>

              </div>
            </span>
          </div>
          <div className='h-[800px] md:h-[600px]  xs:h-[100vh] sm:h-[100vh] top-0' >
          <div className='flex justify-center items-center  relative h-[800px] md:h-[600px]  xs:h-[100vh] sm:h-[100vh] top-0'>
            <img src={Imgb} className='  background bg-right-bottom h-full ' />
            <span className="absolute  h-full w-full" >
              <div className=" flex flex-col justify-center h-full items-center">
                <div className="flex flex-row">
                  <hr className="Line" />
                </div>
                <h1 className=" text-white text-center text-6xl md:text-6xl sm:text-4xl xs:text-4xl font-black">
                  Cool Waters
                </h1>

              </div>
            </span>
            </div>
           </div> 
          <div className='h-[800px] md:h-[600px]  xs:h-[100vh] sm:h-[100vh] top-0' >
          <div className='flex justify-center items-center  relative h-[800px] md:h-[600px]  xs:h-[100vh] sm:h-[100vh] top-0'>
            <img src={Imgc} className='background h-full  bg-center-bottom' />
            <span className="absolute  h-full w-full" >
              <div className="flex flex-col justify-center h-full items-center">
                <div className="flex flex-row">
                  <hr className="Line " />
                </div>
                <h1 className=" text-white text-center text-6xl md:text-6xl sm:text-4xl xs:text-4xl font-black">
                  Experience
                </h1>

              </div>
            </span>
            </div>
           </div>
     </Zoom>
    </div>
  )
}

export default HomeSlider