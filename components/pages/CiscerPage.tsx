
import React, { useState } from 'react';
import Hero from '../Hero';
import StudyCard from '../StudyCard';
import InteractiveCharts from '../InteractiveCharts';
import TriageSimulator from '../TriageSimulator';
import Institutions from '../Institutions';
import ClinicalScenarios from '../ClinicalScenarios';
import ClinicalChallenge from '../ClinicalChallenge';
import MethylationAdvantages from '../MethylationAdvantages';
import { STUDIES, COMPARISON_DATA } from '../../constants';
import { StudyCategory } from '../../types';
import { Filter } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const CiscerPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const getCategoryLabel = (cat: string) => {
    if (cat === 'All') return t('lib.filter.All');
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

  const categories = ['All', ...Object.values(StudyCategory).filter(c => 
    Object.values(STUDIES).some(s => s.category === c)
  )];

  const filteredStudies = activeCategory === 'All' 
    ? STUDIES 
    : STUDIES.filter(s => s.category === activeCategory);

  return (
    <>
      <Hero />
      <main className="max-w-7xl mx-auto px-4 py-10 md:py-20">
        <ClinicalChallenge />
        <div className="mb-24"><ClinicalScenarios /></div>
        <div className="mb-32"><MethylationAdvantages /></div>
        <div className="mb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-2 block">{t('app.evidenceBased')}</span>
            <h3 className="text-3xl font-serif text-slate-800 mb-6 italic">{t('app.dataDriven')}</h3>
            <p className="text-slate-600 mb-8 leading-relaxed font-light text-lg">{t('app.dataDesc')}</p>
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
            <InteractiveCharts data={COMPARISON_DATA} />
          </div>
        </div>
        <div id="simulator" className="mb-32 scroll-mt-20"><TriageSimulator /></div>
        <div className="mb-32"><Institutions /></div>
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
