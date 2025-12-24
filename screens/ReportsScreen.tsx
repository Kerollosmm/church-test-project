
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const ReportsScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-navy-dark min-h-screen text-white pb-32 dir-rtl">
      <header className="bg-navy-medium text-white sticky top-0 z-30 shadow-2xl rounded-b-3xl">
        <div className="flex items-center justify-between px-5 h-20 max-w-md mx-auto pt-4">
          <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <h1 className="text-xl font-bold">التقارير والإحصائيات</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="flex flex-col gap-6 p-5 max-w-md mx-auto w-full">
        {/* Filter Section */}
        <section className="bg-navy-medium rounded-3xl shadow-xl p-6 border border-white/5">
          <h2 className="text-sm font-bold text-gold mb-5 flex items-center gap-2">
            <span className="material-symbols-outlined text-xl">tune</span>
            خيارات التصفية
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pr-1">من</label>
              <input className="w-full h-12 px-4 bg-navy-dark border border-white/5 rounded-2xl text-sm text-white focus:border-gold outline-none" type="date" defaultValue="2023-10-01"/>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pr-1">إلى</label>
              <input className="w-full h-12 px-4 bg-navy-dark border border-white/5 rounded-2xl text-sm text-white focus:border-gold outline-none" type="date" defaultValue="2023-10-31"/>
            </div>
          </div>
          <button className="w-full h-12 bg-gold text-navy-dark font-bold rounded-2xl active:scale-95 transition-all shadow-xl shadow-gold/10">
            تحديث البيانات
          </button>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-navy-medium rounded-3xl p-5 shadow-xl border border-white/5 flex flex-col items-center justify-center h-32 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-gold/5 rounded-full blur-xl"></div>
            <span className="text-[10px] text-slate-400 font-bold mb-1 uppercase tracking-wider">إجمالي الطلاب</span>
            <span className="text-4xl font-bold font-sans">25</span>
          </div>
          <div className="bg-gold text-navy-dark rounded-3xl p-5 shadow-xl flex flex-col items-center justify-center h-32 relative overflow-hidden">
            <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-navy-dark/10 rounded-full blur-xl"></div>
            <span className="text-[10px] text-navy-dark/60 font-bold mb-1 uppercase tracking-wider">نسبة الحضور</span>
            <span className="text-4xl font-bold font-sans">80%</span>
          </div>
        </section>

        {/* Table Section */}
        <section className="bg-navy-medium rounded-3xl shadow-xl border border-white/5 overflow-hidden flex flex-col">
          <div className="p-5 border-b border-white/5 flex justify-between items-center bg-navy-dark/30">
            <h3 className="font-bold text-sm">تفاصيل الطلاب</h3>
            <span className="text-[10px] text-slate-500 bg-navy-dark px-3 py-1 rounded-full border border-white/5">اليوم</span>
          </div>
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-sm text-right">
              <thead className="bg-navy-dark/50 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                <tr>
                  <th className="px-5 py-4 text-start">الاسم</th>
                  <th className="px-3 py-4 text-center">الحضور</th>
                  <th className="px-5 py-4 text-center">النسبة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { name: 'مينا عادل', count: 12, rate: '92%', color: 'bg-blue-500' },
                  { name: 'سارة هاني', count: 10, rate: '76%', color: 'bg-gold' },
                  { name: 'كيرلس مجدي', count: 13, rate: '100%', color: 'bg-emerald-500' },
                  { name: 'مريم يوسف', count: 8, rate: '61%', color: 'bg-red-500' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-5 py-4 font-medium whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${row.color}/20 flex items-center justify-center text-[10px] font-bold border border-${row.color}/30`}>{row.name[0]}</div>
                        <span>{row.name}</span>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-center text-gold font-bold">{row.count}</td>
                    <td className="px-5 py-4 text-center">
                      <span className="px-3 py-1 rounded-lg text-[10px] font-bold bg-navy-dark/50 border border-white/5">
                        {row.rate}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="p-4 bg-navy-dark/30 border-t border-white/5 text-[10px] font-bold text-slate-500 hover:text-gold transition-colors">
            عرض القائمة الكاملة
          </button>
        </section>
      </main>

      <button className="fixed bottom-24 left-6 z-40 flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl active:scale-90 transition-all">
        <span className="material-symbols-outlined text-2xl">table_view</span>
      </button>

      <BottomNav />
    </div>
  );
};

export default ReportsScreen;
