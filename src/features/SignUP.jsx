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
      className={`min-h-screen selection:bg-[#ba0029] selection:text-white transition-colors duration-200 ${
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
      {/* Top Header Navigation Bar */}
      <header className={`w-full top-0 sticky border-b-2 flex justify-between items-center px-4 md:px-16 py-4 z-50 transition-colors ${
        currentTheme === 'dark' ? 'bg-[#191c1e] border-[#eff1f3]' : 'bg-white border-[#191c1e]'
      }`}>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-[#ba0029] flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
          </div>
          <h1 className="text-xl md:text-2xl font-black text-[#ba0029] tracking-tighter">LIGHT PROTOCOL</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs font-bold tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          <a className="text-[#ba0029] border-b-2 border-[#ba0029] py-1" href="#">General</a>
          <a className="text-[#565e74] hover:bg-[#ffb3b2] dark:hover:text-[#191c1e] transition-colors py-1 px-1" href="#">Tactical</a>
          <a className="text-[#565e74] hover:bg-[#ffb3b2] dark:hover:text-[#191c1e] transition-colors py-1 px-1" href="#">Nodes</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#ffb3b2] dark:hover:text-[#191c1e] transition-colors active:translate-y-0.5 cursor-pointer">
            <span className="material-symbols-outlined">monitor_heart</span>
          </button>
          <button className="p-2 hover:bg-[#ffb3b2] dark:hover:text-[#191c1e] transition-colors active:translate-y-0.5 relative cursor-pointer">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#ba0029]"></span>
          </button>
          <div className="h-10 w-10 border-2 border-[#191c1e] dark:border-[#eff1f3] overflow-hidden">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC05zzkUV-K1b933YF7hlqD-xPFRQSVA6Hp-71h9VCtBIuyYVPoeQVnbFMOxzzpvPsoifPcf6bVTJQWys2kug_V9UefanAQve9Cd7utlXzBF5ybCzg_86Ux5uMpqTOA9zVb32zSC6HElsvIFbeBj2VWpVV4Lz-ObLd5LRL1uYW7hFVPU6FvdZ3xmxMm-xsRJtaMvyOVJEHMyivTWWjez_H2tLCI3edpcI7HuogqsxRMTHTtTrAIwIYHujZskizdZDO0c2wILU5aeAE" alt="Operative Profile" />
          </div>
        </div>
      </header>

      <main className="flex min-h-[calc(100vh-76px)]">
        {/* Left Side Dashboard Menu Panel */}
        <aside className={`w-64 border-r-2 flex flex-col py-8 hidden md:flex shrink-0 transition-colors ${
          currentTheme === 'dark' ? 'bg-[#191c1e] border-[#eff1f3]' : 'bg-[#f2f4f6] border-[#191c1e]'
        }`}>
          <div className="px-6 mb-8">
            <div className={`flex items-center gap-3 p-3 border-2 border-[#191c1e] dark:border-[#eff1f3] ${currentTheme === 'dark' ? 'bg-[#2d3133]' : 'bg-white'}`}>
              <div className="w-3 h-3 bg-[#00855d] animate-pulse"></div>
              <div className="font-mono text-[10px] font-bold tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <p className="leading-tight">NODE_049</p>
                <p className="text-[#ba0029]">THREAT LEVEL: HIGH</p>
              </div>
            </div>
          </div>
          
          <nav className="flex-1 space-y-1 font-mono text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <a className="flex items-center gap-4 px-6 py-3 bg-[#ba0029] text-white transition-all" href="#">
              <span className="material-symbols-outlined">settings</span>
              <span>General</span>
            </a>
            {['Security', 'Notifications', 'Localization'].map((item, index) => (
              <a key={index} className="flex items-center gap-4 px-6 py-3 text-[#565e74] dark:text-[#bec6e0] hover:bg-[#dae2fd] dark:hover:text-[#191c1e] transition-all" href="#">
                <span className="material-symbols-outlined">{index === 0 ? 'security' : index === 1 ? 'emergency_home' : 'language'}</span>
                <span>{item}</span>
              </a>
            ))}
          </nav>
          
          <div className="px-6 mt-auto space-y-4 font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <div className="space-y-1 text-xs font-bold tracking-wider">
              <a className="flex items-center gap-4 py-2 text-[#565e74] dark:text-[#bec6e0] hover:text-[#ba0029] transition-colors" href="#">
                <span className="material-symbols-outlined text-sm">contact_support</span>
                <span className="text-[10px]">Support</span>
              </a>
              <a className="flex items-center gap-4 py-2 text-[#565e74] dark:text-[#bec6e0] hover:text-[#ba0029] transition-colors" href="#">
                <span className="material-symbols-outlined text-sm">terminal</span>
                <span className="text-[10px]">Logs</span>
              </a>
            </div>
            <button className="w-full py-3 border-2 border-[#191c1e] dark:border-[#eff1f3] text-xs font-bold tracking-widest hover:bg-[#191c1e] hover:text-white dark:hover:bg-white dark:hover:text-[#191c1e] transition-all active:translate-y-1 cursor-pointer">
              LOG OUT
            </button>
          </div>
        </aside>

        {/* Primary Settings Canvas Layout */}
        <section className="flex-1 p-6 md:p-16 overflow-y-auto">
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
                      <button 
                        onClick={() => setCurrentTheme('light')}
                        className={`flex items-center justify-between px-4 py-3 border-2 border-[#191c1e] text-[#191c1e] cursor-pointer transition-all ${
                          currentTheme === 'light' 
                            ? 'bg-[#e6e8ea] shadow-[4px_4px_0px_0px_rgba(25,28,30,1)] translate-x-[-2px] translate-y-[-2px]' 
                            : 'bg-transparent text-[#565e74] dark:text-[#bec6e0] dark:border-[#bec6e0]'
                        }`}
                      >
                        L-ALPHA (LIGHT)
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: currentTheme === 'light' ? "'FILL' 1" : "'FILL' 0" }}>
                          {currentTheme === 'light' ? 'radio_button_checked' : 'radio_button_unchecked'}
                        </span>
                      </button>
                      
                      <button 
                        onClick={() => setCurrentTheme('dark')}
                        className={`flex items-center justify-between px-4 py-3 border-2 border-[#191c1e] cursor-pointer transition-all ${
                          currentTheme === 'dark' 
                            ? 'bg-[#3f465c] text-white border-[#eff1f3] shadow-[4px_4px_0px_0px_rgba(239,241,243,1)] translate-x-[-2px] translate-y-[-2px]' 
                            : 'bg-transparent text-[#565e74] dark:border-[#bec6e0]'
                        }`}
                      >
                        ANTI-KUDDUS (DARK)
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: currentTheme === 'dark' ? "'FILL' 1" : "'FILL' 0" }}>
                          {currentTheme === 'dark' ? 'radio_button_checked' : 'radio_button_unchecked'}
                        </span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="font-mono text-xs font-bold text-[#565e74] dark:text-[#bec6e0]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      COMMUNICATION_LEXICON
                    </label>
                    <div className="relative">
                      <select 
                        value={lexicon} 
                        onChange={(e) => setLexicon(e.target.value)}
                        className={`w-full border-b-2 border-[#191c1e] dark:border-[#eff1f3] p-3 font-mono text-xs font-bold appearance-none bg-transparent outline-none focus:border-[#ba0029]`}
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
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
                  <h3 className="font-mono text-xs font-bold mb-8 text-[#ffdad8]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    02. OPERATIVE_ID
                  </h3>
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <p className="font-mono text-[10px] uppercase font-bold tracking-widest opacity-70" style={{ fontFamily: "'JetBrains Mono', monospace" }}>CODENAME</p>
                      <p className="text-2xl font-black tracking-tight">GHOST_UNIT</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-mono text-[10px] uppercase font-bold tracking-widest opacity-70" style={{ fontFamily: "'JetBrains Mono', monospace" }}>NODE IDENTIFIER</p>
                      <p className="font-mono text-xs font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>DHAKA_CENTRAL_049</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                    <p>CLEARANCE: LEVEL 5</p>
                  </div>
                  <div className="w-full bg-white/20 h-1">
                    <div className="bg-white w-full h-full"></div>
                  </div>
                </div>
              </div>

              {/* Box 3: Security & Defense Controls */}
              <div className={`md:col-span-7 border-2 border-[#191c1e] dark:border-[#eff1f3] p-8 transition-colors ${
                currentTheme === 'dark' ? 'bg-[#191c1e]' : 'bg-white'
              }`}>
                <h3 className="font-mono text-xs font-bold text-[#ba0029] mb-8 tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  03. SECURITY_DEFENSE_PROTOCOLS
                </h3>
                <div className="space-y-6">
                  {Object.keys(protocols).map((key) => (
                    <div 
                      key={key} 
                      onClick={() => handleToggleProtocol(key)}
                      className="flex items-center justify-between group cursor-pointer border-b border-dashed border-[#e0e3e5]/30 pb-3 last:border-none"
                    >
                      <div>
                        <p className="font-mono text-xs font-bold tracking-wider group-hover:text-[#ba0029] transition-colors" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          {key}
                        </p>
                        <p className="text-xs text-[#565e74] dark:text-[#bec6e0] mt-1">
                          {key === 'AUTOMATIC_CAMOUFLAGE' && 'Dynamically shifts IP and Node signatures.'}
                          {key === 'DATA_WIPE_ON_BREACH' && 'Emergency zeroing of all local data buffers.'}
                          {key === 'ENCRYPTED_COMM_LINK' && 'P2P quantum-resistant communication channel.'}
                        </p>
                      </div>
                      <button 
                        className={`w-12 h-6 relative flex items-center px-1 shrink-0 transition-colors duration-100 ${
                          protocols[key] ? 'bg-[#00855d]' : 'bg-[#565e74]/30'
                        }`}
                      >
                        <div className={`w-4 h-4 bg-white transition-transform duration-100 ${
                          protocols[key] ? 'translate-x-6' : 'translate-x-0'
                        }`}></div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Box 4: Map Overlays & Coordinates */}
              <div className="md:col-span-5 border-2 border-[#191c1e] dark:border-[#eff1f3] bg-[#f2f4f6] dark:bg-[#d8dadc] overflow-hidden relative min-h-[300px]">
                <div className="absolute inset-0 grayscale opacity-40 mix-blend-multiply">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRdQ1J0WEFx3bVPpgQeVqTq-5zO5NBdW7NWn0toIt-zBg9dXQOk6o9sI89fnaTxNoPGcVxHpqx6dM_T5794YDBdLSPTa27hMfDXGzb74iFHGezAN1Ocsq3Ir0lP-yegUTTHt0UAz__5p7rCSF-8iFls__ZVqPXU7YDvJ3SbM4MRwwYmYiIxmm9lkySqLtWf9lsBaDeeslWJPoreA089pToksNM3lk5fFX_qxLywFPsUX7O4wrtQuwp_0iEa_dSN2ZgcTRQSuV77GA" alt="Dhaka Hub Topographic Overlay Diagram" />
                </div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <h3 className="font-mono text-xs font-bold mb-4 text-[#191c1e]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    04. LOCALIZATION_COORD
                  </h3>
                  <div className="mt-auto space-y-4">
                    <div className="bg-white/90 backdrop-blur-xs p-4 border-2 border-[#191c1e]">
                      <p className="font-mono text-[10px] font-bold text-[#565e74]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>TIMEZONE (LOCAL)</p>
                      <p className="text-xl font-extrabold tracking-tight text-[#191c1e]">GMT+6:00 (DHAKA)</p>
                    </div>
                    <div className="bg-white/90 backdrop-blur-xs p-4 border-2 border-[#191c1e]">
                      <p className="font-mono text-[10px] font-bold text-[#565e74]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>REGIONAL_SERVER</p>
                      <div className="flex items-center justify-between">
                        <p className="font-mono text-xs font-bold text-[#191c1e]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>SOUTH_ASIA_ALPHA</p>
                        <span className="material-symbols-outlined text-[#00855d]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Workspace Control Panel Actions */}
              <div className="md:col-span-12 flex justify-end gap-4 mt-8 pb-12 font-mono text-xs font-bold tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <button 
                  onClick={handleDiscard}
                  className="px-8 py-4 border-2 border-[#191c1e] dark:border-[#eff1f3] hover:bg-[#e6e8ea] dark:hover:text-[#191c1e] transition-all active:translate-y-1 cursor-pointer"
                >
                  DISCARD_CHANGES
                </button>
                <button 
                  onClick={handleSave}
                  className="px-8 py-4 bg-[#ba0029] text-white hard-shadow border-2 border-[#191c1e] dark:border-[#eff1f3] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all active:shadow-none active:translate-x-[2px] active:translate-y-[2px] cursor-pointer shadow-[4px_4px_0px_0px_rgba(25,28,30,1)]"
                >
                  INITIALIZE_PROTOCOL_SAVE
                </button>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Floating Success HUD Toast Box */}
      <div 
        id="status-toast" 
        className={`fixed bottom-8 right-8 bg-[#191c1e] text-white p-4 border-2 border-[#eff1f3] flex items-center gap-4 transition-all duration-300 z-50 ${
          showToast ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 pointer-events-none'
        }`}
      >
        <span className="material-symbols-outlined text-[#00855d]">check_circle</span>
        <div className="font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          <p className="text-xs font-bold tracking-wider text-[#ba0029]">PROTOCOL_UPDATED</p>
          <p className="text-[10px] opacity-70">Changes applied to NODE_049 successfully.</p>
        </div>
      </div>
    </div>
  );
}