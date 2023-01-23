import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Imga from "../../Images/Home1.jpg"
import Imgb from "../../Images/hOME3.jpg"
import Imgc from "../../Images/HOME4.jpg"

function HomeSlider() {

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <AutoplaySlider className='z-30 h-[600px] md:h-[600px]  xs:h-[400px] sm:h-[400px] top-0 '
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div className='background top-0 h-full'>
      <img src={Imga} className='  background bg-left-bottom h-full ' />
    </div>
    <div className='background  top-0   h-full' >
      <img src={Imgb} className='  background bg-right-bottom h-full ' />

    </div>
    <div className=' background  top-0  h-full' >
      <img src={Imgc} className='background h-full  bg-center-bottom' />

    </div>

  </AutoplaySlider>
  )
}

export default HomeSlider