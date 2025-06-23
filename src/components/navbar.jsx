import React, { useState, useEffect } from 'react';
import logo from '../../public/logo.png';
import { FiX, FiMenu } from 'react-icons/fi'; // Make sure to import icons

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePopUp = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const closeMobileMenu = () => {
    setMenuOpen(false);
  }

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
        ? 'bg-black/10 backdrop-blur-lg border-b border-cyan-500/30 shadow-lg shadow-cyan-500/5' 
        : 'bg-transparent'
      } `}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-1">
              <a href="#" >
                <img src={logo} alt="LOGO" />
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="jura-bold relative text-gray-300 text-2xl hover:text-white font-medium transition-colors duration-300 group">
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                About
              </a>
              <a href="#projects" className="jura-bold relative text-gray-300 text-2xl hover:text-white font-medium transition-colors duration-300 group">
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                Projects
              </a>
              <a href="#contact" className="jura-bold relative text-gray-300 text-2xl hover:text-white font-medium transition-colors duration-300 group">
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                Contact
              </a>
              <a 
                onClick={handlePopUp}
                className="jura-bold px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500/80 to-pink-500/80 text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:from-cyan-400 hover:to-pink-400 cursor-pointer"
              >
                Resume
              </a>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={toggleMenu} 
                className="flex items-center text-cyan-400 hover:text-pink-400 p-2 border border-cyan-500/30 rounded-md hover:border-pink-500/30 transition-colors"
              >
                
                  <FiMenu className="h-6 w-6" />
               
              </button>
            </div>
          </div>
        </div>

=        <div 
          className={`fixed inset-y-0 right-0 w-64 bg-black/90 backdrop-blur-lg shadow-2xl border-l border-cyan-500/30 transform transition-transform duration-300 ease-in-out z-50 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
        
          
          <div className="flex flex-col px-6 py-8 space-y-8">
            <div className="absolute inset-0 -z-10 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAzMCBMIDEyMCAzMCAKICAgICAgICAgICAgICAgTSAwIDYwIEwgMTIwIDYwIAogICAgICAgICAgICAgICBNIDAgOTAgTCAxMjAgOTAgCiAgICAgICAgICAgICAgIE0gMCAxMjAgTCAxMjAgMTIwIAogICAgICAgICAgICAgICBNIDMwIDAgTCAzMCAxMjAgCiAgICAgICAgICAgICAgIE0gNjAgMCBMIDYwIDEyMCAKICAgICAgICAgICAgICAgTSA5MCAwIEwgOTAgMTIwIAogICAgICAgICAgICAgICBNIDEyMCAwIEwgMTIwIDEyMCAKICAgICAgICAgICAgICAgIiAKICAgICAgICAgICAgZmlsbD0ibm9uZSIgCiAgICAgICAgICAgIHN0cm9rZT0icmdiYSgxMDIsIDkwLCAyNDAsIDAuMykiIAogICAgICAgICAgICBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz4KPC9zdmc+')]"></div>
            <div className="absolute top-1/4 left-1/2 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2"></div>
            <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            <a 
              href="#about" 
              onClick={closeMobileMenu}
              className="jura-bold relative text-gray-300 text-xl hover:text-white transition-colors duration-300 group px-4 py-2 border-l-2 border-transparent hover:border-cyan-500"
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={closeMobileMenu}
              className="jura-bold relative text-gray-300 text-xl hover:text-white transition-colors duration-300 group px-4 py-2 border-l-2 border-transparent hover:border-pink-500"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={closeMobileMenu}
              className="jura-bold relative text-gray-300 text-xl hover:text-white transition-colors duration-300 group px-4 py-2 border-l-2 border-transparent hover:border-cyan-500"
            >
              Contact
            </a>
            <a 
              onClick={() => {
                handlePopUp();
                closeMobileMenu();
              }}
              className="jura-bold px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500/80 to-pink-500/80 text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:from-cyan-400 hover:to-pink-400 text-center mt-4 cursor-pointer"
            >
              Resume
            </a>

       
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Resume Popup */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-50 transform transition-all duration-500 animate-fade-in-up">
          <div className="bg-black/80 backdrop-blur-md border border-gradient-to-r from-cyan-500/50 to-pink-500/50 rounded-lg p-4 shadow-[0_0_15px_rgba(34,211,238,0.4)] max-w-md">
            <div className="flex gap-4 items-start">
              <div className="flex-1">
                <p className="text-white font-medium space-mono-bold">
                  The Resume is not uploaded yet, coming soon
                </p>
                <p className="text-gray-300 text-sm mt-1 jura-bold">
                  Thank you for your interest in my profile!
                </p>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="shrink-0 text-gray-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-3 w-full bg-gray-700/50 rounded-full h-1">
              <div className="bg-gradient-to-r from-cyan-400 to-pink-500 h-1 rounded-full animate-progress"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

