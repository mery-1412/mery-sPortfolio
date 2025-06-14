
import me from "../assets/me.jpg"

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAzMCBMIDEyMCAzMCAKICAgICAgICAgICAgICAgTSAwIDYwIEwgMTIwIDYwIAogICAgICAgICAgICAgICBNIDAgOTAgTCAxMjAgOTAgCiAgICAgICAgICAgICAgIE0gMCAxMjAgTCAxMjAgMTIwIAogICAgICAgICAgICAgICBNIDMwIDAgTCAzMCAxMjAgCiAgICAgICAgICAgICAgIE0gNjAgMCBMIDYwIDEyMCAKICAgICAgICAgICAgICAgTSA5MCAwIEwgOTAgMTIwIAogICAgICAgICAgICAgICBNIDEyMCAwIEwgMTIwIDEyMCAKICAgICAgICAgICAgICAgIiAKICAgICAgICAgICAgZmlsbD0ibm9uZSIgCiAgICAgICAgICAgIHN0cm9rZT0icmdiYSgxMDIsIDkwLCAyNDAsIDAuMykiIAogICAgICAgICAgICBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz4KPC9zdmc+')]"></div>
      
      <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl"></div>
      <div className="absolute right-1/3 bottom-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center mb-16">
          <div className="text-pink-500 font-mono text-3xl mr-3">{`{`}</div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 jura-bold">About Me</h2>
          <div className="text-cyan-500 font-mono text-3xl ml-3">{`}`}</div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative mx-auto">
            <div className="w-[450px] h-[450px] relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-cyan-500"></div>
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-pink-500"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-pink-500"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-cyan-500"></div>
              
              {/* personal image */}

              <div className="w-full h-full overflow-hidden p-1">
                <div className="w-full h-full bg-gradient-to-br from-cyan-500/30 via-purple-600/30 to-pink-500/30 rounded-lg flex items-center justify-center">
                  <img 
                    src={me}
                    alt="Mery - Web Developer" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-cyan-500/50"></div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-pink-500/50"></div>
            </div>
            
            <div className="absolute mt-4 mb-4 left-1/2 transform -translate-x-1/2 bg-black/80 border border-cyan-500/50 rounded px-3 py-1 font-mono text-cyan-400 text-sm">
              <span className="opacity-70">id:</span> mery1412
            </div>
          </div>
          
          <div className="space-y-10">
            <div className="relative border-l-2 border-cyan-500/50 pl-6">
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-cyan-500"></div>
              <h3 className="text-3xl font-bold text-white mb-6 space-mono-regular">
                Web Developer & Creative Designer
              </h3>
              <p className="text-gray-300 jura-bold text-lg">
                I'm a passionate web developer who enjoys creating clean and responsive websites. I'm building my skills in frontend, backend development and design. I'm always learning and exploring new ways to improve and grow in this field.
              </p>
            </div>
            
            <div className="relative border-l-2 border-pink-500/50 pl-6">
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-pink-500"></div>
              <h3 className="text-3xl font-bold text-white mb-6 space-mono-regular">
                My Journey
              </h3>
              <p className="text-gray-300 jura-bold text-lg">
                My journey began as a Computer Systems Engineering student with a growing passion for web development. Along the way, I also developed a strong interest in cybersecurity, and I continue to explore both fields as I grow and learn.
              </p>
            </div>
            
            <div className="relative border-l-2 border-purple-500/50 pl-6">
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-purple-500"></div>
              <h3 className="text-3xl font-bold text-white mb-6 space-mono-regular">
                What I Do
              </h3>
              <p className="text-gray-300 jura-regular text-lg">
                I build responsive and user-friendly websites, focusing on clean layouts and simple design. I enjoy experimenting with visual styles and improving my skills as I go. I also explore video editing, where I put together engaging visual content that supports digital projects.
              </p>
            </div>
            
            <div className="pt-6 border-t border-cyan-500/30">
              <h4 className="text-white font-mono mb-4 flex items-center">
                <span className="text-pink-500 mr-2">&lt;</span>
                Tech Stack
                <span className="text-pink-500 ml-2">/&gt;</span>
              </h4>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-md text-cyan-400 text-sm">React</span>
                <span className="px-3 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-md text-cyan-400 text-sm">Next</span>
                <span className="px-3 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-md text-cyan-400 text-sm">Node.js</span>
                <span className="px-3 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-md text-cyan-400 text-sm">TailwindCSS</span>
                <span className="px-3 py-1 bg-pink-900/30 border border-pink-500/30 rounded-md text-pink-400 text-sm">MERN</span>
                <span className="px-3 py-1 bg-purple-900/30 border border-purple-500/30 rounded-md text-purple-400 text-sm">Design</span>
                <span className="px-3 py-1 bg-purple-900/30 border border-purple-500/30 rounded-md text-purple-400 text-sm">UI/UX</span>
                <span className="px-3 py-1 bg-purple-900/30 border border-purple-500/30 rounded-md text-purple-400 text-sm">Video Editing</span>

              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-cyan-500/30"></div>
      <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-pink-500/30"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-pink-500/30"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-cyan-500/30"></div>
    </section>
  );
};

export default About;