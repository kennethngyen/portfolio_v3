import TechStack from "@/components/TechStack/TechStack";
import GreetingContainer from "@/components/shared/container/greeting/greetingContainer";
import React from "react";
import {Card} from '@mui/material'


const index = () => {
  return <>
    <Card elevation={0} sx={{border: 'none'}}>
      <div className="">
        <div className="bg-white px-10">
          <div className="container py-3 mx-auto flex flex-col-reverse lg:flex-row items-center">
            <div className="my-auto flex flex-col gap-2 md:w-2/3 p-5">
                <h1 className="text-6xl font-bold md:text-4xl lg:text-8xl">Nice to meet you. I’m <span className='text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-secondary'>Kenneth Nguyen.</span></h1>
                <h3 className="text-l font-bold italic md:text-2xl md:py-2">A first year Computer Science major and Regent’s Scholar at UC San Diego and an aspiring software engineer.</h3>
            </div>
            <div className="h-full rounded-full md:w-1/3 flex justify-center">
                    <img src={`/imgs/linkedinpfp.jpg`} className="drop-shadow-xl w-7/10 rounded-full"></img>
            </div>
          </div>
      </div>
      <TechStack/>
      </div>
    </Card>
  </>;
};

export default index;
