import React from 'react'
import {Link} from "react-router-dom"
import HomeSlider from './HomeSlider'
import Searcher from './Searcher'
import Tours from "./tours"

let Home = ()=> {
  return (
    <div>
      <HomeSlider/>
      <Searcher/>
      <Tours/>
    </div>
  )
}

export default Home