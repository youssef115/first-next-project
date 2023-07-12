import React from 'react'
import Image from "next/image"
import { footerImages } from '@/constants'
function Footer() {
  return (
    <div className='flex justify-between items-center mb-2'>
      <div>&copy; 2023 youssef. All rights reserved. </div>
      <div className="flex gap-5 ">
        {footerImages.map(item=>(
          <div className='relative w-[15px] h-[15px] '>
            <Image className='cursor-pointer opacity-60' src={item.url} fill={true} alt={item.title}/>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Footer