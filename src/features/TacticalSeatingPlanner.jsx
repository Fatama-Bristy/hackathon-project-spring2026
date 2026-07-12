import React, { useState, useMemo } from 'react';

export default function TacticalSeatingPlanner() {
  // Dimension States
  const [cols, setCols] = useState(6);
  const [rows, setRows] = useState(5);

  // Personnel Data States
  const [personnel, setPersonnel] = useState([
    { id: 1, name: 'Kodu Kuddus', roll: 'ROLL_001', height: 168, isPriority: true },
    { id: 2, name: 'Aria Vance', roll: 'ROLL_042', height: 185, isPriority: false },
    { id: 3, name: 'Elias Thorne', roll: 'ROLL_019', height: 155, isPriority: false }
  ]);

  // Form States for New Entry
  const [newName, setNewName] = useState('');
  const [newRoll, setNewRoll] = useState('');
  const [newHeight, setNewHeight] = useState('');
  const [newPriority, setNewPriority] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  // Layout Generation State
  const [generationTrigger, setGenerationTrigger] = useState(0);

  // Handle Input Changes for Personnel
  const updatePerson = (id, field, value) => {
    setPersonnel(prev => prev.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  // Add New Student
  const handleAddPersonnel = () => {
    if (!newName || !newRoll || !newHeight) return;
    setPersonnel(prev => [
      ...prev,
      {
        id: Date.now(),
        name: newName,
        roll: newRoll,
        height: parseInt(newHeight) || 160,
        isPriority: newPriority
      }
    ]);
    setNewName('');
    setNewRoll('');
    setNewHeight('');
    setNewPriority(false);
    setShowAddForm(false);
  };

  // Tactical Seating Logic
  const optimizedGridSlots = useMemo(() => {
    const totalSlots = cols * rows;
    const sortedPersonnel = [...personnel].sort((a, b) => {
      if (a.isPriority && !b.isPriority) return -1;
      if (!a.isPriority && b.isPriority) return 1;
      return a.height - b.height;
    });

    const slots = [];
    for (let i = 0; i < totalSlots; i++) {
      slots.push(sortedPersonnel[i] || null);
    }
    return slots;
  }, [personnel, cols, rows, generationTrigger]);

  // Get Initials for Avatar
  const getInitials = (name) => {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : '';
  };

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen selection:bg-[#ba0029] selection:text-white font-sans antialiased p-8">
      
      {/* Dynamic Style Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&family=JetBrains+Mono:wght@500;700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .font-mono-data { font-family: 'JetBrains Mono', monospace; }
        .bg-grid-subtle {
          background-image: radial-gradient(#e0e3e5 1px, transparent 1px);
          background-size: 20px 20px;
        }
        @keyframes pulse-red {
          0% { box-shadow: 0 0 0 0 rgba(186, 0, 41, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(186, 0, 41, 0); }
          100% { box-shadow: 0 0 0 0 rgba(186, 0, 41, 0); }
        }
        .animate-pulse-red { animation: pulse-red 2s infinite; }
        .laser-line { stroke-dasharray: 10; animation: dash 1s linear infinite; }
        @keyframes dash { to { stroke-dashoffset: -20; } }
      `}</style>

      {/* Main Content Space - Removed Sidebar/Navbar Padding */}
      <main className="bg-grid-subtle min-h-screen">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Control Columns */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <section className="bg-white/80 backdrop-blur-md border border-[#e9bcba] p-6 shadow-sm">
                <h3 className="text-[12px] font-bold tracking-wider font-mono-data text-[#ba0029] mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined">square_foot</span> CLASSROOM DIMENSIONS
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold font-mono-data text-[#5f3e3e]">COLS (N)</label>
                    <input className="bg-[#f2f4f6] border-b-2 border-[#191c1e] p-2 outline-none" type="number" value={cols} onChange={(e) => setCols(Math.max(1, parseInt(e.target.value) || 0))} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold font-mono-data text-[#5f3e3e]">ROWS (M)</label>
                    <input className="bg-[#f2f4f6] border-b-2 border-[#191c1e] p-2 outline-none" type="number" value={rows} onChange={(e) => setRows(Math.max(1, parseInt(e.target.value) || 0))} />
                  </div>
                </div>
              </section>

              <section className="bg-white/80 backdrop-blur-md border border-[#e9bcba] p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-[12px] font-bold tracking-wider font-mono-data text-[#ba0029] flex items-center gap-2">
                    <span className="material-symbols-outlined">group</span> PERSONNEL DATA
                  </h3>
                  <button onClick={() => setShowAddForm(!showAddForm)} className="text-[#ba0029]">
                    <span className="material-symbols-outlined">{showAddForm ? 'remove_circle' : 'add_circle'}</span>
                  </button>
                </div>

                {showAddForm && (
                  <div className="mb-4 p-3 bg-[#eceef0] border border-[#ba0029] space-y-3">
                    <input type="text" placeholder="Name" value={newName} onChange={e => setNewName(e.target.value)} className="w-full text-xs p-2" />
                    <div className="grid grid-cols-2 gap-2">
                      <input type="text" placeholder="ROLL ID" value={newRoll} onChange={e => setNewRoll(e.target.value)} className="text-xs p-2" />
                      <input type="number" placeholder="Height (cm)" value={newHeight} onChange={e => setNewHeight(e.target.value)} className="text-xs p-2" />
                    </div>
                    <button onClick={handleAddPersonnel} className="w-full bg-[#191c1e] text-white text-[10px] font-bold py-2 uppercase hover:bg-[#ba0029]">Save to Registry</button>
                  </div>
                )}

                <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1">
                  {personnel.map((person) => (
                    <div key={person.id} className={`p-3 border ${person.isPriority ? 'bg-[#ffdad6] border-[#ba1a1a]' : 'bg-[#f2f4f6] border-[#191c1e]'}`}>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <input className="col-span-2 bg-white/60 border-none font-bold text-xs p-1" type="text" value={person.name} onChange={(e) => updatePerson(person.id, 'name', e.target.value)} />
                        <input className="bg-white/60 border-none font-mono-data text-[10px] p-1" type="text" value={person.roll} onChange={(e) => updatePerson(person.id, 'roll', e.target.value)} />
                        <input className="bg-white/60 border-none font-mono-data text-[10px] p-1" type="text" value={`${person.height}cm`} onChange={(e) => updatePerson(person.id, 'height', parseInt(e.target.value) || 0)} />
                      </div>
                    </div>
                  ))}
                </div>

                <button onClick={() => setGenerationTrigger(prev => prev + 1)} className="w-full mt-6 bg-[#ba0029] text-white py-4 font-extrabold text-md tracking-widest uppercase transition-all shadow-[4px_4px_0px_0px_rgba(25,28,30,1)]">
                  GENERATE OPTIMIZED GRID
                </button>
              </section>
            </div>

            {/* Right Column: Interactive Grid */}
            <div className="lg:col-span-8 bg-white/80 backdrop-blur-md border border-[#e9bcba] p-8 shadow-sm min-h-[580px] flex flex-col items-center relative overflow-hidden">
              <div className="w-48 py-3 bg-[#FFD700] text-[#191c1e] border-2 border-[#191c1e] flex flex-col items-center justify-center mb-12">
                <span className="text-[12px] font-black tracking-wider font-mono-data">TEACHER'S PODIUM</span>
              </div>

              <div 
                className="w-full flex-1 grid gap-4 justify-center items-center"
                style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
              >
                {optimizedGridSlots.map((student, idx) => (
                  <div key={idx} className={`aspect-video border-2 flex flex-col items-center justify-center p-1 ${student ? (student.isPriority ? 'bg-[#ffdad6] border-[#ba0029] animate-pulse-red' : 'bg-[#eceef0] border-[#191c1e]') : 'bg-[#eceef0] border-[#191c1e] opacity-30 border-dashed'}`}>
                    {student && (
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold text-white ${student.isPriority ? 'bg-[#ba0029]' : 'bg-[#565e74]'}`}>
                        {getInitials(student.name)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}