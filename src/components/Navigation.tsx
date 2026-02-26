import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe, Home, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isGuidesDropdownOpen, setIsGuidesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Mobile specific states for submenus
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isMobileGuidesOpen, setIsMobileGuidesOpen] = useState(false);

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
    setIsMobileGuidesOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const isProductActive = ['/ciscer', '/cisendo', '/cisova'].includes(location.pathname);
  const isGuideActive = ['/guides/cervical', '/guides/endo', '/guides/ovarian'].includes(location.pathname);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-white/10 backdrop-blur-sm pointer-events-none">
        <div className="flex items-center gap-8 pointer-events-auto">
          {/* Logo Area */}
          <Link 
            to="/"
            className="flex flex-col cursor-pointer group" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <h1 className="font-serif text-2xl font-bold tracking-widest text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-800 group-hover:to-rose-700 transition-all duration-500">
              CISPOLY
            </h1>
            <span className="text-[10px] text-rose-400 uppercase tracking-[0.4em] font-medium pl-1 group-hover:text-teal-600 transition-colors duration-500">
              {t('app.logo.subtitle')}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="pointer-events-auto md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 rounded-full bg-white/50 border border-white/50 text-slate-700 shadow-sm backdrop-blur-md"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 md:gap-4 pointer-events-auto">
          
          {/* Home Button */}
          <Link 
            to="/"
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all shadow-sm hover:shadow-md backdrop-blur-md ${isActive('/') ? 'bg-slate-800 text-white border-slate-800' : 'bg-white/50 border-white/50 text-slate-600 hover:bg-white'}`}
          >
            <Home size={14} className="hidden lg:block" /> {t('nav.home')}
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

          {/* Blog Button */}
          <Link 
            to="/blog"
            className={`px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all shadow-sm hover:shadow-md backdrop-blur-md ${isActive('/blog') || location.pathname.startsWith('/blog/') ? 'bg-slate-800 text-white border-slate-800' : 'bg-white/50 border-white/50 text-slate-600 hover:bg-white'}`}
          >
            {t('nav.blog')}
          </Link>

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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white md:hidden overflow-y-auto">
          <div className="p-6 flex flex-col min-h-screen">
            <div className="flex justify-between items-center mb-8">
              {/* Logo in Menu */}
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-widest text-slate-900">
                  CISPOLY
                </span>
                <span className="text-[10px] text-rose-400 uppercase tracking-[0.4em] font-medium pl-1">
                  {t('app.logo.subtitle')}
                </span>
              </div>
              
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full bg-slate-100 text-slate-800"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium py-3 border-b border-slate-100 flex items-center justify-between ${isActive('/') ? 'text-teal-700' : 'text-slate-800'}`}
              >
                {t('nav.home')}
              </Link>

              {/* Mobile Products */}
              <div className="border-b border-slate-100">
                <button 
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className={`w-full text-lg font-medium py-3 flex items-center justify-between ${isProductActive ? 'text-teal-700' : 'text-slate-800'}`}
                >
                  {t('nav.products')}
                  <ChevronDown size={20} className={`transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileProductsOpen && (
                  <div className="pl-4 pb-4 flex flex-col gap-3">
                    <Link to="/ciscer" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 py-1">{t('nav.ciscer')}</Link>
                    <Link to="/cisendo" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 py-1">{t('nav.cisendo')}</Link>
                    <Link to="/cisova" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 py-1">{t('nav.cisova')}</Link>
                  </div>
                )}
              </div>

              {/* Mobile Guides */}
              <div className="border-b border-slate-100">
                <button 
                  onClick={() => setIsMobileGuidesOpen(!isMobileGuidesOpen)}
                  className={`w-full text-lg font-medium py-3 flex items-center justify-between ${isGuideActive ? 'text-teal-700' : 'text-slate-800'}`}
                >
                  {t('nav.guides')}
                  <ChevronDown size={20} className={`transition-transform ${isMobileGuidesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileGuidesOpen && (
                  <div className="pl-4 pb-4 flex flex-col gap-3">
                    <Link to="/guides/cervical" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 py-1">{t('nav.guides.cervical')}</Link>
                    <Link to="/guides/endo" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 py-1">{t('nav.guides.endo')}</Link>
                    <Link to="/guides/ovarian" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 py-1">{t('nav.guides.ovarian')}</Link>
                  </div>
                )}
              </div>

              <Link 
                to="/blog" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium py-3 border-b border-slate-100 ${isActive('/blog') ? 'text-teal-700' : 'text-slate-800'}`}
              >
                {t('nav.blog')}
              </Link>

              <Link 
                to="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium py-3 border-b border-slate-100 ${isActive('/about') ? 'text-teal-700' : 'text-slate-800'}`}
              >
                {t('nav.about')}
              </Link>

              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium py-3 border-b border-slate-100 ${isActive('/contact') ? 'text-teal-700' : 'text-slate-800'}`}
              >
                {t('nav.contact')}
              </Link>
            </div>

            <div className="mt-8">
              <button 
                onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-slate-100 rounded-xl text-slate-800 font-semibold"
              >
                <Globe size={20} />
                {language === 'en' ? 'Switch to 中文' : 'Switch to English'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
