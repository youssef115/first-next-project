import React from "react";
import { PortfolioCard } from "@/components";
function Portfolio() {
  return (
    <>
        <h2 className="text-4xl font-bold">Choose a gallery</h2>
        <div className="mt-10 flex gap-5">
          {["illustration","websites","application"].map(item=>(
            <PortfolioCard text={item} imgUrl={`/${item}.png`} url={`/portfolio/${item}`}/>
          ))}
        </div>
    </>
  );
}

export default Portfolio;
