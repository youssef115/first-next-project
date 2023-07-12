import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
type ProtfolioCardProps={
    text:string;
    imgUrl:string;
    url:string;
}
function PortfolioCard({text,imgUrl,url}:ProtfolioCardProps) {
  return (
    <div className='relative border-solid border-4 border-white rounded-md h-[20rem] w-[15rem] hover:text-green-500'>
       <Link href={url}>
          <Image src={imgUrl} fill alt="" className="z-0 object-cover"/>
          <span className="z-10 absolute bottom-0 right-0 p-2 font-bold text-3xl ">{text}</span>
       </Link>
    </div>
  )
}

export default PortfolioCard