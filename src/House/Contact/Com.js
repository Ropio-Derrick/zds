import React from 'react'
import Call from './Call'
import Form from './Form'
import Landing from './Landing'

function Com() {
  return (
    <div className='grid grid-cols-2 mt-32 mb-20 mx-[100px] md:mx-[100px] sm:mx-4 xs:mx-4  md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ' >
        <Call/>
        <Form/>
 
    </div>
  )
}

export default Com