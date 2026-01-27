import React, { useState } from 'react';
import Hero from './components/Hero';
import StudyCard from './components/StudyCard';
import InteractiveCharts from './components/InteractiveCharts';
import TriageSimulator from './components/TriageSimulator';
import Institutions from './components/Institutions';
import ClinicalScenarios from './components/ClinicalScenarios';
import ClinicalChallenge from './components/ClinicalChallenge';
import MethylationAdvantages from './components/MethylationAdvantages';
import BackToTop from './components/BackToTop';
import { STUDIES } from './constants';
import { StudyCategory } from './types';
import { Filter, Globe } from 'lucide-react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Helper to map filters to translations
  const getCategoryLabel = (cat: string) => {
    if (cat === 'All') return t('lib.filter.All');
    // Map enums to translation keys if possible, or just string match
    switch(cat) {
      case StudyCategory.ASCUS_TRIAGE: return t('lib.filter.ASCUS');
      case StudyCategory.HR_HPV_NON16_18: return t('lib.filter.Non1618');
      case StudyCategory.POSTMENOPAUSAL: return t('lib.filter.Postmen');
      case StudyCategory.SELF_SAMPLING: return t('lib.filter.Self');
      case StudyCategory.CLINICAL_OUTCOMES: return t('lib.filter.Outcome');
      case StudyCategory.METHODOLOGY: return t('lib.filter.Method');
      default: return cat;
    }
  };

  const categories = ['All', ...Object.values(StudyCategory)];

  const filteredStudies = activeCategory === 'All' 
    ? STUDIES 
    : STUDIES.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen relative">
      {/* CISPOLY Logo - Typographic Design */}
      <div className="absolute top-8 left-8 z-50 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="flex flex-col relative">
          <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-widest text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-800 group-hover:to-rose-700 transition-all duration-500">
            CISPOLY
          </h1>
          <span className="text-[10px] text-rose-400 uppercase tracking-[0.4em] font-medium pl-1 group-hover:text-teal-600 transition-colors duration-500">
            {t('app.logo.subtitle')}
          </span>
          {/* Subtle underline decoration on hover */}
          <span className="absolute -bottom-2 left-1 h-0.5 w-0 bg-gradient-to-r from-teal-400 to-rose-400 group-hover:w-12 transition-all duration-700 ease-out"></span>
        </div>
      </div>

      {/* Language Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <button 
          onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
          className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-slate-200 shadow-sm hover:bg-white text-sm font-semibold text-slate-700 transition-all hover:shadow-md"
        >
          <Globe size={16} />
          {language === 'en' ? '中文' : 'English'}
        </button>
      </div>

      <Hero />

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 py-10 md:py-20">
        
        {/* Intro / Challenge Section */}
        <ClinicalChallenge />

        {/* Scenarios Section */}
        <div className="mb-24">
          <ClinicalScenarios />
        </div>

        {/* Advantages Section (New) */}
        <div className="mb-32">
          <MethylationAdvantages />
        </div>

        {/* Data Visualization Section */}
        <div className="mb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-2 block">{t('app.evidenceBased')}</span>
            <h3 className="text-3xl font-serif text-slate-800 mb-6 italic">{t('app.dataDriven')}</h3>
            <p className="text-slate-600 mb-8 leading-relaxed font-light text-lg">
              {t('app.dataDesc')}
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 mt-2 rounded-full bg-teal-500 shrink-0"></span>
                <span className="text-slate-600 font-light">{t('app.point1')}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 mt-2 rounded-full bg-teal-500 shrink-0"></span>
                <span className="text-slate-600 font-light">{t('app.point2')}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 mt-2 rounded-full bg-teal-500 shrink-0"></span>
                <span className="text-slate-600 font-light">{t('app.point3')}</span>
              </li>
            </ul>
          </div>
          <div className="h-full">
            <InteractiveCharts />
          </div>
        </div>

        {/* Simulator Section */}
        <div id="simulator" className="mb-32 scroll-mt-20">
          <TriageSimulator />
        </div>

        {/* Institutions Section */}
        <div className="mb-32">
          <Institutions />
        </div>

        {/* Studies Grid */}
        <div id="evidence" className="scroll-mt-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-serif text-slate-800 mb-3 italic">{t('lib.title')}</h2>
              <p className="text-slate-500 font-light">{t('lib.desc')}</p>
            </div>
            
            {/* Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar">
              <Filter size={18} className="text-slate-400 flex-shrink-0" />
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    activeCategory === cat 
                      ? 'bg-slate-800 text-white shadow-lg' 
                      : 'bg-white/50 border border-white text-slate-500 hover:bg-white'
                  }`}
                >
                  {getCategoryLabel(cat)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map(study => (
              <StudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white/50 border-t border-slate-200 py-12 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-slate-400 font-light">
            {t('footer.disclaimer')}
          </p>
        </div>
      </footer>
      
      <BackToTop />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;