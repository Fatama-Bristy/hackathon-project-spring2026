import React, { useState } from 'react';

export default function AntiKuddusRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [camoEnabled, setCamoEnabled] = useState(false);

  return (
    <div 
      className="min-h-screen flex flex-col justify-between select-none relative"
      style={{
        backgroundColor: '#f7f9fb',
        backgroundImage: `
          linear-gradient(rgba(148, 110, 109, 0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(148, 110, 109, 0.06) 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Top AppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-[#f7f9fb] border-b-2 border-[#946e6d]">
        <div className="flex items-center gap-2">
          <span className="font-headline-md text-xl font-black tracking-tighter text-[#ba0029]">
            ANTI-KUDDUS
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="material-symbols-outlined text-[#565e74] hover:bg-[#eceef0] p-2 rounded cursor-pointer text-[20px]">security</span>
          <span className="material-symbols-outlined text-[#565e74] hover:bg-[#eceef0] p-2 rounded cursor-pointer text-[20px]">sensors</span>
          <span className="material-symbols-outlined text-[#565e74] hover:bg-[#eceef0] p-2 rounded cursor-pointer text-[20px]">settings</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow flex items-center justify-center pt-24 pb-16 px-4">
        <div className="w-full max-w-xl bg-white p-8 md:p-12 border-2 border-[#191c1e] shadow-sm relative">
          
          {/* Header Section */}
          <div className="mb-8 text-left">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-xl md:text-2xl font-black text-[#191c1e] tracking-tight uppercase">
                RECRUIT NEW WHISTLEBLOWER
              </h1>
              <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981] animate-pulse"></div>
            </div>
            <p className="text-[11px] font-bold tracking-wide text-[#565e74] uppercase opacity-80" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Register safely into Section B Freedom Network
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Codename */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#5f3e3e] flex items-center gap-1.5 tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="material-symbols-outlined text-[14px]">person</span> SECRET CODENAME
              </label>
              <input 
                type="text" 
                placeholder="e.g., Silent Shadow" 
                className="w-full bg-[#f2f4f6] border-2 border-[#191c1e] p-3.5 text-sm font-medium text-[#191c1e] focus:ring-0 focus:border-[#ba0029] focus:bg-white outline-none transition-all rounded-none"
              />
            </div>

            {/* Class Roll & Bench Row Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-[#5f3e3e] flex items-center gap-1.5 tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  <span className="material-symbols-outlined text-[14px]">pin</span> OFFICIAL CLASS ROLL NUMBER
                </label>
                <input 
                  type="text" 
                  placeholder="e.g., 23" 
                  className="w-full bg-[#f2f4f6] border-2 border-[#191c1e] p-3.5 text-sm font-medium text-[#191c1e] focus:ring-0 focus:border-[#ba0029] focus:bg-white outline-none transition-all rounded-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-[#5f3e3e] flex items-center gap-1.5 tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  <span className="material-symbols-outlined text-[14px]">chair</span> SELECT CLASSROOM BENCH ROW
                </label>
                <select className="w-full bg-[#f2f4f6] border-2 border-[#191c1e] p-3.5 text-sm font-medium text-[#191c1e] focus:ring-0 focus:border-[#ba0029] focus:bg-white outline-none transition-all cursor-pointer rounded-none appearance-none">
                  <option>Front Benchers (The Shields)</option>
                  <option>Middle Benchers (The Watchers)</option>
                  <option>Back Benchers (The Core Resistance)</option>
                </select>
              </div>
            </div>

            {/* Passcode */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#5f3e3e] flex items-center gap-1.5 tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="material-symbols-outlined text-[14px]">lock</span> ENCRYPTED ACCESS PASSCODE
              </label>
              <div className="relative flex items-center">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  className="w-full bg-[#f2f4f6] border-2 border-[#191c1e] p-3.5 text-sm font-medium text-[#191c1e] focus:ring-0 focus:border-[#ba0029] focus:bg-white outline-none transition-all pr-12 rounded-none"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-[#5f3e3e] hover:text-[#ba0029] transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            {/* Camouflage Protocol Container */}
            <div className="p-4 border border-[#e9bcba] bg-[#ffdad6]/10 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-bold text-[#191c1e] flex items-center gap-1.5 tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  <span className="material-symbols-outlined text-[16px] text-[#006948]" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span> 
                  CAMOUFLAGE PROTOCOL
                </label>
                <button 
                  type="button"
                  onClick={() => setCamoEnabled(!camoEnabled)}
                  className={`w-11 h-6 rounded-full transition-colors relative focus:outline-none ${camoEnabled ? 'bg-[#006948]' : 'bg-[#d8dadc]'}`}
                >
                  <span className={`absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-transform shadow-sm ${camoEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>
              <p className="text-[10px] text-[#5c647a] leading-relaxed tracking-wide" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                If turned on, your account logs in automatically as a "Math Study Guide" profile whenever a teacher is nearby.
              </p>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-[#ba0029] hover:bg-[#a00022] text-white py-4 text-[11px] font-bold tracking-[0.2em] transition-all active:scale-[0.99] rounded-none" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              INITIALIZE RESISTANCE PROFILE
            </button>

            {/* Footer Link */}
            <div className="text-center pt-2">
              <a href="#" className="text-[11px] font-bold text-[#565e74] hover:text-[#ba0029] underline underline-offset-4 decoration-2 transition-colors" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Already registered? Bypass to Login Portal
              </a>
            </div>
          </form>
        </div>
      </main>

      {/* Bottom Footer */}
      <footer className="w-full py-4 px-6 flex flex-col sm:flex-row justify-between items-center gap-3 bg-[#eceef0] border-t-2 border-[#946e6d] text-[10px] font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        <div className="text-[#191c1e] tracking-wider">L-ALPHA PROTOCOL</div>
        <div className="text-[#006948] tracking-wide">
          ENCRYPTION STATUS: AES-256-GCM [ACTIVE]
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-[#5f3e3e] opacity-80 hover:text-[#ba0029] transition-colors">PROTOCOL_V.1.0.4</a>
          <a href="#" className="text-[#5f3e3e] opacity-80 hover:text-[#ba0029] transition-colors">LOG_TERMINAL</a>
        </div>
      </footer>
    </div>
  );
}