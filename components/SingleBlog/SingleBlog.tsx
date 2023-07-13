import React from 'react'
import Image from 'next/image'

type SingleBlogProps={
    title:string;
    imgUrl:string;
    text:string;
}

function SingleBlog({title,imgUrl,text}:SingleBlogProps) {
  return (
    <div className='flex justify-center gap-10 w-full'>
        <div className='relative w-[25rem] h-[18rem] object-none rounded-md'>
            <Image 
            alt=""
            fill
            src={imgUrl}
            className="rounded-md"
            />
        </div>
        <div className='flex flex-1 flex-col gap-2 justify-center'>
            <h1 className='font-bold text-4xl'>{title}</h1>
            <p className='font-blod text-xl'>{text}</p>
        </div>
    </div>
  )
}

export default SingleBlog