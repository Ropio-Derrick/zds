import React from 'react'
import About from './About'
import Activity from './Activity'
import HomeSlider from './HomeSlider'
import Searcher from './Searcher'
import Showe from './Showe'
import Trips from './Trips'
import Breaker from './../../Home/Breaker'
import Testimonials from './../../Home/Testimonials'
import Tours from './tours'

function CSafari() {
  return (
    <div>
        <HomeSlider/>
        <Showe/>
        <Trips/>
        <About />
        <Tours/> 
        <Searcher/>
        <Activity/>
        <Breaker/>
        <Testimonials className="mt-8" />

    </div>
  )
}

export default CSafari