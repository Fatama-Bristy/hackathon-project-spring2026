import React, { useState } from 'react';
import LandingPage from './features/LandingPage';
import Login from './features/Login';
import MainDashboard from './features/MainDashboard'; 
import Sidebar from './components/Sidebar';
import AntiKuddusRegister from './features/SignUP';
import TacticalSeatingPlanner from './features/TacticalSeatingPlanner';
import AISyllabusEngine from './features/AISyllabusEngine';
import CorruptionLedger from './features/CorruptionLedger';
import Whistleblower from './features/WhistleblowerPortal';
import SosFlareScreen from './features/SosFlareScreen'; 
import SemanticFactChecker from './features/SemanticFactChecker'; 
import SystemSettings from './features/SystemSettings'; // ইমপোর্ট করা হলো

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

  // 'settings' এখানে যুক্ত করা হয়েছে
  const allMissions = ['dashboard', 'seating', 'ai-syllabus', 'whistleblower', 'economy-ledger', 'sos-flare', 'semantic-fact-checker', 'settings'];

  if (allMissions.includes(screen)) {
    return (
      <div className="flex min-h-screen bg-slate-950">
        <Sidebar 
          onLogout={() => setScreen('landing')} 
          onNavigate={(targetScreen) => setScreen(targetScreen)}
          currentScreen={screen}
        /> 
        
        <div className="flex-1 md:pl-64">
          {screen === 'dashboard' && <MainDashboard onLogout={() => setScreen('landing')} />}
          {screen === 'seating' && <TacticalSeatingPlanner />}
          {screen === 'ai-syllabus' && <AISyllabusEngine />}
          {screen === 'economy-ledger' && <CorruptionLedger />}
          {screen === 'whistleblower' && <Whistleblower />}
          {screen === 'sos-flare' && <SosFlareScreen />}
          {screen === 'semantic-fact-checker' && <SemanticFactChecker />}
          {screen === 'settings' && <SystemSettings />} 
        </div>
      </div>
    );
  }

  return null;
}

export default App;