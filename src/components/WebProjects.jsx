import React from 'react'

const WebProjects = () => {
  return (
    <div className='w-full h-full md:h-screen bg-[#150050] text-white'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className="sm:text-center pb-8 pl-4">
                <p className='text-4xl font-bold inline border-b-4 text-white border-pink-600'>Website Projects</p>
                <p className='py-6 sm:text-center text-4xl font-bold text-orange-500'>Check out some of my web projects</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='shadow-lg shadow-[#F10086] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div>
                        <div>
                            <span>

                            </span>
                            <div>
                                <a href="/" >
                                    <button></button>       
                                </a>
                                <a href="/">
                                    <button></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default WebProjects