
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Leaf, ChevronRight, Heart, Moon, Sun } from 'lucide-react';
import EcoAssistant from './EcoAssistant';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Theme Logic
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => {
        if (prev !== isScrolled) {
          return isScrolled;
        }
        return prev;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Beranda' },
    { path: '/about', label: 'Tentang Kami' },
    { path: '/education', label: 'Edukasi' },
    { path: '/contact', label: 'Kontak' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden transition-colors duration-300">
      {/* Decorative blobs */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-emerald-300/20 dark:bg-emerald-500/10 rounded-full blur-[100px] -z-10 animate-float mix-blend-multiply dark:mix-blend-screen pointer-events-none will-change-transform"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-teal-300/20 dark:bg-teal-500/10 rounded-full blur-[100px] -z-10 animate-float mix-blend-multiply dark:mix-blend-screen pointer-events-none will-change-transform" style={{ animationDelay: '1s' }}></div>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-300 ease-out px-4 pt-4 ${
          scrolled ? 'pb-0' : 'pb-4'
        }`}
      >
        <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 border ${
            scrolled 
            ? 'glass shadow-lg bg-white/80 dark:bg-slate-900/80 border-white/50 dark:border-slate-700 py-2' 
            : 'bg-transparent border-transparent py-4'
          }`}
        >
          <div className="px-4 sm:px-6">
            <div className="flex justify-between items-center h-12">
              <div className="flex items-center">
                <Link to="/" className="flex items-center gap-2 group">
                  {!logoError ? (
                    <img 
                      src="/images/ecodigital-farteam-logo-fix.png" 
                      alt="EcoDigital Logo" 
                      className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                      onError={() => setLogoError(true)}
                    />
                  ) : (
                    <>
                      <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-2 rounded-lg text-white shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                        <Globe className="h-5 w-5" />
                      </div>
                      <span className="font-display font-bold text-xl tracking-tight text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                        Eco<span className="text-primary">Digital</span>
                      </span>
                    </>
                  )}
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive(link.path)
                        ? 'text-primary bg-emerald-50 dark:bg-emerald-900/20 font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-white/50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    {link.label}
                    {isActive(link.path) && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
                    )}
                  </Link>
                ))}
                
                {/* Theme Toggle Button */}
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors mx-2"
                  aria-label="Toggle Theme"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <div className="pl-4 border-l border-slate-200 dark:border-slate-700 ml-2">
                  <Link 
                    to="/contact"
                    className="bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    Ayo Beraksi <ChevronRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center gap-3">
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-slate-600 dark:text-slate-300 hover:text-primary p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-4 right-4 mt-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/50 dark:border-slate-700 shadow-xl overflow-hidden md:hidden animate-in slide-in-from-top-5 duration-300 z-50">
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive(link.path)
                      ? 'bg-primary/10 dark:bg-emerald-900/20 text-primary'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center mt-4 bg-primary text-white px-4 py-3 rounded-xl font-bold shadow-lg shadow-primary/20"
              >
                Mulai Sekarang
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow w-full overflow-x-hidden pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-slate-300 pt-16 pb-8 relative overflow-hidden">
        {/* Footer Decoration */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 text-white mb-6">
                {!logoError ? (
                   <img 
                      src="/images/ecodigital-farteam-logo-fix.png" 
                      alt="EcoDigital Logo" 
                      className="h-12 w-auto object-contain"
                   />
                ) : (
                  <>
                    <div className="bg-white/10 p-2 rounded-lg">
                      <Leaf className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-display font-bold text-xl">EcoDigital Nusantara</span>
                  </>
                )}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                Menggabungkan kreativitas desain dan kecerdasan teknologi untuk masa depan bumi yang lebih hijau. Technoversary 2025 Entry.
              </p>
              <div className="flex gap-4">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center transition cursor-pointer">
                    <Globe size={14} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-3 sm:col-span-6">
              <h4 className="text-white font-display font-semibold mb-6">Menu</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/" className="hover:text-primary transition-colors">Beranda</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
                <li><Link to="/education" className="hover:text-primary transition-colors">Edukasi</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Kontak</Link></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-white font-display font-semibold mb-6">Newsletter</h4>
              <p className="text-xs text-slate-400 mb-4">Dapatkan tips hijau mingguan langsung di inboxmu.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email Anda" className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:border-primary" />
                <button className="bg-primary text-white px-3 rounded-lg hover:bg-emerald-700 transition">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <p>&copy; 2025 FAR TEAM. All rights reserved.</p>
            <div className="flex items-center gap-1">
              <span>Dibuat dengan</span>
              <Heart size={12} className="text-red-500 fill-red-500" />
              <span>untuk Indonesia</span>
            </div>
          </div>
        </div>
      </footer>

      <EcoAssistant />
    </div>
  );
};

export default Layout;
