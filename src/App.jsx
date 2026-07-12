import React, { useState } from 'react';
import LandingPage from './features/LandingPage';
import Login from './features/Login';
import MainDashboard from './features/MainDashboard'; 
import Sidebar from './components/Sidebar';
import AntiKuddusRegister from './features/SignUP';
import TacticalSeatingPlanner from './features/TacticalSeatingPlanner';
import AISyllabusEngine from './features/AISyllabusEngine';
import CorruptionLedger from './features/CorruptionLedger'; // আপনার CorruptionLedger ইমপোর্ট করলাম

function App() {
  const [screen, setScreen] = useState('landing'); 

  if (screen === 'landing') {
    return <LandingPage onLoginClick={() => setScreen('login')} />;
  }

  if (screen === 'login') {
    return (
      <Login 
        onBack={() => setScreen('landing')} 
        onLoginSuccess={() => setScreen('dashboard')} 
        onSignUpClick={() => setScreen('signup')} 
      />
    );
  }

  if (screen === 'signup') {
    return <AntiKuddusRegister onBack={() => setScreen('login')} />;
  }

  const allMissions = ['dashboard', 'seating', 'ai-syllabus', 'whistleblower', 'economy-ledger', 'sos-flare', 'architecture'];

  if (allMissions.includes(screen)) {
    return (
      <div className="flex min-h-screen bg-slate-950">
        <Sidebar 
          onLogout={() => setScreen('landing')} 
          onNavigate={(targetScreen) => setScreen(targetScreen)}
          currentScreen={screen}
        /> 
        
        <div className="flex-1 md:pl-64">
          {screen === 'dashboard' && (
            <MainDashboard onLogout={() => setScreen('landing')} />
          )}
          {screen === 'seating' && (
            <TacticalSeatingPlanner />
          )}
          {screen === 'ai-syllabus' && (
            <AISyllabusEngine />
          )}
          
          {/* এখানে economy-ledger এর জন্য CorruptionLedger যুক্ত করা হয়েছে */}
          {screen === 'economy-ledger' && (
            <CorruptionLedger />
          )}
          
          {['whistleblower', 'sos-flare', 'architecture'].includes(screen) && (
            <div className="flex flex-col items-center justify-center h-screen text-white">
              <h2 className="text-2xl font-bold mb-4">MISSION: {screen.toUpperCase()}</h2>
              <p className="mb-6">এই মিশনটি বর্তমানে ডেভেলপমেন্ট পর্যায়ে আছে।</p>
              <button 
                onClick={() => setScreen('dashboard')}
                className="bg-[#ba0029] px-6 py-2 rounded font-bold"
              >
                BACK TO DASHBOARD
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}

export default App;