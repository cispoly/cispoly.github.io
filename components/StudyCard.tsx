import React from 'react';
import { Study } from '../types';
import { Users, CheckCircle, ExternalLink, Building2, Link2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Props {
  study: Study;
}

const StudyCard: React.FC<Props> = ({ study }) => {
  const { t } = useLanguage();
  return (
    <div className="glass-card rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full group border-t-4 border-t-transparent hover:border-t-teal-500">
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-white/80 border border-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
          {study.category}
        </span>
        <a 
          href={study.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block"
        >
          {/* Updated title styling */}
          <h3 className="text-xl font-medium text-slate-900 leading-snug mb-3 font-serif group-hover:text-teal-700 transition-colors flex items-start gap-2 break-words">
            {study.title}
            <ExternalLink size={14} className="mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-teal-500 flex-shrink-0" />
          </h3>
        </a>
        
        <p className="text-xs text-slate-400 italic mb-3 font-serif">
          {study.authors} • <span className="text-slate-600">{study.journal}, {study.year}</span>
        </p>

        {/* Institution Info */}
        <div className="flex items-start gap-1.5 text-xs text-slate-500 mb-3 opacity-80">
            <Building2 size={12} className="mt-0.5 flex-shrink-0" />
            <span>{study.institution}</span>
        </div>

        {/* DOI Link */}
        {study.doi && (
          <a 
            href={study.url}
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
          {study.summary}
        </p>

        <div className="bg-teal-50/50 rounded-xl p-4 mb-6 border border-teal-100/50">
          <div className="flex items-start gap-3">
            <CheckCircle className="text-teal-600 mt-0.5 flex-shrink-0" size={16} />
            <p className="text-sm font-medium text-teal-900 font-serif italic">
              "{study.keyFinding}"
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100/50">
        <div className="text-center">
          <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">{t('lib.card.sens')}</p>
          <p className="text-lg font-serif text-slate-800">
            {study.metrics.sensitivity !== undefined ? (typeof study.metrics.sensitivity === 'number' ? `${study.metrics.sensitivity}%` : study.metrics.sensitivity) : '-'}
          </p>
        </div>
        <div className="text-center">
          <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">{t('lib.card.spec')}</p>
          <p className="text-lg font-serif text-slate-800">
             {study.metrics.specificity !== undefined ? (typeof study.metrics.specificity === 'number' ? `${study.metrics.specificity}%` : study.metrics.specificity) : '-'}
          </p>
        </div>
        <div className="text-center border-l border-slate-100/50">
          <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold flex justify-center items-center gap-1">
             <Users size={10} /> {t('lib.card.n')}
          </p>
          <p className="text-lg font-serif text-slate-400">{study.populationSize || '-'}</p>
        </div>
      </div>
    </div>
  );
};

export default StudyCard;