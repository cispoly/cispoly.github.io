
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Award, Users, Search, Target, Zap, FileBarChart, Filter, Activity, Droplet, UserCheck } from 'lucide-react';
import StudyCard from '../StudyCard';
import Institutions from '../Institutions';
import ClinicalScenarios from '../ClinicalScenarios';
import MethylationAdvantages from '../MethylationAdvantages';
import CisovaInnovation from '../CisovaInnovation';
import CisovaClinicalData from '../CisovaClinicalData';
import ClinicalChallenge from '../ClinicalChallenge'; // Reusing structure but will inject custom text
import { CISOVA_STUDIES, CISOVA_INSTITUTIONS } from '../../constants';
import { StudyCategory } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import SEO from '../SEO';

const CisovaPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Cisova Specific Scenarios based on PDF Page 12 + User Request
  const scenarios = [
    {
      icon: <Activity size={24} />,
      title: t('scenarios.cisova.adjunct.title'),
      description: t('scenarios.cisova.adjunct.desc')
    },
    {
      icon: <Search size={24} />,
      title: t('scenarios.cisova.indep.title'),
      description: t('scenarios.cisova.indep.desc')
    },
    {
        icon: <UserCheck size={24} />,
        title: t('scenarios.cisova.brca.title'),
        description: t('scenarios.cisova.brca.desc')
    }
  ];

  // Specific Advantages for CISOVA
  const advantages = [
    {
      icon: <Droplet className="w-6 h-6 text-rose-600" />,
      title: t('adv.cisova.blood.title'),
      description: t('adv.cisova.blood.desc'),
      color: "bg-rose-50 border-rose-100"
    },
    {
      icon: <Target className="w-6 h-6 text-teal-500" />,
      title: t('adv.cisova.gap.title'),
      description: t('adv.cisova.gap.desc'),
      color: "bg-teal-50 border-teal-100"
    },
    {
      icon: <FileBarChart className="w-6 h-6 text-purple-500" />,
      title: t('adv.cisova.data.title'),
      description: t('adv.cisova.data.desc'),
      color: "bg-purple-50 border-purple-100"
    },
    {
        icon: <Users className="w-6 h-6 text-blue-500" />,
        title: t('adv.cisendo.coverage.title'), // Reusing "Broad Population Coverage"
        description: t('adv.cisendo.coverage.desc'),
        color: "bg-blue-50 border-blue-100"
    },
    {
        icon: <Zap className="w-6 h-6 text-amber-500" />,
        title: t('adv.cisendo.throughput.title'), // Reusing "High Throughput"
        description: t('adv.cisendo.throughput.desc'),
        color: "bg-amber-50 border-amber-100"
    }
  ];

  // Filter Categories
  const categories = ['All', ...Object.values(StudyCategory).filter(c => 
    CISOVA_STUDIES.some(s => s.category === c)
  )];

  const filteredStudies = activeCategory === 'All' 
    ? CISOVA_STUDIES 
    : CISOVA_STUDIES.filter(s => s.category === activeCategory);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "CISOVA",
    "alternateName": "禾薇益",
    "description": "Non-invasive ovarian cancer detection using multi-omics methylation technology.",
    "brand": {
      "@type": "Brand",
      "name": "CISPOLY"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Beijing OriginPoly Bio-Tec Co.,Ltd."
    },
    "category": "Medical Diagnostic Test"
  };

  return (
    <>
      <SEO 
        title="CISOVA - Ovarian Cancer Methylation Detection"
        description="CISOVA (禾薇益) provides advanced ovarian cancer detection through blood-based methylation analysis, aiming to improve early diagnosis rates."
        keywords={[
          'CISOVA', 'Ovarian Cancer', 'Methylation', 'Blood Test', 'Early Detection',
          '禾薇益', '卵巢癌', '甲基化', '无创检测', '液体活检'
        ]}
        schema={productSchema}
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden pt-20 pb-10">
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Using a similar rose theme background as Cisendo */}
          <svg className="absolute right-0 top-0 h-full w-full md:w-2/3 opacity-30 text-rose-200" viewBox="0 0 500 800" preserveAspectRatio="xMidYMid slice">
            <path d="M100,0 C150,100 50,200 150,300 C250,400 300,350 400,500 C450,575 350,650 400,800 L500,800 L500,0 Z" fill="url(#gradientRose)" />
            <defs>
              <linearGradient id="gradientRose" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e11d48" />
                <stop offset="100%" stopColor="#fff1f2" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 max-w-5xl px-6 text-center"
        >
          <div className="flex justify-center gap-4 mb-8">
            <span className="flex items-center gap-2 px-5 py-2 bg-white/60 backdrop-blur-md shadow-sm rounded-full text-sm font-semibold text-rose-800 border border-rose-100">
              <Sparkles size={16} /> Ovarian Health
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-slate-800 leading-[1.1] mb-8 tracking-tight">
            {t('hero.cisova.title.prefix')} <br/>
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-700 to-rose-900">
              {t('hero.cisova.title.highlight')}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {t('hero.cisova.description').split(/(CDO1|HOXA9)/g).map((part, i) => 
              ['CDO1', 'HOXA9'].includes(part) ? (
                <strong key={i} className="font-semibold text-rose-800">{part}</strong>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <button 
              onClick={() => document.getElementById('evidence')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-rose-800 text-white rounded-full font-serif text-lg hover:bg-rose-900 transition-all shadow-lg shadow-rose-900/20 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t('hero.btn.evidence')} <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform"/>
              </span>
            </button>
          </div>

          <div className="inline-flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur-md rounded-lg border border-rose-100/50 shadow-sm hover:bg-white/60 transition-colors cursor-default">
              <Award size={16} className="text-rose-600" />
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                <span className="text-xs font-bold text-rose-800 uppercase tracking-wider whitespace-nowrap">{t('hero.nmpa.title')}</span>
                <span className="hidden md:block w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="text-xs text-slate-600 whitespace-nowrap">{t('hero.nmpa.subtitle')}</span>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 font-mono tracking-wide opacity-80">{t('hero.nmpa.cisova.no')}</p>
          </div>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-10 md:py-20">
        
        {/* 1. Clinical Challenge (Custom for Ovarian) */}
        <div className="mb-24">
             <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-serif text-slate-800 mb-6 italic">{t('challenge.cisova.title')}</h2>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  {t('challenge.cisova.desc')}
                </p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="glass-card p-8 rounded-3xl border-t-4 border-t-slate-400">
                    <h3 className="text-xl font-serif text-slate-800 mb-3">{t('challenge.cisova.step1')}</h3>
                    <p className="text-slate-600 text-sm font-light leading-relaxed">{t('challenge.cisova.step1.desc')}</p>
                </div>
                {/* Step 2 */}
                <div className="glass-card p-8 rounded-3xl border-t-4 border-t-rose-400">
                    <h3 className="text-xl font-serif text-slate-800 mb-3">{t('challenge.cisova.step2a.title')} / {t('challenge.cisova.step2b.title')}</h3>
                    <p className="text-slate-600 text-sm font-light leading-relaxed mb-2">{t('challenge.cisova.step2a.desc')}</p>
                    <p className="text-slate-600 text-sm font-light leading-relaxed">{t('challenge.cisova.step2b.desc')}</p>
                </div>
                {/* Step 3 */}
                <div className="glass-card p-8 rounded-3xl border-t-4 border-t-teal-500 bg-teal-50/30">
                    <h3 className="text-xl font-serif text-teal-900 mb-3">{t('challenge.cisova.step3')}</h3>
                    <p className="text-slate-600 text-sm font-light leading-relaxed">{t('challenge.cisova.step3.desc')}</p>
                </div>
             </div>
        </div>

        {/* 2. Clinical Application Scenarios (Updated Description & Items) */}
        <div className="mb-24">
          <ClinicalScenarios 
            items={scenarios} 
            customDescription={t('scenarios.cisova.description')}
          />
        </div>

        {/* 3. The Methylation Advantage */}
        <div className="mb-24">
          <MethylationAdvantages items={advantages} />
        </div>

        {/* 4. The Innovation: Liquid Biopsy */}
        <div className="mb-24">
          <CisovaInnovation />
        </div>

        {/* 5. Clinical Trial Data & Validation */}
        <div className="mb-32">
            <CisovaClinicalData />
        </div>

        {/* 6. Institutions */}
        <div className="mb-32">
          <Institutions institutions={CISOVA_INSTITUTIONS} />
        </div>

        {/* 7. Studies Library */}
        <div id="evidence" className="scroll-mt-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-serif text-slate-800 mb-3 italic">{t('lib.title')}</h2>
              <p className="text-slate-500 font-light">{t('lib.desc')}</p>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar">
              {/* Only show 'All' if there are no other categories yet, or just hide filter for now */}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map(study => (
              <StudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default CisovaPage;
