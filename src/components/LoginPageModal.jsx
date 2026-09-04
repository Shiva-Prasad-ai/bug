import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, X, Check, User, Mail, Lock, ArrowRight } from 'lucide-react';

export default function LoginPageModal({ isOpen, onClose, darkMode, initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode); // 'login' | 'signup'
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1000);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
      
      {/* Photo-realistic Sky & Cloud Background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center transition-all duration-700 select-none pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=2400&auto=format&fit=crop')`,
          backgroundPosition: 'center 40%'
        }}
      >
        {/* Sky Soft Lighting Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400/20 via-transparent to-white/40 mix-blend-overlay" />

        {/* Concentric Thin White Orbital Signal Arcs */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none">
          <circle cx="50%" cy="50%" r="220" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="50%" cy="50%" r="380" stroke="white" strokeWidth="1.2" strokeOpacity="0.45" />
          <circle cx="50%" cy="50%" r="560" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
          <circle cx="50%" cy="50%" r="760" stroke="white" strokeWidth="1.5" strokeOpacity="0.45" />
          <circle cx="50%" cy="50%" r="980" stroke="white" strokeWidth="1.2" strokeOpacity="0.4" />
          <circle cx="50%" cy="50%" r="1220" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
        </svg>

        {/* Delicate Glass Backdrop Blur */}
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </div>

      {/* Close button at top right */}
      <button 
        onClick={onClose}
        className="fixed top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/40 hover:bg-white/70 backdrop-blur-md border border-white/80 text-slate-800 flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
        title="Close modal"
      >
        <X className="w-5 h-5 stroke-[2.5]" />
      </button>

      {/* Main Glassmorphic Modal Card */}
      <div className="relative z-10 w-full max-w-[420px] my-auto rounded-[32px] bg-white/40 backdrop-blur-2xl border-[3px] border-white p-7 sm:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] flex flex-col items-center text-slate-900 transition-all">
        
        {/* Circular Avatar Emblem Badge at Top with Perfectly Round Logo */}
        <div className="w-14 h-14 rounded-full bg-[#F4EFE9] border border-white/80 shadow-xs flex items-center justify-center mb-4 overflow-hidden shrink-0">
          <img 
            src="/logo.png" 
            alt="sthack logo" 
            className="w-9 h-9 object-cover rounded-full" 
          />
        </div>

        {/* Dynamic Animated Content Container */}
        <div key={mode} className="w-full flex flex-col items-center animate-slide-up-form">

          {/* Title */}
          <h2 className="text-2xl font-bold tracking-tight text-[#1F2024] mb-1 text-center font-sans">
            {mode === 'signup' ? 'Create an Account' : 'Welcome back'}
          </h2>
          
          {/* Subtitle */}
          <p className="text-sm font-normal text-[#717680] mb-5 text-center">
            {mode === 'signup' ? 'Join sthack in less than a minute.' : 'Please enter your detail to sign in.'}
          </p>

          {/* Social Auth Buttons */}
          <div className="grid grid-cols-3 gap-3 w-full mb-4">
            
            {/* Apple */}
            <button 
              type="button" 
              className="h-10.5 rounded-[14px] bg-white/40 hover:bg-white/70 border border-white/80 shadow-2xs flex items-center justify-center transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              title="Sign in with Apple"
            >
              <svg className="w-4.5 h-4.5 fill-black" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.13-1.9-14.36-6.1-3.3-2.73-7.23-7.46-11.79-14.19-7.39-10.87-13.06-22.95-17.02-36.24-3.96-13.29-5.94-25.5-5.94-36.63 0-14.2 3.42-26.04 10.26-35.52 6.84-9.48 15.42-14.32 25.75-14.52 4.96 0 10.4 1.25 16.32 3.75 5.92 2.5 9.94 3.75 12.06 3.75 1.76 0 5.86-1.28 12.31-3.84 6.45-2.56 11.83-3.74 16.14-3.54 11.39.52 20.89 4.71 28.5 12.57-10.15 6.13-15.11 14.86-14.88 26.19.23 8.78 3.59 16.27 10.08 22.47 6.49 6.2 14.28 9.77 23.37 10.71-2.36 6.94-5.59 14.07-9.69 21.39zm-27.79-102.3c0 7.37-2.67 14.29-8.01 20.76-5.34 6.47-11.96 10.36-19.86 11.67-.32-1.07-.48-2.14-.48-3.21 0-7.26 2.76-14.27 8.28-21.03 5.52-6.76 12.18-10.7 19.98-11.82.09 1.18.13 2.4.13 3.63z"/>
              </svg>
            </button>

            {/* Google */}
            <button 
              type="button" 
              className="h-10.5 rounded-[14px] bg-white/40 hover:bg-white/70 border border-white/80 shadow-2xs flex items-center justify-center transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              title="Sign in with Google"
            >
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </button>

            {/* LinkedIn */}
            <button 
              type="button" 
              className="h-10.5 rounded-[14px] bg-white/40 hover:bg-white/70 border border-white/80 shadow-2xs flex items-center justify-center transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              title="Sign in with LinkedIn"
            >
              <svg className="w-4.5 h-4.5 fill-[#0A66C2]" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
              </svg>
            </button>

          </div>

          {/* OR Divider */}
          <div className="flex items-center gap-3 w-full mb-4">
            <div className="h-[1px] flex-1 bg-slate-300/70" />
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">OR</span>
            <div className="h-[1px] flex-1 bg-slate-300/70" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-3.5">
            
            {/* Full Name (Sign Up mode only) */}
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-semibold text-[#1F2024] mb-1 ml-0.5">
                  Full Name
                </label>
                <input 
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name..."
                  className="w-full h-10 px-3.5 rounded-[12px] bg-white/40 border border-slate-300/80 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-slate-400/40 focus:border-slate-400 focus:bg-white/70 transition-all font-normal shadow-2xs"
                />
              </div>
            )}

            {/* E-Mail Field */}
            <div>
              <label className="block text-xs font-semibold text-[#1F2024] mb-1 ml-0.5">
                E-Mail Address
              </label>
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                className="w-full h-10 px-3.5 rounded-[12px] bg-white/40 border border-slate-300/80 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-slate-400/40 focus:border-slate-400 focus:bg-white/70 transition-all font-normal shadow-2xs"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-semibold text-[#1F2024] mb-1 ml-0.5">
                Password
              </label>
              <div className="relative flex items-center">
                <input 
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === 'signup' ? "Create a strong password..." : "Password@123"}
                  className="w-full h-10 pl-3.5 pr-10 rounded-[12px] bg-white/40 border border-slate-300/80 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-slate-400/40 focus:border-slate-400 focus:bg-white/70 transition-all font-normal shadow-2xs"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-[#537B9C] hover:text-slate-900 focus:outline-none cursor-pointer p-1 transition-colors"
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me & Forgot password (Login mode only) */}
            {mode === 'login' && (
              <div className="flex items-center justify-between pt-0.5 pb-0.5">
                <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer select-none">
                  <input 
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-3.5 h-3.5 rounded-[4px] border-slate-400/80 text-slate-900 focus:ring-0 cursor-pointer accent-slate-900"
                  />
                  <span>Remember me</span>
                </label>
                <a 
                  href="#forgot" 
                  onClick={(e) => e.preventDefault()}
                  className="text-xs font-medium text-[#717680] hover:text-slate-900 underline transition-colors"
                >
                  Forgot password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className="w-full h-10.5 sm:h-11 rounded-[14px] bg-[#1E1E1E] hover:bg-black text-white font-medium text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2 mt-2"
            >
              {isSuccess ? (
                <>
                  <Check className="w-4.5 h-4.5 text-emerald-400" />
                  <span>{mode === 'signup' ? 'Account Created!' : 'Signed In!'}</span>
                </>
              ) : isSubmitting ? (
                <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <span>{mode === 'signup' ? 'Create Account' : 'Sign in'}</span>
              )}
            </button>

          </form>

          {/* Mode Switcher Footer */}
          <p className="mt-4 text-xs text-[#717680] font-normal text-center">
            {mode === 'signup' ? (
              <>
                Already have an account?{' '}
                <button 
                  type="button"
                  onClick={() => setMode('login')}
                  className="font-semibold text-[#1F2024] hover:underline cursor-pointer ml-0.5 border-none bg-transparent"
                >
                  Sign in
                </button>
              </>
            ) : (
              <>
                Don’t have an account yet?{' '}
                <button 
                  type="button"
                  onClick={() => setMode('signup')}
                  className="font-semibold text-[#1F2024] hover:underline cursor-pointer ml-0.5 border-none bg-transparent"
                >
                  Sign up
                </button>
              </>
            )}
          </p>

        </div>

      </div>

    </div>
  );
}


