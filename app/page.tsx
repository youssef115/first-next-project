import Image from "next/image";
import { Button } from "@/components";
export default function Home() {
  return (
    <div className="flex gap-28">
      <div className="flex-1 flex justify-center flex-col gap-10">
        <h1 className="text-7xl font-bold bg-gradient-to-b from-green-800 to-green-100 bg-clip-text text-transparent">Better desing for your digital products.</h1>
        <p>
          Turning your Idea into Reality. we bring together the teams for the
          global tech industry.
        </p>
        <Button text="Learn More" style="buttonStyle" url="/about"/>
      </div>
      <div className="animate-moveUpDown hidden lg:block">
        <Image src="/hero.png" width={500} height={500} alt="home page Image" />
      </div>

      {/**IN THIS CASE THE IMAGE IS CHOWN BECAUSE WE USE MADE A CHANGE IN THE NEXT.CONFIG.JS */}
      {/* <Image src="https://images.pexels.com/photos/13397514/pexels-photo-13397514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={500} height={500} alt="img"/> */}
    </div>
  );
}
