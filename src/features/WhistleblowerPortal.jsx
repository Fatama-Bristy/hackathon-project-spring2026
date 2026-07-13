import React, { useState, useEffect } from 'react';

export default function WhistleblowerPortal() {
  const [logs, setLogs] = useState([
    "INITIALIZING SECURE HANDSHAKE ...",
    "[OK] PROXY NODE ESTABLISHED: DHAKA_7",
    "SCANNING FOR SURVEILLANCE BACKDOORS ...",
    "[OK] CLEAN LINE VERIFIED.",
    "AWAITING FINAL TRANSMISSION SIGNAL ..."
  ]);
  const [mockHash, setMockHash] = useState("SHA256: 696B0B143A11263EE03D7A67299B259AD3AC4C6CD649E");
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Dynamic Hash Simulator
  useEffect(() => {
    const chars = 'ABCDEF0123456789';
    const interval = setInterval(() => {
      let result = 'SHA256: ';
      for (let i = 0; i < 40; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setMockHash(result);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Realtime Log Simulator
  useEffect(() => {
    const logPool = [
      "[LOG] Requesting AES-256 key exchange...",
      "[OK] Key verified by primary node.",
      "[INFO] Traffic obfuscated via TOR layer.",
      "[ALERT] High-bandwidth packet detected.",
      "[OK] Buffer capacity 98.4%",
      "[LOG] Clearing local cache traces..."
    ];
    
    const interval = setInterval(() => {
      const randomLog = logPool[Math.floor(Math.random() * logPool.length)];
      setLogs(prev => [randomLog, ...prev.slice(0, 4)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleTransmit = () => {
    setIsTransmitting(true);
    setTimeout(() => {
      setIsTransmitting(false);
      setIsSuccess(true);
    }, 4000);
  };

  return (
    <div 
      className="min-h-screen flex flex-col justify-between select-none relative"
      style={{
        backgroundColor: '#f7f9fb',
        backgroundImage: `
          linear-gradient(rgba(226, 232, 240, 0.8) 1px, transparent 1px),
          linear-gradient(90deg, rgba(226, 232, 240, 0.8) 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Header Bar */}
      <header className="fixed top-0 w-full z-40 bg-white border-b-4 border-[#191c1e] flex justify-between items-center px-6 md:px-16 py-4 shadow-[0_4px_0_0_#191c1e]">
        <div className="flex items-center gap-4">
          <h1 className="text-xl md:text-2xl font-black text-[#ba0029] tracking-tighter uppercase">
            ANTI-KUDDUS PROTOCOL
          </h1>
          <div className="h-6 w-[2px] bg-[#946e6d] hidden md:block"></div>
          <span className="text-[11px] font-bold text-[#5f3e3e] tracking-widest uppercase hidden md:block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            ANONYMOUS WHISTLEBLOWER PORTAL
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-[#10b981] rounded-full animate-ping"></div>
            <span className="text-[11px] font-bold text-[#006948] tracking-wider uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              PIPELINE: ENCRYPTED
            </span>
          </div>
          <div className="flex gap-3 text-[#ba0029]">
            <span className="material-symbols-outlined text-[20px] cursor-pointer">report</span>
            <span className="material-symbols-outlined text-[20px] cursor-pointer">visibility_off</span>
            <span className="material-symbols-outlined text-[20px] cursor-pointer">shield</span>
          </div>
        </div>
      </header>

      {/* Main Panel */}
      <main className="flex-grow pt-32 pb-20 px-4 md:px-16 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Block: Submission Form */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 border-2 border-[#191c1e] shadow-sm">
            <h2 className="text-xl font-black mb-6 uppercase tracking-tight flex items-center gap-2 text-[#191c1e]">
              <span className="material-symbols-outlined text-[#ba0029]">warning</span>
              Incident Submission
            </h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-[#5f3e3e] tracking-wider block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Select Atrocity Category
                </label>
                <div className="relative">
                  <select className="w-full bg-[#f2f4f6] border-2 border-[#191c1e] py-3 px-4 text-sm font-medium text-[#191c1e] outline-none rounded-none appearance-none cursor-pointer focus:border-[#ba0029]">
                    <option>Tiffin Extortion</option>
                    <option>Washroom Bribes</option>
                    <option>Syllabus Bloat</option>
                    <option>Selfish Ludu Agenda</option>
                    <option>Other Tyranny</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-3.5 text-sm pointer-events-none">expand_more</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-[#5f3e3e] tracking-wider block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Detailed Description of Event
                </label>
                <textarea 
                  className="w-full bg-[#f2f4f6] border-2 border-[#191c1e] py-3 px-4 text-sm font-medium text-[#191c1e] outline-none rounded-none resize-none focus:border-[#ba0029] focus:bg-white" 
                  placeholder="Provide exact details (Time, Location, Subjects)..." 
                  rows="5"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-[#5f3e3e] tracking-wider block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Evidence Evidence Upload
                </label>
                <div className="border-2 border-dashed border-[#e9bcba] p-8 flex flex-col items-center justify-center gap-3 bg-white hover:bg-[#f7f9fb] transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-3xl text-[#5c647a]">cloud_upload</span>
                  <div className="text-center">
                    <p className="text-[11px] font-bold text-[#191c1e]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Drag & Drop visual proof here</p>
                    <p className="text-[9px] text-[#5c647a] mt-0.5 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>MAX FILE SIZE: 50MB (JPG, PNG, MP4)</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleTransmit}
                type="button"
                className="w-full bg-[#ba0029] hover:bg-[#a00022] text-white py-4 font-bold text-sm tracking-wider flex justify-center items-center gap-2 border-b-4 border-r-4 border-[#0f172a] active:border-b-0 active:border-r-0 active:translate-y-1 active:translate-x-1 transition-all rounded-none"
              >
                TRANSMIT COMPLAINT (SECURE)
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </div>

          {/* Right Block: Verification Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Status Panel */}
            <div className="bg-[#191c1e] text-[#f7f9fb] p-6 border-2 border-[#191c1e] shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[11px] font-bold text-[#ba0029] tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Security Verification Panel
                </h3>
                <span className="material-symbols-outlined text-[#10b981] text-[20px]">verified_user</span>
              </div>
              
              <div className="space-y-4 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <div>
                  <p className="text-[#e0e3e5] font-semibold mb-1">Roll Number Masking: ACTIVE</p>
                  <div className="bg-[#2d3133] p-2 text-[10px] text-[#bec6e0] break-all border border-[#565e74]">
                    {mockHash}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <p className="text-[#e0e3e5] font-semibold">EXIF Metadata Stripper</p>
                  <ul className="space-y-1 text-[#68dba9] text-[11px]">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">check_circle</span> Camera Signature Removed
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">check_circle</span> GPS Location Data Deleted
                    </li>
                    <li className="flex items-center gap-2 text-[#bec6e0]/60">
                      <span className="material-symbols-outlined text-sm">check_circle</span> Timestamp Obfuscated
                    </li>
                  </ul>
                </div>

                <div className="p-3 bg-[#2d3133] border-l-2 border-[#00855d]">
                  <p className="text-[10px] italic text-[#68dba9] leading-relaxed">
                    "Evidence sanitized successfully. Whistleblower identity protected via L-Alpha proxy chains."
                  </p>
                </div>
              </div>
            </div>

            {/* Realtime Terminal Log */}
            <div className="border-2 border-[#191c1e] p-5 bg-white">
              <h4 className="text-[11px] font-bold text-[#191c1e] tracking-widest mb-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                SYSTEM_LOG_REALTIME
              </h4>
              <div className="space-y-1 text-[10px] font-medium tracking-wide text-[#5c647a] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {logs.map((log, idx) => (
                  <p key={idx} className={log.includes('[OK]') ? 'text-[#006948]' : log.includes('AWAITING') ? 'text-[#ba0029] animate-pulse' : ''}>
                    {log}
                  </p>
                ))}
              </div>
            </div>

            {/* Graphic Display Box */}
            <div className="bg-[#191c1e] border-2 border-[#191c1e] h-32 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#f7f9fb] text-4xl opacity-20">biotech</span>
            </div>
          </div>

        </div>
      </main>

      {/* Footer Network Status */}
      <footer className="w-full py-4 bg-[#191c1e] border-t-2 border-[#ba0029] flex flex-col md:flex-row justify-between items-center px-6 md:px-16 text-[10px] font-bold gap-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        <div className="flex flex-col gap-0.5 text-left w-full md:w-auto">
          <span className="text-[#ba0029] tracking-wider">AES-256 ENCRYPTION ACTIVE // SYSTEM_STATUS: SECURE</span>
          <p className="text-[#e0e3e5] opacity-60 text-[9px]">EST. 2024 - ANTI-KUDDUS PROTOCOL INTERNAL NETWORK</p>
        </div>
        <div className="flex gap-6 text-[#e0e3e5] w-full md:w-auto justify-start md:justify-end">
          <a className="hover:text-[#ba0029] transition-colors underline" href="#">PRIVACY_PROTOCOL</a>
          <a className="hover:text-[#ba0029] transition-colors underline" href="#">TRANSPARENCY_REPORT</a>
        </div>
      </footer>

      {/* Loading & Secure Proxy Transmission Overlay */}
      {(isTransmitting || isSuccess) && (
        <div className="fixed inset-0 z-50 bg-[#191c1e] flex flex-col items-center justify-center p-6 text-center">
          {isTransmitting ? (
            <div className="space-y-6">
              <div className="w-32 h-1 bg-[#2d3133] relative overflow-hidden mx-auto">
                <div className="absolute inset-y-0 bg-[#ba0029] w-1/3 animate-[loading_1.5s_infinite_ease-in-out]"></div>
              </div>
              <div className="space-y-1">
                <p className="text-xl font-black text-[#f7f9fb] uppercase tracking-tighter">Transmitting via secure proxy...</p>
                <p className="text-xs font-bold text-[#ba0029] uppercase tracking-widest animate-pulse" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Routing through: SINGAPORE_NODE_49
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6 max-w-md">
              <span className="material-symbols-outlined text-[#68dba9] text-7xl">verified</span>
              <h2 className="text-2xl font-black text-[#f7f9fb] uppercase tracking-tighter">TRANSMISSION SUCCESSFUL</h2>
              <p className="text-xs text-[#e0e3e5] leading-relaxed" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                The Council has received your report. Your identity remains shielded. Return to normal activities immediately.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="bg-[#ba0029] text-white font-bold text-xs tracking-widest px-8 py-3.5 border-2 border-[#f7f9fb] hover:bg-transparent hover:text-[#ba0029] hover:border-[#ba0029] transition-all rounded-none"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                TERMINATE SESSION
              </button>
            </div>
          )}
        </div>
      )}

      {/* Embedded Loading Keyframe Injection */}
      <style>{`
        @keyframes loading {
          0% { left: -40%; }
          100% { left: 110%; }
        }
      `}</style>
    </div>
  );
}