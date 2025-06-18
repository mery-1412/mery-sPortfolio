import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import mail from '../assets/mail.png';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    emailjs.sendForm(
      'service_h7hp9wa', 
      'template_0ff4d9x', 
      formRef.current,
      'CuUGmkntizAAQ_r8r'
    )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
        
        setTimeout(() => setSuccess(false), 5000);
      }, (error) => {
        setLoading(false);
        setError(true);
        console.error(error);
        
        // Reset error message after 5 seconds
        setTimeout(() => setError(false), 5000);
      });
  };

  return (
    <div
      id="contact"
      className="relative h-screen p-10 bg-black py-20 overflow-hidden border border-cyan-500/30"
      style={{
        boxShadow: '0 0 0 1px rgba(8, 145, 178, 0.05), 0 0 6px 0 rgba(8, 145, 178, 0.05) inset'
      }}
    >
      <div className="absolute top-0 left-0 w-48 h-48 border-l-4 border-t-4 border-cyan-500/40"></div>
      <div className="absolute top-0 right-0 w-48 h-48 border-r-4 border-t-4 border-pink-500/40"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 border-l-4 border-b-4 border-pink-500/40"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 border-r-4 border-b-4 border-cyan-500/40"></div>
    
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center mb-28">
          <div className="text-pink-500 font-mono text-5xl mr-3">{`{`}</div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-500 jura-bold">Contact Me</h2>
          <div className="text-cyan-500 font-mono text-5xl ml-3">{`}`}</div>
        </div>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 h-full">
            <div className="h-[550px] w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-md border-2 border-cyan-500/20 p-8">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAzMCBMIDEyMCAzMCAKICAgICAgICAgICAgICAgTSAwIDYwIEwgMTIwIDYwIAogICAgICAgICAgICAgICBNIDAgOTAgTCAxMjAgOTAgCiAgICAgICAgICAgICAgIE0gMCAxMjAgTCAxMjAgMTIwIAogICAgICAgICAgICAgICBNIDMwIDAgTCAzMCAxMjAgCiAgICAgICAgICAgICAgIE0gNjAgMCBMIDYwIDEyMCAKICAgICAgICAgICAgICAgTSA5MCAwIEwgOTAgMTIwIAogICAgICAgICAgICAgICBNIDEyMCAwIEwgMTIwIDEyMCAKICAgICAgICAgICAgICAgIiAKICAgICAgICAgICAgZmlsbD0ibm9uZSIgCiAgICAgICAgICAgIHN0cm9rZT0icmdiYSgxMDIsIDkwLCAyNDAsIDAuMykiIAogICAgICAgICAgICBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz4KPC9zdmc+')]"></div>
                
              <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 flex flex-col h-full justify-center space-y-6">
                <div>
                  <label className="block text-cyan-400 text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-cyan-500/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    placeholder="Your first name" 
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-cyan-400 text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-cyan-500/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    placeholder="Your last name" 
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-cyan-400 text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-cyan-500/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    placeholder="your.email@example.com" 
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-cyan-400 text-sm font-medium mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-cyan-500/30 rounded-md px-4 py-2 text-white h-24 focus:outline-none focus:ring-2 resize-none focus:ring-cyan-500/50"
                    placeholder="What would you like to discuss?"
                    required
                  ></textarea>
                </div>
                
                <div className="flex justify-between items-center">
                  {success && (
                    <p className="text-green-400 text-sm">Message sent successfully!</p>
                  )}
                  {error && (
                    <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
                  )}
                  
                  <button 
                    type="submit"
                    className="jura-bold px-8 py-3 bg-gradient-to-r from-cyan-500/80 to-pink-500/80 text-white font-medium rounded-md hover:from-cyan-500 hover:to-pink-500 transition-all duration-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-[600px] h-[600px] relative">
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

 