import React from 'react';
import { Users, AlertTriangle, ArrowRight, ArrowDown, FileWarning, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ClinicalChallenge: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="mb-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-serif text-slate-800 mb-6 italic">{t('challenge.title')}</h2>
        <p className="text-xl text-slate-600 leading-relaxed font-light">
          {t('challenge.desc')}
        </p>
      </div>

      {/* Visual Diagram - Glassmorphism Style */}
      <div className="glass-card rounded-[3rem] p-8 md:p-12 shadow-xl shadow-rose-100/50 relative overflow-hidden">
        
        {/* Soft Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-50/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          
          {/* Step 1: Broad Screening */}
          <div className="flex-1 text-center group w-full md:w-auto">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-md text-slate-500 mb-6 group-hover:scale-105 transition-transform duration-500 border border-slate-50">
              <Users size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-serif text-slate-900 mb-2">{t('challenge.step1')}</h3>
            <p className="text-slate-500 text-sm leading-relaxed px-4">
              {t('challenge.step1.desc')}
            </p>
          </div>

          {/* Connector Arrow */}
          <div className="text-slate-300">
            <ArrowRight className="hidden md:block w-8 h-8 opacity-50" />
            <ArrowDown className="md:hidden w-8 h-8 opacity-50" />
          </div>

           {/* Step 2: The Dual Bottleneck */}
           <div className="flex-1 w-full md:max-w-sm flex flex-col gap-4 relative group">
             
             {/* Problem A: Low Specificity */}
             <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-rose-100 shadow-sm hover:shadow-lg hover:border-rose-200 transition-all duration-300">
                <div className="flex items-start gap-4">
                    <div className="bg-rose-50 text-rose-500 p-3 rounded-full shrink-0">
                       <AlertTriangle size={20} />
                    </div>
                    <div>
                       <h4 className="font-serif font-medium text-slate-800 text-lg">{t('challenge.step2a.title')}</h4>
                       <p className="text-sm text-slate-500 mt-1">
                         {t('challenge.step2a.desc')}
                       </p>
                    </div>
                </div>
             </div>

             {/* Problem B: Missed Diagnosis */}
             <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-orange-100 shadow-sm hover:shadow-lg hover:border-orange-200 transition-all duration-300">
                <div className="flex items-start gap-4">
                    <div className="bg-orange-50 text-orange-500 p-3 rounded-full shrink-0">
                       <FileWarning size={20} />
                    </div>
                    <div>
                       <h4 className="font-serif font-medium text-slate-800 text-lg">{t('challenge.step2b.title')}</h4>
                       <p className="text-sm text-slate-500 mt-1">
                         {t('challenge.step2b.desc')}
                       </p>
                    </div>
                </div>
             </div>
           </div>

          {/* Connector Arrow */}
          <div className="text-slate-300">
            <ArrowRight className="hidden md:block w-8 h-8 opacity-50" />
            <ArrowDown className="md:hidden w-8 h-8 opacity-50" />
          </div>

          {/* Step 3: The Solution */}
          <div className="flex-1 text-center group w-full md:w-auto">
             <div className="relative">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 text-white mb-6 shadow-lg shadow-teal-200 group-hover:shadow-teal-300 group-hover:-translate-y-1 transition-all duration-500">
                  <ShieldCheck size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-teal-900 mb-2">{t('challenge.step3')}</h3>
                <p className="text-slate-500 text-sm leading-relaxed px-2">
                  {t('challenge.step3.desc')}
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalChallenge;