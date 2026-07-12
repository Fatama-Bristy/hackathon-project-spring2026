import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const isDashboardActive = location.pathname === '/dashboard' || location.pathname === '/';

    return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-[#f2f4f6]/80 backdrop-blur-md border-b border-[#bcc9cd]/20 z-50 px-4 md:px-8 flex justify-between items-center">
            <div className="flex items-center gap-6">
                <Link to="/dashboard" className="font-['Inter'] font-black tracking-tighter text-[#b61722] text-xl md:text-2xl">
                    ANTI-KUDDUS
                </Link>
                <div className="hidden sm:flex items-center gap-2 bg-[#00687a]/10 px-3 py-1 rounded-full border border-[#00687a]/20">
                    <span className="w-2 h-2 bg-[#00687a] rounded-full animate-pulse"></span>
                    <span className="font-['Geist'] text-[10px] font-bold text-[#00687a] tracking-wider uppercase">PROTOCOL STATE: ACTIVE</span>
                </div>
            </div>

            <div className="flex items-center gap-6 font-['Geist'] text-[11px] font-bold tracking-wider">
                <Link 
                    to="/dashboard" 
                    className={`transition-colors ${isDashboardActive ? 'text-[#b61722]' : 'text-[#3d494c] opacity-70 hover:opacity-100'}`}
                >
                    DASHBOARD
                </Link>
                <Link to="/intel" className="text-[#3d494c] opacity-70 hover:opacity-100 transition-colors">INTEL</Link>
                <Link to="/archive" className="text-[#3d494c] opacity-70 hover:opacity-100 transition-colors">ARCHIVE</Link>
                
                <button className="hidden md:block bg-[#b61722] text-white px-4 py-2 text-[10px] tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all font-bold">
                    EMERGENCY CAMOUFLAGE
                </button>
            </div>
        </nav>
    );
}