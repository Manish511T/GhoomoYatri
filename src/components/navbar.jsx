import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function Navbar() {
  useEffect(() => {
    const container = document.querySelector('.navbar-container');
    gsap.fromTo(container, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className="navbar-container z-50 text-black h-14 w-screen bg-transparent absolute top-0 left-0 flex justify-between items-center mt-2">
      <div className="navbar-item h-full w-full flex justify-evenly items-center p-2">

        {/* Logo */}
        <div className="logo h-full w-14 flex justify-center items-center">
          <img className="cursor-pointer" src="logo_1.png" alt="Logo" />
        </div>

        {/* Menu */}
        <div className="menu-box flex justify-between items-center w-3/6 text-sm font-semibold">
          <div className="cursor-pointer hover:scale-110">HOME</div>
          <div className="cursor-pointer hover:scale-110">DOMESTIC</div>
          <div className="cursor-pointer hover:scale-110">INTERNATIONAL</div>
          <div className="cursor-pointer hover:scale-110">CONTACT</div>
          <div className="group cursor-pointer hover:scale-110">
            ABOUT
            <i className="ri-arrow-right-up-line inline-block transition-transform duration-300 group-hover:rotate-90 group-hover:text-green-400"></i>
          </div>
        </div>

        {/* Search */}
        <div className=" group p-2 flex items-center gap-2 hover:bg-gray-200 rounded-md transition-all duration-300">
          <div className="cursor-pointer">PAYMENT</div>
          <i class="ri-qr-code-line group-hover:rotate-180 group-hover:scale-150 group-hover:text-blue-600 transform transition duration-300 ease-in-out"></i>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
