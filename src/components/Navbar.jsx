import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

function LoginButton({ darkMode, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsLocked(false);
    setTimeout(() => {
      setIsLocked(true);
    }, 180);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsLocked(false);
  };

  return (
    <button 
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`font-semibold text-[15px] px-5 py-2 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-2 group select-none ${
        darkMode 
          ? 'text-indigo-400 hover:text-indigo-300 hover:bg-slate-900' 
          : 'text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50/70'
      }`}
    >
      <span>Login</span>

      {/* Animated Lock Icon on RIGHT side of Login text */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-out flex items-center justify-center ${
          isHovered ? 'w-4 opacity-100 scale-100 ml-0.5' : 'w-0 opacity-0 scale-75 ml-0'
        }`}
      >
        <svg 
          className={`w-4 h-4 shrink-0 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {/* Shackle: animates down into locked position */}
          <path 
            d="M7 11V7a5 5 0 0 1 10 0v4" 
            className={`transition-all duration-500 ease-in-out origin-bottom ${
              isLocked 
                ? darkMode ? 'translate-y-0 rotate-0 stroke-indigo-400' : 'translate-y-0 rotate-0 stroke-indigo-600'
                : darkMode ? '-translate-y-2 -rotate-15 stroke-indigo-300' : '-translate-y-2 -rotate-15 stroke-indigo-400'
            }`}
          />
          {/* Lock Body */}
          <rect x="5" y="11" width="14" height="10" rx="2" className={darkMode ? "fill-slate-800 stroke-indigo-400" : "fill-indigo-100/70 stroke-indigo-600"} />
          {/* Keyhole Dot */}
          <circle cx="12" cy="16" r="1" className={darkMode ? "fill-indigo-400 stroke-none" : "fill-indigo-600 stroke-none"} />
        </svg>
      </div>
    </button>
  );
}

function SignUpButton({ darkMode, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`font-semibold text-sm px-4.5 py-2 rounded-full transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md active:scale-95 select-none flex items-center gap-2 group ${
        darkMode
          ? 'bg-indigo-500 hover:bg-indigo-400 text-white'
          : 'bg-indigo-600 hover:bg-indigo-700 text-white'
      }`}
    >
      <span>Sign Up</span>

      {/* Animated Tiny Form Clipboard Icon SVG inside button */}
      <div className={`overflow-hidden transition-all duration-300 ease-out flex items-center justify-center ${
        isHovered ? 'w-4 opacity-100 scale-100 ml-0.5' : 'w-0 opacity-0 scale-75 ml-0'
      }`}>
        <svg className="w-4 h-4 text-white animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="M9 12h6" className="transition-all duration-300 delay-75 group-hover:translate-x-1" />
          <path d="M9 16h4" className="transition-all duration-300 delay-150 group-hover:translate-x-1" />
        </svg>
      </div>
    </button>
  );
}

export default function Navbar({ tabs, activeTab, onSelectTab, darkMode, onToggleTheme, onOpenLogin, onOpenSignUp }) {
  return (
    <header className={`w-full sticky top-0 z-50 transition-colors duration-300 ${
      darkMode 
        ? 'bg-slate-950/90 border-b border-slate-800 shadow-lg backdrop-blur-md' 
        : 'bg-white border-b border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)]'
    }`}>
      <div className="w-full px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
        
        {/* Left: Dynamic Brand Logo with Round Eye Symbol */}
        <div 
          onClick={() => onSelectTab(tabs[0]?.id || 'page1')} 
          className="flex items-center gap-3 cursor-pointer select-none group shrink-0"
        >
          <div className={`relative flex items-center justify-center w-10 h-10 rounded-full overflow-hidden transition-all p-1 shadow-sm ${
            darkMode ? 'bg-slate-900 border border-slate-800 group-hover:border-indigo-500/50' : 'bg-slate-50 border border-slate-200/80 group-hover:border-indigo-200'
          }`}>
            <img 
              src="/logo.png" 
              alt="sthack logo" 
              className="w-full h-full object-cover rounded-full filter group-hover:scale-105 transition-transform" 
            />
          </div>
          <span className={`text-2xl font-extrabold tracking-tight font-sans flex items-center leading-none ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            sthack<span className="text-indigo-500 font-black">.</span>
          </span>
        </div>

        {/* Center: Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-12 lg:gap-16 xl:gap-20">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`relative py-2 text-[15px] font-medium transition-colors cursor-pointer ${
                  isActive
                    ? darkMode ? 'text-indigo-400 font-semibold' : 'text-indigo-600 font-semibold'
                    : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-700 hover:text-indigo-600'
                }`}
              >
                {tab.name}
                {isActive && (
                  <span className={`absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full animate-fade-in ${
                    darkMode ? 'bg-indigo-400' : 'bg-indigo-600'
                  }`} />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Theme Toggle, Login Button & Sign Up Button */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <ThemeToggle darkMode={darkMode} onToggleTheme={onToggleTheme} />
          <LoginButton darkMode={darkMode} onClick={onOpenLogin} />
          <SignUpButton darkMode={darkMode} onClick={onOpenSignUp} />
        </div>

      </div>

      {/* Mobile nav row */}
      <div className={`md:hidden flex items-center gap-6 px-6 py-3 border-t overflow-x-auto no-scrollbar ${
        darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-gray-50/50 border-gray-100'
      }`}>
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`px-4 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : darkMode ? 'bg-slate-900 text-slate-300 border border-slate-800' : 'bg-white text-slate-700 border border-gray-200'
              }`}
            >
              {tab.name}
            </button>
          );
        })}
      </div>
    </header>
  );
}

