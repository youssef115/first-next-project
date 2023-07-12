import Link from 'next/link';
import React from 'react'

type ButtonType={
    text:string;
    style?:string;
    url?:string;
}

function Button({text,style,url}:ButtonType) {
  return (
    <Link href={url?url:"#"}>
          <button className={style?style:"buttonStyle"}>
            {text}
          </button>
    </Link>
  )
}

export default Button