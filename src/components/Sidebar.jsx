import React from 'react';

export default function Sidebar({ onLogout, onNavigate, currentScreen }) {
    const missions = [
        { id: "dashboard", label: "DASHBOARD", icon: "dashboard" },
        { id: "seating", label: "ANTI-CAMO SEATING", icon: "grid_view" },
        { id: "ai-syllabus", label: "AI SYLLABUS ENGINE", icon: "verified_user" },
        { id: "whistleblower", label: "WHISTLEBLOWER", icon: "assignment" },
        { id: "economy-ledger", label: "CORRUPT LEDGER", icon: "currency_bitcoin" },
        { id: "sos-flare", label: "REAL-TIME SOS FLARE", icon: "campaign" },
        { id: "semantic-fact-checker", label: "SEMANTIC FACT CHECKER", icon: "terminal" },
    ];

    return (
        <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r-2 border-[#191c1e] z-[60] flex flex-col py-8 gap-4 hidden md:flex shadow-[4px_0px_0px_0px_rgba(25,28,30,1)]">
            <div className="px-6 mb-4">
                <h1 className="font-extrabold text-2xl text-[#ba0029] tracking-tighter uppercase">ANTI-KUDDUS</h1>
                <p className="font-mono text-xs font-bold text-[#00855d] mt-1 tracking-wider">STATUS: ACTIVE</p>
            </div>

            <nav className="flex-1 flex flex-col gap-1 px-2 overflow-y-auto">
                {missions.map((mission) => {
                    const isActive = currentScreen === mission.id;
                    return (
                        <button
                            key={mission.id}
                            onClick={() => onNavigate(mission.id)}
                            className={`flex items-center gap-3 px-4 py-3 font-mono text-sm font-medium transition-all active:translate-x-1 ${
                                isActive ? 'bg-[#ba0029] text-white shadow-lg' : 'text-[#191c1e] hover:bg-[#e6e8ea]'
                            }`}
                        >
                            <span className="material-symbols-outlined">{mission.icon}</span>
                            {mission.label}
                        </button>
                    );
                })}
            </nav>

            <div className="mt-auto px-6 space-y-4">
                <button 
                    onClick={() => onNavigate('whistleblower')}
                    className="w-full bg-[#00696D] text-white py-3 font-bold font-mono text-xs tracking-wider transition-all hover:bg-[#005a5e]"
                >
                    INITIATE PROTOCOL
                </button>
                
                <div className="flex flex-col gap-3 pt-2">
                    <button 
                        onClick={() => onNavigate('settings')}
                        className={`flex items-center gap-3 font-mono text-xs font-bold hover:text-[#191c1e] ${currentScreen === 'settings' ? 'text-[#ba0029]' : 'text-[#565e74]'}`}
                    >
                        <span className="material-symbols-outlined text-sm">settings</span> SETTINGS
                    </button>
                    <button 
                        onClick={onLogout}
                        className="flex items-center gap-3 font-mono text-xs font-bold text-[#565e74] hover:text-[#191c1e]"
                    >
                        <span className="material-symbols-outlined text-sm">logout</span> LOG OUT
                    </button>
                </div>
            </div>
        </aside>
    );
}