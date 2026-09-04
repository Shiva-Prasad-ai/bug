import React from 'react';
import HeroSection from './HeroSection';
import Threads from './Threads/Threads';
import Ferrofluid from './Ferrofluid/Ferrofluid';
import WebThreads from './WebThreads/WebThreads';

export default function PageCanvas({ activeTab, tabs, darkMode }) {
  const currentTab = tabs.find(t => t.id === activeTab) || { id: activeTab, name: activeTab };

  return (
    <div className={`flex-1 flex flex-col transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
    }`}>
      
      {/* Hero Section */}
      <HeroSection pageName={currentTab.name} darkMode={darkMode} />

      {/* Page4 Interactive WebThreads Background Container */}
      {activeTab === 'page4' && (
        <div className="w-full relative py-12 px-4 sm:px-6 flex flex-col items-center">
          <div className={`w-full max-w-5xl h-[550px] relative rounded-3xl overflow-hidden border shadow-2xl transition-all ${
            darkMode ? 'bg-slate-950/90 border-slate-800' : 'bg-slate-900 border-slate-800 text-white'
          }`}>
            <WebThreads
              color1="#5227FF"
              color2="#FF9FFC"
              color3="#FFFFFF"
              speed={0.2}
              threadCount={6}
              frequency={5.0}
              spread={0.18}
              taper={1.0}
              position={0.5}
              fanMode="center"
              glow={0.02}
              falloff={0.6}
              thickness={1.1}
              brightness={0.6}
              opacity={1.0}
              mirror={true}
              shimmer={false}
              grain={true}
              grainIntensity={0.05}
              mouseInteraction={true}
              mouseStrength={0.3}
            />

            {/* Overlay Title */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none select-none">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-4 backdrop-blur-md">
                OGL WebThreads WebGL &bull; Page4
              </span>
              <h3 className="text-3xl sm:text-5xl font-black tracking-tight mb-3 font-sans text-white">
                Woven Filament Dynamics
              </h3>
              <p className="text-sm sm:text-base max-w-md text-slate-300">
                Move your cursor across the woven thread strands to dynamically shift the fan-out pinch point and glow bloom.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Page3 Interactive Ferrofluid Background & 3 Feature Cards */}
      {activeTab === 'page3' && (
        <div className="w-full relative py-12 px-4 sm:px-6 flex flex-col items-center gap-12">
          
          {/* Ferrofluid Canvas Container */}
          <div className={`w-full max-w-5xl h-[550px] relative rounded-3xl overflow-hidden border shadow-2xl transition-all ${
            darkMode ? 'bg-slate-950/90 border-slate-800' : 'bg-slate-900 border-slate-800 text-white'
          }`}>
            <Ferrofluid 
              colors={["#ffffff", "#ffffff", "#ffffff"]}
              speed={0.5}
              scale={1}
              turbulence={1}
              fluidity={0.1}
              rimWidth={0.2}
              sharpness={3}
              shimmer={1}
              glow={2}
              flowDirection="down"
              opacity={1}
              mouseInteraction={true}
              mouseStrength={1}
              mouseRadius={0.3}
            />

            {/* Overlay Title */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none select-none">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-sky-500/20 text-sky-400 border border-sky-500/30 mb-4 backdrop-blur-md">
                OGL Ferrofluid WebGL &bull; Page3
              </span>
              <h3 className="text-3xl sm:text-5xl font-black tracking-tight mb-3 font-sans text-white">
                Magnetic Ferrofluid Dynamics
              </h3>
              <p className="text-sm sm:text-base max-w-md text-slate-300">
                Move your cursor across the liquid surface to generate magnetic field spikes and glowing surface ripples.
              </p>
            </div>
          </div>

          {/* Three Feature Cards Grid for Page3 */}
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 - Featuring requested Stepped White Stacked Shadow Button Effect */}
            <div className={`rounded-3xl p-7 border shadow-xl flex flex-col justify-between transition-all hover:-translate-y-1 ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200/90'
            }`}>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 stroke-sky-400" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h4 className={`text-xl font-bold mb-2 font-sans ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Fluid Core Dynamics
                </h4>
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Simulate high-density magnetic fluid turbulence and domain distortion with sub-pixel WebGL accuracy.
                </p>
              </div>

              {/* First Card Button - Custom Stepped Stacked Shadow Effect */}
              <button 
                type="button"
                className="btn-stacked-shadow w-full py-3.5 text-sm font-bold tracking-wide flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Initialize Fluid</span>
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </button>
            </div>

            {/* Card 2 - Featuring requested Courier Monospace Letter Tracking Squeeze Button Effect */}
            <div className={`rounded-3xl p-7 border shadow-xl flex flex-col justify-between transition-all hover:-translate-y-1 ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200/90'
            }`}>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 stroke-emerald-400" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h4 className={`text-xl font-bold mb-2 font-sans ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Magnetic Field Spikes
                </h4>
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Trigger real-time spike forces and dampening dynamics under active cursor interaction vectors.
                </p>
              </div>

              {/* Second Card Button - Custom Letter Tracking Squeeze Effect */}
              <button 
                type="button"
                className="btn-letter-squeeze w-full py-3 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Engage Field</span>
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </button>
            </div>

            {/* Card 3 */}
            <div className={`rounded-3xl p-7 border shadow-xl flex flex-col justify-between transition-all hover:-translate-y-1 ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200/90'
            }`}>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 stroke-indigo-400" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                </div>
                <h4 className={`text-xl font-bold mb-2 font-sans ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Domain Shimmer Mesh
                </h4>
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Modulate rim contour sharpness, fluidity blending, and grainy shimmer break-up parameters.
                </p>
              </div>

              {/* Third Card Button - Custom Sky Blue Soft Glow Aura Effect */}
              <button 
                type="button"
                className="btn-sky-glow w-full py-3 text-sm font-bold tracking-wide flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Explore Shimmer</span>
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </button>
            </div>

          </div>

        </div>
      )}

      {/* Page2 Interactive Threads & 3 Feature Cards */}
      {activeTab === 'page2' && (
        <div className="w-full relative py-12 px-4 sm:px-6 flex flex-col items-center gap-12">
          
          {/* OGL Threads WebGL Container */}
          <div className={`w-full max-w-5xl h-[450px] relative rounded-3xl overflow-hidden border shadow-2xl transition-all ${
            darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <Threads 
              color={darkMode ? [0.75, 0.52, 0.99] : [0.31, 0.27, 0.95]}
              amplitude={1.2}
              distance={0}
              enableMouseInteraction={true}
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none select-none">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 mb-4 backdrop-blur-md">
                Interactive OGL Threads &bull; Page2
              </span>
              <h3 className={`text-3xl sm:text-5xl font-black tracking-tight mb-3 font-sans ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Perlin Noise Threads
              </h3>
              <p className={`text-sm sm:text-base max-w-md ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Move your cursor across the canvas to interactively modulate line amplitude and wave motion.
              </p>
            </div>
          </div>

          {/* Three Feature Cards Grid for Page2 */}
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 - Featuring requested Teal Pulse Button Effect */}
            <div className={`rounded-3xl p-7 border shadow-xl flex flex-col justify-between transition-all hover:-translate-y-1 ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200/90'
            }`}>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#64ffda]/15 border border-[#64ffda]/40 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 stroke-[#64ffda]" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <h4 className={`text-xl font-bold mb-2 font-sans ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Real-time Telemetry
                </h4>
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Monitor high-frequency shader pipelines and live WebGPU wave data with sub-millisecond precision.
                </p>
              </div>

              {/* First Card Button - Custom Teal Pulse Effect */}
              <button 
                type="button"
                className="btn-pulse-teal w-full py-3 text-sm font-bold tracking-wide flex items-center justify-center gap-2 group"
              >
                <span>Launch Telemetry</span>
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </button>
            </div>

            {/* Card 2 */}
            <div className={`rounded-3xl p-7 border shadow-xl flex flex-col justify-between transition-all hover:-translate-y-1 ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200/90'
            }`}>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 stroke-indigo-400" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <rect x="9" y="9" width="6" height="6" />
                    <line x1="9" y1="1" x2="9" y2="4" />
                    <line x1="15" y1="1" x2="15" y2="4" />
                    <line x1="9" y1="20" x2="9" y2="23" />
                    <line x1="15" y1="20" x2="15" y2="23" />
                    <line x1="20" y1="9" x2="23" y2="9" />
                    <line x1="20" y1="15" x2="23" y2="15" />
                    <line x1="1" y1="9" x2="4" y2="9" />
                    <line x1="1" y1="15" x2="4" y2="15" />
                  </svg>
                </div>
                <h4 className={`text-xl font-bold mb-2 font-sans ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Automated Threat AI
                </h4>
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Detect anomaly vector spikes across distributed nodes with intelligent machine-learning filters.
                </p>
              </div>

              {/* Second Card Button - Custom #00FF00 Matrix Scan Line Effect */}
              <button 
                type="button"
                className="btn-scan-matrix w-full py-3 text-sm font-bold tracking-wider flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Analyze Threats</span>
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </button>
            </div>

            {/* Card 3 */}
            <div className={`rounded-3xl p-7 border shadow-xl flex flex-col justify-between transition-all hover:-translate-y-1 ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200/90'
            }`}>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 stroke-emerald-400" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <h4 className={`text-xl font-bold mb-2 font-sans ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Neural Shards Mesh
                </h4>
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Synthesize dynamic per-particle wave vector fields using high-performance GPU shaders.
                </p>
              </div>

              {/* Third Card Button - Custom Conic Spotlight Effect */}
              <button 
                type="button"
                className="btn-conic-spotlight w-full py-3 text-sm font-bold tracking-wide flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Explore Mesh</span>
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </button>
            </div>

          </div>

        </div>
      )}

      {/* Main Blank Page Canvas Area Below Hero */}
      <div className="flex-1 max-w-5xl w-full mx-auto px-6 py-16 flex flex-col items-center justify-center text-center">
        
        {/* Emblem Holder */}
        <div className={`w-20 h-20 rounded-full overflow-hidden flex items-center justify-center p-2 mb-6 shadow-sm ${
          darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-slate-50 border border-slate-200/80'
        }`}>
          <img src="/logo.png" alt="sthack logo" className="w-full h-full object-cover rounded-full" />
        </div>

        {/* Heading */}
        <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight mb-3 font-sans ${
          darkMode ? 'text-white' : 'text-slate-900'
        }`}>
          {currentTab.name} Page Content
        </h2>

        {/* Subtitle */}
        <p className={`text-base max-w-md mb-8 leading-relaxed ${
          darkMode ? 'text-slate-400' : 'text-slate-500'
        }`}>
          This area is ready for custom components, widgets, or layouts for <strong className={darkMode ? 'text-slate-200' : 'text-slate-700'}>{currentTab.name}</strong>.
        </p>

        {/* Status Badge */}
        <div className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono shadow-sm ${
          darkMode ? 'bg-slate-900 border border-slate-800 text-slate-400' : 'bg-slate-50 border border-slate-200 text-slate-600'
        }`}>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>{currentTab.name} Canvas Active &bull; Ready for next prompt</span>
        </div>

      </div>

    </div>
  );
}

