import React from 'react'
import Image from 'next/image'
function BlogPost() {
  return (
    <div className='container flex flex-col w-full  items-center'>
        <div className='flex justify-center'>
          <div className="w-[58%] flex gap-5 flex-col">
              <h1 className="text-3xl font-bold">lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
              <p>percent by teacher happened difficulty slope thee shelf extra bite is whose knowledge sentence president avoid planned yesterday dot human send red climate attack</p>
              <div className="flex gap-4">
              <Image 
              className="rounded-full"
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600" width={35} height={35} alt=""/>
               <p className="mt-1">John Doe</p>
              </div>

          </div>
          <div className="w-[42%] flex justify-end relative h-[20rem]">
            <Image src="https://images.pexels.com/photos/12261413/pexels-photo-12261413.jpeg?auto=compress&cs=tinysrgb&w=1600"  fill alt="" className='!object-cover rounded-md'/>
          </div>
        </div>
        <div className="w-full m-10">
          <p>organized basis independent coffee child stopped rocky final him slept anyone shape touch tired belong southern is plate cell heavy search curious whispered surface
            consonant article example combination system famous greatly parent alive dirt plenty fierce thy muscle characteristic however enemy live some control bank new railroad complete
plant wing stiff soon happened task difficulty hurt division hello leg motion grabbed unless evening just pilot roll excited steel biggest said quarter classroom

          </p>
            <br/>
          <p>hunt stopped location angle gray mysterious on clear gun key funny sheep think shape he join customs press list upward hung prove labor noon</p>
          <br/>
          <p>shut cut long mathematics take receive wash writing rubber seldom topic religious attack group cry actual outer fly appearance climate state select fewer log</p>
        </div>
    </div>
  )
}

export default BlogPost