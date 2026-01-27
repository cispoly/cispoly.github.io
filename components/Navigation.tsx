
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe, Home } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Props {
  onProductChange: (product: 'HOME' | 'CISCER' | 'CISENDO' | 'CISOVA' | 'ABOUT' | 'CONTACT' | 'GUIDES_CERVICAL' | 'GUIDES_ENDO' | 'GUIDES_OVARIAN') => void;
  activeProduct: string;
}

const Navigation: React.FC<Props> = ({ onProductChange, activeProduct }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isGuidesDropdownOpen, setIsGuidesDropdownOpen] = useState(false);
  const productsDropdownRef = useRef<HTMLDivElement>(null);
  const guidesDropdownRef = useRef<HTMLDivElement>(null);

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

  const handleProductSelect = (product: 'CISCER' | 'CISENDO' | 'CISOVA') => {
    onProductChange(product);
    setIsProductsDropdownOpen(false);
  };

  const handleGuideSelect = (guide: 'GUIDES_CERVICAL' | 'GUIDES_ENDO' | 'GUIDES_OVARIAN') => {
    onProductChange(guide);
    setIsGuidesDropdownOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-white/10 backdrop-blur-sm pointer-events-none">
      <div className="flex items-center gap-8 pointer-events-auto">
        {/* Logo Area */}
        <div 
          className="flex flex-col cursor-pointer group" 
          onClick={() => onProductChange('HOME')}
        >
          <h1 className="font-serif text-2xl font-bold tracking-widest text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-800 group-hover:to-rose-700 transition-all duration-500">
            CISPOLY
          </h1>
          <span className="text-[10px] text-rose-400 uppercase tracking-[0.4em] font-medium pl-1 group-hover:text-teal-600 transition-colors duration-500">
            {t('app.logo.subtitle')}
          </span>
        </div>
      </div>

      {/* Right Side: Navigation & Language */}
      <div className="flex items-center gap-2 md:gap-4 pointer-events-auto">
        
        {/* Home Button */}
        <button 
          onClick={() => onProductChange('HOME')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all shadow-sm hover:shadow-md backdrop-blur-md ${activeProduct === 'HOME' ? 'bg-slate-800 text-white border-slate-800' : 'bg-white/50 border-white/50 text-slate-600 hover:bg-white'}`}
        >
          <Home size={14} className="hidden md:block" /> {t('nav.home')}
        </button>

        {/* Products Dropdown */}
        <div className="relative" ref={productsDropdownRef}>
          <button 
            onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
            className={`flex items-center gap-1 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all shadow-sm hover:shadow-md backdrop-blur-md ${['CISCER', 'CISENDO', 'CISOVA'].includes(activeProduct) ? 'bg-slate-800 text-white border-slate-800' : 'bg-white/50 border-white/50 text-slate-600 hover:bg-white'}`}
          >
            {t('nav.products')} <ChevronDown size={14} className={`transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isProductsDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white p-2 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
              <button 
                onClick={() => handleProductSelect('CISCER')}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeProduct === 'CISCER' ? 'bg-teal-50 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {t('nav.ciscer')}
              </button>
              <button 
                onClick={() => handleProductSelect('CISENDO')}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeProduct === 'CISENDO' ? 'bg-rose-50 text-rose-800' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {t('nav.cisendo')}
              </button>
              <button 
                onClick={() => handleProductSelect('CISOVA')}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeProduct === 'CISOVA' ? 'bg-rose-50 text-rose-800' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {t('nav.cisova')}
              </button>
            </div>
          )}
        </div>

        {/* Guides Dropdown */}
        <div className="relative" ref={guidesDropdownRef}>
          <button 
            onClick={() => setIsGuidesDropdownOpen(!isGuidesDropdownOpen)}
            className={`flex items-center gap-1 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all shadow-sm hover:shadow-md backdrop-blur-md ${['GUIDES_CERVICAL', 'GUIDES_ENDO', 'GUIDES_OVARIAN'].includes(activeProduct) ? 'bg-slate-800 text-white border-slate-800' : 'bg-white/50 border-white/50 text-slate-600 hover:bg-white'}`}
          >
            {t('nav.guides')} <ChevronDown size={14} className={`transition-transform duration-300 ${isGuidesDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isGuidesDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white p-2 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
              <button 
                onClick={() => handleGuideSelect('GUIDES_CERVICAL')}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeProduct === 'GUIDES_CERVICAL' ? 'bg-teal-50 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {t('nav.guides.cervical')}
              </button>
              <button 
                onClick={() => handleGuideSelect('GUIDES_ENDO')}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeProduct === 'GUIDES_ENDO' ? 'bg-rose-50 text-rose-800' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {t('nav.guides.endo')}
              </button>
              <button 
                onClick={() => handleGuideSelect('GUIDES_OVARIAN')}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeProduct === 'GUIDES_OVARIAN' ? 'bg-red-50 text-red-800' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {t('nav.guides.ovarian')}
              </button>
            </div>
          )}
        </div>

        {/* About Button */}
        <button 
          onClick={() => onProductChange('ABOUT')}
          className={`px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all shadow-sm hover:shadow-md backdrop-blur-md ${activeProduct === 'ABOUT' ? 'bg-slate-800 text-white border-slate-800' : 'bg-white/50 border-white/50 text-slate-600 hover:bg-white'}`}
        >
          {t('nav.about')}
        </button>

        {/* Contact Button */}
        <button 
          onClick={() => onProductChange('CONTACT')}
          className={`px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all shadow-sm hover:shadow-md backdrop-blur-md ${activeProduct === 'CONTACT' ? 'bg-slate-800 text-white border-slate-800' : 'bg-white/50 border-white/50 text-slate-600 hover:bg-white'}`}
        >
          {t('nav.contact')}
        </button>

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
