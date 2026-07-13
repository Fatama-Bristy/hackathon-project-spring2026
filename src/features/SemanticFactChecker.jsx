import React, { useState } from 'react';

export default function SemanticFactChecker() {
  const [inputValue, setInputValue] = useState('');
  const [isCalibrating, setIsCalibrating] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Sample static reference mapping for claims logic
  const claimReferences = {
    "1st Captains are exempt from exams": {
      status: 'FALSE',
      title: 'Regulatory Inconsistency',
      match: '96.8%',
      width: 'w-[96.8%]',
      id: '4492-B',
      text: '"Section 4, Clause 2: All students under the Alpha Protocol jurisdiction must submit assignments on the specified temporal deadline. No seniority exemptions apply to standardized assessments."',
      tags: ['#EXAM_REGS', '#ALPHA_CORE']
    },
    "Tiffin tax is mandatory": {
      status: 'TRUE',
      title: 'Protocol Alignment',
      match: '99.1%',
      width: 'w-[99.1%]',
      id: '8812-C',
      text: '"Protocol 11: The Tiffin administration is authorized to collect maintenance levies for central canteen operations, provided notice is given 24 hours prior."',
      tags: ['#TIFFIN_PROTOCOL', '#CANTEEN_LAW']
    }
  };

  const handleDebunk = () => {
    setIsCalibrating(true);
    setTimeout(() => {
      setIsCalibrating(false);
    }, 1500);
  };

  const selectClaim = (claimText) => {
    setInputValue(claimText);
  };

  return (
    <div 
      className="min-h-screen text-[#191c1e] selection:bg-[#ba0029] selection:text-white"
      style={{
        backgroundColor: '#f7f9fb',
        backgroundImage: 'linear-gradient(rgba(25, 28, 30, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(25, 28, 30, 0.03) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Styles for Custom Animations */}
      <style>{`
        @keyframes scan-spinner {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-scan {
          animation: scan-spinner 2s linear infinite;
        }
      `}</style>

      {/* Left Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-64 bg-[#f2f4f6] border-r-2 border-[#191c1e] flex flex-col py-8 px-4 z-40 pt-24 hidden lg:flex">
        <div className="mb-8 px-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#191c1e] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#f7f9fb]" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
            </div>
            <div className="font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              <p className="text-xs text-[#191c1e] font-bold tracking-wider leading-tight">VERIFIER UNIT-01</p>
              <p className="text-[10px] text-[#565e74]">CLEARANCE: LEVEL 4</p>
            </div>
          </div>
          <button className="w-full py-3 bg-[#ba0029] text-white border-2 border-[#191c1e] font-mono text-xs font-bold tracking-wider shadow-[4px_4px_0px_0px_rgba(25,28,30,1)] active:translate-y-1 active:shadow-none transition-all" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            NEW ANALYSIS
          </button>
        </div>

        <div className="space-y-1 flex-1 font-mono text-xs uppercase tracking-wider font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          <a className="flex items-center gap-3 px-4 py-3 bg-[#ba0029] text-white active:translate-x-1 transition-all" href="#">
            <span className="material-symbols-outlined">terminal</span>
            <span>TERMINAL</span>
          </a>
          {['Rulebooks', 'Verification', 'Archive', 'Network'].map((item, index) => (
            <a key={index} className="flex items-center gap-3 px-4 py-3 text-[#565e74] hover:bg-[#e6e8ea] active:translate-x-1 transition-all" href="#">
              <span className="material-symbols-outlined">{index === 0 ? 'menu_book' : index === 1 ? 'verified_user' : index === 2 ? 'inventory_2' : 'hub'}</span>
              <span>{item}</span>
            </a>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-[#e0e3e5]">
          <div className="p-4 bg-[#ffdad6] border border-[#ba1a1a]">
            <p className="font-mono text-[10px] text-[#ba1a1a] mb-1 font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>THREAT LEVEL</p>
            <p className="font-mono text-xs text-[#93000a] font-bold uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Critical Interference</p>
          </div>
        </div>
      </nav>

      {/* Main Content Layout Container */}
      <main className="lg:ml-64 pt-10 px-4 md:px-16 pb-20 max-w-[1200px] mx-auto">
        
        {/* Section 1: Main Search Engine Trigger */}
        <section className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-[#191c1e] tracking-tighter mb-2">
            SEMANTIC RULEBOOK FACT-CHECKER
          </h1>
          <p className="font-mono text-xs font-bold text-[#565e74] tracking-widest mb-10" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            INSTANT VERIFICATION AGAINST THE OFFICIAL SCHOOL REGULATORY FRAMEWORK
          </p>
          
          <div className="relative max-w-4xl mx-auto group">
            <div className="absolute -inset-1 bg-[#ba0029]/10 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
            <div className={`relative flex flex-col md:flex-row gap-0 border-2 border-[#191c1e] bg-white transition-all ${isFocused ? 'shadow-[6px_6px_0px_0px_#ba0029]' : 'shadow-[4px_4px_0px_0px_rgba(25,28,30,1)]'}`}>
              <div className="flex-1 flex items-center px-6 py-4 border-b-2 md:border-b-0 md:border-r-2 border-[#191c1e]">
                <span className="material-symbols-outlined text-[#565e74] mr-4">search</span>
                <input 
                  type="text"
                  id="claimInput"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="w-full bg-transparent border-none focus:ring-0 text-[#191c1e] p-0 outline-none" 
                  placeholder="Enter claim to verify..." 
                />
                <div className="flex items-center gap-2 ml-4 font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  <span className="material-symbols-outlined animate-scan text-[#ba0029] text-sm">refresh</span>
                  <span className="text-[10px] text-[#565e74] whitespace-nowrap">Scanning Rulebook Vectors...</span>
                </div>
              </div>
              <button 
                onClick={handleDebunk}
                className="bg-[#ba0029] hover:bg-[#e90036] text-white px-10 py-4 font-mono text-xs font-bold tracking-widest transition-colors active:bg-[#ba0029] border-none shrink-0"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {isCalibrating ? 'CALIBRATING...' : 'DEBUNK CLAIM'}
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Validation Engine Grid Panels */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="border-2 border-[#ba1a1a] bg-[#ba1a1a]/5 p-8 flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2">
              <div className="bg-[#ba1a1a] text-white font-mono text-[10px] font-bold px-2 py-1 flex items-center gap-2 animate-pulse" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="material-symbols-outlined text-xs">report</span>
                [FALSE] - DEBUNKED
              </div>
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-[#ba1a1a] mb-1 tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>VERIFICATION STATUS</p>
              <h3 className="text-xl font-extrabold tracking-tight text-[#191c1e]">Regulatory Inconsistency</h3>
              <div className="mt-2 flex items-center gap-4">
                <div className="h-2 w-48 bg-[#e0e3e5]">
                  <div className="h-full bg-[#ba1a1a]" style={{ width: '96.8%' }}></div>
                </div>
                <span className="font-mono text-xs font-bold text-[#191c1e]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Confidence Match: 96.8%</span>
              </div>
            </div>
            <div className="bg-white border border-[#ba1a1a] p-6 space-y-4">
              <div className="flex justify-between items-start font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="text-[10px] bg-[#191c1e] text-[#f7f9fb] px-2 py-0.5 font-bold tracking-wider">SOURCE REFERENCE</span>
                <span className="text-[10px] text-[#565e74]">ID: 4492-B</span>
              </div>
              <p className="italic text-[#191c1e] border-l-4 border-[#ba1a1a] pl-4">
                "Section 4, Clause 2: All students under the Alpha Protocol jurisdiction must submit assignments on the specified temporal deadline. No seniority exemptions apply to standardized assessments."
              </p>
              <div className="flex gap-2 font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="px-2 py-1 bg-[#ba1a1a]/10 text-[#ba1a1a] text-[10px] font-bold border border-[#ba1a1a]/20">#EXAM_REGS</span>
                <span className="px-2 py-1 bg-[#ba1a1a]/10 text-[#ba1a1a] text-[10px] font-bold border border-[#ba1a1a]/20">#ALPHA_CORE</span>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#00855d] bg-[#006948]/5 p-8 flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2">
              <div className="bg-[#00855d] text-[#f5fff7] font-mono text-[10px] font-bold px-2 py-1 flex items-center gap-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="material-symbols-outlined text-xs">verified</span>
                [TRUE] - VALIDATED
              </div>
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-[#006948] mb-1 tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>VERIFICATION STATUS</p>
              <h3 className="text-xl font-extrabold tracking-tight text-[#191c1e]">Protocol Alignment</h3>
              <div className="mt-2 flex items-center gap-4">
                <div className="h-2 w-48 bg-[#e0e3e5]">
                  <div className="h-full bg-[#00855d]" style={{ width: '99.1%' }}></div>
                </div>
                <span className="font-mono text-xs font-bold text-[#191c1e]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Confidence Match: 99.1%</span>
              </div>
            </div>
            <div className="bg-white border border-[#00855d] p-6 space-y-4">
              <div className="flex justify-between items-start font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="text-[10px] bg-[#191c1e] text-[#f7f9fb] px-2 py-0.5 font-bold tracking-wider">SOURCE REFERENCE</span>
                <span className="text-[10px] text-[#565e74]">ID: 8812-C</span>
              </div>
              <p className="italic text-[#191c1e] border-l-4 border-[#00855d] pl-4">
                "Protocol 11: The Tiffin administration is authorized to collect maintenance levies for central canteen operations, provided notice is given 24 hours prior."
              </p>
              <div className="flex gap-2 font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="px-2 py-1 bg-[#006948]/10 text-[#006948] text-[10px] font-bold border border-[#006948]/20">#TIFFIN_PROTOCOL</span>
                <span className="px-2 py-1 bg-[#006948]/10 text-[#006948] text-[10px] font-bold border border-[#006948]/20">#CANTEEN_LAW</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Intelligence Interactive Feed Panel */}
        <section className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="material-symbols-outlined text-[#ba0029]">analytics</span>
            <h2 className="text-xl font-extrabold tracking-tight text-[#191c1e]">Recent Claims by Kuddus</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "1st Captains are exempt from exams",
              "Tiffin tax is mandatory",
              "Friday library access requires L5 clearance",
              "Uniform bypass valid during monsoon"
            ].map((claimText, idx) => (
              <button 
                key={idx}
                onClick={() => selectClaim(claimText)}
                className="group text-left p-4 bg-white border-2 border-[#191c1e] hover:bg-[#ba0029] hover:text-white transition-all active:translate-y-0.5 flex justify-between items-center shadow-[4px_4px_0px_0px_rgba(25,28,30,1)] active:shadow-none outline-none"
              >
                <span>"{claimText}"</span>
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </button>
            ))}
          </div>
        </section>
      </main>

      
    </div>
  );
}