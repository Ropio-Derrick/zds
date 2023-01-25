import React from 'react'
import {Link} from "react-router-dom"
import HomeSlider from './HomeSlider'
import Searcher from './Searcher'
import Tours from "./tours"
import About  from "./About"
import Breaker from './Breaker'
import Team from './Team'
import Testimonials from './Testimonials'
import Searcher2 from './Searcher2'

let Home = ()=> {
  return (
    <div>
      <HomeSlider/>
      <Searcher/>
      <Tours/>
      <About/>
      <Searcher2/>
      <Breaker/>
      <Team/>
      <Testimonials/>
    </div>
  )
}

export default Home