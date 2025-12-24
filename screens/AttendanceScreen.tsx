
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Student } from '../types';

const AttendanceScreen: React.FC = () => {
  const navigate = useNavigate();
  const { lessonId } = useParams();

  const [students, setStudents] = useState<Student[]>([
    { id: '2023001', name: 'أحمد محمد', isPresent: true, avatar: 'https://picsum.photos/100/100?random=11' },
    { id: '2023045', name: 'سارة علي', isPresent: false, avatar: 'https://picsum.photos/100/100?random=12' },
    { id: '2023012', name: 'محمود حسن', isPresent: true, avatar: 'https://picsum.photos/100/100?random=13' },
    { id: '2023089', name: 'يوسف إبراهيم', isPresent: false, avatar: 'https://picsum.photos/100/100?random=14' },
    { id: '2023055', name: 'مريم سعيد', isPresent: true, avatar: 'https://picsum.photos/100/100?random=15' },
    { id: '2023101', name: 'عمر خالد', isPresent: false, avatar: 'https://picsum.photos/100/100?random=16' },
  ]);

  const togglePresence = (id: string) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, isPresent: !s.isPresent } : s));
  };

  const presentCount = students.filter(s => s.isPresent).length;
  const absentCount = students.length - presentCount;

  return (
    <div className="bg-navy-dark min-h-screen text-white flex flex-col dir-rtl">
      <header className="sticky top-0 z-40 bg-navy-medium/95 backdrop-blur-md shadow-xl border-b border-white/5">
        <div className="flex items-center px-4 py-4 justify-between mt-4">
          <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full hover:bg-white/5">
            <span className="material-symbols-outlined rtl:rotate-180">arrow_forward_ios</span>
          </button>
          <h2 className="text-xl font-bold flex-1 text-center">تسجيل الحضور</h2>
          <div className="size-10"></div>
        </div>

        <div className="px-4 pb-4">
          <div className="flex h-12 w-full items-center justify-center rounded-2xl bg-navy-dark p-1">
            <button className="flex-1 h-full rounded-xl bg-navy-medium text-gold font-bold text-sm shadow-xl">يدوي</button>
            <button onClick={() => navigate('/scanner')} className="flex-1 h-full rounded-xl text-slate-500 font-bold text-sm hover:text-white transition-colors">باركود</button>
          </div>
        </div>

        <div className="px-4 pb-4">
          <div className="relative flex items-center w-full h-12 rounded-2xl border border-white/5 bg-navy-dark focus-within:border-gold/50 px-4 transition-all">
            <span className="material-symbols-outlined text-gray-500">search</span>
            <input 
              className="h-full w-full bg-transparent border-none focus:ring-0 text-sm placeholder-gray-600 font-medium" 
              placeholder="بحث عن طالب..." 
              type="text"
            />
          </div>
        </div>
      </header>

      <main className="flex-1 pb-40 pt-2 overflow-y-auto no-scrollbar">
        <div className="space-y-1">
          {students.map((student) => (
            <div 
              key={student.id}
              onClick={() => togglePresence(student.id)}
              className={`group flex items-center justify-between gap-4 px-4 py-4 transition-all cursor-pointer border-r-4 ${
                student.isPresent ? 'bg-gold/5 border-gold shadow-inner' : 'bg-transparent border-transparent opacity-80'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img 
                    src={student.avatar} 
                    className="size-12 rounded-full border-2 border-white/10 shadow-lg" 
                    alt={student.name}
                  />
                  {student.isPresent && (
                    <div className="absolute -bottom-1 -right-1 size-5 bg-green-500 border-2 border-navy-dark rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-[12px] text-white font-bold">check</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <p className="text-base font-bold leading-tight">{student.name}</p>
                  <p className="text-xs text-slate-500 font-mono mt-1">ID: {student.id}</p>
                </div>
              </div>
              <div className="shrink-0">
                <div className={`size-7 rounded-full border-2 flex items-center justify-center transition-all ${
                  student.isPresent ? 'bg-gold border-gold' : 'bg-transparent border-white/20'
                }`}>
                  {student.isPresent && <span className="material-symbols-outlined text-[18px] text-navy-dark font-bold">check</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="fixed bottom-0 w-full z-50">
        <div className="h-12 w-full bg-gradient-to-t from-navy-dark to-transparent pointer-events-none"></div>
        <div className="bg-navy-medium border-t border-white/5 px-6 py-5 pb-10 flex items-center justify-between shadow-2xl rounded-t-[2.5rem]">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">الإحصائيات</span>
            <div className="flex items-center gap-3 text-sm font-bold bg-navy-dark px-3 py-2 rounded-xl border border-white/5">
              <div className="flex items-center gap-1.5 text-white">
                <span className="size-2 rounded-full bg-gold"></span>
                <span>الحضور: {presentCount}</span>
              </div>
              <span className="w-px h-3 bg-white/10"></span>
              <div className="flex items-center gap-1.5 text-red-500">
                <span className="size-2 rounded-full bg-red-500"></span>
                <span>الغياب: {absentCount}</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 bg-gold hover:bg-gold-hover text-navy-dark px-8 py-4 rounded-2xl shadow-2xl shadow-gold/20 active:scale-95 font-bold transition-all"
          >
            <span className="material-symbols-outlined filled">save</span>
            <span>حفظ</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceScreen;
