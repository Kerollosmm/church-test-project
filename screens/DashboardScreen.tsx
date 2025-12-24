
import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const DashboardScreen: React.FC = () => {
  return (
    <div className="bg-navy-dark min-h-screen text-white pb-32">
      {/* Header Profile Section */}
      <div className="relative w-full bg-gradient-to-br from-navy-light to-navy-dark rounded-b-[2.5rem] shadow-2xl overflow-hidden pb-10 transition-colors">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-navy-light/20 rounded-full blur-3xl"></div>
        
        <div className="px-6 pt-12 pb-4 flex items-center justify-between z-10 relative">
          <h1 className="text-2xl font-bold tracking-wide">نظام الحضور</h1>
          <div className="flex items-center gap-3">
            <button className="bg-white/5 p-2 rounded-full text-gold transition-transform active:scale-90">
              <span className="material-symbols-outlined">sync</span>
            </button>
            <button className="relative p-2 text-gold">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 left-2 w-2 h-2 bg-red-500 rounded-full border border-navy-dark"></span>
            </button>
          </div>
        </div>

        <div className="px-6 pb-2 z-10 relative">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-2 border-gold/30 p-1 shadow-xl">
                <img 
                  src="https://picsum.photos/100/100?random=1" 
                  className="w-full h-full rounded-full object-cover" 
                  alt="Avatar" 
                />
              </div>
              <div className="absolute bottom-1 right-0 w-4 h-4 bg-green-500 border-2 border-navy-dark rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-gold/80 text-sm font-medium">أهلاً بعودتك</span>
              <h2 className="text-xl font-bold">أستاذ محمد</h2>
              <div className="flex items-center gap-1 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span className="text-xs text-slate-400">خادم إعدادي</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="px-5 -mt-8 relative z-10 flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          <Link to="/classes" className="flex flex-col items-start justify-between bg-navy-medium p-5 h-36 rounded-2xl shadow-xl border border-white/5 active:scale-95 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
              <span className="material-symbols-outlined text-[28px]">school</span>
            </div>
            <div className="w-full">
              <h3 className="text-lg font-bold">الفصول</h3>
              <span className="text-xs text-slate-400 block mt-1">إدارة القوائم</span>
            </div>
          </Link>
          
          <Link to="/scanner" className="flex flex-col items-start justify-between bg-navy-medium p-5 h-36 rounded-2xl shadow-xl border border-white/5 active:scale-95 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <span className="material-symbols-outlined text-[28px]">qr_code_scanner</span>
            </div>
            <div className="w-full">
              <h3 className="text-lg font-bold">الحضور السريع</h3>
              <span className="text-xs text-slate-400 block mt-1">تسجيل مباشر</span>
            </div>
          </Link>

          <Link to="/reports" className="flex flex-col items-start justify-between bg-navy-medium p-5 h-36 rounded-2xl shadow-xl border border-white/5 active:scale-95 transition-all">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
              <span className="material-symbols-outlined text-[28px]">monitoring</span>
            </div>
            <div className="w-full">
              <h3 className="text-lg font-bold">التقارير</h3>
              <span className="text-xs text-slate-400 block mt-1">إحصائيات الخدمة</span>
            </div>
          </Link>

          <Link to="/settings" className="flex flex-col items-start justify-between bg-navy-medium p-5 h-36 rounded-2xl shadow-xl border border-white/5 active:scale-95 transition-all">
            <div className="w-12 h-12 rounded-xl bg-slate-500/10 flex items-center justify-center text-slate-400">
              <span className="material-symbols-outlined text-[28px]">settings</span>
            </div>
            <div className="w-full">
              <h3 className="text-lg font-bold">الإعدادات</h3>
              <span className="text-xs text-slate-400 block mt-1">تخصيص التطبيق</span>
            </div>
          </Link>
        </div>

        <div className="bg-navy-medium rounded-2xl p-5 border border-white/5 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">ملخص اليوم</h3>
            <div className="bg-navy-dark px-3 py-1 rounded-full text-xs font-bold text-gold">
              الجمعة، 17 نوفمبر
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 border-b border-white/5 pb-4 mb-3">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-sm text-slate-400">حضور اليوم</span>
              </div>
              <span className="text-2xl font-bold">45</span>
            </div>
            <div className="flex flex-col gap-1 border-r border-white/5 pr-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                <span className="text-sm text-slate-400">في الانتظار</span>
              </div>
              <span className="text-2xl font-bold">3</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="material-symbols-outlined text-[16px]">history</span>
            <span>آخر مزامنة: منذ 5 دقائق</span>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default DashboardScreen;
