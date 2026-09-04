import React from 'react';
import WifiLoader from './WifiLoader';

export default function SkeletonLoader({ pageName, darkMode }) {
  return (
    <div className={`flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] py-16 px-6 transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
    }`}>
      
      {/* Central Uiverse Wifi Loader Effect */}
      <div className="mb-14 flex flex-col items-center">
        <WifiLoader text={pageName ? `loading ${pageName}...` : "sthack..."} darkMode={darkMode} />
      </div>

      {/* Shimmer Skeleton Content Placeholder */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center animate-pulse opacity-50">
        <div className={`h-8 rounded-lg w-64 mb-4 ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
        <div className={`h-4 rounded w-96 max-w-full mb-8 ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className={`p-6 rounded-2xl border flex flex-col gap-4 ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className={`w-10 h-10 rounded-xl ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
              <div className={`h-4 rounded w-2/3 ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
              <div className={`h-3 rounded w-full ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

