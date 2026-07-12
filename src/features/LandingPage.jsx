import React from 'react';

// ==========================================
// ১. ল্যান্ডিং পেজের নিজস্ব লোকাল নেভবার
// ==========================================
const LocalNavbar = ({ onLoginClick }) => {
  const links = ["MISSIONS", "TERMINAL", "STATS", "INTEL"];

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="max-w-[1700px] mx-auto h-21 px-12 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-[28px] font-black tracking-[-1px] text-[#B0002A] uppercase cursor-pointer">
            ANTI-KUDDUS
          </h1>

          {/* Menu */}
          <nav className="hidden lg:flex items-center gap-12">
            {links.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className={`font-['JetBrains_Mono'] text-[18px] tracking-[2px] uppercase transition ${
                  index === 0
                    ? "text-[#B0002A] border-b-2 border-[#B0002A] pb-1"
                    : "text-[#5F4A4A] hover:text-[#B0002A]"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-5">
            <button 
              onClick={onLoginClick}
              className="w-23 h-11 border border-[#B68A8A] font-['JetBrains_Mono'] text-[#4B3636] font-bold uppercase hover:bg-gray-50"
            >
              LOGIN
            </button>

            <button 
              onClick={onLoginClick}
              className="w-26 h-11 bg-[#B0002A] text-white font-['JetBrains_Mono'] font-bold uppercase hover:bg-[#8E0022]"
            >
              SIGN UP
            </button>

            <span className="material-symbols-outlined text-[30px] text-[#6B5454] cursor-pointer hover:text-[#B0002A]">
              notifications
            </span>

            <span className="material-symbols-outlined text-[30px] text-[#6B5454] cursor-pointer hover:text-[#B0002A]">
              settings
            </span>
          </div>
        </div>
      </header>
      <div className="h-21"></div>
    </>
  );
};

// ==========================================
// ২. ল্যান্ডিং পেজের নিজস্ব লোকাল ফুটার
// ==========================================
const LocalFooter = () => {
  return (
    <footer className="w-full bg-[#f7f9fb]/80 backdrop-blur-md border-t border-[#e9bcba]/50 py-10 relative font-sans mt-20">
      <div className="max-w-360 mx-auto px-6 md:px-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        {/* বাম পাশের টেক্সট ব্লক */}
        <div className="space-y-2">
          <div className="text-[#ba0029] font-mono text-sm md:text-base font-bold tracking-wider uppercase">
            ANTI-KUDDUS PROTOCOL // ENCRYPTION: AES-256
          </div>
          <div className="text-[#5c647a] text-xs md:text-sm font-extrabold uppercase opacity-60 tracking-wide">
            © 2024 BAIUST CLASS 7 SECTION B // FREEDOM INITIATIVE
          </div>
        </div>

        {/* ডান পাশের লিংক এবং কানেকশন HUD ব্লক */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-12">
          {/* নেভিগেশন লিংকস */}
          <div className="flex gap-8 text-[#5f3e3e] font-mono text-xs md:text-sm font-bold tracking-wider">
            <a className="hover:text-[#ba0029] transition-colors" href="#protocol">PROTOCOL_V4</a>
            <a className="hover:text-[#ba0029] transition-colors" href="#status">SYSTEM_STATUS</a>
          </div>

          {/* Persistent HUD বক্স এলিমেন্ট */}
          <div className="bg-white border border-[#946e6d]/20 shadow-xl p-4 min-w-60 font-mono text-xs md:text-sm space-y-2">
            <div className="flex justify-between gap-4">
              <span className="text-[#5f3e3e] font-medium">Latent Connection:</span>
              <span className="text-[#006948] font-bold">98.4%</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-[#5f3e3e] font-medium">Encryption Strength:</span>
              <span className="text-[#ba0029] font-bold">ULTRA</span>
            </div>
            {/* নিচের লাল প্রগ্রেস বার */}
            <div className="w-full h-1 bg-[#e0e3e5] mt-3">
              <div className="h-full bg-[#ba0029] w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ==========================================
// ৩. মেইন ল্যান্ডিং পেজ এক্সপোর্ট (যার ভেতর সব যুক্ত)
// ==========================================
const LandingPage = ({ onLoginClick }) => {
  const missions = [
    { id: 'M_001', icon: 'assignment', title: 'THE ANONYMOUS WHISTLEBLOWER', desc: 'Real-time logging system for daily atrocities and corridor surveillance reports.', footer: <div className="w-full h-1.5 bg-gray-200 mt-auto"><div className="w-3/4 h-full bg-[#b90020]"></div></div> },
    { id: 'M_002', icon: 'grid_view', title: 'ANTI-CAMOUFLAGE SEATING', desc: 'Fair-share algorithmic seating planner to neutralize front-row squatting tactics.', footer: <div className="flex gap-1 mt-auto"><div className="h-1.5 flex-1 bg-[#b90020]"></div><div className="h-1.5 flex-1 bg-[#b90020]"></div><div className="h-1.5 flex-1 bg-gray-200"></div></div> },
    { id: 'M_003', icon: 'verified_user', title: 'AI SYLLABUS ENGINE', desc: 'Instantly fact-check "invented" homework rules used to extort labor from peers.', footer: <div className="w-full h-1.5 bg-gray-200 mt-auto"><div className="w-1/2 h-full bg-[#b90020]"></div></div> },
    { id: 'M_004', icon: 'currency_bitcoin', title: 'CORRUPT ECONOMY LEDGER', desc: 'Blockchain-inspired tracking of illicit "Singara-Taxes" and washroom entry fees.', footer: <div className="text-xs font-bold text-gray-400 mt-auto">#ENCRYPTED_LEDGER_SYNCING...</div> },
    { id: 'M_005', icon: 'campaign', title: 'REAL-TIME SOS FLARE', desc: 'Panic button for immediate backup when cornered near the canteen lockers.', footer: <div className="text-xs text-[#b90020] font-black mt-auto">STANDBY_READY</div> },
    { id: 'M_006', icon: 'terminal', title: 'SYSTEM ARCHITECTURE', desc: 'Complete documentation of the Anti-Kuddus resistance neural network.', footer: <div className="text-[11px] text-gray-400 font-bold mt-auto tracking-wide">01001110 01001111 00100000 01001101 01001111 01010010 01000101</div> },
  ];

  return (
    <div className="min-h-screen text-slate-900 font-sans antialiased relative selection:bg-[#b90020]/10 flex flex-col justify-between">
      
      {/* ল্যান্ডিং পেজের হেডার/নেভবার */}
      <LocalNavbar onLoginClick={onLoginClick} />

      {/* CSS খাতার পাতার গ্রিড ব্যাকগ্রাউন্ড */}
      <div 
        className="fixed inset-0 z-[-1] bg-[#f8fafc]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(185, 0, 32, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 100%, 100% 24px',
          backgroundPosition: '15% 0, 0 0'
        }}
      />

      <div className="flex-1">
        {/* Section 1: Hero */}
        <main className="pt-24 px-6 max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-extrabold text-4xl md:text-6xl tracking-tight text-gray-900 leading-tight">
            THE RESISTANCE AGAINST<br />
            <span className="text-[#b90020] uppercase tracking-wide block mt-2">KODU KUDDUS</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-600 font-medium leading-relaxed">
            The Class 7 regime is crumbling under the weight of excessive tiffin taxes (15% per somosa), unauthorized washroom tolls, and the iron-fisted monopoly over front-row seating arrangements. This is not just a hackathon project; it is the digital emancipation of Section B.
          </p>
          
          <div className="flex justify-center gap-4 pt-2">
            <button 
              onClick={onLoginClick} 
              className="px-6 py-3.5 bg-[#b90020] text-white text-xs md:text-sm font-bold uppercase tracking-wider transition-colors hover:bg-[#900018]"
            >
              INITIATE ANTI-KUDDUS PROTOCOL
            </button>
            <button className="px-6 py-3.5 bg-white border border-gray-300 text-gray-700 text-xs md:text-sm font-bold uppercase tracking-wider transition-colors hover:bg-gray-50">
              REVIEW ANCIENT RULEBOOK
            </button>
          </div>
        </main>

        {/* Section 2: Missions */}
        <main className="px-6 max-w-6xl mx-auto mt-24">
          <div className="flex justify-between items-end border-l-[6px] border-[#b90020] pl-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-gray-900 tracking-tight">Mission Blueprint</h2>
              <p className="text-xs text-gray-500 font-bold tracking-widest mt-1">OPERATIONAL TARGETS FOR SYSTEM OVERRIDE</p>
            </div>
            <div className="text-xs text-gray-400 font-bold hidden sm:block tracking-wider">
              STATUS: ENCRYPTED // DECODING...
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((mission, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 relative flex flex-col min-h-60 shadow-sm transition-transform hover:-translate-y-1">
                <div className="absolute top-4 right-4 text-xs text-[#b90020]/60 font-bold">{mission.id}</div>
                <span className="material-symbols-outlined text-[#b90020] text-4xl mb-4">{mission.icon}</span>
                <h3 className="text-base font-extrabold text-gray-900 mb-2 tracking-tight">{mission.title}</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed mb-6">{mission.desc}</p>
                {mission.footer}
              </div>
            ))}
          </div>
        </main>

        {/* Section 3: Statistics Dashboard */}
        <main className="px-6 max-w-6xl mx-auto pt-16 pb-12">
          <div className="bg-white border-2 border-[#b90020]/30 relative pt-10 pb-8 px-6 shadow-md">
            <div className="absolute -top-3 left-6 bg-[#f8fafc] px-3 text-xs font-black text-[#b90020] tracking-widest uppercase">
              Live Resistance HUD
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 py-2">
              <div className="pb-6 md:pb-0 md:px-6 text-center space-y-1.5">
                <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Extorted Funds</div>
                <div className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">142.00 BDT</div>
                <div className="text-xs text-[#b90020] font-bold uppercase tracking-wide">Seized by Registry</div>
              </div>
              
              <div className="py-6 md:py-0 md:px-6 text-center space-y-1.5">
                <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Tiffins Logged</div>
                <div className="text-3xl md:text-4xl font-black text-slate-700 tracking-tight">18 ITEMS</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wide">Avg Tax: 20%</div>
              </div>
              
              <div className="pt-6 md:pt-0 md:px-6 text-center space-y-1.5">
                <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Active Whistleblowers</div>
                <div className="text-3xl md:text-4xl font-black text-[#006837] tracking-tight">32 UNITS</div>
                <div className="text-xs text-[#006837] font-bold uppercase tracking-wide">Identity: Hidden</div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex justify-between text-xs mb-2 uppercase text-gray-600 font-bold tracking-wide">
                <span>Impeachment Progress</span>
                <span className="text-[#b90020] font-black">2 / 3 Strikes Delivered</span>
              </div>
              <div className="w-full h-4 bg-gray-100 border border-gray-300 p-0.5">
                <div className="h-full bg-[#b90020] w-2/3"></div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* ল্যান্ডিং পেজের নিজস্ব ফুটার */}
      <LocalFooter />
    </div>
  );
};

export default LandingPage;