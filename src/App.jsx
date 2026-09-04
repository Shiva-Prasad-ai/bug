import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PageCanvas from './components/PageCanvas';
import SkeletonLoader from './components/SkeletonLoader';
import LoginPageModal from './components/LoginPageModal';

const TABS = [
  { id: 'page1', name: 'Page1' },
  { id: 'page2', name: 'Page2' },
  { id: 'page3', name: 'Page3' },
  { id: 'page4', name: 'Page4' },
  { id: 'page5', name: 'Page5' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('page1');
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup'

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectTab = (tabId) => {
    if (tabId === activeTab) return;
    setIsLoading(true);
    setActiveTab(tabId);
    setTimeout(() => {
      setIsLoading(false);
    }, 350);
  };

  const handleOpenLogin = () => {
    setAuthMode('login');
    setIsAuthOpen(true);
  };

  const handleOpenSignUp = () => {
    setAuthMode('signup');
    setIsAuthOpen(true);
  };

  const currentTab = TABS.find((t) => t.id === activeTab) || TABS[0];

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 selection:bg-indigo-600 selection:text-white ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
    }`}>
      <Navbar
        tabs={TABS}
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        darkMode={darkMode}
        onToggleTheme={setDarkMode}
        onOpenLogin={handleOpenLogin}
        onOpenSignUp={handleOpenSignUp}
      />

      <main className="flex-1 flex flex-col">
        {isLoading ? (
          <SkeletonLoader pageName={currentTab.name} darkMode={darkMode} />
        ) : (
          <PageCanvas activeTab={activeTab} tabs={TABS} darkMode={darkMode} />
        )}
      </main>

      {/* Glassmorphic Sky & Cloud Auth Modal (Login / Sign Up) */}
      <LoginPageModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        darkMode={darkMode}
        initialMode={authMode}
      />
    </div>
  );
}
