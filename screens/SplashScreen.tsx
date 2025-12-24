
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-between bg-gradient-to-b from-navy-dark via-navy-medium to-navy-light overflow-hidden">
      <div className="flex-1"></div>
      
      <div className="flex flex-col items-center justify-center gap-8 z-10 animate-[fadeIn_1s_ease-out_forwards] w-full px-6">
        <div className="relative flex items-center justify-center p-7 rounded-full bg-white/5 ring-1 ring-white/10 shadow-2xl backdrop-blur-sm">
          <div className="absolute inset-0 rounded-full bg-gold-primary/10 animate-pulse"></div>
          <span className="material-symbols-outlined text-gold-primary text-8xl drop-shadow-lg">
            church
          </span>
        </div>
        
        <div className="text-center space-y-3">
          <h1 className="text-white text-5xl font-bold leading-tight drop-shadow-md">
            نظام الحضور
          </h1>
          <p className="font-sans text-gray-400 text-sm tracking-[0.25em] uppercase font-medium opacity-80">
            Church Management System
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-end flex-1 w-full pb-12 gap-6">
        <div className="w-9 h-9 border-4 border-white/10 border-t-gold-primary rounded-full animate-spin"></div>
        <p className="text-gray-500 text-xs font-medium tracking-widest uppercase">
          v1.0.0
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
