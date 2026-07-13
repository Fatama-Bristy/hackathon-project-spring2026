import React, { useState } from 'react';

export default function SystemSettings() {
  // Application State
  const [currentTheme, setCurrentTheme] = useState('light'); // 'light' or 'dark'
  const [lexicon, setLexicon] = useState('English (US-Tactical)');
  const [showToast, setShowToast] = useState(false);
  const [protocols, setProtocols] = useState({
    AUTOMATIC_CAMOUFLAGE: true,
    DATA_WIPE_ON_BREACH: false,
    ENCRYPTED_COMM_LINK: true,
  });

  // Toggles single security protocol state
  const handleToggleProtocol = (key) => {
    setProtocols(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Triggers the bottom-right HUD toast notification
  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  // Resets customizable values back to baseline defaults
  const handleDiscard = () => {
    setCurrentTheme('light');
    setLexicon('English (US-Tactical)');
    setProtocols({
      AUTOMATIC_CAMOUFLAGE: true,
      DATA_WIPE_ON_BREACH: false,
      ENCRYPTED_COMM_LINK: true,
    });
  };

  return (
    <div 
      className={`min-h-screen w-full selection:bg-[#ba0029] selection:text-white transition-colors duration-200 ${
        currentTheme === 'dark' ? 'bg-[#2d3133] text-[#eff1f3]' : 'bg-[#f7f9fb] text-[#191c1e]'
      }`}
      style={{
        backgroundImage: currentTheme === 'dark' 
          ? 'radial-gradient(circle, #3f465c 1px, transparent 1px)' 
          : 'radial-gradient(circle, #e2e8f0 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Primary Settings Canvas Layout - Sidebar & Header Removed */}
      <section className="p-6 md:p-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 border-l-4 border-[#ba0029] pl-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-2">SYSTEM CONFIGURATION</h2>
            <p className="font-mono text-xs font-bold text-[#565e74] dark:text-[#bec6e0]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              PROTOCOL: ANTI-KUDDUS_REV_4.2 // SECURITY CLEARANCE REQUIRED
            </p>
          </div>

          {/* Config Bento Grid Dashboard Components */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Box 1: General Parameters */}
            <div className={`md:col-span-8 border-2 border-[#191c1e] dark:border-[#eff1f3] p-8 relative overflow-hidden transition-colors ${
              currentTheme === 'dark' ? 'bg-[#191c1e]' : 'bg-white'
            }`}>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-6xl">settings</span>
              </div>
              <h3 className="font-mono text-xs font-bold text-[#ba0029] mb-8 tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                01. GENERAL_PARAMETERS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="font-mono text-xs font-bold text-[#565e74] dark:text-[#bec6e0]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    SYSTEM VISUALS (THEME)
                  </label>
                  <div className="flex flex-col gap-2 font-mono text-xs font-bold tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    <button onClick={() => setCurrentTheme('light')} className={`flex items-center justify-between px-4 py-3 border-2 border-[#191c1e] text-[#191c1e] cursor-pointer transition-all ${currentTheme === 'light' ? 'bg-[#e6e8ea] shadow-[4px_4px_0px_0px_rgba(25,28,30,1)] translate-x-[-2px] translate-y-[-2px]' : 'bg-transparent text-[#565e74] dark:text-[#bec6e0] dark:border-[#bec6e0]'}`}>
                      L-ALPHA (LIGHT)
                      <span className="material-symbols-outlined text-sm">{currentTheme === 'light' ? 'radio_button_checked' : 'radio_button_unchecked'}</span>
                    </button>
                    <button onClick={() => setCurrentTheme('dark')} className={`flex items-center justify-between px-4 py-3 border-2 border-[#191c1e] cursor-pointer transition-all ${currentTheme === 'dark' ? 'bg-[#3f465c] text-white border-[#eff1f3] shadow-[4px_4px_0px_0px_rgba(239,241,243,1)] translate-x-[-2px] translate-y-[-2px]' : 'bg-transparent text-[#565e74] dark:border-[#bec6e0]'}`}>
                      ANTI-KUDDUS (DARK)
                      <span className="material-symbols-outlined text-sm">{currentTheme === 'dark' ? 'radio_button_checked' : 'radio_button_unchecked'}</span>
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="font-mono text-xs font-bold text-[#565e74] dark:text-[#bec6e0]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    COMMUNICATION_LEXICON
                  </label>
                  <div className="relative">
                    <select value={lexicon} onChange={(e) => setLexicon(e.target.value)} className={`w-full border-b-2 border-[#191c1e] dark:border-[#eff1f3] p-3 font-mono text-xs font-bold appearance-none bg-transparent outline-none focus:border-[#ba0029]`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      <option value="English (US-Tactical)">English (US-Tactical)</option>
                      <option value="Bangla (বাংলা - Native)">Bangla (বাংলা - Native)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2 top-3 pointer-events-none">expand_more</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2: Operative Profile Card */}
            <div className="md:col-span-4 bg-[#ba0029] text-white p-8 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(25,28,30,1)] dark:shadow-[4px_4px_0px_0px_rgba(239,241,243,1)]">
              <div>
                <h3 className="font-mono text-xs font-bold mb-8 text-[#ffdad8]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>02. OPERATIVE_ID</h3>
                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="font-mono text-[10px] uppercase font-bold tracking-widest opacity-70" style={{ fontFamily: "'JetBrains Mono', monospace" }}>CODENAME</p>
                    <p className="text-2xl font-black tracking-tight">GHOST_UNIT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 3: Security Protocols */}
            <div className={`md:col-span-7 border-2 border-[#191c1e] dark:border-[#eff1f3] p-8 transition-colors ${currentTheme === 'dark' ? 'bg-[#191c1e]' : 'bg-white'}`}>
              <h3 className="font-mono text-xs font-bold text-[#ba0029] mb-8 tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>03. SECURITY_DEFENSE_PROTOCOLS</h3>
              <div className="space-y-6">
                {Object.keys(protocols).map((key) => (
                  <div key={key} onClick={() => handleToggleProtocol(key)} className="flex items-center justify-between group cursor-pointer border-b border-dashed border-[#e0e3e5]/30 pb-3 last:border-none">
                    <p className="font-mono text-xs font-bold tracking-wider group-hover:text-[#ba0029] transition-colors">{key}</p>
                    <button className={`w-12 h-6 relative flex items-center px-1 shrink-0 transition-colors duration-100 ${protocols[key] ? 'bg-[#00855d]' : 'bg-[#565e74]/30'}`}>
                      <div className={`w-4 h-4 bg-white transition-transform duration-100 ${protocols[key] ? 'translate-x-6' : 'translate-x-0'}`}></div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 4: Localization */}
            <div className="md:col-span-5 border-2 border-[#191c1e] dark:border-[#eff1f3] bg-[#f2f4f6] dark:bg-[#d8dadc] p-8 flex flex-col justify-between">
              <h3 className="font-mono text-xs font-bold mb-4 text-[#191c1e]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>04. LOCALIZATION_COORD</h3>
              <div className="space-y-4">
                <div className="bg-white/90 backdrop-blur-xs p-4 border-2 border-[#191c1e]">
                  <p className="text-xl font-extrabold tracking-tight text-[#191c1e]">GMT+6:00 (DHAKA)</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="md:col-span-12 flex justify-end gap-4 mt-8 font-mono text-xs font-bold tracking-wider">
              <button onClick={handleDiscard} className="px-8 py-4 border-2 border-[#191c1e] dark:border-[#eff1f3] hover:bg-[#e6e8ea] dark:hover:text-[#191c1e] transition-all">DISCARD_CHANGES</button>
              <button onClick={handleSave} className="px-8 py-4 bg-[#ba0029] text-white border-2 border-[#191c1e] hover:translate-x-[-2px] transition-all">INITIALIZE_PROTOCOL_SAVE</button>
            </div>
          </div>
        </div>
      </section>

      {/* Toast */}
      <div className={`fixed bottom-8 right-8 bg-[#191c1e] text-white p-4 border-2 border-[#eff1f3] transition-all duration-300 z-50 ${showToast ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <p className="text-xs font-bold text-[#ba0029]">PROTOCOL_UPDATED</p>
      </div>
    </div>
  );
}