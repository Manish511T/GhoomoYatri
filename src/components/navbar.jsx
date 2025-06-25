import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeoutId;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isDesktop = window.innerWidth >= 768;

      if (isDesktop) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsNavbarVisible(false); // Scroll down → hide
        } else {
          setIsNavbarVisible(true); // Scroll up → show
        }

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsNavbarVisible(true); // After stop scrolling → show again
        }, 300); // You can increase for longer delay
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`navbar-container ${
        isNavbarVisible ? 'fixed' : 'relative'
      } top-0 left-0 w-full z-50 transition-all duration-500 rounded-lg text-black`}
    >
      {/* --- Mobile View --- */}
      <div className="flex justify-between items-center px-4 py-3 h-16 relative md:hidden">
        {/* Hamburger / Close Icon */}
        <button onClick={toggleMobileMenu} className="text-2xl z-50 cursor-pointer">
          <i
            className={`transition-transform duration-900 ${
              isMobileMenuOpen ? 'ri-close-line rotate-180' : 'ri-menu-line'
            }`}
          />
        </button>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src="logo_1.png" alt="Logo" className="h-10" />
        </div>

        {/* Payment Icon */}
        <div className="text-xl">
          <i className="ri-qr-code-line"></i>
        </div>
      </div>

      {/* --- Mobile Slide Menu --- */}
      <div
        className={`slideMenu fixed top-0 left-0 h-screen w-2/3 shadow-md z-40 transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-start gap-6 p-6 pt-20 font-semibold text-lg text-white">
          <div className="cursor-pointer w-full p-2 hover:rounded-2xl hover:bg-[#cff1e1ae]">HOME</div>
          <div className="cursor-pointer w-full p-2 hover:rounded-2xl hover:bg-[#cff1e1ae]">DOMESTIC</div>
          <div className="cursor-pointer w-full p-2 hover:rounded-2xl hover:bg-[#cff1e1ae]">INTERNATIONAL</div>
          <div className="cursor-pointer w-full p-2 hover:rounded-2xl hover:bg-[#cff1e1ae]">CONTACT</div>
        </div>
      </div>

      {/* --- Mobile Overlay --- */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* --- Desktop View --- */}
      <div className="hidden md:flex justify-between items-center h-14 w-full p-2 px-20">
        {/* Logo */}
        <div className="logo h-full w-14 flex justify-center items-center">
          <img className="cursor-pointer" src="logo_1.png" alt="Logo" />
        </div>

        {/* Menu Items */}
        <div className="menu-box flex justify-between items-center w-[60%] text-sm font-semibold gap-2">
          <div className="cursor-pointer hover:scale-110">HOME</div>
          <div className="cursor-pointer hover:scale-110">DOMESTIC</div>
          <div className="cursor-pointer hover:scale-110">INTERNATIONAL</div>
          <div className="cursor-pointer hover:scale-110">CONTACT</div>
          <div className="group cursor-pointer hover:scale-110">
            ABOUT
            <i className="ri-arrow-right-up-line inline-block transition-transform duration-300 group-hover:rotate-90 group-hover:text-green-400"></i>
          </div>
        </div>

        {/* Payment */}
        <div className="group p-2 flex items-center gap-2 hover:bg-gray-200 rounded-md transition-all duration-300">
          <div className="cursor-pointer">PAYMENT</div>
          <i className="ri-qr-code-line group-hover:rotate-180 group-hover:scale-150 group-hover:text-blue-600 transition duration-300 ease-in-out"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
