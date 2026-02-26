
import React from 'react';
import { Guideline } from '../types';
import { BookOpen, ExternalLink, Calendar, Users, Award, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Props {
  guideline: Guideline;
}

const GuidelineCard: React.FC<Props> = ({ guideline }) => {
  const { language } = useLanguage();

  const title = language === 'zh' ? guideline.title_zh : guideline.title;
  const organization = language === 'zh' ? guideline.organization_zh : guideline.organization;
  const journal = language === 'zh' ? guideline.journal_zh : guideline.journal;
  const summary = language === 'zh' ? guideline.summary_zh : guideline.summary;
  const keyQuote = language === 'zh' ? guideline.keyQuote_zh : guideline.keyQuote;

  return (
    <div className={`glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-500 flex flex-col h-full group border-t-4 ${guideline.highlight ? 'border-t-teal-500 bg-teal-50/20' : 'border-t-slate-300'}`}>
      <div className="mb-6">
        {guideline.highlight && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-100/50 text-teal-800 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 border border-teal-200/50">
            <Award size={12} /> Key Consensus
          </span>
        )}
        
        <a 
          href={guideline.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block"
        >
          <h3 className="text-xl font-medium text-slate-900 leading-snug mb-3 font-serif group-hover:text-teal-700 transition-colors flex items-start gap-2">
            {title}
            {guideline.url && <ExternalLink size={16} className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-teal-500 flex-shrink-0" />}
          </h3>
        </a>
        
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500 mb-4 opacity-80">
            <span className="flex items-center gap-1.5">
                <Users size={12} /> {organization}
            </span>
            <span className="flex items-center gap-1.5">
                <BookOpen size={12} /> {journal}
            </span>
            <span className="flex items-center gap-1.5">
                <Calendar size={12} /> {guideline.year}
            </span>
        </div>
      </div>

      <div className="flex-grow space-y-6">
        <p className="text-slate-600 text-sm leading-relaxed font-light">
          {summary}
        </p>

        <div className="bg-white/60 rounded-xl p-5 border border-slate-100 relative">
          <Quote className="absolute top-4 left-4 text-slate-200 -z-10" size={40} />
          <p className="text-sm font-medium text-slate-800 font-serif italic relative z-10 pl-2 border-l-2 border-teal-500">
            "{keyQuote}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuidelineCard;
