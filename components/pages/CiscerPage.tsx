
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Award, Filter } from 'lucide-react';
import StudyCard from '../StudyCard';
import TriageSimulator from '../TriageSimulator';
import Institutions from '../Institutions';
import ClinicalScenarios from '../ClinicalScenarios';
import ClinicalChallenge from '../ClinicalChallenge';
import MethylationAdvantages from '../MethylationAdvantages';
import CiscerPerformanceSection from '../CiscerPerformanceSection';
import { STUDIES, CISCER_INSTITUTIONS } from '../../constants';
import { StudyCategory } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import SEO from '../SEO';

const CiscerPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const getCategoryLabel = (cat: string) => {
    if (cat === 'All') return t('lib.filter.All');
    switch(cat) {
      case StudyCategory.ASCUS_TRIAGE: return t('lib.filter.ASCUS');
      case StudyCategory.HR_HPV_NON16_18: return t('lib.filter.Non1618');
      case StudyCategory.HPV_16_18_TRIAGE: return t('lib.filter.HPV1618');
      case StudyCategory.HR_HPV_TRIAGE: return t('lib.filter.HrHPV');
      case StudyCategory.POSTMENOPAUSAL: return t('lib.filter.Postmen');
      case StudyCategory.SELF_SAMPLING: return t('lib.filter.Self');
      case StudyCategory.MINIMALLY_ABNORMAL: return t('lib.filter.MiniAbnormal');
      case StudyCategory.PATHOLOGICAL_UPGRADING: return t('lib.filter.PathUpgrade');
      case StudyCategory.VAGINAL_DYSBIOSIS: return t('lib.filter.Dysbiosis');
      case StudyCategory.HPV_GENOTYPING_TRIAGE: return t('lib.filter.Genotyping');
      case StudyCategory.HSIL_DIAGNOSIS: return t('lib.filter.HSIL');
      case StudyCategory.MRNA_TRIAGE: return t('lib.filter.mRNA');
      case StudyCategory.TREATMENT_PROTOCOL: return t('lib.filter.Protocol');
      case StudyCategory.CLINICAL_OUTCOMES: return t('lib.filter.Outcome');
      case StudyCategory.METHODOLOGY: return t('lib.filter.Method');
      default: return cat;
    }
  };

  const categories = ['All', ...Object.values(StudyCategory).filter(c => 
    Object.values(STUDIES).some(s => s.category === c)
  )];

  const filteredStudies = activeCategory === 'All' 
    ? STUDIES 
    : STUDIES.filter(s => s.category === activeCategory);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "CISCER",
    "alternateName": "禾宫康",
    "description": "Methylation-based triage test for cervical cancer screening, targeting PAX1 and JAM3 genes.",
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
        title="CISCER - Cervical Cancer Methylation Triage (PAX1/JAM3)"
        description="CISCER (禾宫康) is a high-accuracy methylation test for cervical cancer triage, utilizing PAX1 and JAM3 biomarkers to reduce unnecessary colposcopies."
        keywords={[
          'CISCER', 'Cervical Cancer', 'Methylation', 'PAX1', 'JAM3', 'HPV Triage',
          '禾宫康', '宫颈癌', '甲基化', '分流', '癌症筛查',
          'ASCUS', 'HPV positive', 'colposcopy referral'
        ]}
        schema={productSchema}
      />
      {/* CISCER Specialized Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden pt-20 pb-10">
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Background SVG with Teal Theme */}
          <svg className="absolute right-0 top-0 h-full w-full md:w-2/3 opacity-30 text-teal-200" viewBox="0 0 500 800" preserveAspectRatio="xMidYMid slice">
            <path d="M100,0 C150,100 50,200 150,300 C250,400 300,350 400,500 C450,575 350,650 400,800 L500,800 L500,0 Z" fill="url(#gradientTeal)" />
            <defs>
              <linearGradient id="gradientTeal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#f0fdfa" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating Orbs - Teal Theme */}
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
            <span className="flex items-center gap-2 px-5 py-2 bg-white/60 backdrop-blur-md shadow-sm rounded-full text-sm font-semibold text-teal-800 border border-teal-100">
              <Sparkles size={16} /> Cervical Health
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-slate-800 leading-[1.1] mb-8 tracking-tight">
            {t('hero.ciscer.title.prefix')} <br/>
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-700 to-teal-900">
              {t('hero.ciscer.title.highlight')}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {t('hero.ciscer.description').split(/(PAX1|JAM3)/g).map((part, i) => 
              ['PAX1', 'JAM3'].includes(part) ? (
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
            <p className="text-[10px] text-slate-400 mt-2 font-mono tracking-wide opacity-80">{t('hero.nmpa.ciscer.no')}</p>
          </div>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-10 md:py-20">
        <ClinicalChallenge />
        <div className="mb-24"><ClinicalScenarios /></div>
        <div className="mb-32"><MethylationAdvantages /></div>
        <div className="mb-32">
          <CiscerPerformanceSection />
        </div>
        <div id="simulator" className="mb-32 scroll-mt-20"><TriageSimulator /></div>
        <div className="mb-32">
          <Institutions institutions={CISCER_INSTITUTIONS} />
        </div>
        <div id="evidence" className="scroll-mt-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-serif text-slate-800 mb-3 italic">{t('lib.title')}</h2>
              <p className="text-slate-500 font-light">{t('lib.desc')}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
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
    </>
  );
};

export default CiscerPage;
