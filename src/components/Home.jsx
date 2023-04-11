import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#150050]">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">Rahul.C</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-orange-500">I'm a Full Stack Developer & Data Scientist</h2>
        <p className="text-green-500 py-4 max-w-[700]">
          I'm a self taught programmer who has learnt first on FreeCodeCamp &
          later in 2 different bootcamps. I have a big passion for coding,the
          financial markets & in future I aspire to get into Quantative Trading, Machine Learning & Ai.
        </p>
        <div>
            <button className= "sm:hide text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                View More
            <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3"/>
            </span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
