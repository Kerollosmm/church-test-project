
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const SettingsScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-navy-dark min-h-screen text-white pb-32 flex flex-col dir-rtl">
      <header className="flex items-center px-6 py-6 justify-between sticky top-0 z-50 bg-navy-dark/80 backdrop-blur-xl border-b border-white/5">
        <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full hover:bg-white/5 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-2xl rtl:rotate-180">arrow_back_ios</span>
        </button>
        <h2 className="text-xl font-bold flex-1 text-center pr-10">الإعدادات</h2>
      </header>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        <div className="flex flex-col items-center px-6 pt-8 pb-10">
          <div className="relative mb-6">
            <div className="size-32 rounded-full border-4 border-navy-medium p-1 shadow-2xl bg-navy-medium overflow-hidden">
              <img 
                src="https://picsum.photos/200/200?random=50" 
                className="w-full h-full rounded-full object-cover" 
                alt="Profile" 
              />
            </div>
            <button className="absolute bottom-1 right-1 size-9 bg-gold text-navy-dark rounded-full flex items-center justify-center shadow-xl border-4 border-navy-dark">
              <span className="material-symbols-outlined text-[18px]">edit</span>
            </button>
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-1">القس يوسف</h3>
            <p className="text-slate-500 text-sm font-sans tracking-wide">youssef@church.com</p>
          </div>

          <button className="flex items-center justify-center gap-2 px-10 h-14 bg-navy-medium hover:bg-navy-light text-white rounded-2xl shadow-xl transition-all font-bold border border-white/5 active:scale-95">
            <span className="material-symbols-outlined text-[20px]">edit_square</span>
            <span>تعديل الملف الشخصي</span>
          </button>
        </div>

        <div className="px-6 space-y-8">
          {/* Section 1 */}
          <section>
            <h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 pr-1">المزامنة والتخزين</h3>
            <div className="bg-navy-medium rounded-3xl overflow-hidden border border-white/5 shadow-xl">
              <div className="flex items-center justify-between p-5 border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center size-10 rounded-xl bg-navy-dark text-gold">
                    <span className="material-symbols-outlined">sync</span>
                  </div>
                  <p className="font-bold">مزامنة تلقائية</p>
                </div>
                <div className="w-12 h-6 bg-gold/20 rounded-full relative p-1 flex items-center justify-end">
                  <div className="size-4 bg-gold rounded-full"></div>
                </div>
              </div>
              <button className="w-full flex items-center justify-between p-5 active:bg-white/5 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center size-10 rounded-xl bg-navy-dark text-white">
                    <span className="material-symbols-outlined">cloud_sync</span>
                  </div>
                  <p className="font-bold">مزامنة البيانات الآن</p>
                </div>
                <span className="material-symbols-outlined text-slate-500">refresh</span>
              </button>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 pr-1">تفضيلات التطبيق</h3>
            <div className="bg-navy-medium rounded-3xl overflow-hidden border border-white/5 shadow-xl">
              <button className="w-full flex items-center justify-between p-5 border-b border-white/5 active:bg-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center size-10 rounded-xl bg-navy-dark text-white">
                    <span className="material-symbols-outlined">language</span>
                  </div>
                  <p className="font-bold">لغة التطبيق</p>
                </div>
                <div className="flex items-center gap-1 text-gold text-sm font-bold">
                  <span>العربية</span>
                  <span className="material-symbols-outlined text-lg rtl:rotate-180">chevron_right</span>
                </div>
              </button>
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center size-10 rounded-xl bg-navy-dark text-white">
                    <span className="material-symbols-outlined">dark_mode</span>
                  </div>
                  <p className="font-bold">الوضع الليلي</p>
                </div>
                <div className="w-12 h-6 bg-gold/20 rounded-full relative p-1 flex items-center justify-end">
                  <div className="size-4 bg-gold rounded-full"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Logout */}
          <section className="pb-10">
            <button 
              onClick={() => navigate('/login')}
              className="w-full h-16 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-3xl border border-red-500/20 shadow-xl transition-all font-bold flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">logout</span>
              <span>تسجيل الخروج</span>
            </button>
            <p className="text-center text-[10px] text-slate-600 mt-8 font-sans tracking-widest">
              Church App © 2024 - All Rights Reserved
            </p>
          </section>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default SettingsScreen;
