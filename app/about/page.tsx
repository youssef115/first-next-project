import React from 'react'
import Image from 'next/image'
import { Button } from '@/components'
function About() {
  return (
    <div className='flex flex-col'>

      <div className= 'relative w-full h-72'>
        <Image 
        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600" 
        fill alt=""
         className='object-cover z-0 filter grayscale'/>
        <div className='absolute text-white container z-[900] bg-green-400 font-bold w-fit p-2 top-48 left-4'>
          <h1 className="text-3xl">Digital Storytellers</h1>
          <h2 className="text-xl">Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className='flex gap-10 mt-10'>
        <div>
          <h1>Who Are We?</h1>
          <p>dead hearing shinning harder book quietly spider spin stick opposite 
            spell garage fine welcome final progress circle accident stronger managed 
            sort cookies his clearly</p>
        </div>
        <div>
          <h1>What are we do?</h1>
          <p>slowly brought trap hit history hat excited atmosphere proud line 
            height source quick private people public action environment tightly
             atom buy track or nest
             <br></br>
             <br></br>
             - Creative Illustrations
             <br></br>
             <br></br>
             - Dynamic WebSites
             <br></br>
             <br></br>
             - Fast and handy Mobile Apps
             <br></br>
             </p>
             
          <Button text='Contact' style="buttonStyle" url='/contact'/>
        </div>
        
      </div>
      </div>
      
    
  )
}

export default About