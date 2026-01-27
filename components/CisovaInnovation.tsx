
import React from 'react';
import { Dna, ArrowDown, Activity, Droplet } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CisovaInnovation: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-16">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-slate-800 mb-4 italic">{t('inn.cisova.title')}</h2>
            <p className="text-slate-600 font-light">{t('inn.cisova.desc')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Scientific Concepts */}
            <div className="space-y-6">
                <div className="glass-card p-8 rounded-2xl border-l-4 border-l-rose-500 relative overflow-hidden group">
                    <div className="absolute right-0 top-0 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Dna size={120} className="text-rose-500" />
                    </div>
                    <h3 className="text-2xl font-serif text-rose-800 mb-2">{t('inn.cisova.ctdna')}</h3>
                    <p className="text-slate-600 font-light">{t('inn.cisova.ctdna.desc')}</p>
                </div>

                <div className="glass-card p-8 rounded-2xl border-l-4 border-l-teal-500 relative overflow-hidden group">
                    <div className="absolute right-0 top-0 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Activity size={120} className="text-teal-500" />
                    </div>
                    <h3 className="text-2xl font-serif text-teal-800 mb-2">{t('inn.cisova.markers')}</h3>
                    <p className="text-slate-600 font-light">{t('inn.cisova.markers.desc')}</p>
                </div>
            </div>

            {/* Right: Mechanism Visual */}
            <div className="glass-card p-8 rounded-[2rem] bg-gradient-to-b from-white/80 to-rose-50/50">
                <div className="flex flex-col items-center gap-4">
                    {/* Tumor */}
                    <div className="w-full flex justify-center">
                        <div className="w-32 h-32 relative">
                            <div className="absolute inset-0 bg-rose-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
                            <div className="relative w-full h-full bg-rose-100 rounded-full border-2 border-rose-300 flex items-center justify-center overflow-hidden">
                                <div className="absolute w-full h-full bg-[radial-gradient(circle_at_30%_30%,_#fda4af_0%,_transparent_50%)]"></div>
                                <span className="text-xs font-bold text-rose-900 uppercase tracking-widest z-10">Tumor</span>
                                {/* Shedding particles */}
                                <div className="absolute w-2 h-2 bg-rose-500 rounded-full top-1/2 right-2 animate-ping"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] text-slate-400 mb-1">Apoptosis & Necrosis</span>
                        <ArrowDown className="text-rose-300 animate-bounce" />
                    </div>

                    {/* Bloodstream */}
                    <div className="w-full flex justify-center">
                        <div className="w-64 h-20 bg-red-50 rounded-full border border-red-100 relative overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 opacity-30">
                                <div className="w-full h-full bg-[linear-gradient(45deg,_transparent_25%,_#fee2e2_25%,_#fee2e2_50%,_transparent_50%,_transparent_75%,_#fee2e2_75%,_#fee2e2_100%)] bg-[length:20px_20px] animate-[pulse_4s_linear_infinite]"></div>
                            </div>
                            <div className="z-10 flex items-center gap-2">
                                <Droplet size={16} className="text-red-500" />
                                <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Blood Stream (ctDNA)</span>
                            </div>
                            {/* Floating DNA bits */}
                            <div className="absolute w-2 h-1 bg-rose-400 rounded-full top-4 left-10 animate-pulse"></div>
                            <div className="absolute w-2 h-1 bg-rose-400 rounded-full bottom-4 right-16 animate-pulse delay-300"></div>
                        </div>
                    </div>

                    <ArrowDown className="text-rose-300" />

                    <div className="w-full flex justify-center">
                        <div className="w-40 h-14 bg-teal-50 rounded-xl flex items-center justify-center border border-teal-200 shadow-sm">
                            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest flex items-center gap-2">
                                <Dna size={14} /> qPCR Detection
                            </span>
                        </div>
                    </div>
                </div>

                <p className="text-sm text-slate-500 mt-8 text-center leading-relaxed font-light px-4">
                    {t('inn.cisova.mechanism.desc')}
                </p>
            </div>
        </div>
    </div>
  );
};

export default CisovaInnovation;
