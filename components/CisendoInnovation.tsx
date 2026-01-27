
import React from 'react';
import { Dna, ArrowDown, Activity, Layers } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
                
                <div className="flex flex-col items-center gap-4">
                    <div className="w-full flex justify-center">
                        <div className="w-40 h-24 bg-rose-100 rounded-[2rem] flex flex-col items-center justify-center border border-rose-200 shadow-sm relative overflow-hidden">
                            <span className="text-xs font-bold text-rose-800 uppercase tracking-widest z-10">Endometrium</span>
                            <div className="absolute w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-400 via-rose-100 to-transparent"></div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] text-slate-400 mb-1">Weak Adhesion</span>
                        <ArrowDown className="text-rose-300 animate-bounce" />
                    </div>

                    <div className="w-full flex justify-center">
                        <div className="w-28 h-28 rounded-full border-2 border-dashed border-rose-300 flex items-center justify-center p-2 relative bg-white/50">
                            <div className="w-3 h-3 bg-rose-500 rounded-full absolute top-4 left-8 animate-pulse"></div>
                            <div className="w-2 h-2 bg-rose-400 rounded-full absolute bottom-6 right-8 animate-pulse delay-75"></div>
                            <div className="w-2 h-2 bg-rose-600 rounded-full absolute top-10 right-4 animate-pulse delay-150"></div>
                            <span className="text-[10px] text-slate-500 text-center font-medium leading-tight">Shedding into<br/>Cervical Canal</span>
                        </div>
                    </div>

                    <ArrowDown className="text-rose-300" />

                    <div className="w-full flex justify-center">
                        <div className="w-40 h-14 bg-teal-50 rounded-xl flex items-center justify-center border border-teal-200 shadow-sm">
                            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest flex items-center gap-2">
                                <Dna size={14} /> PCR Detection
                            </span>
                        </div>
                    </div>
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
