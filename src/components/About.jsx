import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#150050] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w[1000px] w-full px-4 grid grid-cols2 gap-8 ">
          <div className="sm:text-center pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About Me
            </p>
          </div>
          <div className=" max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
            <div>
              <p className="sm:text-right text-4xl font-bold ">
                Hi, I'm Rahul nice to meet you, please have a look around my
                portfolio.
              </p>
            </div>
            <div className="flex">
              <ul className="list-disc">
                <li>
                  I'm a experienced full-stack developer with a passion for solving
                  programming issues and delivering high-quality code.
                </li>
                <li>
                  Skilled in multiple programming languages and various
                  front-end and back-end frameworks Proven track record of
                  building scalable web applications and APIs that solve
                  real-world problems
                </li>
                <li>
                  Recieved a scholarship in Barcelona to study Data Science -
                  Machine Learning, Artificial Intelligence
                </li>
                <li>
                  Experienced in agile development and working in
                  cross-functional teams
                </li>
                <li>
                  Committed to staying up-to-date with the latest industry
                  trends and technologies
                </li>
                <li>
                  Great attention to detail and ability to work well under
                  pressure
                </li>
                <li>
                  Excellent communication skills and fluency in English &
                  Spanish
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
