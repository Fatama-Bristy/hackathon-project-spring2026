import { useState } from 'react';

const feedData = [
    { time: "07:42 AM", text: "Anonymous Student logged Tiffin Extortion", color: "text-[#191c1e]" },
    { time: "08:01 AM", text: "Channel encryption verified. Protocol Alpha engaged.", color: "text-[#00687a] font-bold" },
    { time: "09:15 AM", text: "Anti-Camouflage Seating Plan updated (Sector 4)", color: "text-[#191c1e]" },
    { time: "10:22 AM", text: "Momo supply redirected to underground canteen.", color: "text-[#191c1e]" },
    { time: "11:30 AM", text: "Warning Strike #2 delivered to Administrative Office.", color: "text-[#9d4300] font-bold" },
    { time: "12:05 PM", text: "Surveillance blindspot discovered: Corridor C-3.", color: "text-[#191c1e]" },
    { time: "01:10 PM", text: "Awaiting further orders...", color: "italic text-[#3d494c]/60" },
];

export default function MainDashboard() {
    const [command, setCommand] = useState("");

    return (
        /* 
          ফিক্স: এখান থেকে md:ml-64 বা md:ml-[260px] সম্পূর্ণ বাদ দেওয়া হয়েছে।
          w-full নিশ্চিত করবে যে এটি App.js-এর pl-64 প্যাডিংয়ের পর থেকে বাকি পুরো স্ক্রিন জুড়ে থাকবে।
        */
        <main className="w-full pt-6 md:pt-12 px-4 md:px-8 pb-12 min-h-screen bg-slate-50 text-slate-900 block">
            <div className="max-w-[1440px] mx-auto space-y-6">
                
                {/* Header Section */}
                <div className="mb-6">
                    <h1 className="font-['Inter'] text-[24px] md:text-[28px] text-[#191c1e] uppercase tracking-tight flex items-center gap-3 font-semibold">
                        <span className="w-1.5 h-6 bg-[#00687a] block"></span>
                        STRIKE PORTAL <span className="text-[#6d797d]">/ ALPHA</span>
                    </h1>
                    <p className="text-[#3d494c] font-['Geist'] text-[13px] mt-1 max-w-3xl opacity-85">
                        UNAUTHORIZED ACCESS TO THIS TERMINAL IS PUNISHABLE BY ACADEMIC EXPULSION. STAY ENCRYPTED. STAY SILENT.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* 1. Impeachment Strike Tracker */}
                    <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl relative overflow-hidden flex flex-col justify-between p-6 md:p-8 shadow-sm">
                        <div className="scan-line absolute top-0 left-0 w-full z-10 pointer-events-none"></div>
                        
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <span className="font-['Geist'] text-[10px] text-[#00687a] uppercase tracking-[0.2em] font-bold">Data Sector: Strike_Mgmt</span>
                                <h2 className="font-['Inter'] text-[22px] md:text-[26px] text-[#191c1e] mt-1 font-bold tracking-tight">IMPEACHMENT PROGRESS: 2 / 3 STRIKES DELIVERED</h2>
                            </div>
                            <span className="material-symbols-outlined text-[#ff853c] text-3xl md:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                        </div>
                        
                        <div className="mt-6">
                            <div className="flex justify-between items-end mb-3">
                                <span className="font-['Geist'] text-[#9d4300] font-bold tracking-wider text-sm md:text-base">WARNINGS ISSUED - KUDDUS IS CORNERED</span>
                                <span className="font-['Geist'] text-[13px] text-[#3d494c] font-semibold">66.7% COMPLETE</span>
                            </div>
                            <div className="w-full h-3 bg-[#e0e3e5] rounded-full overflow-hidden border border-[#bcc9cd]/20 relative">
                                <div className="h-full bg-gradient-to-r from-[#ff853c] to-[#e66a1f] shadow-[0_0_15px_rgba(255,133,60,0.5)] relative" style={{ width: '66.66%' }}>
                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[size:16px_16px] animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#bcc9cd]/20">
                            <div><div className="font-['Geist'] text-[10px] text-[#3d494c] uppercase font-medium">Strike 01</div><div className="font-['Geist'] text-[13px] text-[#00687a] font-bold">DELIVERED</div></div>
                            <div><div className="font-['Geist'] text-[10px] text-[#3d494c] uppercase font-medium">Strike 02</div><div className="font-['Geist'] text-[13px] text-[#00687a] font-bold">DELIVERED</div></div>
                            <div className="opacity-40"><div className="font-['Geist'] text-[10px] text-[#3d494c] uppercase font-medium">Strike 03</div><div className="font-['Geist'] text-[13px] text-[#3d494c]">PENDING...</div></div>
                        </div>
                    </div>

                    {/* 2. Live Resistance Feed */}
                    <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl flex flex-col h-[400px] lg:h-auto overflow-hidden shadow-sm">
                        <div className="p-4 border-b border-[#bcc9cd]/20 bg-[#f2f4f6] flex justify-between items-center">
                            <span className="font-['Geist'] text-[11px] text-[#3d494c] flex items-center gap-2 font-bold tracking-wider">
                                <span className="w-2 h-2 bg-[#00687a] rounded-full animate-pulse"></span> LIVE RESISTANCE FEED (ENCRYPTED)
                            </span>
                            <span className="material-symbols-outlined text-[#3d494c] text-sm font-bold">lock</span>
                        </div>
                        <div className="flex-1 p-4 font-['Geist'] text-[12px] overflow-y-auto space-y-3 bg-[#fcfdfe]">
                            {feedData.map((item, index) => (
                                <div key={index} className="text-[#3d494c] flex gap-2 leading-relaxed">
                                    <span className="opacity-50 flex-shrink-0">{`[${item.time}]`}</span>
                                    <span className={item.color}>{item.text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="p-3 border-t border-[#bcc9cd]/20 flex gap-2 items-center bg-white focus-within:border-[#00687a] transition-colors">
                            <span className="text-[#00687a] font-['Geist'] text-[12px] font-bold">$</span>
                            <input type="text" value={command} onChange={(e) => setCommand(e.target.value)} className="flex-1 border-none bg-transparent focus:ring-0 font-['Geist'] text-[13px] text-[#191c1e] placeholder:text-[#bcc9cd] outline-none" placeholder="Enter command..." />
                        </div>
                    </div>

                    {/* 3. Giant SOS Panic Flare */}
                    <div className="lg:col-span-12 bg-white border border-slate-200 rounded-2xl overflow-hidden p-6 md:p-8 shadow-sm">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-center md:text-left space-y-4 flex-1">
                                <span className="font-['Geist'] text-[10px] text-[#b61722] font-bold uppercase tracking-[0.05em] bg-[#b61722]/10 px-2.5 py-1 rounded inline-block">Critical Action Needed</span>
                                <h2 className="font-['Inter'] text-[24px] md:text-[28px] text-[#191c1e] font-bold tracking-tight">LAUNCH SOS FLARE</h2>
                                <p className="text-[#3d494c] font-['Inter'] text-[14px] leading-relaxed max-w-xl opacity-90">
                                    Panic button for immediate backup when cornered near the canteen lockers.
                                </p>
                                <div className="pt-2 max-w-xs mx-auto md:mx-0">
                                    <label className="font-['Geist'] text-[10px] text-[#3d494c] uppercase block mb-1.5 font-bold">Target Sector</label>
                                    <div className="relative">
                                        <select className="w-full bg-[#f2f4f6] border border-[#bcc9cd]/50 text-[#191c1e] font-['Geist'] text-[13px] py-2.5 px-3 rounded focus:border-[#00687a] appearance-none outline-none">
                                            <option>Classroom</option><option>Library</option><option>Corridor</option><option>Canteen</option><option>Playground</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-base">keyboard_arrow_down</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Engage Button */}
                            <div className="relative group flex-shrink-0">
                                <div className="absolute inset-0 bg-[#b61722] rounded-3xl opacity-30 scale-105 animate-ping"></div>
                                <div className="absolute inset-0 bg-[#b61722]/20 rounded-3xl blur-xl animate-pulse"></div>
                                
                                <button className="relative w-44 h-44 md:w-52 md:h-52 rounded-3xl bg-[#b61722] shadow-[0_0_40px_rgba(182,23,34,0.4)] flex flex-col items-center justify-center text-white transition-transform duration-300 hover:scale-[1.03] active:scale-95 z-10">
                                    <span className="material-symbols-outlined text-[56px] mb-3 animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>
                                        campaign
                                    </span>
                                    <span className="font-['Geist'] text-xs tracking-[0.2em] font-bold">ENGAGE</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Data Cards */}
                    <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-[#00687a]/10 flex items-center justify-center border border-[#00687a]/20 flex-shrink-0">
                            <span className="material-symbols-outlined text-[#00687a] text-[22px]">groups</span>
                        </div>
                        <div>
                            <div className="font-['Geist'] text-[10px] text-[#3d494c] uppercase font-bold tracking-wider">Active Cells</div>
                            <div className="font-['Inter'] text-[24px] text-[#191c1e] font-bold mt-0.5">4,208</div>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-[#ff853c]/10 flex items-center justify-center border border-[#ff853c]/20 flex-shrink-0">
                            <span className="material-symbols-outlined text-[#ff853c] text-[22px]">schedule</span>
                        </div>
                        <div>
                            <div className="font-['Geist'] text-[10px] text-[#3d494c] uppercase font-bold tracking-wider">Time to Strike 3</div>
                            <div className="font-['Inter'] text-[24px] text-[#191c1e] font-bold mt-0.5">04h 22m</div>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-[#b61722]/10 flex items-center justify-center border border-[#b61722]/20 flex-shrink-0">
                            <span className="material-symbols-outlined text-[#b61722] text-[22px]">visibility_off</span>
                        </div>
                        <div>
                            <div className="font-['Geist'] text-[10px] text-[#3d494c] uppercase font-bold tracking-wider">Stealth Rating</div>
                            <div className="font-['Inter'] text-[24px] text-[#191c1e] font-bold mt-0.5 text-[#b61722]">OPTIMAL</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    );
}