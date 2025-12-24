
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', label: 'الرئيسية', icon: 'home' },
    { path: '/classes', label: 'الفصول', icon: 'groups' },
    { path: '/reports', label: 'التقارير', icon: 'bar_chart' },
    { path: '/settings', label: 'حسابي', icon: 'person' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-navy-medium border-t border-white/5 pb-8 pt-3 px-6 z-40 shadow-2xl backdrop-blur-lg bg-opacity-95 max-w-md mx-auto rounded-t-3xl">
      <ul className="flex justify-between items-center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                  isActive ? 'text-gold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <div className={`transition-all duration-300 ${isActive ? 'bg-gold/10 px-5 py-1 rounded-full' : ''}`}>
                  <span className={`material-symbols-outlined text-[24px] ${isActive ? 'filled' : ''}`}>
                    {item.icon}
                  </span>
                </div>
                <span className="text-[10px] font-bold">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNav;
