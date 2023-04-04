import React,{useState} from 'react'

import Logo from "../assets/RC logo.png";
import {FaBars,FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#150050] text-white'>
        <div>
            <img src={Logo} alt="logo-image" style={{width: "50px"}} />
        </div>
      
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact Me</li>
            </ul>
        

        {/*Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/> }
        </div>

        {/*Mobile Menu*/}
             <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#150050] flex flex-col justify-center items-center"}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact Me</li>
            </ul>

        {/*Social Icons*/}
        <div className='hidden'></div>

    </div>
  )
}

export default Navbar