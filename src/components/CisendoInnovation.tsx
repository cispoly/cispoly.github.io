
import React from 'react';
import { Dna, ArrowDown, Activity, Layers } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import MethylationProcessAnimation from './MethylationProcessAnimation';

const CisendoInnovation: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-16">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-slate-800 mb-4 italic">{t('inn.title')}</h2>
            <p className="text-slate-600 font-light">{t('inn.desc')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Scientific Concepts */}
            <div className="space-y-6">
                <div className="glass-card p-8 rounded-2xl border-l-4 border-l-rose-500 relative overflow-hidden group">
                    <div className="absolute right-0 top-0 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Layers size={120} className="text-rose-500" />
                    </div>
                    <h3 className="text-2xl font-serif text-rose-800 mb-2">{t('inn.cdo1')}</h3>
                    <p className="text-slate-600 font-light">{t('inn.cdo1.desc')}</p>
                </div>

                <div className="glass-card p-8 rounded-2xl border-l-4 border-l-teal-500 relative overflow-hidden group">
                    <div className="absolute right-0 top-0 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Activity size={120} className="text-teal-500" />
                    </div>
                    <h3 className="text-2xl font-serif text-teal-800 mb-2">{t('inn.celf4')}</h3>
                    <p className="text-slate-600 font-light">{t('inn.celf4.desc')}</p>
                </div>
            </div>

            {/* Right: Mechanism Visual */}
            <div className="glass-card p-8 rounded-[2rem] bg-gradient-to-b from-white/80 to-rose-50/50">
                <h3 className="text-xl font-serif text-slate-800 mb-6 text-center">{t('inn.mechanism')}</h3>
                
                <div className="w-full">
                    <MethylationProcessAnimation />
                </div>

                <p className="text-sm text-slate-500 mt-8 text-center leading-relaxed font-light px-4">
                    {t('inn.mechanism.desc')}
                </p>
            </div>
        </div>
    </div>
  );
};

export default CisendoInnovation;
