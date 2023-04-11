import React from "react";
import JavaScript from "../assets/javascript.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import NodeJs from "../assets/node.png";
import MongoDB from "../assets/mongo.png";
import mySQL from "../assets/mySQL.png";
import react from "../assets/react.png";
import python from "../assets/python.png";
import angular from "../assets/angular.png";
import tailwind from "../assets/tailwind.png";
import django from "../assets/django.png";
import github from "../assets/github.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#150050] text-white">
      <div className= "max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="">
          <div className="flex justify-center">
            <p className="sm:text-center text-4xl font-bold inline border-b-4 border-pink-600">
              Skills
            </p>
          </div>
          <div className="sm:text-center text-4xl font-bold mt-3 text-orange-500">
          <p>These are the following technologies I have worked with</p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#F10086] hover:scale-110 duration-500">
              <img src={HTML} alt="HTML logo" />
              <p className="my-4">HTML</p>
            </div>
            <div  className="shadow-md shadow-[#F10086] hover:scale-110 duration-500">
              <img src={CSS} alt="CSS logo" />
              <p className="my-4">CSS</p>
            </div>
            <div  className="shadow-md shadow-[#F10086] hover:scale-110 duration-500">
              <img src={JavaScript} alt="JavaScript logo" />
              <p className="my-4">JavaScript</p>
            </div>
            <div  className="shadow-md shadow-[#F10086] hover:scale-110 duration-500">
              <img src={python} alt="python logo" />
              <p className="my-4">PYTHON</p>
            </div>
            <div  className="shadow-md shadow-[#F10086] hover:scale-110 duration-500">
              <img src={mySQL} alt="mySQL logo" />
              <p className="my-4">MY SQL</p>
            </div>
            <div  className="shadow-md shadow-[#F10086] hover:scale-110 duration-500">
              <img src={MongoDB} alt="MongoDB logo" />
              <p className="my-4">MONGO DB</p>
            </div>
            <div  className="shadow-md shadow-[#F10086] hover:scale-110 duration-500">
              <img src={NodeJs} alt="NodeJs logo" />
              <p className="my-4">NODE JS</p>
            </div>
            <div  className="shadow-md shadow-[#F10086] hover:scale-110 duration-500"> 
              <img src={django} alt="django logo" />
              <p className="my-4">DJANGO</p>
            </div>
            <div  className="shadow-md shadow-[#F10086] hover:scale-110 duration-500">
              <img src={react} alt="react logo" />
              <p className="my-4">REACT</p>
            </div>
            <div  className="shadow-md shadow-[#F10086] hover:scale-110 duration-500">
              <img src={angular} alt="angular logo" />
              <p className="my-4">ANGULAR</p>
            </div>
            <div  className="shadow-md shadow-[#F10086] hover:scale-110 duration-500">
              <img src={tailwind} alt="tailwind logo" />
              <p className="my-4">TAILWIND CSS</p>
            </div>
            <div  className="shadow-md shadow-[#F10086] hover:scale-110 duration-500">
              <img src={github} alt="github logo" />
              <p className="my-4">GITHUB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
