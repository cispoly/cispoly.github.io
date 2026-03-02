
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Award, Calendar, BookOpen, Quote, CheckCircle, Target, ShieldCheck, TrendingUp, Layers } from 'lucide-react';
import { ENDO_GUIDELINES } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';
import { Guideline } from '../../types';
import SEO from '../SEO';

// --- VISUALIZATION COMPONENTS ---

// Visual: Endo Consensus (The Gauge/Target)
const EndoConsensusVisual = () => (
  <div className="bg-gradient-to-br from-rose-50 to-white rounded-xl p-6 border border-rose-100 shadow-sm h-full flex flex-col justify-center relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-bl-full opacity-50"></div>
    
    <h4 className="font-serif font-bold text-rose-900 mb-6 flex items-center gap-2 relative z-10">
        <Target size={18} /> Screening Precision
    </h4>

    <div className="flex flex-col gap-4 relative z-10">
        <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-rose-100 shadow-sm">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">Sensitivity</span>
            <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-500 w-[94%]"></div>
                </div>
                <span className="text-sm font-serif font-bold text-rose-600">94.5%</span>
            </div>
        </div>

        <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-rose-100 shadow-sm">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">Specificity</span>
            <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500 w-[95%]"></div>
                </div>
                <span className="text-sm font-serif font-bold text-teal-600">95.5%</span>
            </div>
        </div>

        <div className="mt-4 p-3 bg-rose-50/50 rounded-lg border border-rose-100 text-center">
            <span className="block text-[10px] font-bold text-rose-800 uppercase tracking-widest mb-1">Superior Performance</span>
            <p className="text-[9px] text-slate-500">
                Outperforms traditional screening strategies (TVS/Ultrasound) in accuracy.
            </p>
        </div>
    </div>
  </div>
);

// Fallback Visual
const DefaultVisual = () => (
    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm h-full flex flex-col justify-center items-center">
        <Layers size={48} className="text-slate-300 mb-4" />
        <p className="text-xs text-slate-400 font-medium">Guideline Details</p>
    </div>
);

const GuidelineItem: React.FC<{ guideline: Guideline; index: number }> = ({ guideline, index }) => {
  const { language } = useLanguage();
  const isZh = language === 'zh';
  const isOdd = index % 2 !== 0;

  const title = isZh ? guideline.title_zh : guideline.title;
  const organization = isZh ? guideline.organization_zh : guideline.organization;
  const journal = isZh ? guideline.journal_zh : guideline.journal;
  const keyQuote = isZh ? guideline.keyQuote_zh : guideline.keyQuote;
  const details = isZh ? guideline.details_zh : guideline.details;

  let VisualComponent = DefaultVisual;
  if (guideline.visualType === 'endo-consensus') VisualComponent = EndoConsensusVisual;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="mb-24 last:mb-0"
    >
        {/* Header Strip */}
        <div className="flex items-center gap-4 mb-6 border-b border-rose-100 pb-4">
            <span className="text-4xl font-serif text-rose-200 font-bold">0{index + 1}</span>
            <div>
                <div className="flex flex-wrap gap-x-4 text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {guideline.year}</span>
                    <span className="flex items-center gap-1"><BookOpen size={12} /> {journal}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-slate-800 leading-tight">
                    {title}
                </h3>
            </div>
        </div>

        {/* Content Layout */}
        <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch ${isOdd ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Text Content */}
            <div className="flex-1 space-y-6">
                <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-l-rose-500 relative">
                    <Quote className="absolute top-4 left-4 text-slate-200 -z-10" size={40} />
                    <p className="text-lg font-serif italic text-slate-700 pl-4 relative z-10">
                        "{keyQuote}"
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">Key Highlights</h4>
                    <ul className="space-y-3">
                        {details.map((point, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 font-light leading-relaxed">
                                <CheckCircle size={16} className="text-rose-500 mt-1 flex-shrink-0" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-4">
                    <span className="text-xs text-slate-400 block mb-1">Published by / Author</span>
                    <p className="text-sm text-slate-600 font-medium">{organization}</p>
                </div>
            </div>

            {/* Visual Content */}
            <div className="lg:w-1/3 min-h-[300px]">
                <VisualComponent />
            </div>

        </div>
    </motion.div>
  );
};

const GuidesEndoPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO 
        title={t('seo.guides.endo.title')}
        description={t('seo.guides.endo.description')}
        keywords={['Endometrial Cancer', 'Guidelines', 'Prevention', 'Methylation', 'AUB', '子宫内膜癌', '指南', '预防', '甲基化', '异常子宫出血']}
      />
      <section className="relative min-h-[40vh] flex flex-col justify-center items-center overflow-hidden pt-20 pb-10 bg-gradient-to-b from-rose-50/30 to-white">
        <div className="absolute inset-0 pointer-events-none z-0">
           <div className="absolute top-[-50%] left-[-10%] w-[600px] h-[600px] bg-rose-100/40 rounded-full blur-[100px]"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 max-w-4xl px-6 text-center"
        >
          <div className="flex justify-center gap-4 mb-6">
            <span className="flex items-center gap-2 px-5 py-2 bg-white/60 backdrop-blur-md shadow-sm rounded-full text-sm font-semibold text-rose-800 border border-rose-100">
               <FileText size={16} /> {t('nav.guides.endo')}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-slate-900 leading-[1.1] mb-6">
            {t('guides.title')}
          </h1>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
            {t('guides.subtitle')}
          </p>
        </motion.div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-20 text-center max-w-3xl mx-auto">
            <p className="text-slate-600 font-light text-lg leading-relaxed">
                {t('guides.endo.desc')}
            </p>
            <div className="w-20 h-1 bg-rose-100 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="space-y-12">
            {ENDO_GUIDELINES.map((guideline, index) => (
                <GuidelineItem key={guideline.id} guideline={guideline} index={index} />
            ))}
        </div>
      </main>
    </>
  );
};

export default GuidesEndoPage;
