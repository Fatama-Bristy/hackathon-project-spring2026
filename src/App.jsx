import React, { useState } from 'react';
import LandingPage from './features/LandingPage';
import Login from './features/Login';
import MainDashboard from './features/MainDashboard'; 
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import AntiKuddusRegister from './features/SignUP';
import TacticalSeatingPlanner from './features/TacticalSeatingPlanner';
import AISyllabusEngine from './features/AISyllabusEngine';
import CorruptionLedger from './features/CorruptionLedger';
import Whistleblower from './features/WhistleblowerPortal';
import SosFlareScreen from './features/SosFlareScreen'; 
import SemanticFactChecker from './features/SemanticFactChecker';
import SystemSettings from './features/SystemSettings';
// নতুন ইমপোর্ট এখানে যুক্ত করা হয়েছে:
import LAlphaOperatorDashboard from './features/LAlphaOperatorDashboard';

function App() {
  const [screen, setScreen] = useState('landing'); 
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  // Auth Screens
  if (['landing', 'login', 'signup'].includes(screen)) {
    return (
      <div className={darkMode ? 'dark bg-slate-950 min-h-screen' : 'bg-white min-h-screen'}>
        {screen === 'landing' && <LandingPage onLoginClick={() => setScreen('login')} onSignUpClick={() => setScreen('signup')} />}
        {screen === 'login' && <Login onBack={() => setScreen('landing')} onLoginSuccess={() => setScreen('dashboard')} onSignUpClick={() => setScreen('signup')} />}
        {screen === 'signup' && <AntiKuddusRegister onBack={() => setScreen('login')} />}
      </div>
    );
  }

  // Main App Screens
  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar 
        activeTab={screen} 
        setActiveTab={setScreen} 
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
      />
      
      <div className="flex">
        <Sidebar 
          onLogout={() => setScreen('landing')} 
          onNavigate={(targetScreen) => setScreen(targetScreen)}
          currentScreen={screen}
        /> 
        
        <div className="flex-1 md:pl-64 p-8">
          {screen === 'dashboard' && <MainDashboard onLogout={() => setScreen('landing')} />}
          {screen === 'seating' && <TacticalSeatingPlanner />}
          {screen === 'ai-syllabus' && <AISyllabusEngine />}
          {screen === 'economy-ledger' && <CorruptionLedger />}
          {screen === 'whistleblower' && <Whistleblower />}
          {screen === 'sos-flare' && <SosFlareScreen />}
          {screen === 'semantic-fact-checker' && <SemanticFactChecker />}
          {screen === 'settings' && <SystemSettings />}
          {/* নতুন স্ক্রিনটি এখানে যুক্ত করা হয়েছে: */}
          {screen === 'crime-economy' && <LAlphaOperatorDashboard />}
        </div>
      </div>
    </div>
  );
}

export default App;