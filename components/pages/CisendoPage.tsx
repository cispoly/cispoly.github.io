
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Award, Users, Search, Target, Zap, FileBarChart, Filter } from 'lucide-react';
import StudyCard from '../StudyCard';
import InteractiveCharts from '../InteractiveCharts';
import Institutions from '../Institutions';
import ClinicalScenarios from '../ClinicalScenarios';
import MethylationAdvantages from '../MethylationAdvantages';
import CisendoInnovation from '../CisendoInnovation';
import CisendoTriageSimulator from '../CisendoTriageSimulator';
import CisendoClinicalData from '../CisendoClinicalData';
import { CISENDO_STUDIES, CISENDO_CHART_DATA, CISENDO_INSTITUTIONS } from '../../constants';
import { StudyCategory } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import SEO from '../SEO';

const CisendoPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Cisendo Specific Scenarios (Reusing icons/structure but new content implied by context)
  const scenarios = [
    {
      icon: <Target size={24} />,
      title: t('scenarios.aub.title'),
      description: t('scenarios.aub.desc')
    },
    {
      icon: <Users size={24} />,
      title: t('scenarios.postmeno.title'),
      description: t('scenarios.postmeno.desc.cisendo')
    },
    {
      icon: <Search size={24} />,
      title: t('scenarios.highrisk.title'),
      description: t('scenarios.highrisk.desc')
    }
  ];

  // Specific 5 Advantages from PDF
  const advantages = [
    {
      icon: <Users className="w-6 h-6 text-teal-600" />,
      title: t('adv.cisendo.coverage.title'),
      description: t('adv.cisendo.coverage.desc'),
      color: "bg-teal-50 border-teal-100"
    },
    {
      icon: <Target className="w-6 h-6 text-rose-500" />,
      title: t('adv.cisendo.convenience.title'),
      description: t('adv.cisendo.convenience.desc'),
      color: "bg-rose-50 border-rose-100"
    },
    {
      icon: <Search className="w-6 h-6 text-blue-500" />,
      title: t('adv.cisendo.market.title'),
      description: t('adv.cisendo.market.desc'),
      color: "bg-blue-50 border-blue-100"
    },
    {
      icon: <FileBarChart className="w-6 h-6 text-purple-500" />,
      title: t('adv.cisendo.data.title'),
      description: t('adv.cisendo.data.desc'),
      color: "bg-purple-50 border-purple-100"
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: t('adv.cisendo.throughput.title'),
      description: t('adv.cisendo.throughput.desc'),
      color: "bg-amber-50 border-amber-100"
    }
  ];

  // Filter Categories
  const getCategoryLabel = (cat: string) => {
    if (cat === 'All') return t('lib.filter.All');
    switch(cat) {
      case StudyCategory.AUB_TRIAGE: return t('lib.filter.AUB');
      case StudyCategory.PREMENOPAUSAL: return t('lib.filter.Premen');
      case StudyCategory.POSTMENOPAUSAL: return t('lib.filter.Postmen');
      default: return cat;
    }
  };

  const categories = ['All', ...Object.values(StudyCategory).filter(c => 
    CISENDO_STUDIES.some(s => s.category === c)
  )];

  const filteredStudies = activeCategory === 'All' 
    ? CISENDO_STUDIES 
    : CISENDO_STUDIES.filter(s => s.category === activeCategory);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "CISENDO",
    "alternateName": "禾蔻安",
    "description": "Non-invasive methylation-based detection for endometrial cancer.",
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
        title="CISENDO - Endometrial Cancer Methylation Detection"
        description="CISENDO (禾蔻安) offers non-invasive endometrial cancer detection using advanced methylation technology, ideal for AUB triage and postmenopausal screening."
        keywords={[
          'CISENDO', 'Endometrial Cancer', 'Methylation', 'AUB', 'Postmenopausal bleeding',
          '禾蔻安', '子宫内膜癌', '甲基化', '异常子宫出血', '绝经后出血'
        ]}
        schema={productSchema}
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden pt-20 pb-10">
        <div className="absolute inset-0 pointer-events-none z-0">
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
              <Sparkles size={16} /> Endometrial Health
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-slate-800 leading-[1.1] mb-8 tracking-tight">
            {t('hero.cisendo.title.prefix')} <br/>
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-700 to-rose-900">
              {t('hero.cisendo.title.highlight')}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {t('hero.cisendo.description').split(/(CDO1|CELF4)/g).map((part, i) => 
              ['CDO1', 'CELF4'].includes(part) ? (
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
            <p className="text-[10px] text-slate-400 mt-2 font-mono tracking-wide opacity-80">{t('hero.nmpa.cisendo.no')}</p>
          </div>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-10 md:py-20">
        
        {/* 1. Clinical Application Scenarios */}
        <div className="mb-24">
          <ClinicalScenarios items={scenarios} />
        </div>

        {/* 2. The Methylation Advantage (Updated Specific 5 Points) */}
        <div className="mb-24">
          <MethylationAdvantages items={advantages} />
        </div>

        {/* 3. The Innovation: Epigenetic Key & Scientific Basis */}
        <div className="mb-24">
          <CisendoInnovation />
        </div>

        {/* 4. Evidence & Validation: Method Comparison */}
        <div className="mb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-rose-600 font-bold uppercase tracking-widest text-xs mb-2 block">{t('app.evidenceBased')}</span>
            <h3 className="text-3xl font-serif text-slate-800 mb-6 italic">{t('cisendo.evidence.title')}</h3>
            <p className="text-slate-600 mb-8 leading-relaxed font-light text-lg">
              {t('cisendo.dataDesc')}
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 mt-2 rounded-full bg-rose-500 shrink-0"></span>
                <span className="text-slate-600 font-light">{t('cisendo.point1')}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 mt-2 rounded-full bg-rose-500 shrink-0"></span>
                <span className="text-slate-600 font-light">{t('cisendo.point2')}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 mt-2 rounded-full bg-rose-500 shrink-0"></span>
                <span className="text-slate-600 font-light">{t('cisendo.point3')}</span>
              </li>
            </ul>
          </div>
          <div className="h-full">
            <InteractiveCharts data={CISENDO_CHART_DATA} title="Endometrial Cancer Detection" subtitle="Sensitivity vs. Specificity" />
          </div>
        </div>

        {/* 5. Clinical Data Stats (Imaging Miss Rate etc.) */}
        <div className="mb-24">
          <CisendoClinicalData />
        </div>

        {/* 6. Smart Triage Simulator */}
        <div className="mb-32 scroll-mt-20">
          <CisendoTriageSimulator />
        </div>

        {/* 7. Institutions */}
        <div className="mb-32">
          <Institutions institutions={CISENDO_INSTITUTIONS} />
        </div>

        {/* 8. Studies Library */}
        <div id="evidence" className="scroll-mt-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-serif text-slate-800 mb-3 italic">{t('lib.title')}</h2>
              <p className="text-slate-500 font-light">{t('lib.desc')}</p>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar">
              <Filter size={18} className="text-slate-400 flex-shrink-0" />
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    activeCategory === cat 
                      ? 'bg-rose-800 text-white shadow-lg' 
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
    </>
  );
};

export default CisendoPage;
