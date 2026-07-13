import React from "react";
import { Home, LayoutDashboard, TrendingUp, Sun, Moon, Settings } from "lucide-react";

export default function Navbar({ activeTab, setActiveTab, darkMode, toggleTheme }) {
  const navItems = [
    { id: "landing", title: "LANDING", icon: <Home size={16} /> },
    { id: "dashboard", title: "DASHBOARD", icon: <LayoutDashboard size={16} /> },
    { id: "economy-ledger", title: "CRIME ECONOMY", icon: <TrendingUp size={16} /> },
  ];

  return (
    <nav className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'}`}>
      <div className="max-w-7xl mx-auto h-16 px-8 flex items-center justify-between">
        {/* লোগো সেকশন সরানো হয়েছে */}
        <div className="w-1/4"></div>

        <div className="flex-1 flex justify-center items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 uppercase text-[15px] font-semibold transition-all ${
                activeTab === item.id ? "text-[#B0122A]" : darkMode ? "text-gray-300 hover:text-[#B0122A]" : "text-gray-600 hover:text-[#B0122A]"
              }`}
            >
              {item.icon}
              {item.title}
            </button>
          ))}
        </div>

        <div className="w-1/4 flex justify-end items-center gap-5">
          <button onClick={toggleTheme} className={darkMode ? "text-yellow-400" : "text-gray-600"}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setActiveTab('settings')} className={darkMode ? "text-gray-300" : "text-gray-600"}>
            <Settings size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}