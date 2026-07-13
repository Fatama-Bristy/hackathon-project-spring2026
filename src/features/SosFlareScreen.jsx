import React, { useState, useEffect, useRef } from 'react';

export default function TacticalSosInterface() {
  const [isSosActive, setIsSosActive] = useState(false);
  const [threatLevel, setThreatLevel] = useState(3);
  const [targetSector, setTargetSector] = useState('CLASS_7_ALPHA');
  const [logs, setLogs] = useState([
    { id: 1, time: '01:00 PM', type: 'system', text: 'Neural connection established...' },
    { id: 2, time: '01:01 PM', type: 'info', text: 'Sector 7G heartbeat steady.' },
    { id: 3, time: '01:02 PM', type: 'critical', text: 'Alert from Canteen -> Status: Captain Miltu deployed.' },
    { id: 4, time: '01:05 PM', type: 'info', text: 'Encrypted relay node #4 active.' },
    { id: 5, time: '01:10 PM', type: 'warning', text: 'Unusual activity detected in Class 4-B.' }
  ]);

  const logTerminalRef = useRef(null);

  const threatLevels = {
    1: "LEVEL 1: MINOR ANNOYANCE",
    2: "LEVEL 2: NOTABLE THREAT",
    3: "LEVEL 3: MODERATE DISRUPTION",
    4: "LEVEL 4: SEVERE INTRUSION",
    5: "LEVEL 5: TIFFIN UNDER SIEGE"
  };

  const addLog = (text, type = 'info') => {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setLogs((prevLogs) => [
      ...prevLogs,
      { id: Date.now(), time, type, text }
    ]);
  };

  // Auto-scroll inside terminal when new log arrives
  useEffect(() => {
    if (logTerminalRef.current) {
      logTerminalRef.current.scrollTop = logTerminalRef.current.scrollHeight;
    }
  }, [logs]);

  const handleSosToggle = () => {
    if (!isSosActive) {
      setIsSosActive(true);
      addLog(`SOS FLARE INITIATED for ${targetSector}. Broadcasting to all sectors.`, 'emergency');
    } else {
      setIsSosActive(false);
      addLog('FLARE RESET. Scanning for new threats...', 'reset');
    }
  };

  const handleManualReset = () => {
    setIsSosActive(false);
    addLog('Manual hardware diagnostic completed. All systems functional.', 'info');
  };

  const handleQuickFill = (sector) => {
    setTargetSector(sector);
    addLog(`Target matrix locked to ${sector}`, 'info');
  };

  return (
    <div 
      className={`min-h-screen text-[#191c1e] font-sans transition-colors duration-500 overflow-x-hidden select-none ${
        isSosActive ? 'bg-red-500/5 transition-all animate-[flash-bg_2s_ease-in-out_infinite]' : 'bg-[#f7f9fb]'
      }`}
      style={{
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Dynamic Keyframes inject dynamically */}
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes emergency-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.02); }
        }
        @keyframes flash-bg {
          0%, 100% { background-color: rgba(247, 249, 251, 1); }
          50% { background-color: rgba(186, 0, 41, 0.04); }
        }
        .scanline-effect::after {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to bottom, transparent 0%, rgba(186, 0, 41, 0.05) 50%, transparent 100%);
          animation: scanline 4s linear infinite;
          pointer-events: none;
        }
      `}</style>

      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 bg-[#f7f9fb]/80 backdrop-blur-md border-b border-[#946e6d]/30 flex justify-between items-center px-6 md:px-16 h-16">
        <div className="flex items-center gap-4">
          <span className="font-bold text-[#ba0029] tracking-widest text-lg">LIGHT PROTOCOL L-ALPHA</span>
          <div className="h-2 w-2 rounded-full bg-[#ba0029] animate-pulse"></div>
        </div>
        <nav className="hidden md:flex gap-8 items-center font-mono text-xs uppercase tracking-widest text-[#565e74]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          <span className="font-bold px-3 py-1 bg-[#ba0029]/5 text-[#ba0029]">PROTOCOL STATE: ACTIVE</span>
        </nav>
        <button 
          onClick={() => addLog("Emergency Camouflage activated profile.", "warning")}
          className="bg-[#ba0029] text-white font-mono text-xs px-4 py-2 hover:bg-[#ba0029]/90 transition-transform active:scale-95 uppercase tracking-tighter rounded-none"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          EMERGENCY CAMOUFLAGE
        </button>
      </header>

      {/* Side Navigation */}
      <aside className="fixed left-0 top-0 h-full w-64 z-40 bg-[#f2f4f6]/90 backdrop-blur-xl border-r border-[#946e6d]/20 flex flex-col pt-20 pb-8 px-4 hidden lg:flex">
        <div className="mb-8 px-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-[#946e6d]/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#ba0029]">person</span>
            </div>
            <div>
              <p className="font-mono text-xs text-[#ba0029] font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>OPERATOR_01</p>
              <p className="text-[10px] opacity-60 font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Sector 7G</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 space-y-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          <a className="flex items-center gap-3 px-3 py-3 text-[#ba0029] border-r-2 border-[#ba0029] bg-[#ba0029]/5 text-xs font-bold uppercase tracking-wider" href="#tactical">
            <span className="material-symbols-outlined text-sm">security</span>
            <span>Tactical Ops</span>
          </a>
          {['Strike Tracker', 'Resistance Feed', 'Panic Flare'].map((item, index) => (
            <a key={index} className="flex items-center gap-3 px-3 py-3 text-[#5f3e3e] opacity-70 hover:text-[#ba0029] hover:bg-[#ba0029]/5 transition-all text-xs uppercase tracking-wider" href={`#${item.toLowerCase().replace(" ", "")}`}>
              <span className="material-symbols-outlined text-sm">{index === 0 ? 'query_stats' : index === 1 ? 'rss_feed' : 'emergency'}</span>
              <span>{item}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto space-y-2 pt-4 border-t border-[#946e6d]/10" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          <button className="w-full bg-[#ba0029] text-white text-[10px] py-3 font-bold hover:scale-[1.02] active:scale-95 transition-transform uppercase tracking-widest rounded-none">
            INITIATE PROTOCOL
          </button>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <button className="flex flex-col items-center py-2 hover:bg-[#e0e3e5] transition-colors rounded-none">
              <span className="material-symbols-outlined text-sm">settings</span>
              <span className="text-[8px]">SETTINGS</span>
            </button>
            <button className="flex flex-col items-center py-2 hover:bg-[#e0e3e5] transition-colors rounded-none">
              <span className="material-symbols-outlined text-sm">logout</span>
              <span className="text-[8px]">LOG OUT</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Area */}
      <main className="lg:ml-64 pt-24 px-4 md:px-16 pb-12 min-h-screen">
        {/* Header */}
        <div className="mb-12 max-w-5xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-[#ba0029]" style={{ fontVariationSettings: "'FILL' 1" }}>siren</span>
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none">TACTICAL SOS FLARE INTERFACE</h1>
          </div>
          <p className="text-[#5f3e3e] opacity-80 font-mono text-xs md:text-sm border-l-2 border-[#ba0029] pl-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Broadcast instant alerts across the resistance network. High-priority surgical protocols only.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-[1440px]">
          {/* Left Panel: Quantum Launchpad */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative bg-white border border-[#e9bcba]/30 p-8 md:p-12 flex flex-col items-center justify-center min-h-[500px] scanline-effect overflow-hidden border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0F172A]">
              
              {/* Matrix Blueprint Grid Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              
              {/* Massive Circular Flare Trigger */}
              <div className="relative group cursor-pointer">
                {isSosActive && (
                  <div className="absolute inset-0 -m-8">
                    <div className="absolute inset-0 border-4 border-[#ba0029] rounded-full animate-ping opacity-20"></div>
                    <div className="absolute inset-0 border-4 border-[#ba0029] rounded-full animate-ping opacity-10 [animation-delay:0.5s]"></div>
                  </div>
                )}
                
                <button 
                  onClick={handleSosToggle}
                  className={`relative w-64 h-64 rounded-full flex flex-col items-center justify-center text-white transition-all duration-300 transform active:scale-90 shadow-[6px_6px_0px_0px_#ba0029] z-10 rounded-full border border-black outline-none ${
                    isSosActive ? 'bg-[#ba1a1a] animate-[emergency-pulse_1s_cubic-bezier(0.4,0,0.6,1)_infinite]' : 'bg-[#ba0029]'
                  }`}
                >
                  <span className="material-symbols-outlined text-6xl mb-2">
                    {isSosActive ? 'emergency_home' : 'radio'}
                  </span>
                  <span className="font-mono text-xs tracking-widest text-center px-8 font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {isSosActive ? 'FLARE BROADCASTING...' : 'TAP TO LAUNCH FLARE'}
                  </span>
                </button>
              </div>

              {/* Sub Matrix Parameter Configurations */}
              <div className="mt-12 w-full max-w-md space-y-6" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {/* Dynamic Target Selection Row */}
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-[#ba0029] font-bold uppercase tracking-widest">Target Sector Selection</label>
                  <div className="relative">
                    <select 
                      value={targetSector}
                      onChange={(e) => setTargetSector(e.target.value)}
                      className="w-full bg-[#f2f4f6] border-b-2 border-[#5f3e3e]/30 focus:border-[#ba0029] px-4 py-3 font-mono text-sm appearance-none outline-none transition-colors rounded-none"
                    >
                      <option value="CLASS_7_ALPHA">CLASS_7_ALPHA</option>
                      <option value="CANTEEN_NORTH_QUADRANT">CANTEEN_NORTH_QUADRANT</option>
                      <option value="BACK_BENCH_RESISTANCE">BACK_BENCH_RESISTANCE</option>
                      <option value="RESTROOM_DELTA_9">RESTROOM_DELTA_9</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-sm">expand_more</span>
                  </div>
                </div>

                {/* Tactical Quick Macro Buttons */}
                <div className="flex flex-wrap gap-2">
                  {['QUICK_CANTEEN', 'SQUAD_7', 'PANIC_VALVE'].map((sector) => (
                    <button 
                      key={sector}
                      onClick={() => handleQuickFill(sector)}
                      className="px-3 py-1 bg-[#e0e3e5]/30 border border-[#e9bcba]/30 font-mono text-[10px] font-bold hover:bg-[#ba0029] hover:text-white transition-colors rounded-none"
                    >
                      {sector}
                    </button>
                  ))}
                </div>

                {/* Threat Gauge Meter */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="font-mono text-[10px] text-[#ba0029] font-bold uppercase tracking-widest">Threat Level</label>
                    <span className={`font-mono text-xs font-bold uppercase ${threatLevel >= 4 ? 'text-[#ba0029]' : 'text-slate-700'}`}>
                      {threatLevels[threatLevel]}
                    </span>
                  </div>
                  <input 
                    type="range"
                    min="1"
                    max="5"
                    value={threatLevel}
                    onChange={(e) => setThreatLevel(Number(e.target.value))}
                    className="w-full h-1 bg-[#e0e3e5] appearance-none cursor-pointer accent-[#ba0029]"
                  />
                  <div className="flex justify-between text-[8px] font-bold opacity-50 px-1">
                    <span>L1: MINOR</span>
                    <span>L3: CRITICAL</span>
                    <span>L5: SIEGE</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Hardware Refresh Logic Trigger */}
            <div className="flex justify-end">
              <button 
                onClick={handleManualReset}
                className="flex items-center gap-2 font-mono text-xs font-bold text-[#5f3e3e] hover:text-[#ba0029] transition-colors group rounded-none"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="material-symbols-outlined text-sm group-hover:rotate-180 transition-transform duration-500">refresh</span>
                MANUAL_RESET_TEST_PROTOCOL
              </button>
            </div>
          </div>

          {/* Right Panel: Interception Monitor */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Health Matrix Card */}
            <div className="bg-white border-2 border-slate-900 p-6 space-y-6 shadow-[4px_4px_0px_0px_#0F172A]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              <div className="flex items-center justify-between border-b border-[#e9bcba]/20 pb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ba0029] text-xl">shield_lock</span>
                  <span className="text-xs tracking-widest font-bold">SYSTEM_HEALTH</span>
                </div>
                <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 animate-pulse">SECURE</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f7f9fb] p-4 border border-[#e9bcba]/10">
                  <p className="text-[8px] text-[#5f3e3e] uppercase mb-1 font-bold">Active Signals</p>
                  <p className="text-2xl font-black text-slate-900">1,024</p>
                </div>
                <div className="bg-[#f7f9fb] p-4 border border-[#e9bcba]/10">
                  <p className="text-[8px] text-[#5f3e3e] uppercase mb-1 font-bold">Response Time</p>
                  <p className="text-2xl font-black text-slate-900">0.08s</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-[#5f3e3e]">Network Status:</span>
                  <span className="text-[#ba0029] font-bold">ALL CAPTAINS EN-ROUTE</span>
                </div>
                <div className="w-full bg-[#e0e3e5] h-1 overflow-hidden">
                  <div className="bg-[#ba0029] h-full w-[85%] animate-pulse"></div>
                </div>
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-[#5f3e3e]">Est. Interception:</span>
                  <span className="text-[#ba0029] font-bold">45.02s</span>
                </div>
              </div>
            </div>

            {/* Live Terminal Output Logger */}
            <div className="bg-[#131b2e] text-white p-6 h-[400px] flex flex-col border border-[#5f3e3e]/20 font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ba1a1a]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#ffdad8]"></div>
                  <div className="w-2 h-2 rounded-full bg-white/30"></div>
                </div>
                <span className="text-[10px] opacity-60 font-bold">TERMINAL_DISPATCH_LOG</span>
              </div>
              
              <div 
                ref={logTerminalRef}
                className="flex-1 overflow-y-auto text-xs space-y-2 scroll-smooth pr-1"
              >
                {logs.map((log) => {
                  let textClass = 'text-white/60';
                  if (log.type === 'system' || log.type === 'reset') textClass = 'text-emerald-400 font-medium';
                  if (log.type === 'critical' || log.type === 'emergency') textClass = 'text-red-400 font-bold animate-pulse';
                  if (log.type === 'warning') textClass = 'text-amber-300 font-medium';
                  
                  return (
                    <p key={log.id} className={textClass}>
                      [{log.time}] [{log.type.toUpperCase()}] {log.text}
                    </p>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <span className="text-emerald-400 animate-pulse font-bold">&gt;</span>
                <div className="h-4 w-1 bg-white animate-bounce"></div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}