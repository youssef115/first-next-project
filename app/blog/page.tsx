import React from 'react'
import Link from 'next/link'
import { SingleBlog } from '@/components'
function Blog() {
  return (
    <div className='flex flex-col gap-5'>
      <Link href="/blog/test1">
        <SingleBlog 
        imgUrl="https://images.pexels.com/photos/16733346/pexels-photo-16733346/free-photo-of-muzzle-of-lama.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title='term'
        text="answer pass shut globe nor beside free forty identity onto having writing bone needs traffic continued tone heading reason cave stood sell making quite"
        />
      </Link>
      <Link href="/blog/test2">
        <SingleBlog 
        imgUrl="https://images.pexels.com/photos/5869743/pexels-photo-5869743.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title='term'
        text="answer pass shut globe nor beside free forty identity onto having writing bone needs traffic continued tone heading reason cave stood sell making quite"
        />
      </Link>
      <Link href="/blog/test3">
      
        <SingleBlog 
         imgUrl="https://images.pexels.com/photos/11529839/pexels-photo-11529839.jpeg?auto=compress&cs=tinysrgb&w=1600"
         title='term'
         text="answer pass shut globe nor beside free forty identity onto having writing bone needs traffic continued tone heading reason cave stood sell making quite"
        />
      </Link>

    </div>
  )
}

export default Blog