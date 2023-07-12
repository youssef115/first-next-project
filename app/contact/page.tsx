import React from 'react'
import Image from 'next/image'
import { Button } from '@/components'

function Contact() {
  return (
    <div className="flex flex-col items-center gap-8 w-full h-auto">
      <h1 className="text-6xl font-bold"> Let's Keep in Touch</h1>
      <div className='flex w-full justify-center gap-3'>
        <div className='relative w-[30rem] h-[27rem] mx-32 flex-1 animate-moveUpDown'>
          <Image className='' src="/contact.png" alt="" fill/>
        </div>
        <form className='flex flex-1 flex-col gap-5 justify-center '>
          <input type="text" placeholder='name' className='p-2 inputTextareaStyle'/>
          <input type="email" placeholder='email' className='p-2 inputTextareaStyle '/>
          <textarea className='inputTextareaStyle ' cols={30} rows={10}></textarea>
          <Button text='Send' />
        </form>
      </div>
    </div>
  )
}

export default Contact