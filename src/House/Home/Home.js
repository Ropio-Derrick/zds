import React from 'react'
import {Link} from "react-router-dom"
import HomeSlider from './HomeSlider'
import Searcher from './Searcher'

let Home = ()=> {
  return (
    <div>
           <HomeSlider/>
          <Searcher/>
    </div>
  )
}

export default Home