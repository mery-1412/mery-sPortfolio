import React from 'react';
import pcAsset from '../assets/pcAsset.png'; // Importing the PC asset image

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden pt-16 ">
      {/* Cyberpunk grid overlay - Creates a tech grid pattern in the background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAzMCBMIDEyMCAzMCAKICAgICAgICAgICAgICAgTSAwIDYwIEwgMTIwIDYwIAogICAgICAgICAgICAgICBNIDAgOTAgTCAxMjAgOTAgCiAgICAgICAgICAgICAgIE0gMCAxMjAgTCAxMjAgMTIwIAogICAgICAgICAgICAgICBNIDMwIDAgTCAzMCAxMjAgCiAgICAgICAgICAgICAgIE0gNjAgMCBMIDYwIDEyMCAKICAgICAgICAgICAgICAgTSA5MCAwIEwgOTAgMTIwIAogICAgICAgICAgICAgICBNIDEyMCAwIEwgMTIwIDEyMCAKICAgICAgICAgICAgICAgIiAKICAgICAgICAgICAgZmlsbD0ibm9uZSIgCiAgICAgICAgICAgIHN0cm9rZT0icmdiYSgxMDIsIDkwLCAyNDAsIDAuMykiIAogICAgICAgICAgICBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz4KPC9zdmc+')]"></div>
      {/* Blurry neon purple dots background - Creates atmospheric glow */}
      <div className="absolute inset-0">
        {/* Large dots - Positioned strategically for visual depth */}
        <div className="absolute top-10 left-16 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/4 right-20 w-48 h-48 bg-violet-600 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-purple-400 rounded-full blur-3xl opacity-35"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-fuchsia-500 rounded-full blur-2xl opacity-45"></div>
        <div className="absolute bottom-20 right-16 w-36 h-36 bg-purple-600 rounded-full blur-3xl opacity-25"></div>
        
        {/* Added neon colors - Expanded color palette beyond purple */}
        <div className="absolute top-1/6 left-1/3 w-36 h-36 bg-cyan-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/5 right-1/5 w-28 h-28 bg-green-500 rounded-full blur-3xl opacity-25"></div>
        <div className="absolute top-3/5 right-1/4 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>

        {/* Medium dots - Different sizes create depth perception */}
        <div className="absolute top-1/3 left-1/2 w-20 h-20 bg-violet-500 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute bottom-1/2 left-20 w-28 h-28 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-20 right-1/2 w-16 h-16 bg-fuchsia-400 rounded-full blur-xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-400 rounded-full blur-3xl opacity-25"></div>

        {/* Cyberpunk scanlines overlay - Adds retro CRT monitor effect */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMSIgaGVpZ2h0PSIyIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJyZ2JhKDAsIDAsIDAsIDAuMDMpIiAvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIgLz48L3N2Zz4=')] opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Digital circuit border - Now centered and properly positioned */}
  
        {/* Glowing corner accents - Also centered better */}
        <div className="absolute top-[5%] left-[0%] w-24 h-12 border-t-2 border-l-2 border-cyan-500 rounded-tl-md shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
        <div className="absolute top-[5%] right-[0%] w-24 h-12 border-t-2 border-r-2 border-pink-500 rounded-tr-md shadow-[0_0_15px_rgba(236,72,153,0.5)]"></div>
        <div className="absolute bottom-[5%] left-[0%] w-24 h-12 border-b-2 border-l-2 border-pink-500 rounded-tl-md shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
        <div className="absolute bottom-[5%] right-[0%] w-24 h-12 border-b-2 border-r-2 border-cyan-500 rounded-tr-md shadow-[0_0_15px_rgba(236,72,153,0.5)]"></div>
        


        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-20 animate-fadeInLeft">
            <div className="space-y-16">
              <div className="relative">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight animate-fadeInUp">
                  {/* Enhanced gradient text effects with cyberpunk color palette */}
                  
                  <span className="space-mono-regular text-transparent bg-clip-text bg-white">
                     Mery's
                  </span> 
                  {' '}
                  <span className="space-mono-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                     Portfolio
                  </span> 
               
                  <br />
                  <span className="space-mono-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Design</span>
                  {"  "}<span className="space-mono-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 ">Code</span>
                    {" "}<span className="space-mono-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">Craft</span>

                  
                  {/* Digital glitch effect - Adds tech-inspired UI element */}
                  <span className="absolute -top-4 -left-4 text-xs text-cyan-400 font-mono opacity-75">{"<mery1412>"}</span>
                </h1>
              </div>
              
              {/* Enhanced paragraph with border and tech-themed comments */}
              <p className="text-gray-300 jura-bold text-xl max-w-lg leading-relaxed animate-fadeInUp animation-delay-200 border-l-2 border-cyan-500/50 pl-4">
                Web developer and creative designer crafting websites, digital designs, and video content              </p>
            </div>

         
            {/* Buttons with cyberpunk styling and hover effects */}
            <div className="flex gap-4 animate-fadeInUp animation-delay-400">
              {/* Primary button with gradient background and glow effect */}
              <button className="jura-bold px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500  text-white font-semibold rounded-md border border-cyan-400/30 hover:from-purple-700   hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-105 transform relative overflow-hidden">
                View Projects
                {/* Added subtle glow effect on hover */}
              </button>
              
              {/* Secondary button with neon border and hover effect */}
              <button className="jura-bold px-8 py-4 border-2 border-pink-400 text-pink-300 font-semibold rounded-md hover:bg-pink-500/10 transition-all duration-300 hover:text-pink-300 hover:shadow-lg hover:shadow-pink-500/25 hover:scale-105 transform">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right - PC Asset Container */}
          <div className="relative animate-fadeInRight">
            {/* Enhanced PC container with cyberpunk styling */}
            <div className="relative w-96 h-96 mx-auto flex items-center justify-center">
          
                <img 
                    src={pcAsset} 
                    alt="PC Desktop Setup" 
                    className="w-full h-auto object-contain max-h-96 animate-bounce-slow"
                />
            </div>

            {/* Enhanced Floating Elements with diverse neon colors */}
            <div className="absolute -top-10 -right-10 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg shadow-cyan-500/50 animate-float"></div>
            <div className="absolute -bottom-10 -left-10 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg shadow-pink-500/50 animate-float-reverse"></div>
            <div className="absolute top-1/4 -left-6 w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg shadow-lg shadow-green-500/50 animate-float"></div>
            <div className="absolute top-3/4 -right-4 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg shadow-yellow-400/50 animate-float-reverse"></div>
            
              {/* Digital circuit lines for tech effect - expanded set */}
              {/* Top and bottom lines */}
              <div className="absolute top-0 left-1/3 w-1 h-20 bg-gradient-to-b from-cyan-500 to-transparent"></div>
              <div className="absolute bottom-0 right-1/3 w-1 h-20 bg-gradient-to-t from-pink-500 to-transparent"></div>

              {/* Additional vertical lines */}
              <div className="absolute top-0 left-2/3 w-1 h-14 bg-gradient-to-b from-purple-500 to-transparent"></div>
              <div className="absolute bottom-0 left-1/4 w-1 h-16 bg-gradient-to-t from-cyan-400 to-transparent"></div>
              <div className="absolute top-0 right-1/4 w-1 h-12 bg-gradient-to-b from-fuchsia-500 to-transparent"></div>

          

            {/* Enhanced glow effects with multi-color gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`


        /* Added smooth bounce animation for PC image */
        @keyframes bounce-slow {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-15px);
            }
        }
        

        /* Kept original animations */
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(-20px) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(180deg);
          }
        }

        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(20px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(-180deg);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(-10px) translateX(-5px);
          }
          50% {
            transform: translateY(10px) translateX(5px);
          }
        }

        /* Added new cyberpunk-inspired glitch animation */
        @keyframes glitch {
          0% {
            clip-path: inset(40% 0 61% 0);
            transform: translate(-2px, 2px);
          }
          20% {
            clip-path: inset(92% 0 1% 0);
            transform: translate(2px, -2px);
          }
          40% {
            clip-path: inset(43% 0 1% 0);
            transform: translate(-2px, 2px);
          }
          60% {
            clip-path: inset(25% 0 58% 0);
            transform: translate(2px, -2px);
          }
          80% {
            clip-path: inset(54% 0 7% 0);
            transform: translate(-2px, 2px);
          }
          100% {
            clip-path: inset(58% 0 43% 0);
            transform: translate(2px, -2px);
          }
        }

         .animate-bounce-slow {
        animation: bounce-slow 6s ease-in-out infinite;
        }

        /* Kept original animation classes */
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out 0.3s both;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.
        }

        .animate-float {
          animation: float 7s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite;
        }

        /* Added new animation class for glitch effect */
        .animate-glitch {
          animation: glitch 1s infinite linear alternate-reverse;
        }
      `}</style>
    </div>
  );
};

export default Hero;