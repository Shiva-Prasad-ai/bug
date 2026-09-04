import React, { useState } from 'react';
import { Terminal, CheckCircle2 } from 'lucide-react';
import AeroShards from './AeroShards/AeroShards';
import SpecularButton from './SpecularButton/SpecularButton';
import Threads from './Threads/Threads';
import Ferrofluid from './Ferrofluid/Ferrofluid';
import WebThreads from './WebThreads/WebThreads';
import logoImg from '../assets/logo.png';

export default function HeroSection({ pageName, darkMode }) {
  const [gpuFailed, setGpuFailed] = useState(false);

  return (
    <div className={`w-full relative overflow-hidden py-16 md:py-24 border-b min-h-[540px] flex items-center transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-slate-100 border-slate-800/80' : 'bg-white text-slate-900 border-gray-100'
    }`}>
      
      {/* Background Layer: Threads (Page2), Ferrofluid (Page3), WebThreads (Page4), AeroShards (others) */}
      <div className="absolute inset-0 top-0 pointer-events-none z-0 overflow-hidden">
        {pageName === 'Page2' ? (
          <div className="w-full h-full relative">
            <Threads
              color={darkMode ? [0.75, 0.52, 0.99] : [0.31, 0.27, 0.95]}
              amplitude={1.5}
              distance={0}
              enableMouseInteraction={true}
            />
          </div>
        ) : pageName === 'Page3' ? (
          <div className="w-full h-full relative opacity-95">
            <Ferrofluid
              colors={["#ffffff", "#ffffff", "#ffffff"]}
              speed={0.5}
              scale={1.4}
              turbulence={1}
              fluidity={0.1}
              rimWidth={0.25}
              sharpness={3}
              shimmer={1}
              glow={2.5}
              flowDirection="down"
              opacity={1}
              mouseInteraction={true}
              mouseStrength={1}
              mouseRadius={0.35}
            />
          </div>
        ) : pageName === 'Page4' ? (
          <div className="w-full h-full relative">
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
              lightMode={!darkMode}
              backgroundColor={darkMode ? "#0b0f17" : "#ffffff"}
            />
          </div>
        ) : !gpuFailed ? (
          <AeroShards
            backgroundColor={darkMode ? "#0b0f17" : "#ffffff"}
            shardColor={darkMode ? "#a855f7" : "#4f46e5"}
            accentColor={darkMode ? "#c084fc" : "#818cf8"}
            placement="full"
            flow="stream"
            material="pearl"
            detail="balanced"
            speed={0.9}
            scale={1.1}
            density={1.3}
            glow={darkMode ? 0.9 : 0.7}
            bloom={darkMode ? 0.6 : 0.4}
            holdToGather={false}
            onError={() => setGpuFailed(true)}
          />
        ) : (
          <div className="w-full h-full flex justify-between items-center opacity-15 px-12 pointer-events-none">
            <div 
              className={`w-80 h-80 bg-contain bg-center bg-no-repeat scale-125 ${darkMode ? 'filter invert' : ''}`}
              style={{ backgroundImage: `url(${logoImg})` }}
            />
            <div 
              className={`w-80 h-80 bg-contain bg-center bg-no-repeat scale-125 ${darkMode ? 'filter invert' : ''}`}
              style={{ backgroundImage: `url(${logoImg})` }}
            />
          </div>
        )}

        {/* Center Mask gradient ensuring the center hero content stays clean, plain, and perfectly readable */}
        <div className={`absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-3xl blur-md pointer-events-none transition-colors duration-300 ${
          darkMode ? 'bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-950/90' : 'bg-gradient-to-r from-white/90 via-white/80 to-white/90'
        }`} />
      </div>

      {/* Main Single Unified Center Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Headline */}
        <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-6 font-sans ${
          darkMode ? 'text-white' : 'text-slate-900'
        }`}>
          Next-Gen Cyber Intelligence for <span className={darkMode ? 'text-indigo-400 underline decoration-indigo-500/40 underline-offset-8' : 'text-indigo-600 underline decoration-indigo-200 underline-offset-8'}>sthack</span>
        </h1>

        {/* Lead Subtext */}
        <p className={`text-base sm:text-xl max-w-2xl mb-10 leading-relaxed font-normal ${
          darkMode ? 'text-slate-300' : 'text-slate-600'
        }`}>
          Empower modern security workflows with real-time WebGPU telemetry, automated threat detection, and seamless tabbed canvas architecture.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-12">
          
          {/* Uiverse.io Button - Inverted high-contrast theme styling */}
          <button
            type="button"
            className={`relative z-10 inline-flex items-center justify-center gap-3 px-7 py-3.5 text-lg font-semibold border-2 rounded-full shadow-xl overflow-hidden group cursor-pointer transition-all duration-500 hover:text-white hover:border-emerald-500 ${
              darkMode ? 'bg-white text-slate-900 border-white' : 'bg-gray-50 text-slate-900 border-slate-200'
            }`}
          >
            {/* Emerald Fill Layer */}
            <span className="absolute inset-0 w-full h-full bg-emerald-500 rounded-full -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0 pointer-events-none" />

            <span className="relative z-10 font-bold">Explore {pageName}</span>

            <svg
              className={`relative z-10 w-8 h-8 group-hover:rotate-90 group-hover:bg-white ease-linear duration-300 rounded-full border group-hover:border-none p-1.5 rotate-45 shrink-0 shadow-xs ${
                darkMode ? 'bg-slate-900 text-white border-slate-700' : 'bg-gray-50 text-slate-800 border-slate-300'
              }`}
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className={darkMode ? 'fill-white group-hover:fill-emerald-600 transition-colors' : 'fill-slate-800 group-hover:fill-emerald-600 transition-colors'}
              ></path>
            </svg>
          </button>

          {/* Secondary CTA - SpecularButton Component with OGL Specular Rim Effect */}
          <SpecularButton
            size="lg"
            radius={9999}
            tint={darkMode ? "#0f172a" : "#ffffff"}
            tintOpacity={darkMode ? 0.75 : 0.9}
            textColor={darkMode ? "#ffffff" : "#0f172a"}
            lineColor={darkMode ? "#c084fc" : "#4f46e5"}
            baseColor={darkMode ? "#334155" : "#cbd5e1"}
            intensity={1.2}
            shineSize={14}
            shineFade={35}
            thickness={1.5}
            speed={0.35}
            followMouse={true}
            proximity={250}
          >
            <Terminal className={`w-4.5 h-4.5 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
            <span>View Docs</span>
          </SpecularButton>

        </div>

        {/* Feature Pills */}
        <div className={`flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium ${
          darkMode ? 'text-slate-300' : 'text-slate-500'
        }`}>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500" />
            <span>Zero Latency Setup</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500" />
            <span>AeroShards WebGPU Shards</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500" />
            <span>Live Telemetry</span>
          </div>
        </div>

      </div>

    </div>
  );
}
