import React from 'react'
import Link from 'next/link'
import { SingleBlog } from '@/components'
import { getData } from '@/utils'

type BlogType={
  userId:number;
  id:number;
  title:string;
  body:string;
}
async function Blog(){
  const data=await getData()
  return (
    <div className='flex flex-col gap-5'>
      {data.map((item:BlogType)=>(
      <Link href={`/blog/${item.id}`}key={item.id}>
        <SingleBlog 
        imgUrl="https://images.pexels.com/photos/16733346/pexels-photo-16733346/free-photo-of-muzzle-of-lama.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title={item.title}
        text={item.body}
        />
      </Link>
      ))}

    </div>
  )
}

export default Blog