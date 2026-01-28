
import React from 'react';
import { ChevronDown, Dna, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-10">
      
      {/* Abstract Feminine Silhouette / Organic Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Abstract Woman's Profile blended with organic curves */}
        <svg className="absolute right-0 top-0 h-full w-full md:w-2/3 opacity-30 text-rose-200" viewBox="0 0 500 800" preserveAspectRatio="xMidYMid slice">
          <path d="M100,0 C150,100 50,200 150,300 C250,400 300,350 400,500 C450,575 350,650 400,800 L500,800 L500,0 Z" fill="url(#gradientRose)" />
          <defs>
            <linearGradient id="gradientRose" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fda4af" />
              <stop offset="100%" stopColor="#fff1f2" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Cellular Orbs - Frosted Glass Effect */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-xl hidden md:block"
        ></motion.div>
        
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-10 w-48 h-48 rounded-full bg-teal-50/30 backdrop-blur-xl border border-white/40 shadow-2xl hidden md:block"
        ></motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-5xl px-6 text-center"
      >
        <div className="flex justify-center gap-4 mb-8">
          <span className="flex items-center gap-2 px-5 py-2 bg-white/60 backdrop-blur-md shadow-sm rounded-full text-sm font-semibold text-rose-800 border border-rose-100">
            <Sparkles size={16} /> {t('hero.tag.womensHealth')}
          </span>
          <span className="flex items-center gap-2 px-5 py-2 bg-white/60 backdrop-blur-md shadow-sm rounded-full text-sm font-semibold text-teal-800 border border-teal-100">
            <Dna size={16} /> {t('hero.tag.molecularPrecision')}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-slate-800 leading-[1.1] mb-8 tracking-tight">
          {t('hero.title.prefix')} <br/>
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-700 to-rose-700">
            {t('hero.title.highlight')}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          {t('hero.description').split(/(PAX1|JAM3|CDO1|CELF4|HOXA9)/g).map((part, i) => 
            ['PAX1', 'JAM3', 'CDO1', 'CELF4', 'HOXA9'].includes(part) ? (
              <strong key={i} className="font-semibold text-teal-800">{part}</strong>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
          <button 
            onClick={() => document.getElementById('evidence')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-teal-800 text-white rounded-full font-serif text-lg hover:bg-teal-900 transition-all shadow-lg shadow-teal-900/20 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t('hero.btn.evidence')} <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform"/>
            </span>
          </button>
          
          <button 
            onClick={() => document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white/50 backdrop-blur-sm text-slate-800 border border-white rounded-full font-serif text-lg hover:bg-white hover:shadow-lg transition-all"
          >
            {t('hero.btn.simulator')}
          </button>
        </div>

        {/* NMPA Certification Badge */}
        <div className="inline-flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur-md rounded-lg border border-teal-100/50 shadow-sm hover:bg-white/60 transition-colors cursor-default">
            <Award size={16} className="text-teal-600" />
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wider whitespace-nowrap">{t('hero.nmpa.title')}</span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="text-xs text-slate-600 whitespace-nowrap">{t('hero.nmpa.subtitle')}</span>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 mt-2 font-mono tracking-wide opacity-80">{t('hero.nmpa.no')}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
