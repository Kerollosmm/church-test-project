
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScannerScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-navy-950 min-h-screen text-white overflow-hidden relative dir-rtl font-sans">
      {/* Background Cam Sim */}
      <div className="absolute inset-0 z-0 bg-black">
        <img 
          src="https://picsum.photos/800/1200?random=100" 
          className="w-full h-full object-cover opacity-60" 
          alt="Scanner Background" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-transparent to-navy-950/90"></div>
      </div>

      <div className="relative z-10 flex flex-col h-screen justify-between">
        {/* Top Controls */}
        <div className="flex items-start justify-between p-6 pt-12">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center justify-center size-10 rounded-full bg-navy-900/40 backdrop-blur-md border border-white/10 hover:bg-navy-800 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <button className="flex items-center justify-center size-10 rounded-full bg-navy-900/40 backdrop-blur-md border border-white/10 hover:bg-navy-800 transition-colors">
            <span className="material-symbols-outlined text-gold filled">flash_on</span>
          </button>
        </div>

        {/* Scan Frame */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative size-72 rounded-3xl border border-white/20 overflow-hidden">
            <div className="absolute top-0 right-0 size-8 border-t-4 border-r-4 border-white rounded-tr-xl"></div>
            <div className="absolute top-0 left-0 size-8 border-t-4 border-l-4 border-white rounded-tl-xl"></div>
            <div className="absolute bottom-0 right-0 size-8 border-b-4 border-r-4 border-white rounded-br-xl"></div>
            <div className="absolute bottom-0 left-0 size-8 border-b-4 border-l-4 border-white rounded-bl-xl"></div>
            
            {/* Animated Scan Line */}
            <div className="absolute left-0 right-0 h-0.5 bg-gold/80 shadow-[0_0_20px_rgba(212,175,55,1)] animate-[scan_2s_linear_infinite] top-0"></div>
          </div>
        </div>

        {/* Bottom Drawer */}
        <div className="flex flex-col bg-navy-800/95 backdrop-blur-2xl rounded-t-[2.5rem] shadow-2xl border-t border-white/10 pb-10 pt-4 max-h-[45vh]">
          <div className="w-full flex justify-center py-2">
            <div className="w-12 h-1.5 rounded-full bg-white/10"></div>
          </div>

          <div className="px-6 text-center mb-6 mt-2">
            <h2 className="text-white text-lg font-bold">قم بتوجيه الكاميرا نحو الباركود</h2>
            <p className="text-white/40 text-xs mt-1">سيتم تسجيل الحضور تلقائياً فور التعرف عليه</p>
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar px-6 space-y-3 mb-6">
            <div className="flex items-center gap-4 bg-navy-700/60 p-4 rounded-2xl border border-gold/20 animate-[fadeIn_0.3s]">
              <div className="flex items-center justify-center rounded-xl bg-gold/10 shrink-0 size-12 text-gold">
                <span className="material-symbols-outlined filled text-[28px]">check_circle</span>
              </div>
              <div className="flex-1 min-w-0 flex flex-col items-start text-right">
                <p className="text-white text-base font-bold truncate w-full">يوسف نبيل</p>
                <div className="flex items-center gap-2 text-white/40 text-xs mt-0.5">
                  <span className="bg-white/5 px-2 py-0.5 rounded text-[10px] font-mono">ID: 8821</span>
                  <span>الآن</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-navy-700/30 p-4 rounded-2xl border border-white/5 opacity-50">
              <div className="flex items-center justify-center rounded-xl bg-white/5 shrink-0 size-12 text-green-500/80">
                <span className="material-symbols-outlined text-[28px]">check</span>
              </div>
              <div className="flex-1 min-w-0 flex flex-col items-start text-right">
                <p className="text-white text-base font-medium truncate w-full">مارينا مجدي</p>
                <div className="flex items-center gap-2 text-white/40 text-xs mt-0.5">
                  <span className="bg-white/5 px-2 py-0.5 rounded text-[10px] font-mono">ID: 9042</span>
                  <span>منذ دقيقة</span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 pb-2">
            <button 
              onClick={() => navigate('/attendance/manual')}
              className="w-full h-14 bg-gold hover:bg-gold-hover text-navy-dark rounded-2xl shadow-2xl active:scale-[0.98] transition-all font-bold flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">keyboard</span>
              <span>إدخال يدوي</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ScannerScreen;
