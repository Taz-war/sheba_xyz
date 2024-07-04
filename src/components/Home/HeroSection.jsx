import React from "react";

const HeroSection = () => {
  return (
    <div className=" flex content-normal items-center bg-hero-bg bg-center bg-no-repeat bg-cover h-[450px] w-full ">

      <div className=" w-full">

        <div className=" text-white text-center ">
          <h1 className="text-6xl">Your Personal Assistant</h1>
          <h2 className="text-3xl">
            One stop solution for your services. Oreder my services anytime
          </h2>
        </div>

        <div className="py-2 w-full xl:w-1/3 lg:1/2 md:2/3 mx-auto px-2">
            <input type="search" className="p-3 rounded-md focus:outline-none w-full" placeholder="Find your services here e.g. AC,Car,Facial..."/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
