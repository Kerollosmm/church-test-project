
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { ClassGroup } from '../types';

const ClassesListScreen: React.FC = () => {
  const navigate = useNavigate();

  const classes: ClassGroup[] = [
    { id: '1', name: 'إعداد خدام - السنة الأولى', studentCount: 25, lastLessonDate: '20 ديسمبر 2025' },
    { id: '2', name: 'اجتماع الشباب - المرحلة الثانوية', studentCount: 40, lastLessonDate: '18 ديسمبر 2025' },
    { id: '3', name: 'مدارس الأحد - الصف الخامس', studentCount: 18, lastLessonDate: '15 ديسمبر 2025' },
    { id: '4', name: 'اجتماع الخريجين', studentCount: 32, lastLessonDate: '12 ديسمبر 2025' },
  ];

  return (
    <div className="bg-navy-dark min-h-screen text-white pb-32">
      <header className="sticky top-0 z-20 flex items-center justify-between px-5 py-6 bg-navy-medium/80 backdrop-blur-xl border-b border-white/5 shadow-2xl">
        <h1 className="text-2xl font-bold">الفصول</h1>
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-2xl">search</span>
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 transition-colors text-gold">
            <span className="material-symbols-outlined text-2xl">add_circle</span>
          </button>
        </div>
      </header>

      <main className="px-5 pt-6 flex flex-col gap-4">
        {classes.map((cls) => (
          <Link
            key={cls.id}
            to={`/lessons/${cls.id}`}
            className="group relative flex flex-col bg-navy-medium rounded-2xl border border-white/5 p-5 shadow-xl transition-all active:scale-[0.98] hover:border-gold/30"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-bold leading-snug">{cls.name}</h3>
                <div className="h-1 w-12 bg-gold rounded-full mt-2"></div>
              </div>
              <span className="material-symbols-outlined text-gray-500 rtl:rotate-180">chevron_right</span>
            </div>
            
            <div className="flex items-center gap-6 mt-2">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="material-symbols-outlined text-[20px] text-gold">group</span>
                <span className="text-sm font-medium">{cls.studentCount} طالب</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 pt-4 mt-2 border-t border-white/5 text-xs text-slate-500">
              <span className="material-symbols-outlined text-[16px]">event_note</span>
              <span>آخر درس: {cls.lastLessonDate}</span>
            </div>
          </Link>
        ))}
      </main>

      <button className="fixed bottom-24 left-6 z-30 flex items-center justify-center w-14 h-14 bg-gold text-navy-dark rounded-full shadow-2xl active:scale-95 transition-all">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>

      <BottomNav />
    </div>
  );
};

export default ClassesListScreen;
