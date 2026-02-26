
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Award, Calendar, BookOpen, Quote, CheckCircle, ArrowRight, Dna, Activity, GitMerge, FileCheck, Layers, Filter, Sunrise } from 'lucide-react';
import { CERVICAL_GUIDELINES } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';
import { Guideline } from '../../types';

// --- VISUALIZATION COMPONENTS ---

// Visual 1: Consensus Grid (PAX1/JAM3 2025) - "The Radar"
const ConsensusVisual = () => (
  <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-6 border border-teal-100 shadow-sm h-full flex flex-col justify-center relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-64 h-64 border border-teal-500 rounded-full"></div>
        <div className="absolute w-48 h-48 border border-teal-500 rounded-full"></div>
        <div className="absolute w-32 h-32 border border-teal-500 rounded-full"></div>
    </div>
    
    <h4 className="font-serif font-bold text-teal-900 mb-8 text-center relative z-10">Clinical Application Spectrum</h4>
    
    <div className="grid grid-cols-2 gap-4 relative z-10">
        {/* Top Left */}
        <div className="flex flex-col items-center text-center p-3 bg-white/80 rounded-xl border border-teal-100 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-2">
                <Award size={16} />
            </div>
            <span className="text-[10px] font-bold text-teal-800 uppercase tracking-widest">Standards</span>
            <span className="text-[9px] text-slate-500 leading-tight mt-1">QC & Process</span>
        </div>

        {/* Top Right */}
        <div className="flex flex-col items-center text-center p-3 bg-white/80 rounded-xl border border-teal-100 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-2">
                <Filter size={16} />
            </div>
            <span className="text-[10px] font-bold text-teal-800 uppercase tracking-widest">Triage</span>
            <span className="text-[9px] text-slate-500 leading-tight mt-1">Reduce Colposcopy</span>
        </div>

        {/* Center Node */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[calc(50%-2rem)] z-20">
            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <span className="text-white font-bold text-xs text-center leading-none">PAX1<br/>JAM3</span>
            </div>
        </div>

        {/* Bottom Left */}
        <div className="flex flex-col items-center text-center p-3 bg-white/80 rounded-xl border border-teal-100 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-2">
                <Activity size={16} />
            </div>
            <span className="text-[10px] font-bold text-teal-800 uppercase tracking-widest">Diagnosis</span>
            <span className="text-[9px] text-slate-500 leading-tight mt-1">High Accuracy</span>
        </div>

        {/* Bottom Right */}
        <div className="flex flex-col items-center text-center p-3 bg-white/80 rounded-xl border border-teal-100 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-2">
                <FileCheck size={16} />
            </div>
            <span className="text-[10px] font-bold text-teal-800 uppercase tracking-widest">Reports</span>
            <span className="text-[9px] text-slate-500 leading-tight mt-1">Standardized</span>
        </div>
    </div>
  </div>
);

// Visual 2: Gene Testing Comparison (Molecular 2025) - "The DNA Synergy"
const SynergyVisual = () => (
  <div className="bg-purple-50/50 rounded-xl p-6 border border-purple-100 shadow-sm h-full flex flex-col justify-center relative">
     <div className="flex justify-center items-center gap-6 mb-4">
        {/* Cytology Strand */}
        <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-24 rounded-full border-2 border-slate-300 flex items-center justify-center bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-100 opacity-50"></div>
                <span className="relative z-10 text-[10px] font-bold text-slate-500 -rotate-90">Cytology</span>
            </div>
        </div>

        {/* Plus */}
        <div className="text-purple-400 font-serif text-2xl italic">+</div>

        {/* Methylation Strand */}
        <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-24 rounded-full border-2 border-purple-400 flex items-center justify-center bg-white relative overflow-hidden shadow-md shadow-purple-200">
                <div className="absolute inset-0 bg-purple-50 opacity-50"></div>
                <Dna className="text-purple-500 relative z-10" size={20} />
            </div>
        </div>
     </div>

     <div className="text-center bg-white/80 backdrop-blur rounded-lg p-3 border border-purple-100 shadow-sm">
        <h5 className="text-xs font-bold text-purple-900 uppercase tracking-widest mb-1">Synergistic Triage</h5>
        <p className="text-[10px] text-slate-600 leading-tight">
            Methylation compensates for cytology's subjectivity, offering objective molecular precision.
        </p>
     </div>
  </div>
);

// Visual 3: Triage Funnel (Guideline 2) - "The Filter"
const TriageFunnel = () => (
  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm h-full flex flex-col justify-center items-center relative overflow-hidden">
     <h4 className="font-serif font-bold text-slate-800 mb-4 text-center text-xs uppercase tracking-widest">Precision Filtering</h4>
     
     <div className="relative w-full max-w-[200px] flex flex-col items-center">
        {/* Top Level: Broad */}
        <div className="w-full bg-slate-800 text-white text-[10px] font-bold py-2 rounded-t-lg text-center mb-1">
            12 HR-HPV Positive
        </div>
        
        {/* Funnel Body */}
        <div className="w-[80%] h-16 bg-gradient-to-b from-rose-400 to-rose-600 text-white flex items-center justify-center clip-path-funnel relative my-1 rounded-sm shadow-md">
             <span className="text-[10px] font-bold z-10">Methylation Test</span>
             {/* Particles */}
             <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full opacity-50"></div>
             <div className="absolute top-4 right-6 w-1 h-1 bg-white rounded-full opacity-50"></div>
        </div>

        {/* Output Split */}
        <div className="flex w-full gap-2 mt-1">
            <div className="flex-1 bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold py-2 rounded-b-lg text-center">
                Negative<br/>(Follow-up)
            </div>
            <div className="flex-1 bg-rose-50 border border-rose-200 text-rose-800 text-[9px] font-bold py-2 rounded-b-lg text-center shadow-inner">
                Positive<br/>(Colposcopy)
            </div>
        </div>
     </div>
  </div>
);

// Visual 4: Clinical Pathway Map (Marker 2024) - "The Metro Line"
const PathwayMap = () => (
    <div className="bg-amber-50/50 rounded-xl p-6 border border-amber-100 shadow-sm h-full flex flex-col justify-center">
        <h4 className="font-serif font-bold text-amber-900 mb-6 flex items-center gap-2 text-sm">
            <FileCheck size={16} /> Clinical Pathway
        </h4>
        
        <div className="relative pl-4 space-y-6">
            {/* Vertical Line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-amber-200"></div>

            {/* Step 1 */}
            <div className="flex items-center gap-4 relative z-10">
                <div className="w-3 h-3 rounded-full bg-amber-500 border-2 border-white shadow-sm flex-shrink-0"></div>
                <div>
                    <span className="text-[10px] font-bold text-amber-800 block uppercase tracking-wide">Risk Stratification</span>
                    <span className="text-[9px] text-slate-500 block">Manage HPV+ / Cytology Abnormal</span>
                </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-4 relative z-10">
                <div className="w-3 h-3 rounded-full bg-amber-400 border-2 border-white shadow-sm flex-shrink-0"></div>
                <div>
                    <span className="text-[10px] font-bold text-amber-800 block uppercase tracking-wide">Type 3 TZ Assess</span>
                    <span className="text-[9px] text-slate-500 block">Identify hidden/glandular lesions</span>
                </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-4 relative z-10">
                <div className="w-3 h-3 rounded-full bg-amber-300 border-2 border-white shadow-sm flex-shrink-0"></div>
                <div>
                    <span className="text-[10px] font-bold text-amber-800 block uppercase tracking-wide">Post-op Monitor</span>
                    <span className="text-[9px] text-slate-500 block">Detect recurrence early</span>
                </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-center gap-4 relative z-10">
                <div className="w-3 h-3 rounded-full bg-amber-200 border-2 border-white shadow-sm flex-shrink-0"></div>
                <div>
                    <span className="text-[10px] font-bold text-amber-800 block uppercase tracking-wide">Exit Screening</span>
                    <span className="text-[9px] text-slate-500 block">Safe criteria to stop screening</span>
                </div>
            </div>
        </div>
    </div>
);

// Visual 5: Emerging Tech (Guideline 1) - "The Sunrise"
const EmergingVisual = () => (
    <div className="bg-sky-50/50 rounded-xl p-6 border border-sky-100 shadow-sm h-full flex flex-col justify-center relative overflow-hidden text-center">
        {/* Sun Element */}
        <div className="w-24 h-24 bg-gradient-to-t from-sky-400 to-sky-200 rounded-full mx-auto mb-4 relative flex items-center justify-center shadow-lg shadow-sky-200">
            <Sunrise size={32} className="text-white" />
            <div className="absolute -bottom-4 w-full h-8 bg-white/80 blur-md"></div>
        </div>
        
        <h4 className="font-serif font-bold text-sky-900 mb-1">Emerging Technology</h4>
        <div className="flex justify-center gap-2 mt-2">
            <span className="px-2 py-1 bg-white border border-sky-100 rounded text-[9px] text-sky-600 font-medium">Promising</span>
            <span className="px-2 py-1 bg-white border border-sky-100 rounded text-[9px] text-sky-600 font-medium">Future Standard</span>
        </div>
        <p className="text-[9px] text-slate-500 mt-3 px-4">
            Identified as a key method with significant application prospects requiring prospective data.
        </p>
    </div>
);

// Visual 6: Blue Book Layers - "The Foundation"
const LayersVisual = () => (
    <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100 shadow-sm h-full flex flex-col justify-center items-center">
        <h4 className="font-serif font-bold text-blue-900 mb-6 flex items-center gap-2 text-sm">
            <Layers size={16} /> Core Foundation
        </h4>
        
        <div className="flex flex-col gap-1 w-[80%]">
            {/* Top Layer */}
            <div className="bg-white border border-blue-200 p-2 rounded-t-lg shadow-sm text-center">
                <span className="text-[10px] font-bold text-blue-800 uppercase block tracking-widest">Applications</span>
                <span className="text-[9px] text-slate-500 block">Triage • Fertility • Adeno</span>
            </div>
            
            {/* Middle Layer */}
            <div className="bg-blue-100 border border-blue-200 p-2 shadow-sm text-center mx-2">
                <span className="text-[10px] font-bold text-blue-800 uppercase block tracking-widest">Markers</span>
                <span className="text-[9px] text-slate-500 block">PAX1 • JAM3 • ZNF582</span>
            </div>

            {/* Bottom Layer */}
            <div className="bg-blue-200 border border-blue-300 p-2 rounded-b-lg shadow-sm text-center mx-4">
                <span className="text-[10px] font-bold text-blue-900 uppercase block tracking-widest">Mechanism</span>
                <span className="text-[9px] text-blue-800/70 block">Epigenetic Silencing</span>
            </div>
        </div>
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

  // Determine Visual Component
  let VisualComponent = LayersVisual; // Default to BlueBook style
  if (guideline.visualType === 'consensus-pax1') VisualComponent = ConsensusVisual;
  if (guideline.visualType === 'triage-flow') VisualComponent = TriageFunnel;
  if (guideline.visualType === 'gene-test') VisualComponent = SynergyVisual;
  if (guideline.visualType === 'marker-2024') VisualComponent = PathwayMap;
  if (guideline.visualType === 'emerging-tech') VisualComponent = EmergingVisual;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="mb-24 last:mb-0"
    >
        {/* Header Strip */}
        <div className="flex items-center gap-4 mb-6 border-b border-slate-200 pb-4">
            <span className="text-4xl font-serif text-slate-200 font-bold">0{index + 1}</span>
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
                <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-l-teal-500 relative">
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
                                <CheckCircle size={16} className="text-teal-500 mt-1 flex-shrink-0" />
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

const GuidesCervicalPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative min-h-[40vh] flex flex-col justify-center items-center overflow-hidden pt-20 pb-10 bg-gradient-to-b from-teal-50/30 to-white">
        <div className="absolute inset-0 pointer-events-none z-0">
           <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-[100px]"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 max-w-4xl px-6 text-center"
        >
          <div className="flex justify-center gap-4 mb-6">
            <span className="flex items-center gap-2 px-5 py-2 bg-white/60 backdrop-blur-md shadow-sm rounded-full text-sm font-semibold text-teal-800 border border-teal-100">
               <FileText size={16} /> {t('nav.guides.cervical')}
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
                {t('guides.cervical.desc')}
            </p>
            <div className="w-20 h-1 bg-teal-100 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="space-y-12">
            {CERVICAL_GUIDELINES.map((guideline, index) => (
                <GuidelineItem key={guideline.id} guideline={guideline} index={index} />
            ))}
        </div>
      </main>
    </>
  );
};

export default GuidesCervicalPage;
