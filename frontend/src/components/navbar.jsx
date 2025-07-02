import React, { useState, useEffect, use } from 'react';
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const introNavigate = useNavigate();
  const domesticNavigate = useNavigate();
  const internationalNavigate = useNavigate();
  const contactNavigate = useNavigate();
  const aboutNavigate = useNavigate();

  const goToIntro = () => {
    introNavigate('/'); 
  };
  const goToDomestic = () => {
    domesticNavigate('/domestic');
  };
  const gotoInternational = ()=>{
    internationalNavigate('/international');
  }
  const goToContact = () => {
    contactNavigate('/contact');
  }
  const goToAbout = () => {
    aboutNavigate('/about');
  }


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

    if (!isDesktop) return;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scrolling down
      setIsNavbarVisible(false);
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up
      setIsNavbarVisible(true);
    }

    // If user stops scrolling, show navbar after delay
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setIsNavbarVisible(true);
    }, 700); // Slightly longer for smoother experience

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
      className={`navbar-container fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out text-black rounded-b-lg  ${
    isNavbarVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
  }`}
    >
      {/* --- Mobile View --- */}
      <div className="flex justify-between items-center px-4 py-3 h-16 relative md:hidden">
        {/* Hamburger / Close Icon */}
        <button onClick={toggleMobileMenu} className="text-2xl z-50 cursor-pointer h-full w-fit p-2 flex items-center hover:bg-gray-200 rounded-full transition-all duration-300">
          <i
            className={`transition-transform duration-900 ${isMobileMenuOpen ? 'ri-close-line rotate-180' : 'ri-menu-line'
              }`}
          />
        </button>

        {/* Center Logo */}
        <div onClick={goToIntro} className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer">
          <img src="logo_1.png" alt="Logo" className="h-15" />
        </div>

        {/* Payment Icon */}
        <div className="text-xl">
          <i className="ri-qr-code-line"></i>
        </div>
      </div>

      {/* --- Mobile Slide Menu --- */}
      <div
        className={`slideMenu fixed top-0 left-0 h-screen w-2/3 shadow-md z-40 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden`}
      >
        <div className="flex flex-col items-start gap-6 p-6 pt-20 font-semibold text-lg text-white">
          <div onClick={goToIntro} className="cursor-pointer w-full p-2 hover:rounded-2xl hover:backdrop-blur-2xl">HOME</div>
          <div onClick={goToDomestic} className="cursor-pointer w-full p-2 hover:rounded-2xl hover:backdrop-blur-2xl">DOMESTIC</div>
          <div onClick={gotoInternational} className="cursor-pointer w-full p-2 hover:rounded-2xl hover:backdrop-blur-2xl">INTERNATIONAL</div>
          <div onClick={goToContact} className="cursor-pointer w-full p-2 hover:rounded-2xl hover:backdrop-blur-2xl">CONTACT</div>
          <div onClick={goToAbout} className="group cursor-pointer w-full p-2 hover:rounded-2xl hover:backdrop-blur-2xl">
            ABOUT
            <i className="ri-arrow-right-up-line inline-block transition-transform duration-300 group-hover:rotate-90 group-hover:text-blue-600"></i>
          </div>
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
        <div onClick={goToIntro} className="logo h-full w-14 flex justify-center items-center">
          <img className="cursor-pointer" src="logo_1.png" alt="Logo" />
        </div>

        {/* Menu Items */}
        <div className="menu-box flex justify-between items-center w-[60%] text-sm font-semibold gap-2">
          <div onClick={goToIntro} className="cursor-pointer hover:scale-110 hover:border-1 border-blue-200 h-full w-fit p-2 rounded-lg flex items-center justify-center hover:bg-gray-100 hover:text-blue-600 transform-transition duration-200 ease-in-out">HOME</div>
          <div onClick={goToDomestic} className="cursor-pointer hover:scale-110 hover:border-1 border-blue-200 h-full w-fit p-2 rounded-lg flex items-center justify-center hover:bg-gray-100 hover:text-blue-600 transform-transition duration-200 ease-in-out">DOMESTIC</div>
          <div onClick={gotoInternational} className="cursor-pointer hover:scale-110 hover:border-1 border-blue-200 h-full w-fit p-2 rounded-lg flex items-center justify-center hover:bg-gray-100 hover:text-blue-600 transform-transition duration-200 ease-in-out">INTERNATIONAL</div>
          <div onClick={goToContact} className="cursor-pointer hover:scale-110 hover:border-1 border-blue-200 h-full w-fit flex p-2 rounded-lg items-center justify-center hover:bg-gray-100 hover:text-blue-600 transform-transition duration-200 ease-in-out">CONTACT</div>
          <div onClick={goToAbout} className="group cursor-pointer hover:scale-110 hover:border-1 border-blue-200 h-full w-fit p-2 rounded-lg flex items-center justify-center hover:bg-gray-100 hover:text-blue-600 transform-transition duration-200 ease-in-out">
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
