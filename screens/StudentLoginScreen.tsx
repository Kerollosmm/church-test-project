
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const StudentLoginScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this might redirect to a student-specific portal
    // For this prototype, we'll go to the main dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-navy-950 via-navy-900 to-white/5 relative overflow-hidden dir-rtl">
      {/* Texture Layer */}
      <div className="absolute top-0 inset-x-0 h-96 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="w-full max-w-[380px] flex flex-col items-center gap-8 z-10 animate-[fadeIn_0.5s]">
        <div className="flex flex-col items-center gap-6">
          <div className="bg-white p-2 rounded-3xl shadow-2xl">
            <div className="h-20 w-20 rounded-2xl bg-navy-dark flex items-center justify-center overflow-hidden">
               <span className="material-symbols-outlined text-gold text-5xl">school</span>
            </div>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-white drop-shadow-2xl">نظام النتائج</h1>
            <p className="text-gold font-medium tracking-wide">تسجيل دخول الطلاب</p>
          </div>
        </div>

        <div className="w-full bg-white rounded-[2.5rem] shadow-2xl p-8 flex flex-col gap-8 border-t-8 border-gold relative">
          <form className="flex flex-col gap-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-xs font-bold text-navy-950 uppercase tracking-widest block pr-1">اسم المستخدم</label>
              <div className="group relative flex items-center w-full bg-slate-50 border border-slate-100 rounded-2xl focus-within:ring-2 focus-within:ring-gold/30 transition-all">
                <div className="px-4 text-slate-300 group-focus-within:text-gold transition-colors">
                  <span className="material-symbols-outlined text-[24px]">person</span>
                </div>
                <input 
                  className="w-full h-14 bg-transparent border-none text-navy-dark placeholder:text-slate-300 focus:ring-0 text-right font-medium" 
                  placeholder="أدخل اسم المستخدم الخاص بك" 
                  type="text"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-navy-950 uppercase tracking-widest block pr-1">كلمة المرور</label>
              <div className="group relative flex items-center w-full bg-slate-50 border border-slate-100 rounded-2xl focus-within:ring-2 focus-within:ring-gold/30 transition-all">
                <div className="px-4 text-slate-300 group-focus-within:text-gold transition-colors">
                  <span className="material-symbols-outlined text-[24px]">lock</span>
                </div>
                <input 
                  className="w-full h-14 bg-transparent border-none text-navy-dark placeholder:text-slate-300 focus:ring-0 text-right" 
                  placeholder="أدخل كلمة المرور" 
                  type="password"
                  required
                />
              </div>
            </div>

            <button type="submit" className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-navy-900 to-navy-dark h-14 shadow-2xl transition-all hover:scale-[1.02] active:scale-95 mt-4">
              <div className="flex items-center justify-center gap-3 text-white font-bold">
                <span>عرض النتائج</span>
                <span className="material-symbols-outlined text-[24px] rtl:rotate-180 transition-transform group-hover:translate-x-1">arrow_right_alt</span>
              </div>
            </button>
          </form>

          <div className="text-center">
            <Link to="/login" className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-gold transition-colors">
              <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
              <span>تسجيل دخول الخدام</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLoginScreen;
