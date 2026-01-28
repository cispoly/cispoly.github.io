
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe, Home } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isGuidesDropdownOpen, setIsGuidesDropdownOpen] = useState(false);
  const productsDropdownRef = useRef<HTMLDivElement>(null);
  const guidesDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target as Node)) {
        setIsProductsDropdownOpen(false);
      }
      if (guidesDropdownRef.current && !guidesDropdownRef.current.contains(event.target as Node)) {
        setIsGuidesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isProductActive = ['/ciscer', '/cisendo', '/cisova'].includes(location.pathname);
  const isGuideActive = ['/guides/cervical', '/guides/endo', '/guides/ovarian'].includes(location.pathname);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-white/10 backdrop-blur-sm pointer-events-none">
      <div className="flex items-center gap-8 pointer-events-auto">
        {/* Logo Area */}
        <Link 
          to="/"
          className="flex flex-col cursor-pointer group" 
        >
          <h1 className="font-serif text-2xl font-bold tracking-widest text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-800 group-hover:to-rose-700 transition-all duration-500">
            CISPOLY
          </h1>
          <span className="text-[10px] text-rose-400 uppercase tracking-[0.4em] font-medium pl-1 group-hover:text-teal-600 transition-colors duration-500">
            {t('app.logo.subtitle')}
          </span>
        </Link>
      </div>

      {/* Right Side: Navigation & Language */}
      <div className="flex items-center gap-2 md:gap-4 pointer-events-auto">
        
        {/* Home Button */}
        <Link 
          to="/"
          className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all shadow-sm hover:shadow-md backdrop-blur-md ${isActive('/') ? 'bg-slate-800 text-white border-slate-800' : 'bg-white/50 border-white/50 text-slate-600 hover:bg-white'}`}
        >
          <Home size={14} className="hidden md:block" /> {t('nav.home')}
        </Link>

        {/* Products Dropdown */}
        <div className="relative" ref={productsDropdownRef}>
          <button 
            onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
            className={`flex items-center gap-1 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all shadow-sm hover:shadow-md backdrop-blur-md ${isProductActive ? 'bg-slate-800 text-white border-slate-800' : 'bg-white/50 border-white/50 text-slate-600 hover:bg-white'}`}
          >
            {t('nav.products')} <ChevronDown size={14} className={`transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isProductsDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white p-2 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
              <Link 
                to="/ciscer"
                onClick={() => setIsProductsDropdownOpen(false)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive('/ciscer') ? 'bg-teal-50 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {t('nav.ciscer')}
              </Link>
              <Link 
                to="/cisendo"
                onClick={() => setIsProductsDropdownOpen(false)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive('/cisendo') ? 'bg-rose-50 text-rose-800' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {t('nav.cisendo')}
              </Link>
              <Link 
                to="/cisova"
                onClick={() => setIsProductsDropdownOpen(false)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive('/cisova') ? 'bg-rose-50 text-rose-800' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {t('nav.cisova')}
              </Link>
            </div>
          )}
        </div>

        {/* Guides Dropdown */}
        <div className="relative" ref={guidesDropdownRef}>
          <button 
            onClick={() => setIsGuidesDropdownOpen(!isGuidesDropdownOpen)}
            className={`flex items-center gap-1 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all shadow-sm hover:shadow-md backdrop-blur-md ${isGuideActive ? 'bg-slate-800 text-white border-slate-800' : 'bg-white/50 border-white/50 text-slate-600 hover:bg-white'}`}
          >
            {t('nav.guides')} <ChevronDown size={14} className={`transition-transform duration-300 ${isGuidesDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isGuidesDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white p-2 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
              <Link 
                to="/guides/cervical"
                onClick={() => setIsGuidesDropdownOpen(false)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive('/guides/cervical') ? 'bg-teal-50 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {t('nav.guides.cervical')}
              </Link>
              <Link 
                to="/guides/endo"
                onClick={() => setIsGuidesDropdownOpen(false)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive('/guides/endo') ? 'bg-rose-50 text-rose-800' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {t('nav.guides.endo')}
              </Link>
              <Link 
                to="/guides/ovarian"
                onClick={() => setIsGuidesDropdownOpen(false)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive('/guides/ovarian') ? 'bg-red-50 text-red-800' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {t('nav.guides.ovarian')}
              </Link>
            </div>
          )}
        </div>

        {/* About Button */}
        <Link 
          to="/about"
          className={`px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all shadow-sm hover:shadow-md backdrop-blur-md ${isActive('/about') ? 'bg-slate-800 text-white border-slate-800' : 'bg-white/50 border-white/50 text-slate-600 hover:bg-white'}`}
        >
          {t('nav.about')}
        </Link>

        {/* Contact Button */}
        <Link 
          to="/contact"
          className={`px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all shadow-sm hover:shadow-md backdrop-blur-md ${isActive('/contact') ? 'bg-slate-800 text-white border-slate-800' : 'bg-white/50 border-white/50 text-slate-600 hover:bg-white'}`}
        >
          {t('nav.contact')}
        </Link>

        {/* Language Toggle */}
        <button 
          onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
          className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-slate-200 shadow-sm hover:bg-white text-sm font-semibold text-slate-700 transition-all hover:shadow-md"
        >
          <Globe size={16} />
          {language === 'en' ? '中文' : 'English'}
        </button>
      </div>
    </div>
  );
};

export default Navigation;
