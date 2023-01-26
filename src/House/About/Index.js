import React from 'react'
import {Link} from 'react-router-dom'
import About from './About'
import Breaker from './Breaker'
import Landing from './Landing'
import Searcher from './Searcher'
import Team from "../Home/Team"
import Testimonials from '../Home/Testimonials'

function Index() {
  return (
    <div>
      <Landing/>
      <About/>
      <Searcher/>
      <Breaker/>
      <Team/>
      <Testimonials/>
    </div>
  )
}

export default Index