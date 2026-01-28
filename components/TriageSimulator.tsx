
import React, { useState } from 'react';
import { ArrowRight, RotateCcw, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TriageSimulator: React.FC = () => {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [history, setHistory] = useState<string[]>([]);
  const [showFlowchart, setShowFlowchart] = useState(false);

  // Helper to determine if we are in the high-risk 16/18 path
  const is1618Path = history[0] === t('sim.btn.1618') || history[0] === "hrHPV Positive (16/18)";

  const reset = () => {
    setStep(0);
    setHistory([]);
  };

  const next = (choice: string, nextStep: number) => {
    setHistory([...history, choice]);
    setStep(nextStep);
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden border border-slate-700">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-slate-700/50 pb-6">
          <div>
            <h2 className="text-3xl font-serif italic text-white/90">{t('sim.title')}</h2>
            <p className="text-slate-400 text-sm mt-2 flex items-center gap-2 font-light">
              <Info size={14} />
              {t('sim.subtitle')}
            </p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button 
              onClick={() => setShowFlowchart(!showFlowchart)}
              className="flex-1 md:flex-none text-center text-xs uppercase tracking-widest px-6 py-3 rounded-full bg-slate-700/50 hover:bg-slate-700 transition-colors border border-slate-600 backdrop-blur-sm"
            >
              {showFlowchart ? t('sim.toggleChart').split('/')[1] : t('sim.toggleChart').split('/')[0]}
            </button>
            {step > 0 && (
              <button onClick={reset} className="flex-none flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-slate-300 hover:text-white transition-colors px-6 py-3 bg-slate-800 rounded-full border border-slate-700">
                <RotateCcw size={12} /> {t('sim.reset')}
              </button>
            )}
          </div>
        </div>

        {showFlowchart && (
          <div className="mb-10 bg-white/5 rounded-2xl p-4 md:p-8 border border-white/10 animate-in fade-in zoom-in duration-300 overflow-x-auto">
             <h3 className="text-xs uppercase tracking-widest text-teal-400 mb-6 text-center font-bold">{t('sim.chartTitle')}</h3>
             <div className="flex flex-col items-center min-w-[600px]">
                {/* SVG Flowchart */}
                <svg width="100%" height="280" viewBox="0 0 800 280" className="max-w-3xl">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
                    </marker>
                    <marker id="arrowhead-pos" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#fb7185" />
                    </marker>
                    <marker id="arrowhead-neg" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#2dd4bf" />
                    </marker>
                  </defs>

                  {/* Nodes */}
                  <rect x="250" y="0" width="300" height="50" rx="25" fill="#1e293b" stroke="#475569" strokeWidth="1" />
                  <text x="400" y="30" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="400" fontFamily="serif">HPV (+) / Cytology (ASC-US)</text>

                  <line x1="400" y1="50" x2="400" y2="90" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#arrowhead)" />

                  <rect x="300" y="90" width="200" height="50" rx="25" fill="#0f766e" stroke="#2dd4bf" strokeWidth="1" />
                  <text x="400" y="120" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="600" fontFamily="serif">PAX1/JAM3 Methylation</text>

                  {/* Branches */}
                  <path d="M300 115 L150 115 L150 180" stroke="#fb7185" strokeWidth="1" fill="none" markerEnd="url(#arrowhead-pos)" strokeDasharray="5,5" />
                  <path d="M500 115 L650 115 L650 180" stroke="#2dd4bf" strokeWidth="1" fill="none" markerEnd="url(#arrowhead-neg)" strokeDasharray="5,5" />

                  {/* Outcomes */}
                  <rect x="50" y="180" width="200" height="60" rx="12" fill="#881337" stroke="#fb7185" strokeWidth="1" />
                  <text x="150" y="205" textAnchor="middle" fill="#fecaca" fontSize="14" fontWeight="bold">Positive (+)</text>
                  <text x="150" y="225" textAnchor="middle" fill="#fecaca" fontSize="12">Refer to Colposcopy</text>

                  <rect x="550" y="180" width="200" height="60" rx="12" fill="#134e4a" stroke="#2dd4bf" strokeWidth="1" />
                  <text x="650" y="205" textAnchor="middle" fill="#ccfbf1" fontSize="14" fontWeight="bold">Negative (-)</text>
                  <text x="650" y="225" textAnchor="middle" fill="#ccfbf1" fontSize="12">Follow-up</text>
                  
                </svg>
             </div>
          </div>
        )}

        <div className="min-h-[300px] flex flex-col justify-center">
          {step === 0 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p className="text-xl mb-8 text-slate-300 font-light font-serif">{t('sim.step1')}</p>
              <div className="grid gap-4 md:grid-cols-3">
                <button onClick={() => next(t('sim.btn.ascus'), 1)} className="p-6 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-2xl text-left transition-all group hover:border-teal-500/30 hover:shadow-xl backdrop-blur-sm">
                  <div className="mb-4 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-teal-900 group-hover:text-teal-300 transition-colors font-serif">A</div>
                  <strong className="block text-lg group-hover:text-teal-200 transition-colors font-serif">{t('sim.btn.ascus')}</strong>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed font-light">{t('sim.btn.ascus.desc')}</p>
                </button>
                
                <button onClick={() => next(t('sim.btn.non1618'), 1)} className="p-6 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-2xl text-left transition-all group hover:border-teal-500/30 hover:shadow-xl backdrop-blur-sm">
                  <div className="mb-4 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-teal-900 group-hover:text-teal-300 transition-colors font-serif">B</div>
                  <strong className="block text-lg group-hover:text-teal-200 transition-colors font-serif">{t('sim.btn.non1618')}</strong>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed font-light">{t('sim.btn.non1618.desc')}</p>
                </button>

                <button onClick={() => next(t('sim.btn.1618'), 1)} className="p-6 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-2xl text-left transition-all group hover:border-teal-500/30 hover:shadow-xl backdrop-blur-sm">
                   <div className="mb-4 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-teal-900 group-hover:text-teal-300 transition-colors font-serif">C</div>
                   <strong className="block text-lg group-hover:text-teal-200 transition-colors font-serif">{t('sim.btn.1618')}</strong>
                   <p className="text-sm text-slate-400 mt-2 leading-relaxed font-light">{t('sim.btn.1618.desc')}</p>
                 </button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p className="text-xl mb-8 text-slate-300 font-light font-serif">{t('sim.step2')}</p>
              <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
                <button onClick={() => next(t('sim.pos'), 2)} className="p-8 bg-rose-900/10 hover:bg-rose-900/20 border border-rose-500/20 rounded-3xl text-left transition-all group hover:border-rose-500/40 backdrop-blur-md">
                  <strong className="text-2xl font-serif text-rose-300 group-hover:text-rose-200">{t('sim.pos')}</strong>
                  <p className="text-sm text-rose-200/60 mt-2 font-light">{t('sim.pos.desc')}</p>
                </button>
                <button onClick={() => next(t('sim.neg'), 3)} className="p-8 bg-teal-900/10 hover:bg-teal-900/20 border border-teal-500/20 rounded-3xl text-left transition-all group hover:border-teal-500/40 backdrop-blur-md">
                  <strong className="text-2xl font-serif text-teal-300 group-hover:text-teal-200">{t('sim.neg')}</strong>
                  <p className="text-sm text-teal-200/60 mt-2 font-light">{t('sim.neg.desc')}</p>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-gradient-to-r from-rose-900/30 to-slate-900/50 p-8 rounded-[2rem] border border-rose-500/20">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="p-4 bg-rose-500/10 rounded-full text-rose-400 shrink-0 border border-rose-500/20">
                  <AlertCircle size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-rose-100 mb-3">{t('sim.rec.colpo')}</h3>
                  <div className="space-y-4 text-slate-300 font-light leading-relaxed">
                    <p>{t('sim.rec.colpo.desc')}</p>
                    <div className="bg-slate-900/50 p-5 rounded-xl border border-white/5 text-sm">
                      <strong className="text-rose-200 block mb-1 font-serif">{t('sim.evidence')}</strong>
                      {is1618Path 
                        ? (t('sim.rec.neg.desc1').includes("70%") ? t('sim.rec.neg.desc1') : "Even in 16/18+ women, methylation positivity strongly correlates with active high-grade disease.")
                        : "Risk of CIN3+ is markedly elevated (~40-54%) in methylation-positive women."
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-gradient-to-r from-teal-900/30 to-slate-900/50 p-8 rounded-[2rem] border border-teal-500/20">
              <div className="flex flex-col md:flex-row items-start gap-6">
                 <div className="p-4 bg-teal-500/10 rounded-full text-teal-400 shrink-0 border border-teal-500/20">
                  <CheckCircle size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-teal-100 mb-3">
                    {is1618Path ? t('sim.rec.consider') : t('sim.rec.followup')}
                  </h3>
                  <div className="space-y-4 text-slate-300 font-light leading-relaxed">
                    <p>
                      {is1618Path 
                        ? t('sim.rec.neg.desc1')
                        : t('sim.rec.neg.desc2')
                      }
                    </p>
                    <div className="bg-slate-900/50 p-5 rounded-xl border border-white/5 text-sm">
                      <strong className="text-teal-200 block mb-1 font-serif">{t('sim.evidence')}</strong>
                      {is1618Path
                        ? "Fei et al. (2024): Methylation triage reduces colposcopy referrals by ~70% in 16/18+ women while detecting 98.1% of CIN3+."
                        : "Risk of CIN3+ is minimal (~0.3 - 2.7%) for negative results."
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Breadcrumbs */}
        <div className="mt-8 pt-6 border-t border-slate-700/50 flex flex-wrap gap-2 text-sm text-slate-500 items-center font-light">
          {history.length === 0 && <span className="opacity-50">{t('sim.interact')}</span>}
          {history.length > 0 && <span className="uppercase text-xs font-bold tracking-widest mr-2 text-slate-500">{t('sim.pathway')}</span>}
          {history.map((h, i) => (
            <React.Fragment key={i}>
              {i > 0 && <ArrowRight size={12} className="text-slate-600" />}
              <span className={`px-3 py-1 rounded-full text-xs ${i === history.length - 1 ? 'bg-teal-900/50 text-teal-200 border border-teal-500/30' : 'text-slate-400 bg-slate-800'}`}>
                {h}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TriageSimulator;
