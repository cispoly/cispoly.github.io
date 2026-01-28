
import React, { useState } from 'react';
import { ArrowRight, RotateCcw, Activity, AlertCircle, CheckCircle, Stethoscope, ChevronDown, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CisendoTriageSimulator: React.FC = () => {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [history, setHistory] = useState<string[]>([]);
  const [showFlowchart, setShowFlowchart] = useState(true);

  // --- Simulator Logic ---
  const reset = () => {
    setStep(0);
    setHistory([]);
  };

  const next = (choice: string, nextStep: number) => {
    setHistory([...history, choice]);
    setStep(nextStep);
  };

  return (
    <div className="bg-gradient-to-br from-rose-950 to-slate-900 text-white rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden border border-rose-900/50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-rose-800/30 pb-6 gap-6">
                <div>
                    <h2 className="text-3xl font-serif italic text-white/95">{t('triage.title')}</h2>
                    <p className="text-rose-200/60 text-sm mt-1 max-w-xl">{t('triage.subtitle')}</p>
                </div>
                <div className="flex gap-4">
                     <button 
                        onClick={() => setShowFlowchart(!showFlowchart)}
                        className="text-xs uppercase tracking-widest px-4 py-2 bg-rose-900/40 hover:bg-rose-900/60 rounded-full transition-colors border border-rose-700/50 flex items-center gap-2"
                    >
                        {t('sim.toggleChart').split('/')[0]} <ChevronDown size={14} className={`transition-transform ${showFlowchart ? 'rotate-180' : ''}`} />
                    </button>
                    {step > 0 && (
                        <button onClick={reset} className="flex items-center gap-2 text-xs uppercase tracking-widest px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                            <RotateCcw size={12} /> {t('sim.reset')}
                        </button>
                    )}
                </div>
            </div>

            {/* Flowchart Diagram (Optimized SVG) */}
            {showFlowchart && (
                <div className="overflow-x-auto pb-8 mb-8 border-b border-rose-800/20 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="min-w-[900px] flex flex-col items-center">
                        <svg width="900" height="520" viewBox="0 0 900 520" className="max-w-5xl w-full">
                            <defs>
                                <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#fda4af" />
                                </marker>
                                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                            </defs>

                            {/* Level 1: Root */}
                            <rect x="300" y="0" width="300" height="40" rx="20" fill="#881337" stroke="#fb7185" strokeWidth="1" />
                            <text x="450" y="25" textAnchor="middle" fill="#ffe4e6" fontSize="14" fontWeight="bold" fontFamily="serif">{t('triage.root')}</text>

                            {/* Level 2: Groups */}
                            <line x1="450" y1="40" x2="450" y2="70" stroke="#fda4af" strokeWidth="1" />
                            <line x1="150" y1="70" x2="750" y2="70" stroke="#fda4af" strokeWidth="1" />
                            <line x1="150" y1="70" x2="150" y2="90" stroke="#fda4af" strokeWidth="1" markerEnd="url(#arrow)" />
                            <line x1="450" y1="70" x2="450" y2="90" stroke="#fda4af" strokeWidth="1" markerEnd="url(#arrow)" />
                            <line x1="750" y1="70" x2="750" y2="90" stroke="#fda4af" strokeWidth="1" markerEnd="url(#arrow)" />

                            <rect x="50" y="90" width="200" height="30" rx="10" fill="#4c0519" stroke="#9f1239" strokeWidth="1" />
                            <text x="150" y="110" textAnchor="middle" fill="#fecdd3" fontSize="12">{t('triage.highRisk')}</text>

                            <rect x="350" y="90" width="200" height="30" rx="10" fill="#4c0519" stroke="#9f1239" strokeWidth="1" />
                            <text x="450" y="110" textAnchor="middle" fill="#fecdd3" fontSize="12">{t('triage.increasedRisk')}</text>

                            <rect x="650" y="90" width="200" height="30" rx="10" fill="#4c0519" stroke="#9f1239" strokeWidth="1" />
                            <text x="750" y="110" textAnchor="middle" fill="#fecdd3" fontSize="12">{t('triage.symptomatic')}</text>

                            {/* Level 3: Combined Assessment */}
                            <path d="M150 120 L450 150 M450 120 L450 150 M750 120 L450 150" stroke="#fda4af" strokeWidth="1" opacity="0.5" />
                            <line x1="450" y1="150" x2="450" y2="170" stroke="#fda4af" strokeWidth="2" markerEnd="url(#arrow)" />

                            <rect x="300" y="170" width="300" height="50" rx="10" fill="#be123c" stroke="#fb7185" strokeWidth="2" filter="url(#glow)" />
                            <text x="450" y="200" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">{t('triage.combined')}</text>

                            {/* Level 4: The 4 Branches */}
                            {/* Connectors from Combined */}
                            <line x1="450" y1="220" x2="450" y2="240" stroke="#fda4af" strokeWidth="1" />
                            <line x1="100" y1="240" x2="800" y2="240" stroke="#fda4af" strokeWidth="1" />

                            {/* Branch 1: Imaging Atypical */}
                            <line x1="100" y1="240" x2="100" y2="260" stroke="#fda4af" strokeWidth="1" markerEnd="url(#arrow)" />
                            <rect x="25" y="260" width="150" height="30" rx="6" fill="#1e293b" stroke="#475569" />
                            <text x="100" y="280" textAnchor="middle" fill="#94a3b8" fontSize="11">{t('triage.imgAtypical')}</text>

                            {/* Branch 2: Imaging Typical */}
                            <line x1="333" y1="240" x2="333" y2="260" stroke="#fda4af" strokeWidth="1" markerEnd="url(#arrow)" />
                            <rect x="258" y="260" width="150" height="30" rx="6" fill="#881337" stroke="#fb7185" />
                            <text x="333" y="280" textAnchor="middle" fill="#ffe4e6" fontSize="11" fontWeight="bold">{t('triage.imgTypical')}</text>

                            {/* Branch 3: Cisendo High */}
                            <line x1="566" y1="240" x2="566" y2="260" stroke="#fda4af" strokeWidth="1" markerEnd="url(#arrow)" />
                            <rect x="491" y="260" width="150" height="30" rx="6" fill="#881337" stroke="#fb7185" />
                            <text x="566" y="280" textAnchor="middle" fill="#ffe4e6" fontSize="11" fontWeight="bold">{t('triage.cisHigh')}</text>

                            {/* Branch 4: Cisendo Low */}
                            <line x1="800" y1="240" x2="800" y2="260" stroke="#fda4af" strokeWidth="1" markerEnd="url(#arrow)" />
                            <rect x="725" y="260" width="150" height="30" rx="6" fill="#1e293b" stroke="#475569" />
                            <text x="800" y="280" textAnchor="middle" fill="#94a3b8" fontSize="11">{t('triage.cisLow')}</text>

                            {/* --- Path 1 Sub-Process: Imaging Atypical -> Cisendo Eval --- */}
                            
                            {/* Cisendo Eval Node */}
                            <line x1="100" y1="290" x2="100" y2="320" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#arrow)" />
                            <rect x="25" y="320" width="150" height="30" rx="6" fill="#1e293b" stroke="#475569" />
                            <text x="100" y="340" textAnchor="middle" fill="#fff" fontSize="11">{t('triage.cisendoEval')}</text>

                            {/* Eval Splits to Low/High */}
                            <line x1="100" y1="350" x2="100" y2="370" stroke="#94a3b8" strokeWidth="1" />
                            <line x1="50" y1="370" x2="150" y2="370" stroke="#94a3b8" strokeWidth="1" />
                            
                            {/* Left: Low Risk -> Follow up */}
                            <line x1="50" y1="370" x2="50" y2="420" stroke="#2dd4bf" strokeWidth="1" markerEnd="url(#arrow)" />
                            <rect x="0" y="420" width="100" height="30" rx="6" fill="#134e4a" stroke="#2dd4bf" />
                            <text x="50" y="440" textAnchor="middle" fill="#5eead4" fontSize="11" fontWeight="bold">{t('triage.followup')}</text>

                            {/* Right: High Risk -> Biopsy */}
                            <line x1="150" y1="370" x2="150" y2="400" stroke="#fb7185" strokeWidth="1" />
                            {/* Connect High Risk to Biopsy Box */}
                            <path d="M150 400 L450 420" stroke="#fb7185" strokeWidth="1" fill="none" markerEnd="url(#arrow)" opacity="0.6" />
                            <rect x="100" y="370" width="100" height="20" rx="4" fill="#881337" stroke="#fb7185" />
                            <text x="150" y="384" textAnchor="middle" fill="#ffe4e6" fontSize="10" fontWeight="bold">{t('triage.highRisk')}</text>

                            {/* --- Outcome: Hysteroscopy (Consolidated) --- */}
                            <rect x="350" y="420" width="200" height="40" rx="8" fill="#be123c" stroke="#fb7185" strokeWidth="2" filter="url(#glow)" />
                            <text x="450" y="445" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">{t('triage.outcome.biopsy')}</text>

                            {/* Connect Typical and Cisendo High to Biopsy Box */}
                            <line x1="333" y1="290" x2="400" y2="420" stroke="#fb7185" strokeWidth="1" markerEnd="url(#arrow)" />
                            <line x1="566" y1="290" x2="500" y2="420" stroke="#fb7185" strokeWidth="1" markerEnd="url(#arrow)" />
                            
                            {/* Outcome: Follow-up (Right - from Cisendo Low directly) */}
                            <line x1="800" y1="290" x2="800" y2="420" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#arrow)" />
                            <rect x="750" y="420" width="100" height="30" rx="6" fill="#134e4a" stroke="#2dd4bf" />
                            <text x="800" y="440" textAnchor="middle" fill="#5eead4" fontSize="11" fontWeight="bold">{t('triage.followup')}</text>

                        </svg>

                        {/* Definition Footnote */}
                        <div className="mt-2 text-[10px] md:text-xs text-rose-200/60 max-w-5xl w-full border-t border-rose-800/30 pt-3 flex flex-col gap-2 items-start leading-relaxed">
                            <div className="flex gap-2 items-start">
                                <Info size={14} className="flex-shrink-0 mt-0.5 text-rose-400" />
                                <div>
                                    <span className="font-bold text-rose-300 mr-1">{t('triage.def.title')}:</span>
                                    <span>{t('triage.def.content')}</span>
                                </div>
                            </div>
                            <div className="flex gap-2 items-start ml-5 opacity-80">
                                <span className="font-bold text-teal-300 mr-1 whitespace-nowrap">{t('triage.imgTypical')}:</span>
                                <span>{t('triage.imgTypical.def')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Interactive Simulator Area */}
            <div className="min-h-[300px] flex flex-col justify-center max-w-4xl mx-auto">
                
                {/* Step 0: Start */}
                {step === 0 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-300">
                                <Activity size={24} />
                            </div>
                            <h3 className="text-xl font-serif text-rose-100">{t('sim.cisendo.step1')}</h3>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                            <button onClick={() => next(t('sim.cisendo.step1.btn1'), 1)} className="p-6 bg-slate-800/50 border border-rose-500/20 rounded-2xl text-left hover:bg-rose-900/20 hover:border-rose-500/50 transition-all group">
                                <span className="block font-bold text-lg text-rose-200 group-hover:text-white mb-2">Group A</span>
                                <span className="text-sm text-slate-400">{t('sim.cisendo.step1.btn1')}</span>
                            </button>
                            <button onClick={() => next(t('sim.cisendo.step1.btn2'), 1)} className="p-6 bg-slate-800/50 border border-rose-500/20 rounded-2xl text-left hover:bg-rose-900/20 hover:border-rose-500/50 transition-all group">
                                <span className="block font-bold text-lg text-rose-200 group-hover:text-white mb-2">Group B</span>
                                <span className="text-sm text-slate-400">{t('sim.cisendo.step1.btn2')}</span>
                            </button>
                            <button onClick={() => next(t('sim.cisendo.step1.btn3'), 1)} className="p-6 bg-slate-800/50 border border-rose-500/20 rounded-2xl text-left hover:bg-rose-900/20 hover:border-rose-500/50 transition-all group">
                                <span className="block font-bold text-lg text-rose-200 group-hover:text-white mb-2">Group C</span>
                                <span className="text-sm text-slate-400">{t('sim.cisendo.step1.btn3')}</span>
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 1: Combined Assessment Info */}
                {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
                        <div className="bg-rose-900/20 border border-rose-500/30 p-8 rounded-3xl inline-block max-w-2xl">
                             <h3 className="text-2xl font-serif text-white mb-4">{t('sim.cisendo.step2')}</h3>
                             <p className="text-rose-200/80 mb-8">{t('sim.cisendo.step2.desc')}</p>
                             <button onClick={() => next(t('sim.cisendo.step2'), 2)} className="px-8 py-3 bg-white text-rose-900 font-bold rounded-full hover:scale-105 transition-transform shadow-lg">
                                {t('sim.cisendo.step3')}
                             </button>
                        </div>
                    </div>
                )}

                {/* Step 2: Assessment Results Input */}
                {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center gap-4 mb-8 justify-center">
                            <Stethoscope size={32} className="text-teal-400" />
                            <h3 className="text-xl font-serif text-white">{t('sim.cisendo.step3')}</h3>
                        </div>
                        <div className="grid gap-4 max-w-2xl mx-auto">
                            <button onClick={() => next(t('sim.cisendo.step3.typical'), 3)} className="p-5 bg-rose-950/60 border border-rose-600/40 rounded-xl text-left hover:bg-rose-900 transition-all flex items-center justify-between group">
                                <span className="text-rose-200 font-medium group-hover:text-white">{t('sim.cisendo.step3.typical')}</span>
                                <ArrowRight className="text-rose-500 opacity-50 group-hover:opacity-100" />
                            </button>
                            <button onClick={() => next(t('sim.cisendo.step3.atypical_high'), 3)} className="p-5 bg-rose-950/40 border border-rose-400/30 rounded-xl text-left hover:bg-rose-900 transition-all flex items-center justify-between group">
                                <span className="text-rose-200 font-medium group-hover:text-white">{t('sim.cisendo.step3.atypical_high')}</span>
                                <ArrowRight className="text-rose-500 opacity-50 group-hover:opacity-100" />
                            </button>
                            <button onClick={() => next(t('sim.cisendo.step3.atypical_low'), 4)} className="p-5 bg-teal-950/40 border border-teal-400/30 rounded-xl text-left hover:bg-teal-900 transition-all flex items-center justify-between group">
                                <span className="text-teal-200 font-medium group-hover:text-white">{t('sim.cisendo.step3.atypical_low')}</span>
                                <ArrowRight className="text-teal-500 opacity-50 group-hover:opacity-100" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Referral Outcome */}
                {step === 3 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
                        <div className="bg-rose-900/40 border border-rose-500 p-8 rounded-[2rem] inline-block max-w-lg shadow-2xl shadow-rose-900/50">
                            <div className="inline-flex p-4 bg-rose-500/20 rounded-full mb-6 text-rose-400 animate-pulse">
                                <AlertCircle size={48} />
                            </div>
                            <h3 className="text-3xl font-serif text-white mb-4">{t('sim.cisendo.outcome.refer')}</h3>
                            <p className="text-rose-200 text-lg">{t('sim.cisendo.outcome.refer.desc')}</p>
                        </div>
                    </div>
                )}

                {/* Step 4: Follow-up Outcome */}
                {step === 4 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
                        <div className="bg-teal-900/40 border border-teal-500 p-8 rounded-[2rem] inline-block max-w-lg shadow-2xl shadow-teal-900/50">
                            <div className="inline-flex p-4 bg-teal-500/20 rounded-full mb-6 text-teal-400">
                                <CheckCircle size={48} />
                            </div>
                            <h3 className="text-3xl font-serif text-white mb-4">{t('sim.cisendo.outcome.follow')}</h3>
                            <p className="text-teal-100 text-lg">{t('sim.cisendo.outcome.follow.desc')}</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Breadcrumbs */}
            <div className="mt-12 pt-6 border-t border-rose-800/30 flex flex-wrap gap-2 text-sm text-rose-200/50 items-center font-light">
                {history.length > 0 && <span className="uppercase text-xs font-bold tracking-widest mr-2 opacity-50">Pathway:</span>}
                {history.map((h, i) => (
                    <React.Fragment key={i}>
                        {i > 0 && <ArrowRight size={12} />}
                        <span className={`px-3 py-1 rounded-full text-xs ${i === history.length - 1 ? 'bg-white/10 text-white' : 'bg-black/20'}`}>
                            {h}
                        </span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    </div>
  );
};

export default CisendoTriageSimulator;
