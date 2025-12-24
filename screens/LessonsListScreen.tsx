
import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Lesson } from '../types';

const LessonsListScreen: React.FC = () => {
  const navigate = useNavigate();
  const { classId } = useParams();

  const lessons: Lesson[] = [
    { id: 'l1', title: 'الدرس 1: مقدمة في الإيمان', date: '20 ديسمبر 2025', status: 'completed', attendanceCount: 18, totalCount: 25 },
    { id: 'l2', title: 'الدرس 2: الصلاة الدائمة', date: '27 ديسمبر 2025', status: 'in-progress', attendanceCount: 5, totalCount: 25 },
    { id: 'l3', title: 'الدرس 3: دراسة الكتاب المقدس', date: '03 يناير 2026', status: 'upcoming', attendanceCount: 0, totalCount: 25 },
  ];

  return (
    <div className="bg-navy-dark min-h-screen text-white pb-32">
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-medium/90 backdrop-blur-xl border-b border-white/5 shadow-xl rounded-b-3xl">
        <div className="px-5 py-5 flex items-center justify-between gap-4 mt-6">
          <button onClick={() => navigate(-1)} className="p-2 -mr-2 rounded-full hover:bg-white/10">
            <span className="material-symbols-outlined rtl:rotate-180">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold truncate flex-1 text-center">اجتماع الشباب - المرحلة الثانوية</h1>
          <button className="p-2 -ml-2 rounded-full hover:bg-white/10">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
      </header>

      <main className="pt-36 px-5 space-y-4">
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            to={`/attendance/${lesson.id}`}
            className="block group relative bg-navy-medium rounded-2xl border border-white/5 shadow-xl transition-all active:scale-[0.98] overflow-hidden"
          >
            <div className={`absolute top-0 right-0 bottom-0 w-1.5 ${
              lesson.status === 'completed' ? 'bg-emerald-500' :
              lesson.status === 'in-progress' ? 'bg-orange-500' : 'bg-slate-500'
            }`}></div>
            
            <div className="p-5 pr-7 flex flex-col gap-3">
              <div className="flex justify-between items-start gap-3">
                <h2 className="text-lg font-bold leading-tight">{lesson.title}</h2>
                <span className={`shrink-0 px-2.5 py-1 rounded-lg text-[10px] font-bold border ${
                  lesson.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                  lesson.status === 'in-progress' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                  'bg-slate-500/10 text-slate-400 border-slate-500/20'
                }`}>
                  {lesson.status === 'completed' ? 'مكتمل' : lesson.status === 'in-progress' ? 'جاري' : 'قادم'}
                </span>
              </div>

              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-[18px] text-gold">calendar_today</span>
                <span>{lesson.date}</span>
              </div>

              <div className="h-px w-full bg-white/5 my-1"></div>

              <div className="space-y-2">
                <div className="flex justify-between items-end text-xs">
                  <span className="text-slate-500 font-medium">نسبة الحضور</span>
                  <div className="flex items-center gap-1 font-sans">
                    <span className="font-bold text-white">{lesson.attendanceCount}</span>
                    <span className="text-slate-500">/</span>
                    <span className="text-slate-500">{lesson.totalCount}</span>
                    <span className="mr-1">حضروا</span>
                  </div>
                </div>
                <div className="h-2 w-full bg-navy-dark rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      lesson.status === 'completed' ? 'bg-emerald-500' :
                      lesson.status === 'in-progress' ? 'bg-orange-500' : 'bg-slate-700'
                    }`} 
                    style={{ width: `${(lesson.attendanceCount / lesson.totalCount) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </main>

      <button className="fixed bottom-24 left-6 z-40 flex items-center justify-center w-14 h-14 bg-navy-medium text-gold rounded-full shadow-2xl border border-white/10 active:scale-90">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>

      <nav className="fixed bottom-0 left-0 right-0 bg-navy-medium border-t border-white/5 pb-8 pt-1 px-2 shadow-2xl z-50 rounded-t-3xl max-w-md mx-auto">
        <div className="flex justify-around items-center h-16">
          <Link to="/dashboard" className="flex flex-col items-center gap-1 p-2 w-16 text-slate-400 hover:text-white">
            <span className="material-symbols-outlined text-[26px]">home</span>
            <span className="text-[10px] font-medium">الرئيسية</span>
          </Link>
          <div className="flex flex-col items-center gap-1 p-2 w-16 text-gold relative">
            <span className="material-symbols-outlined text-[26px] filled">menu_book</span>
            <span className="text-[10px] font-bold">الدروس</span>
            <span className="absolute top-2 right-4 w-1.5 h-1.5 rounded-full bg-gold"></span>
          </div>
          <button className="flex flex-col items-center gap-1 p-2 w-16 text-slate-400">
            <span className="material-symbols-outlined text-[26px]">groups</span>
            <span className="text-[10px] font-medium">المخدومين</span>
          </button>
          <Link to="/settings" className="flex flex-col items-center gap-1 p-2 w-16 text-slate-400">
            <span className="material-symbols-outlined text-[26px]">settings</span>
            <span className="text-[10px] font-medium">الإعدادات</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default LessonsListScreen;
