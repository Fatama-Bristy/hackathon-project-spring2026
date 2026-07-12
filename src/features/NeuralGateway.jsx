import React, { useState } from 'react';

export default function NeuralGateway({ onBack, onLoginSuccess }) { 
  const [activeTab, setActiveTab] = useState('student'); // student, captain
  const [isCamo, setIsCamo] = useState(false);

  const triggerCamo = () => {
    setIsCamo(true);
    setTimeout(() => setIsCamo(false), 3000);
  };

  // সরাসরি ইনস্ট্যান্ট ড্যাশবোর্ডে পাঠানোর ফাংশন
  const handleAuth = (e) => {
    if (e) e.preventDefault();
    if (onLoginSuccess) {
      onLoginSuccess(); 
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 md:p-12 flex-col relative overflow-hidden select-none transition-all duration-300"
      style={{
        backgroundColor: '#f8fafc',
        backgroundImage: `
          linear-gradient(rgba(0, 105, 111, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 105, 111, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        filter: isCamo ? 'brightness(0.05) grayscale(1)' : 'none',
        fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
    >
      {/* Scanline Background Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="w-full h-0.5 absolute left-0 opacity-50 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0, 138, 148, 0.2), transparent)',
            animation: 'scanning 6s linear infinite',
          }}
        />
        <style>{`
          @keyframes scanning {
            0% { top: 0%; }
            100% { top: 100%; }
          }
          @keyframes pulse-red {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.1); }
          }
          .pulse-dot { animation: pulse-red 2s infinite; }
        `}</style>
      </div>

      {/* Login Box */}
      <main className="relative z-10 w-full max-w-md space-y-6">
        <div className="bg-white/90 backdrop-blur-xl rounded-xl p-8 flex flex-col gap-8 overflow-hidden relative border border-slate-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1),0_0_1px_0_rgba(0,0,0,0.05)]">
          
          {/* Cyber Corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-slate-300"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-slate-300"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-slate-300"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-slate-300"></div>
          
          <header className="space-y-1.5">
            <div className="flex items-center gap-3">
              <span className="pulse-dot w-2.5 h-2.5 rounded-full bg-[#ff525c] shadow-[0_0_4px_#ff525c]"></span>
              <h1 className="text-sm text-slate-900 tracking-[0.2em] font-black uppercase">
                SYSTEM AUTHENTICATION
              </h1>
            </div>
            <p className="text-base font-black text-slate-900 tracking-wide uppercase">
              SECTION B ANTI-TYRANNY NETWORK
            </p>
          </header>

          {/* Navigation Tabs */}
          <div className="grid grid-cols-2 border-b border-slate-200 text-center font-bold">
            <button 
              type="button"
              className={`py-3.5 text-sm tracking-wider font-extrabold transition-all duration-200 border-b-2 -mb-px ${activeTab === 'student' ? 'border-[#00696f] text-[#00696f]' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
              onClick={() => setActiveTab('student')}
            >
              GENERAL STUDENT
            </button>
            <button 
              type="button"
              className={`py-3.5 text-sm tracking-wider font-extrabold transition-all duration-200 border-b-2 -mb-px ${activeTab === 'captain' ? 'border-[#ff525c] text-[#ff525c]' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
              onClick={() => setActiveTab('captain')}
            >
              UNDERCOVER CAPTAIN
            </button>
          </div>

          {/* Student Form */}
          {activeTab === 'student' && (
            <form onSubmit={handleAuth} className="space-y-6">
              <div className="relative group">
                <label className="absolute -top-3 left-3 bg-white px-2 text-xs text-[#00696f] font-black uppercase tracking-wider z-10">
                  Secret Class Roll Number
                </label>
                <div className="flex items-center border-2 border-slate-200 focus-within:border-[#00696f] transition-colors bg-slate-50 rounded-md">
                  <span className="text-slate-400 pl-4 font-bold text-2xl select-none">#</span>
                  <input 
                    required
                    className="w-full bg-transparent border-none focus:ring-0 text-slate-900 placeholder:text-slate-300 text-base py-4 px-4 font-bold tracking-wide outline-none" 
                    placeholder="Enter Roll (e.g., 07)" 
                    type="text" 
                  />
                </div>
              </div>
              <button 
                type="submit" 
                className="w-full py-5 bg-[#0f172a] hover:bg-[#00696f] text-sm font-black tracking-widest text-white active:scale-[0.98] transition-all shadow-lg rounded-md uppercase"
              >
                Decrypt & Enter
              </button>
            </form>
          )}

          {/* Captain Form */}
          {activeTab === 'captain' && (
            <form onSubmit={handleAuth} className="space-y-6">
              <div className="space-y-5">
                <div className="relative group">
                  <label className="absolute -top-3 left-3 bg-white px-2 text-xs text-[#ff525c] font-black uppercase tracking-wider z-10">
                    Captain Access ID
                  </label>
                  <div className="flex items-center border-2 border-slate-200 focus-within:border-[#ff525c] transition-colors bg-slate-50 rounded-md">
                    <input required className="w-full bg-transparent border-none focus:ring-0 text-slate-900 placeholder:text-slate-300 text-base py-4 px-4 font-bold tracking-wide outline-none" placeholder="CPT_XXXX_7" type="text" />
                  </div>
                </div>
                <div className="relative group">
                  <label className="absolute -top-3 left-3 bg-white px-2 text-xs text-[#ff525c] font-black uppercase tracking-wider z-10">
                    Secret Passcode
                  </label>
                  <div className="flex items-center border-2 border-slate-200 focus-within:border-[#ff525c] transition-colors bg-slate-50 rounded-md">
                    <input required className="w-full bg-transparent border-none focus:ring-0 text-slate-900 placeholder:text-slate-300 text-base py-4 px-4 tracking-widest outline-none font-bold" placeholder="••••••••" type="password" />
                  </div>
                </div>
              </div>
              <button 
                type="submit" 
                className="w-full py-5 bg-[#ff525c] hover:brightness-110 text-sm font-black tracking-widest text-white active:scale-[0.98] transition-all shadow-lg rounded-md uppercase"
              >
                Authorize Command
              </button>
            </form>
          )}

          <footer className="pt-4 border-t border-slate-100 flex flex-col gap-4">
            <p className="text-xs text-[#ba1a1a] font-black italic leading-relaxed text-center uppercase">
              Caution: If Kuddus approaches, quickly trigger the Emergency Camouflage mode.
            </p>
            <button 
              type="button"
              onClick={onBack} 
              className="text-center text-sm text-slate-500 hover:text-slate-800 underline font-bold uppercase tracking-wider pt-1 border-none bg-transparent cursor-pointer"
            >
              [ Return to Landing Page ]
            </button>
          </footer>
        </div>
      </main>

      {/* Emergency Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button type="button" onClick={triggerCamo} className="group relative flex items-center justify-center p-5 bg-white border-2 border-slate-200 rounded-full hover:bg-[#ba1a1a] hover:border-[#ba1a1a] transition-all duration-300 shadow-2xl">
          <span className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs px-3 py-1.5 rounded whitespace-nowrap font-black tracking-wider">EMERGENCY_CAMO</span>
        </button>
      </div>
    </div>
  );
}