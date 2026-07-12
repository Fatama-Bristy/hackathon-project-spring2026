import React, { useState } from 'react';
import { 
  Terminal, 
  Receipt, 
  Eye, 
  Bell, 
  Settings, 
  AlertTriangle, 
  Utensils, 
  CheckCircle, 
  Cpu, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';

const CorruptionLedger = () => {
  // Initial Ledger Data State
  const [transactions, setTransactions] = useState([
    { id: 1, time: '[09:30 AM]', category: 'Washroom Tax', desc: 'Block B Restroom Entry', value: '৳ 2.00', type: 'bdt', rawVal: 2 },
    { id: 2, time: '[10:15 AM]', category: 'Tiffin Theft', desc: 'Half-eaten Singara', value: '320 kcal', type: 'kcal', rawVal: 320 },
    { id: 3, time: '[12:45 PM]', category: 'Bribe', desc: 'Math Script Protection', value: '৳ 10.00', type: 'bdt', rawVal: 10 },
    { id: 4, time: '[02:10 PM]', category: 'Protection Fee', desc: 'Ludu Dice manipulation', value: '৳ 5.00', type: 'bdt', rawVal: 5 },
    { id: 5, time: '[03:45 PM]', category: 'Tiffin Theft', desc: 'Fruit Juice Box', value: '150 kcal', type: 'kcal', rawVal: 150 },
  ]);

  // Form Input States
  const [extortionType, setExtortionType] = useState('2-Taka Washroom Tax');
  const [estimatedValue, setEstimatedValue] = useState('');
  const [description, setDescription] = useState('');

  // Calculations based on State
  const totalBDT = transactions
    .filter(t => t.type === 'bdt')
    .reduce((sum, item) => sum + item.rawVal, 0);

  const totalKcal = transactions
    .filter(t => t.type === 'kcal')
    .reduce((sum, item) => sum + item.rawVal, 0);

  const jhalmuriPlates = (totalKcal / 500).toFixed(1); 

  const handleQuickFill = () => {
    setExtortionType('2-Taka Washroom Tax');
    setEstimatedValue('2.00');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!estimatedValue) return;

    const now = new Date();
    const timeString = `[${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}]`;
    
    let category = 'Tax';
    let type = 'bdt';
    let displayValue = `৳ ${parseFloat(estimatedValue).toFixed(2)}`;

    if (extortionType.includes('Tiffin')) {
      category = 'Tiffin Theft';
      type = 'kcal';
      displayValue = `${parseInt(estimatedValue)} kcal`;
    } else if (extortionType.includes('Bribe')) {
      category = 'Bribe';
    } else if (extortionType.includes('Protection')) {
      category = 'Protection Fee';
    }

    const newTransaction = {
      id: Date.now(),
      time: timeString,
      category: category,
      desc: description || 'No description provided',
      value: displayValue,
      type: type,
      rawVal: parseFloat(estimatedValue)
    };

    setTransactions([newTransaction, ...transactions]);
    setEstimatedValue('');
    setDescription('');
  };

  return (
    <div className="bg-[#f7f9fb] min-h-screen text-[#191c1e] antialiased selection:bg-[#ba0029] selection:text-white relative">
      
      <style>{`
        body {
          background-image: 
            linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>

      {/* MAIN LAYOUT CANVAS */}
      <main className="max-w-[1440px] mx-auto px-16 py-12 flex flex-col lg:flex-row gap-6">
        
        {/* LEFT SIDE NAVIGATION BAR */}
        <aside className="hidden lg:flex flex-col h-fit w-64 bg-[#f2f4f6] border-2 border-[#191c1e] p-4 gap-y-2 sticky top-28 shadow-[4px_4px_0px_0px_#191c1e]">
          <div className="mb-6 px-2">
            <div className="text-xl font-black text-[#ba0029] font-sans">AUDITOR_01</div>
            <div className="font-mono text-[12px] text-[#5f3e3e] font-bold tracking-wider uppercase">Protocol: ACTIVE</div>
          </div>
          <nav className="flex flex-col gap-1">
            <a className="flex items-center gap-3 p-3 bg-[#ba0029] text-white font-bold font-mono text-[12px] tracking-widest border border-[#191c1e] shadow-[4px_4px_0px_0px_#191c1e]" href="#">
              <Terminal size={16} />
              <span>COMMAND</span>
            </a>
            <a className="flex items-center gap-3 p-3 text-[#5f3e3e] font-bold font-mono text-[12px] tracking-widest hover:text-[#191c1e] hover:bg-[#e0e3e5] transition-colors" href="#">
              <Receipt size={16} />
              <span>AUDIT</span>
            </a>
            <a className="flex items-center gap-3 p-3 text-[#5f3e3e] font-bold font-mono text-[12px] tracking-widest hover:text-[#191c1e] hover:bg-[#e0e3e5] transition-colors" href="#">
              <Eye size={16} />
              <span>FORENSICS</span>
            </a>
          </nav>
          <button className="mt-8 bg-[#ba0029] text-white font-black py-3 px-4 text-center cursor-crosshair font-mono text-[12px] tracking-widest border-2 border-[#191c1e] hover:bg-[#92001e] transition-all active:translate-y-0.5">
            INITIATE AUDIT
          </button>
        </aside>

        {/* CONTROLS & DATA CONTAINER */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <section className="md:col-span-5 flex flex-col gap-6">
            <div className="bg-white/90 backdrop-blur-md border-2 border-[#191c1e] p-8 flex flex-col gap-6 relative shadow-[4px_4px_0px_0px_#191c1e]">
              <div className="absolute top-2 right-3 font-mono text-[10px] text-[#5f3e3e] opacity-50 font-bold">
                SECURE_CHANNEL_V3
              </div>
              <h2 className="text-2xl font-black text-[#191c1e] border-b-2 border-[#191c1e] pb-2 uppercase tracking-tight">
                DATA_ENTRY
              </h2>
              
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[12px] font-bold text-[#5f3e3e] tracking-wider">EXTORTION_TYPE</label>
                  <div className="relative">
                    <select 
                      className="w-full bg-[#f2f4f6] border-b-2 border-[#191c1e] border-t-0 border-l-0 border-r-0 py-3 px-2 font-sans text-sm focus:ring-0 appearance-none cursor-crosshair font-medium outline-none"
                      value={extortionType}
                      onChange={(e) => setExtortionType(e.target.value)}
                    >
                      <option>2-Taka Washroom Tax</option>
                      <option>Stolen Tiffin (Calorie Theft)</option>
                      <option>Homework Copying Bribe</option>
                      <option>Ludu Tournament Protection Fee</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-2 top-4 pointer-events-none text-[#191c1e]" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[12px] font-bold text-[#5f3e3e] tracking-wider">
                    {extortionType.includes('Tiffin') ? 'ESTIMATED_VALUE (KCAL)' : 'ESTIMATED_VALUE (BDT)'}
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input 
                        className="w-full bg-[#f2f4f6] border-b-2 border-[#191c1e] border-t-0 border-l-0 border-r-0 py-3 px-10 font-mono text-sm outline-none" 
                        placeholder="0.00" 
                        type="number"
                        value={estimatedValue}
                        onChange={(e) => setEstimatedValue(e.target.value)}
                        required
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5f3e3e] font-mono text-sm font-bold">
                        {extortionType.includes('Tiffin') ? 'cal' : '৳'}
                      </span>
                    </div>
                    {!extortionType.includes('Tiffin') && (
                      <button 
                        type="button"
                        onClick={handleQuickFill}
                        className="px-3 bg-[#191c1e] text-white font-mono text-[11px] font-bold tracking-wider hover:bg-[#ba0029] transition-colors border border-[#191c1e]"
                      >
                        2 BDT QUICK-FILL
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[12px] font-bold text-[#5f3e3e] tracking-wider">DESCRIPTION_ITEM_LOST</label>
                  <textarea 
                    className="w-full bg-[#f2f4f6] border-b-2 border-[#191c1e] border-t-0 border-l-0 border-r-0 py-3 px-2 font-sans text-sm resize-none outline-none" 
                    placeholder="e.g., Mom's special chicken sandwich..." 
                    rows="3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#FFB300] border-2 border-[#191c1e] text-black font-black py-4 tracking-widest text-md hover:bg-[#ffa000] transition-all flex items-center justify-center gap-3 shadow-[3px_3px_0px_#191c1e] active:translate-y-0.5 active:shadow-none"
                >
                  <Terminal size={18} />
                  LOG TO CENTRAL LEDGER
                </button>
              </form>
            </div>

            <div className="relative h-32 overflow-hidden border-2 border-[#191c1e] bg-white shadow-[4px_4px_0px_0px_#191c1e] flex items-center justify-center">
              <div className="absolute inset-0 opacity-5 pointer-events-none clinical-grid"></div>
              <div className="bg-[#f7f9fb] px-4 py-2 border border-[#191c1e] font-mono text-[11px] font-bold tracking-widest animate-pulse flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ba0029] block"></span>
                MONITORING_NETWORK_STREAMS
              </div>
            </div>
          </section>

          <div className="md:col-span-7 flex flex-col gap-6">
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-[#191c1e] p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_#191c1e] group hover:bg-[#eceef0] transition-colors">
                <div className="flex justify-between items-start">
                  <label className="font-mono text-[11px] font-bold text-[#5f3e3e] tracking-wider">TOTAL BDT EXTORTED</label>
                  <Receipt size={18} className="text-[#ba0029]" />
                </div>
                <div className="mt-6">
                  <span className="text-4xl font-black text-[#ba0029] tracking-tight">৳ {totalBDT.toFixed(2)}</span>
                  <div className="font-mono text-[11px] font-bold text-[#ba1a1a] mt-2 flex items-center gap-1">
                    <span>▲ +12% FROM PREV_CYCLE</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-[#191c1e] p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_#191c1e] group hover:bg-[#eceef0] transition-colors">
                <div className="flex justify-between items-start">
                  <label className="font-mono text-[11px] font-bold text-[#5f3e3e] tracking-wider">TOTAL STOLEN CALORIES</label>
                  <Utensils size={18} className="text-[#006948]" />
                </div>
                <div className="mt-6">
                  <span className="text-4xl font-black text-[#006948] tracking-tight">
                    {totalKcal.toLocaleString()} <span className="text-xl font-bold">kcal</span>
                  </span>
                  <div className="font-mono text-[10px] font-bold text-[#5f3e3e] tracking-wide mt-2">
                    EQUIVALENT TO {jhalmuriPlates} PLATES OF JHALMURI
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2 bg-[#ba1a1a] border-2 border-[#191c1e] text-white p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-[4px_4px_0px_0px_#191c1e]">
                <div className="flex items-center gap-3">
                  <AlertTriangle size={18} className="text-white animate-bounce" />
                  <span className="font-mono text-[12px] font-black tracking-wider">
                    RISK ASSESSMENT: CRITICAL FINANCIAL FRAUD
                  </span>
                </div>
                <div className="font-mono text-[10px] opacity-80 uppercase tracking-widest font-bold">
                  Internal Code: CORRUPT_KODU_2024
                </div>
              </div>
            </section>

            <section className="bg-white border-2 border-[#191c1e] flex flex-col flex-1 min-h-[400px] shadow-[4px_4px_0px_0px_#191c1e]">
              <div className="p-4 border-b-2 border-[#191c1e] bg-[#eceef0] flex justify-between items-center">
                <h3 className="font-mono text-[12px] font-black tracking-widest text-[#191c1e]">
                  TRANSACTION_HISTORY_L_ALPHA
                </h3>
                <div className="flex items-center gap-2 bg-white px-2 py-0.5 border border-[#191c1e]">
                  <span className="w-2 h-2 rounded-full bg-[#ba0029] animate-ping"></span>
                  <span className="font-mono text-[10px] font-bold tracking-wider">LIVE_FEED</span>
                </div>
              </div>

              <div className="overflow-x-auto flex-grow">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#191c1e] bg-[#f7f9fb]">
                      <th className="p-4 font-mono text-[11px] font-bold text-[#5f3e3e] tracking-wider">TIME</th>
                      <th className="p-4 font-mono text-[11px] font-bold text-[#5f3e3e] tracking-wider">CATEGORY</th>
                      <th className="p-4 font-mono text-[11px] font-bold text-[#5f3e3e] tracking-wider">DESCRIPTION</th>
                      <th className="p-4 font-mono text-[11px] font-bold text-[#5f3e3e] tracking-wider text-right">VALUE</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono text-xs font-bold divide-y divide-[#eceef0]">
                    {transactions.map((t) => (
                      <tr key={t.id} className="hover:bg-[#eceef0] transition-colors border-b border-[#eceef0]">
                        <td className="p-4 text-[#5f3e3e]">{t.time}</td>
                        <td className="p-4 text-[#191c1e] font-black">{t.category}</td>
                        <td className="p-4 text-[#5f3e3e] font-medium">{t.desc}</td>
                        <td className={`p-4 text-right font-black text-sm ${t.type === 'bdt' ? 'text-[#ba0029]' : 'text-[#006948]'}`}>
                          {t.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-auto p-4 border-t-2 border-[#191c1e] flex justify-center bg-[#f7f9fb]">
                <button className="font-mono text-[12px] font-black tracking-widest text-[#5f3e3e] hover:text-[#ba0029] flex items-center gap-2 transition-colors">
                  VIEW ALL RECORDS
                  <ArrowRight size={14} />
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* SYSTEM STATUS FOOTER */}
      <footer className="w-full bg-[#d8dadc] p-4 border-t-2 border-[#191c1e] flex flex-col sm:flex-row justify-between items-center gap-4 px-16 mt-12">
        <div className="flex items-center gap-8 font-mono text-[10px] font-bold text-[#191c1e]">
          <div className="flex items-center gap-2">
            <CheckCircle size={14} className="text-emerald-700" />
            <span>LEDGER_SYNC: OK</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu size={14} className="text-[#ba0029]" />
            <span>CPU: 24%</span>
          </div>
        </div>
        <div className="font-mono text-[10px] text-[#5f3e3e] tracking-widest font-bold">
          © 2024 ANTI-CORRUPTION TASK FORCE // DHAKA_REGION
        </div>
      </footer>
    </div>
  );
};

export default CorruptionLedger;