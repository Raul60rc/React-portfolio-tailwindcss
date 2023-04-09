import React from 'react'
import JavaScript from "../assets/javascript.png"

const Skills = () => {
  return (
    <div className='w-full h-full bg-[#150050] text-white'>
        <div>
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">Experience</p>
            <p>These are the technologies I've worked with</p>
        </div>
        <div>
            <div>
                <img src={JavaScript} alt="JavaScript Icon"></img>
            </div>
        </div>
    </div>
  )
}

export default Skills