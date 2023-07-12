"use client"
import Link from 'next/link'
import React from 'react'
import { links } from '@/constants'

function Navbar() {
  return (
    <nav className='flex justify-between mt-10'>
      <Link href="/" className="text-4xl font-bold"> Youssef </Link>
      <div className='flex gap-4 px-5 py-3'>
        {links.map((link)=>(
        <Link href={link.url} key={link.id}>{link.title}</Link> 
      ))}

      <button className=' p-1 mt-[-0.4rem] rounded-md border-solid border-2 border-green-300 text-black bg-green-300' onClick={()=>{console.log("logged out/in")}}>
          Loggout
      </button>
      </div>

    </nav>
  )
}

export default Navbar