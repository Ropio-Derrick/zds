import React from 'react'
import  Zebra from "../../Images/zebra.png"
import  Jeep from "../../Images/jeep.jpg"

function Searcher() {
  return (
    <div className=' border-black  border-4 rounded-2xl  relative mt-[-130px]  mx-[100px] md:mx-[100px]  z-50  xs:mx-4 grid grid-cols-2 items-center width-full height-20' >
        <div className=' PhotoCrease  rounded-tl-2xl bg-blue-900 flex flex-1 flex-col items-left justify-start'>
            <img src={Jeep} className="Scaler  rounded-tl-2xl " />
        </div>
        <div className='PhotoCrease   bg-blue-900 flex flex-1 flex-col rounded-tr-2xl items-left justify-start'>
        <img src={Zebra} className="Scaler  rounded-tr-2xl" />
        </div>
        <div className='PhotoCrease   bg-blue-900 flex flex-1 flex-col rounded-bl-2xl items-left justify-start'>
          <img src={Zebra} className="Scaler  rounded-bl-2xl" />
        </div>
        <div className='PhotoCrease   bg-blue-900 flex flex-1 flex-col items-left rounded-br-2xl justify-start'>
          <img src={Jeep} className="Scaler  rounded-br-2xl" />
        </div>
       
    </div>
  )
}   

export default Searcher