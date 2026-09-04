import React from 'react';
import logoImg from '../assets/logo.png';

export default function ThemeToggle({ darkMode, onToggleTheme }) {
  return (
    <label className="plane-switch select-none" title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
      <input 
        type="checkbox" 
        checked={darkMode} 
        onChange={(e) => onToggleTheme(e.target.checked)} 
      />
      <div>
        <span className="street-middle"></span>
        <span className="cloud"></span>
        <span className="cloud two"></span>
        <div>
          {/* Custom Eye Emblem Logo image instead of aeroplane icon */}
          <img 
            src={logoImg} 
            alt="sthack emblem" 
            className="w-[14px] h-[14px] object-contain transition-transform group-hover:scale-110" 
          />
        </div>
      </div>
    </label>
  );
}
