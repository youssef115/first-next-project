"use client"
import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'
import {BsFillSunFill,BsFillMoonFill} from 'react-icons/bs'

type Theme={
  mode:string;
  toggle:()=>void;
}


function DarkModeToggle() {
  const {toggle,mode}=useContext<Theme>(ThemeContext)
  return (
    <div onClick={toggle} className='relative cursor-pointer w-[44px] h-[24px] border-solid border-2 border-green-500 rounded-xl px-[2.5px] py-[2px]'>
     <div className="flex justify-between ">
     <div>
        <BsFillMoonFill size={15}/>
      </div>
      <div>
        <BsFillSunFill color='yellow' size={15}/>
      </div> 
     </div>
      <div className='w-[15px] h-[15px] bg-green-500 rounded-full absolute top-[3px] ' style={mode==="light"?{left:"2px"}:{right:"2px"}}/>
    </div>
  )
}

export default DarkModeToggle