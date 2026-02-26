import React from 'react';
import { Study } from '../types';
import { CheckCircle, Building2, Link2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Props {
  study: Study;
}

const StudyCard: React.FC<Props> = ({ study }) => {
  const { t, language } = useLanguage();

  const getCategoryLabel = (category: string) => {
    const map: Record<string, string> = {
      'ASC-US Triage': 'lib.filter.ASCUS',
      'Non-16/18 hrHPV': 'lib.filter.Non1618',
      'Postmenopausal / Older Women': 'lib.filter.Postmen',
      'Self-Sampling': 'lib.filter.Self',
      'Clinical Outcomes & Prediction': 'lib.filter.Outcome',
      'Methodology Comparison': 'lib.filter.Method',
      'AUB Triage': 'lib.filter.AUB',
      'Premenopausal AUB': 'lib.filter.Premen',
      'Diagnostic Accuracy': 'lib.filter.DiagAcc',
      'HR-HPV Triage': 'lib.filter.HrHpv',
      'Review': 'lib.filter.Review'
    };
    const key = map[category];
    return key ? t(key) : category;
  };

  const displayTitle = language === 'zh' ? (study.title_zh || study.title) : study.title;
  const displayInstitution = language === 'zh' ? (study.institution_zh || study.institution) : study.institution;
  const displayJournal = language === 'zh' ? (study.journal_zh || study.journal) : study.journal;
  const displaySummary = language === 'zh' ? (study.summary_zh || study.summary) : study.summary;
  const displayKeyFinding = language === 'zh' ? (study.keyFinding_zh || study.keyFinding) : study.keyFinding;
  const displayCategory = getCategoryLabel(study.category);

  return (
    <div className="glass-card rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full group border-t-4 border-t-transparent hover:border-t-teal-500">
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-white/80 border border-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
          {displayCategory}
        </span>
        
        {/* Title (No Link) */}
        <h3 className="text-xl font-medium text-slate-900 leading-snug mb-3 font-serif flex items-start gap-2 break-words">
          {displayTitle}
        </h3>
        
        <p className="text-xs text-slate-400 italic mb-3 font-serif">
          <span className="text-slate-600">{displayJournal}, {study.year}</span>
        </p>

        {/* Institution Info */}
        <div className="flex items-start gap-1.5 text-xs text-slate-500 mb-3 opacity-80">
            <Building2 size={12} className="mt-0.5 flex-shrink-0" />
            <span>{displayInstitution}</span>
        </div>

        {/* DOI Link */}
        {study.doi && study.doi !== 'N/A' && (
          <a 
            href={`https://doi.org/${study.doi}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[10px] text-teal-600 hover:text-teal-800 transition-colors font-medium bg-teal-50/50 border border-teal-100/50 px-2 py-1 rounded-full"
          >
            <Link2 size={10} />
            DOI: {study.doi}
          </a>
        )}
      </div>

      <div className="flex-grow">
        <p className="text-slate-600 mb-6 text-sm leading-relaxed font-light">
          {displaySummary}
        </p>

        <div className="bg-teal-50/50 rounded-xl p-4 mb-6 border border-teal-100/50">
          <div className="flex items-start gap-3">
            <CheckCircle className="text-teal-600 mt-0.5 flex-shrink-0" size={16} />
            <p className="text-sm font-medium text-teal-900 font-serif italic">
              "{displayKeyFinding}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyCard;
