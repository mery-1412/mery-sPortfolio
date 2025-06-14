import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled 
    ? 'bg-black/10 backdrop-blur-lg border-b border-cyan-500/30 shadow-lg shadow-cyan-500/5' 
    : 'bg-transparent'
    } `}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-1">
            <span className="text-cyan-500 font-mono text-4xl animate-pulse">&#123;</span>
            <a href="#" className="text-white font-mono text-xl">
              <span className="jura-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-bold">
                MERY
              </span>
            </a>
            <span className="text-pink-500 font-mono text-4xl animate-pulse">&#125;</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="jura-bold relative text-gray-300 text-2xl hover:text-white font-medium transition-colors duration-300 group">
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              About
            </a>
            <a href="#projects" className="jura-bold relative text-gray-300 text-2xl hover:text-white font-medium transition-colors duration-300 group">
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              Projects
            </a>
            <a href="#resume" className="jura-bold relative text-gray-300 text-2xl hover:text-white font-medium transition-colors duration-300 group">
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              Resume
            </a>
            <a href="#contact" className="jura-bold relative text-gray-300 text-2xl hover:text-white font-medium transition-colors duration-300 group">
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              Contact
            </a>
          </div>
          
          <div className="md:hidden">
            <button className="flex items-center text-cyan-400 hover:text-pink-400 p-2 border border-cyan-500/30 rounded-md hover:border-pink-500/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

