

import React from 'react'
import {MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp} from 'react-icons/md'
const Accordion = (props) => {
    function toggleAcc(){
        props.getId(props.id)
        console.log('clicked')
    }
  return (
    <div className='flex flex-col items-left  md:border-y-1 w-3/4 '>
      <div onClick={toggleAcc} className={ `   text-left text-lg  text-veryDarkBlue flex flex-row items-center justify-between text-md p-2  h-12 cursor-pointer hover:text-softRed ${props.open?'font-light text-black':''}`}>
        {props.question} {props.open ? <MdOutlineKeyboardArrowUp color='red' className='font-medium' size={30}/>:<MdOutlineKeyboardArrowDown size={30} className='font-medium'/>}
      </div>

      {
        props.open &&  <div className='p-2 scale-in-ver-top text-md text-grayishBlue text-medium md:max-w-lg'> {props.answer}
      </div>
      }
      
    </div>
  )
}

export default Accordion