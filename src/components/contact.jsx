import mail from '../assets/mail.png';

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative bg-black py-20 overflow-hidden border border-cyan-500/30"
      style={{
        boxShadow: '0 0 0 1px rgba(8, 145, 178, 0.05), 0 0 6px 0 rgba(8, 145, 178, 0.05) inset'
      }}
    >
      <div className="absolute top-0 left-0 w-48 h-48 border-l-4 border-t-4 border-cyan-500/40"></div>
      <div className="absolute top-0 right-0 w-48 h-48 border-r-4 border-t-4 border-pink-500/40"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 border-l-4 border-b-4 border-pink-500/40"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 border-r-4 border-b-4 border-cyan-500/40"></div>
    
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center mb-16">
          <div className="text-pink-500 font-mono text-5xl mr-3">{`{`}</div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-500 jura-bold">Contact Me</h2>
          <div className="text-cyan-500 font-mono text-5xl ml-3">{`}`}</div>
        </div>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 h-full">
          <div className="h-[550px] w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-md border-2 border-cyan-500/20 p-8">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAzMCBMIDEyMCAzMCAKICAgICAgICAgICAgICAgTSAwIDYwIEwgMTIwIDYwIAogICAgICAgICAgICAgICBNIDAgOTAgTCAxMjAgOTAgCiAgICAgICAgICAgICAgIE0gMCAxMjAgTCAxMjAgMTIwIAogICAgICAgICAgICAgICBNIDMwIDAgTCAzMCAxMjAgCiAgICAgICAgICAgICAgIE0gNjAgMCBMIDYwIDEyMCAKICAgICAgICAgICAgICAgTSA5MCAwIEwgOTAgMTIwIAogICAgICAgICAgICAgICBNIDEyMCAwIEwgMTIwIDEyMCAKICAgICAgICAgICAgICAgIiAKICAgICAgICAgICAgZmlsbD0ibm9uZSIgCiAgICAgICAgICAgIHN0cm9rZT0icmdiYSgxMDIsIDkwLCAyNDAsIDAuMykiIAogICAgICAgICAgICBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz4KPC9zdmc+')]"></div>
                
          <div className="relative z-10 flex flex-col h-full justify-center space-y-6 ">
            <div>
              <label className="block text-cyan-400 text-sm font-medium mb-2">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-black/50 border border-cyan-500/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                placeholder="Your first name" 
              />
            </div>
            
            <div>
              <label className="block text-cyan-400 text-sm font-medium mb-2">Last Name</label>
              <input 
                type="text" 
                className="w-full bg-black/50 border border-cyan-500/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                placeholder="Your last name" 
              />
            </div>
            
            <div>
              <label className="block text-cyan-400 text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-black/50 border border-cyan-500/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                placeholder="your.email@example.com" 
              />
            </div>
            
            <div>
              <label className="block text-cyan-400 text-sm font-medium mb-2">Message</label>
              <textarea 
                className="w-full bg-black/50 border border-cyan-500/30 rounded-md px-4 py-2 text-white h-24 focus:outline-none focus:ring-2 resize-none focus:ring-cyan-500/50"
                placeholder="What would you like to discuss?"
              ></textarea>
            </div>
            
            <div className="flex justify-end">
              <button 
              className="jura-bold px-8 py-3 bg-gradient-to-r from-cyan-500/80 to-pink-500/80 text-white font-medium rounded-md hover:from-cyan-500 hover:to-pink-500 transition-all duration-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            >
              Send Message
            </button>
            </div>
            
          </div>
            </div>
          </div>
            <div className="w-[600px] h-[600px] relative ">
              <div className="w-full h-full overflow-hidden ml-10">
                <img
                  src={mail}
                  alt="Mery - Web Developer"
                  className="w-full h-full object-cover rounded-lg animate-float-slow"
                />
              </div>
            </div>
        
        </div>
      </div>

      <style jsx>{`
          @keyframes float-slow {
          0%, 100% {
            transform: translateY(-10px) translateX(-5px);
          }
          50% {
            transform: translateY(10px) translateX(5px);
          }
        }

        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite;
        }

      `}</style>
    </div>
  );
}

export default Contact;