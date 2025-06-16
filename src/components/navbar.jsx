import React from 'react'
import { gsap } from "gsap";

function navbar() {
  React.useEffect(() => {
   const container = document.querySelector('.navbar-container');
   gsap.fromTo(container, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
  }, []);
  return (
    <>
    <div className='navbar-container text-black h-14 w-screen bg-transparent absolute  top-0 left-0 flex justify-between items-center  mt-2'>
        <div className='navbar-item h-full w-full flex justify-evenly items-center  p-2'>
           <div className="logo h-full w-14  flex justify-center items-center">
            <img className='cursor-pointer' src="Logo.png" />
          </div>
            <div className="menu-box flex justify-between items-center w-3/6   text-sm font-semibold">
            <div className='cursor-pointer  '>HOME</div>
            <div className='cursor-pointer'>DOMESTIC</div>
            <div className='cursor-pointer'>INTERNATIONAL</div>
            <div className='cursor-pointer'>CONTACT</div>
            <div className='group cursor-pointer'>ABOUT<i className="ri-arrow-right-up-line inline-block transition-transform duration-300 group-hover:rotate-90"></i></div>
          </div>
           <div>
            <div className='h-2 p-4  flex items-center  text-sm  border  border-black rounded-4xl '>
              <div >
                <input type="text" placeholder='Search' className='border-none focus:outline-none ' /><i className="ri-search-line text-sm cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default navbar