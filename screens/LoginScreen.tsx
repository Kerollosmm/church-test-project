
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="bg-navy-dark min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-navy-light/30 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md flex flex-col items-stretch animate-[fadeIn_0.5s_ease-out]">
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-navy-light to-navy-dark border border-gold/20 shadow-2xl flex items-center justify-center p-4 mb-6">
            <span className="material-symbols-outlined text-gold text-4xl">church</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">تسجيل الدخول</h1>
          <p className="text-gray-400 text-sm">مرحباً بعودتك، يرجى إدخال بياناتك</p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-bold block pr-1">البريد الإلكتروني</label>
            <div className="group relative flex items-center w-full bg-navy-medium border border-white/5 rounded-xl focus-within:border-gold/50 focus-within:ring-1 focus-within:ring-gold/30 transition-all duration-300">
              <div className="px-4 text-gray-500 group-focus-within:text-gold transition-colors">
                <span className="material-symbols-outlined text-[22px]">mail</span>
              </div>
              <input 
                className="w-full h-14 bg-transparent border-none text-white placeholder:text-gray-600 focus:ring-0 text-right font-sans" 
                dir="ltr" 
                placeholder="user@example.com" 
                type="email"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-bold block pr-1">كلمة المرور</label>
            <div className="group relative flex items-center w-full bg-navy-medium border border-white/5 rounded-xl focus-within:border-gold/50 focus-within:ring-1 focus-within:ring-gold/30 transition-all duration-300">
              <div className="px-4 text-gray-500 group-focus-within:text-gold transition-colors">
                <span className="material-symbols-outlined text-[22px]">lock</span>
              </div>
              <input 
                className="w-full h-14 bg-transparent border-none text-white placeholder:text-gray-600 focus:ring-0 text-right" 
                dir="ltr" 
                placeholder="••••••" 
                type="password"
                required
              />
              <button type="button" className="px-4 text-gray-500 hover:text-gold transition-colors">
                <span className="material-symbols-outlined text-[22px]">visibility</span>
              </button>
            </div>
          </div>

          <button className="w-full h-14 bg-gold hover:bg-gold-hover text-navy-dark rounded-xl shadow-lg shadow-gold/10 active:scale-[0.98] transition-all duration-200 font-bold text-lg">
            تسجيل الدخول
          </button>

          <div className="text-center pt-2">
            <Link to="/student-login" className="text-sm font-medium text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-gold/50 pb-0.5">
              تسجيل دخول الطلاب؟
            </Link>
          </div>
        </form>

        <div className="mt-12 opacity-40 text-center">
          <p className="text-xs text-gray-500">Church App Version 1.0.2</p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
