import { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import pastelPortImg from '../assets/projectsImages/pastelPort.png';
import votexImg from '../assets/projectsImages/votex.png';
import hadjImg from '../assets/projectsImages/hadj.png';
import bookstore from '../assets/projectsImages/bookstore.png'; 

const projects = [
  { 
    img: pastelPortImg, 
    title: "Pastel Portfolio", 
    desc: "A pastel-themed portfolio site with clean design and smooth animations.",
    tech: ["React", "TailwindCSS"]
  },
  { 
    img: votexImg, 
    title: "Votex", 
    desc: "A decentralized voting platform leveraging blockchain technology for secure and transparent voting.",
    tech: ["Next.js", "Ethereum", "Smart Contracts", "Volta Testnet"]
  },
  { 
    img: hadjImg, 
    title: "Labayka", 
    desc: "A travel companion application designed to assist pilgrims on their sacred journey.",
    tech: ["MERN Stack"]
  },
  { 
    img: bookstore, 
    title: "Bookstore", 
    desc: "A modern online bookstore with intuitive browsing and purchasing experience.",
    tech: ["MERN Stack"]
  }
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const prevSlide = () => setCurrent((current - 1 + projects.length) % projects.length);
  const nextSlide = () => setCurrent((current + 1) % projects.length);

  return (
    <section id="projects-section" className="min-h-screen w-full bg-black relative overflow-hidden py-20 flex flex-col justify-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAzMCBMIDEyMCAzMCAKICAgICAgICAgICAgICAgTSAwIDYwIEwgMTIwIDYwIAogICAgICAgICAgICAgICBNIDAgOTAgTCAxMjAgOTAgCiAgICAgICAgICAgICAgIE0gMCAxMjAgTCAxMjAgMTIwIAogICAgICAgICAgICAgICBNIDMwIDAgTCAzMCAxMjAgCiAgICAgICAgICAgICAgIE0gNjAgMCBMIDYwIDEyMCAKICAgICAgICAgICAgICAgTSA5MCAwIEwgOTAgMTIwIAogICAgICAgICAgICAgICBNIDEyMCAwIEwgMTIwIDEyMCAKICAgICAgICAgICAgICAgIiAKICAgICAgICAgICAgZmlsbD0ibm9uZSIgCiAgICAgICAgICAgIHN0cm9rZT0icmdiYSgxMDIsIDkwLCAyNDAsIDAuMykiIAogICAgICAgICAgICBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz4KPC9zdmc+')]"></div>
      
=      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-2/3 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl"></div>
      
      <div className="absolute top-0 left-0 w-48 h-48 border-l-4 border-t-4 border-cyan-500/40"></div>
      <div className="absolute top-0 right-0 w-48 h-48 border-r-4 border-t-4 border-pink-500/40"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 border-l-4 border-b-4 border-pink-500/40"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 border-r-4 border-b-4 border-cyan-500/40"></div>
      
      <div className="container mx-auto px-6 mb-12 relative z-10">
        <div className="flex items-center justify-center mb-16">
          <div className="text-pink-500 font-mono text-5xl mr-3">{`{`}</div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 jura-bold">Projects</h2>
          <div className="text-cyan-500 font-mono text-5xl ml-3">{`}`}</div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center relative">
          <button 
            onClick={prevSlide}
            className="absolute left-0 -translate-x-1/2 bg-black/50 border-2 border-cyan-500 rounded-full text-cyan-400 
            shadow-[0_0_15px_rgba(34,211,238,0.5)] cursor-pointer p-4 mx-3 transition-all duration-200 z-10 
            h-16 w-16 flex items-center justify-center hover:bg-cyan-950/30 hover:scale-110"
          >
            <FiChevronLeft size={32} />
          </button>
          
          <div className="w-[1000px] h-[550px] rounded-2xl bg-black/70 backdrop-blur-sm border-2 border-gradient-to-r from-cyan-500/50 to-pink-500/50 p-8
                        shadow-[0_0_25px_rgba(34,211,238,0.3),0_0_50px_rgba(236,72,153,0.3)] overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 h-full">
              <div className="relative overflow-hidden rounded-xl border-2 border-cyan-500/30 group h-[480px]">
                <img 
                  src={projects[current].img} 
                  alt={projects[current].title} 
                  className="w-full h-full object-cover object-center rounded-lg transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="flex flex-col justify-center space-y-5 h-full py-4">
                <h3 className="space-mono-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  {projects[current].title}
                </h3>
                <p className="text-gray-300 jura-bold text-lg leading-relaxed">
                  {projects[current].desc}
                </p>
                
                <div>
                  <h4 className="text-white font-mono mb-4 flex items-center text-sm">
                    <span className="text-pink-500 mr-2">&lt;</span>
                    Tech Stack
                    <span className="text-pink-500 ml-2">/&gt;</span>
                  </h4>
                  
                  <div className="flex flex-wrap gap-3">
                    {projects[current].tech.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-md text-cyan-400 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
            
              </div>
            </div>
          </div>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 translate-x-1/2 bg-black/50 border-2 border-pink-500 rounded-full text-pink-400 
            shadow-[0_0_15px_rgba(236,72,153,0.5)] cursor-pointer p-4 mx-3 transition-all duration-200 z-10 
            h-16 w-16 flex items-center justify-center hover:bg-pink-950/30 hover:scale-110"
          >
            <FiChevronRight size={32} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 gap-4">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === idx 
                  ? "bg-gradient-to-r from-cyan-400 to-pink-500 w-8 shadow-[0_0_10px_rgba(34,211,238,0.5)]" 
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;