import { Button, Project } from "@/components";
import React from "react";
import Image from "next/image";
type CategoryProps = {
  category: string;
};

function Category({ params }: { params: CategoryProps }) {
  console.log(params);
  return (
    <>
      <div className="flex flex-col gap-10">
        <h2 className="text-2xl">{params?.category}</h2>
 {/**in this case in illustration ,websites , application categroy we will get the same result
  * 
  * so if we want to change the result so we can add an conditional rendering for every specific 
  * category here 
  */}
        <Project
          direction="right"
          imgUrl="https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?auto=compress&cs=tinysrgb&w=1600"
          title="Creative Portfolio"
          text="running remove shoot cannot walk accurate circus held scale string rush jar statement later mountain atomic please nuts behind engine apple answer rest using"
        />

        <Project
          direction="left"
          imgUrl="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1600"
          title="Creative Portfolio 2"
          text="mark game chest characteristic appearance immediately middle rain but order broke pay line off yard cost beauty word satellites distant consonant birthday shirt invented"
        />
      </div>
    </>
  );
}

export default Category;
