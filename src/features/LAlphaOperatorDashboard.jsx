import React, { useState, useEffect } from 'react';

export default function LAlphaOperatorDashboard() {
  // --- State Variables ---
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [inputAmount, setInputAmount] = useState('1000');
  const [unitSelector, setUnitSelector] = useState('bdt');
  
  // Dynamic output states for the Black Market Converter
  const [outputs, setOutputs] = useState({
    jhalmuri: '50.00',
    fuchska: '125.00',
    cricket: '11.76'
  });

  // --- Static and Conversion Rate Constants ---
  const rates = {
    bdt: { jhalmuri: 20, fuchska: 8, cricket: 85 },
    calories: { jhalmuri: 450, fuchska: 120, cricket: 300 }
  };

  // --- Live Calculation Effect ---
  useEffect(() => {
    const val = parseFloat(inputAmount) || 0;
    const currentRates = rates[unitSelector];

    setOutputs({
      jhalmuri: (val / currentRates.jhalmuri).toFixed(2),
      fuchska: (val / currentRates.fuchska).toFixed(2),
      cricket: (val / currentRates.cricket).toFixed(2)
    });
  }, [inputAmount, unitSelector]);

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] font-sans antialiased selection:bg-[#ba0029] selection:text-white"
      style={{
        backgroundImage: 'linear-gradient(rgba(186, 0, 41, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(186, 0, 41, 0.03) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
    >
      
      {/* 1. TOP NAVIGATION BAR */}
      <nav className="bg-[#f7f9fb]/90 backdrop-blur-md text-[#ba0029] w-full top-0 sticky border-b border-[#946e6d]/30 flex justify-between items-center px-6 md:px-16 py-4 z-50">
        <div className="flex items-center gap-4">
          <span className="font-mono tracking-tighter uppercase font-black text-xl">L-ALPHA OPERATOR</span>
          <div className="h-4 w-[1px] bg-[#946e6d]/40"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#ba0029] animate-pulse"></div>
            <span className="font-mono text-[12px] font-bold tracking-wider uppercase">System Status: Active</span>
          </div>
        </div>
        
        {/* Center Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a className="text-[#ba0029] border-b-2 border-[#ba0029] pb-1 font-mono text-[12px] font-bold tracking-wider cursor-crosshair" href="#">FORENSICS</a>
          <a className="text-[#5f3e3e] font-mono text-[12px] font-bold tracking-wider hover:text-[#e90036] transition-colors cursor-crosshair" href="#">EXCHANGE</a>
          <a className="text-[#5f3e3e] font-mono text-[12px] font-bold tracking-wider hover:text-[#e90036] transition-colors cursor-crosshair" href="#">NETWORK</a>
        </div>

        {/* Right Action Items */}
        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="QUERY_SECTOR_7..." 
              className="bg-[#f2f4f6] border-b-2 border-[#946e6d]/40 focus:border-[#ba0029] transition-all px-3 py-1 font-mono text-xs w-48 focus:w-64 outline-none"
            />
          </div>
          <div className="flex gap-4 items-center">
            <button className="material-symbols-outlined text-[#5f3e3e] hover:text-[#ba0029] transition-all cursor-pointer">settings</button>
            <button className="material-symbols-outlined text-[#5f3e3e] hover:text-[#ba0029] transition-all cursor-pointer">terminal</button>
            <div className="w-8 h-8 bg-[#e0e3e5] border border-[#946e6d]/40 overflow-hidden">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXic62ylxRKBq5DLtZheUuOZyKh52l4QwoatBw8EQVLnwmVC9Mtc9q7kWRqnZe19gqP53qU9kBrvRGgScKpJhZGPpRt2KLrEpDNPzGtSPPtMMmdjw8KSh-VzLPqGgugb1864QApjW68bg9SnfFLz6NmV7if9E8O-kmFy001dCT93mIYDdmtewsXGR8oc_CcsT5YQ9E49X0hgc4zSZqcDi2oHBkkXn-iBBXU0EdwUagJKP5wXGUIfLwEbmrAUg91LG4o3v2J4xLXVk" alt="Avatar"/>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. SIDEBAR NAVIGATION */}
      <aside className={`hidden lg:flex bg-[#f2f4f6] text-[#ba0029] h-screen fixed left-0 top-0 w-64 border-r border-[#946e6d]/20 flex-col py-6 mt-16 transition-all`}>
        <div className="px-6 mb-8">
          <h2 className="font-mono text-[#410008] text-lg font-bold">SECTOR-7</h2>
          <p className="font-mono text-[10px] text-[#5f3e3e] tracking-widest">LIGHT_PROTOCOL_V2</p>
        </div>
        <div className="flex flex-col flex-grow">
          <nav className="space-y-1">
            <div className="bg-[#e90036] text-white border-l-4 border-[#ba0029] px-4 py-3 flex items-center gap-3">
              <span className="material-symbols-outlined">grid_view</span>
              <span className="font-mono text-[12px] font-bold tracking-wider">DASHBOARD</span>
            </div>
            {['EXTORTION', 'CALORIE_INTEL', 'MARKET_CAP', 'LOGS'].map((item, idx) => (
              <div key={idx} className="text-[#5f3e3e] hover:bg-[#e0e3e5]/50 px-4 py-3 flex items-center gap-3 cursor-pointer group transition-all">
                <span className="material-symbols-outlined group-hover:text-[#ba0029]">
                  {item === 'EXTORTION' ? 'monitoring' : item === 'CALORIE_INTEL' ? 'nutrition' : item === 'MARKET_CAP' ? 'currency_exchange' : 'database'}
                </span>
                <span className="font-mono text-[12px] font-bold tracking-wider group-hover:translate-x-1 duration-150">{item}</span>
              </div>
            ))}
          </nav>
          
          <div className="mt-auto px-4 space-y-4">
            <button className="w-full bg-[#ba0029] text-white font-mono text-[12px] font-bold py-3 hover:bg-[#e90036] transition-all border border-[#0F172A] shadow-[4px_4px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#0F172A] flex items-center justify-center gap-2 cursor-pointer">
              DEPLOY_DATA <span className="material-symbols-outlined text-sm">rocket_launch</span>
            </button>
            <div className="pt-4 border-t border-[#946e6d]/20">
              <div className="flex items-center gap-3 text-[#5f3e3e] hover:text-[#ba0029] transition-all cursor-pointer py-2">
                <span className="material-symbols-outlined text-xl">dns</span>
                <span className="font-mono text-[10px] font-bold">SYSTEM_STATUS</span>
              </div>
              <div className="flex items-center gap-3 text-[#5f3e3e] hover:text-[#ba0029] transition-all cursor-pointer py-2">
                <span className="material-symbols-outlined text-xl">enhanced_encryption</span>
                <span className="font-mono text-[10px] font-bold">ENCRYPTION</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* 3. MAIN DASHBOARD CONTENT */}
      <main className="lg:ml-64 p-6 md:p-12 min-h-screen">
        
        {/* Content Header */}
        <header className="mb-12">
          <div className="flex items-baseline gap-3 mb-1">
            <h1 className="text-3xl md:text-5xl font-black text-[#191c1e] uppercase tracking-tighter">ECONOMIC ANALYTICS &amp; FORENSICS</h1>
            <div className="h-2 w-2 bg-[#ba0029]"></div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-l-4 border-[#ba0029] pl-6 py-2">
            <p className="font-mono text-[#5f3e3e] uppercase tracking-widest text-sm">Visualizing Extorted Capital and Caloric Laundering</p>
            <div className="flex items-center gap-4 bg-[#eceef0] p-2 border border-[#946e6d]">
              <span className="font-mono text-[12px] font-bold tracking-wider text-[#ba0029]">THREAT_LEVEL:</span>
              <span className="font-mono text-sm font-black text-[#ba0029]">CRITICAL_ALPHA</span>
            </div>
          </div>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* Card 1: Crime Breakdown Doughnut */}
          <section className="col-span-12 md:col-span-5 bg-white border border-[#946e6d]/30 p-8 flex flex-col relative h-[480px] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_#ba0029] shadow-[4px_4px_0px_#0F172A] transition-all duration-150">
            <div className="flex justify-between items-start mb-8 border-b border-[#e6e8ea] pb-4">
              <div>
                <h3 className="text-xl font-extrabold uppercase tracking-tight">Distribution of Kuddus's Crimes</h3>
                <p className="font-mono text-[10px] text-[#5f3e3e] mt-1 font-bold">SECTOR: INTERNAL_SCHOOL_MARKET</p>
              </div>
              <span className="material-symbols-outlined text-[#ba0029]">pie_chart</span>
            </div>
            <div className="flex-grow flex items-center justify-center relative">
              <div className="relative w-64 h-64">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#ba0029" strokeDasharray="45 100" strokeDashoffset="0" strokeWidth="4.5"></circle>
                  <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#006948" strokeDasharray="35 100" strokeDashoffset="-45" strokeWidth="4.5"></circle>
                  <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#565e74" strokeDasharray="15 100" strokeDashoffset="-80" strokeWidth="4.5"></circle>
                  <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#191c1e" strokeDasharray="5 100" strokeDashoffset="-95" strokeWidth="4.5"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="font-mono text-3xl font-black">100%</span>
                  <span className="font-mono text-[10px] font-bold text-[#5f3e3e]">TOTAL_CRIMINALITY</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#ba0029]"></div><span className="font-mono text-[10px] font-bold">TIFFINS: 45%</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#006948]"></div><span className="font-mono text-[10px] font-bold">TAXES: 35%</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#565e74]"></div><span className="font-mono text-[10px] font-bold">FEES: 15%</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#191c1e]"></div><span className="font-mono text-[10px] font-bold">BRIBES: 5%</span></div>
            </div>
          </section>

          {/* Card 2: Extortion Trajectory Area Chart */}
          <section className="col-span-12 md:col-span-7 bg-white border border-[#946e6d]/30 p-8 flex flex-col h-[480px] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_#ba0029] shadow-[4px_4px_0px_#0F172A] transition-all duration-150">
            <div className="flex justify-between items-start mb-8 border-b border-[#e6e8ea] pb-4">
              <div>
                <h3 className="text-xl font-extrabold uppercase tracking-tight">Monthly Extortion Trajectory</h3>
                <p className="font-mono text-[10px] text-[#5f3e3e] mt-1 font-bold">TIME_DOMAIN: 5_WEEK_CYCLE</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-[#f2f4f6] border border-[#e9bcba] px-3 py-1 font-mono text-[10px] font-bold hover:bg-[#ba0029] hover:text-white transition-all cursor-pointer">CSV</button>
                <button className="bg-[#f2f4f6] border border-[#e9bcba] px-3 py-1 font-mono text-[10px] font-bold hover:bg-[#ba0029] hover:text-white transition-all cursor-pointer">PDF</button>
              </div>
            </div>
            <div className="flex-grow flex items-end justify-between gap-4 px-4 relative">
              <div className="absolute inset-0 grid grid-rows-5 grid-cols-1 pointer-events-none opacity-20">
                {[...Array(5)].map((_, i) => <div key={i} className="border-t border-dashed border-[#946e6d]"></div>)}
              </div>
              
              {/* Dynamic Scaling Columns simulating the charts */}
              <div className="flex flex-col items-center group w-full z-10">
                <div className="w-full bg-[#e6e8ea] border border-[#e9bcba] h-12 group-hover:bg-[#ba0029]/20 transition-all origin-bottom duration-500"></div>
                <span className="font-mono text-[10px] font-bold mt-4">WK_01</span>
              </div>
              <div className="flex flex-col items-center group w-full z-10">
                <div className="w-full bg-[#e6e8ea] border border-[#e9bcba] h-20 group-hover:bg-[#ba0029]/20 transition-all origin-bottom duration-500"></div>
                <span className="font-mono text-[10px] font-bold mt-4">WK_02</span>
              </div>
              <div className="flex flex-col items-center group w-full z-10">
                <div className="w-full bg-[#e6e8ea] border border-[#e9bcba] h-32 group-hover:bg-[#ba0029]/20 transition-all origin-bottom duration-500"></div>
                <span className="font-mono text-[10px] font-bold mt-4">WK_03</span>
              </div>
              <div className="flex flex-col items-center group w-full z-10">
                <div className="w-full bg-[#e6e8ea] border border-[#e9bcba] h-44 group-hover:bg-[#ba0029]/20 transition-all origin-bottom duration-500"></div>
                <span className="font-mono text-[10px] font-bold mt-4">WK_04</span>
              </div>
              <div className="flex flex-col items-center group w-full z-10">
                <div className="w-full bg-[#ba0029] border border-[#410008] h-56 relative origin-bottom duration-500">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#191c1e] text-white px-2 py-1 font-mono text-[10px] whitespace-nowrap">MAX_REACHED</div>
                </div>
                <span className="font-mono text-[10px] font-bold mt-4 text-[#ba0029]">WK_05</span>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-[#e6e8ea] pt-4">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs font-bold">VAL: $482,102.00</span>
                <span className="text-[#ba0029] font-black text-xs">▲ 24% INCREASE</span>
              </div>
              <div className="font-mono text-[10px] font-bold text-[#5f3e3e]">UPDATED: 0.84s AGO</div>
            </div>
          </section>

          {/* Card 3: Interactive Black Market Exchange Converter */}
          <section className="col-span-12 bg-white/80 border-2 border-[#ba0029] p-8 backdrop-blur-xl shadow-[4px_4px_0px_#0F172A] flex flex-col md:flex-row gap-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2" style={{ background: 'repeating-linear-gradient(45deg, #ba0029, #ba0029 10px, #000 10px, #000 20px)' }}></div>
            
            <div className="md:w-1/3">
              <div className="flex items-center gap-3 mb-4 mt-2">
                <span className="material-symbols-outlined text-[#ba0029] text-3xl">currency_exchange</span>
                <h3 className="text-xl font-black uppercase tracking-tight">THE BLACK-MARKET EXCHANGE CONVERTER</h3>
              </div>
              <p className="text-sm text-[#5f3e3e] mb-6 leading-relaxed">
                Calculate the real-world value of extorted student capital. Essential for understanding the calorie-to-currency pipeline across secondary education networks.
              </p>
              <div className="bg-[#ba0029]/5 p-4 border border-[#ba0029]/20">
                <p className="font-mono text-[10px] text-[#ba0029] font-black tracking-widest">WARNING:</p>
                <p className="font-mono text-[11px] font-bold text-[#ba0029]">Unsanctioned exchanges may trigger audit protocols from the Student Welfare Division.</p>
              </div>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Core Input System Controls */}
              <div className="space-y-6">
                <div>
                  <label className="font-mono text-[12px] font-bold tracking-wider block mb-2 text-[#5f3e3e]">INPUT_AMOUNT</label>
                  <input 
                    type="number" 
                    value={inputAmount}
                    onChange={(e) => setInputAmount(e.target.value)}
                    placeholder="000.00" 
                    className="w-full bg-[#f2f4f6] border-b-2 border-[#191c1e] p-4 font-mono text-xl font-black outline-none focus:border-[#ba0029]"
                  />
                </div>
                <div>
                  <label className="font-mono text-[12px] font-bold tracking-wider block mb-2 text-[#5f3e3e]">UNIT_SELECTOR</label>
                  <select 
                    value={unitSelector}
                    onChange={(e) => setUnitSelector(e.target.value)}
                    className="w-full bg-[#f2f4f6] border-b-2 border-[#191c1e] p-4 font-mono text-sm font-bold outline-none cursor-pointer focus:border-[#ba0029]"
                  >
                    <option value="bdt">STOLEN BDT</option>
                    <option value="calories">STOLEN CALORIES</option>
                  </select>
                </div>
              </div>

              {/* Live Dynamic Mathematical Metrics */}
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-[#f7f9fb] p-4 border border-[#e9bcba] flex justify-between items-center group hover:border-[#ba0029] transition-all">
                  <div>
                    <p className="font-mono text-[10px] font-bold text-[#5f3e3e]">JHALMURI_PLATES</p>
                    <p className="font-mono text-2xl font-black">{outputs.jhalmuri}</p>
                  </div>
                  <span className="material-symbols-outlined text-[#e9bcba] group-hover:text-[#ba0029] text-2xl">lunch_dining</span>
                </div>
                <div className="bg-[#f7f9fb] p-4 border border-[#e9bcba] flex justify-between items-center group hover:border-[#ba0029] transition-all">
                  <div>
                    <p className="font-mono text-[10px] font-bold text-[#5f3e3e]">FUCHSKA_SHOTS</p>
                    <p className="font-mono text-2xl font-black">{outputs.fuchska}</p>
                  </div>
                  <span className="material-symbols-outlined text-[#e9bcba] group-hover:text-[#ba0029] text-2xl">liquor</span>
                </div>
                <div className="bg-[#f7f9fb] p-4 border border-[#e9bcba] flex justify-between items-center group hover:border-[#ba0029] transition-all">
                  <div>
                    <p className="font-mono text-[10px] font-bold text-[#5f3e3e]">CRICKET_BAT_SWINGS</p>
                    <p className="font-mono text-2xl font-black">{outputs.cricket}</p>
                  </div>
                  <span className="material-symbols-outlined text-[#e9bcba] group-hover:text-[#ba0029] text-2xl">sports_cricket</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        
      </main>

      {/* 5. MOBILE BOTTOM NAV BAR */}
      <nav className="fixed bottom-0 w-full md:hidden bg-[#f7f9fb]/80 backdrop-blur-xl border-t border-[#e9bcba]/40 flex justify-around items-center h-16 z-[60]">
        <div className="flex flex-col items-center justify-center text-[#ba0029] font-bold scale-105 cursor-pointer">
          <span className="material-symbols-outlined">sensors</span>
          <span className="font-mono text-[10px] font-bold uppercase">LIVE</span>
        </div>
        {['TRADE', 'INTEL', 'FILES'].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center text-[#5f3e3e] opacity-60 hover:opacity-100 transition-all cursor-pointer">
            <span className="material-symbols-outlined">
              {item === 'TRADE' ? 'swap_horiz' : item === 'INTEL' ? 'psychology' : 'folder_open'}
            </span>
            <span className="font-mono text-[10px] font-bold uppercase">{item}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}