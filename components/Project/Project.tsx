import React from "react";
import Button from "../common/Button";
import Image from "next/image";

type ProjectProps = {
  direction: "right" | "left";
  imgUrl:string;
  text:string;
  title:string;
};

function Project({ direction, imgUrl,text,title }: ProjectProps) {
  if (direction == "right")
    return (
      <>
          <div className="flex gap-14 items-center">
            <div className="flex flex-col gap-3 w-full lg:w-1/2">
              <h1 className="text-5xl font-bold">{title}</h1>
              <p className="">
                {text}
              </p>
              <Button text="See more" style="buttonStyle" url="#" />
            </div>
            <div className="  relative w-1/2 h-[35rem] hidden lg:block">
              <Image
                src={imgUrl}
                fill
                alt=""
                className="rounded-md "
              />
            </div>
          </div>
       
      </>
    );
  else
    return (
      <>
        
          <div className="flex gap-14 items-center">
          <div className="  relative w-1/2 h-[35rem] hidden lg:block">
              <Image
                src={imgUrl}
                fill
                alt=""
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col gap-3  w-full lg:w-1/2">
              <h1 className="text-5xl font-bold">{title}</h1>
              <p className="">
                {text}
              </p>
              <Button text="See more" style="buttonStyle" url="#" />
            </div>
          </div>
        
      </>
    );
}

export default Project;
