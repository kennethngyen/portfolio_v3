import GreetingContainer from "@/components/shared/container/greeting/greetingContainer";
import { Card } from "@mui/material";
import React from "react";

const About = () => {
  return <>
    <Card elevation={0} sx={{border: 'none'}}>
      <div className="">
        <div className="bg-white px-10">
          <div className="container py-3 mx-auto flex flex-col-reverse lg:flex-row items-center">
            <div className="my-auto flex flex-col gap-2 md:w-2/3 p-5">
                <h1 className="text-6xl font-bold md:text-4xl lg:text-8xl"><span className='text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-secondary'>Who am I?</span></h1>
                <h3 className="text-xl md:text-2xl md:py-2">On campus, I am the <span className="font-bold">Director of CSforEach's Early Start Fellowship</span>, which is our organization's project division. Acting as a product manager and technical lead for two teams, I run weekly stand up meetings with other leads and developers, adhere to project management principles, and have shipped out two apps with two developer team cohorts.</h3>
                <h3 className="text-xl md:text-2xl md:py-2"></h3>
            </div>
            <div className="h-full rounded-full md:w-1/3 flex justify-center">
                    <img src={`/imgs/linkedinpfp.jpg`} className="drop-shadow-xl w-7/10"></img>
            </div>
          </div>
          <div className="container py-3 mx-auto flex flex-col lg:flex-row items-center">
          <div className="h-full rounded-full md:w-1/3 flex justify-center">
                    <img src={`/imgs/linkedinpfp.jpg`} className="drop-shadow-xl w-7/10"></img>
            </div>
            <div className="my-auto flex flex-col gap-2 md:w-2/3 p-5">
                <h3 className="text-xl md:text-2xl md:py-2">In my free time, I love working out at my college gym, playing tennis (or video games), spending time with my friends, or cutting hair!</h3>
                <h3 className="text-xl md:text-2xl md:py-2"></h3>
            </div>
            
          </div>
          <div className="container py-3 mx-auto flex flex-col lg:flex-row items-center">
          
            <div className="my-auto flex flex-col gap-2 md:w-2/3 p-5">
                <h3 className="text-xl md:text-2xl md:py-2">In my free time, I love working out at my college gym, playing tennis (or video games), spending time with my friends, or cutting hair!</h3>
                <h3 className="text-xl md:text-2xl md:py-2"></h3>
            </div>
            <div className="h-full rounded-full md:w-1/3 flex justify-center">
                    <img src={`/imgs/linkedinpfp.jpg`} className="drop-shadow-xl w-7/10"></img>
            </div>  
          </div>
          
      </div>
      </div>
    </Card>
  </>;
};

export default About;
