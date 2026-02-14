import React from 'react';
import { motion } from 'framer-motion';
import { Dna, Activity } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface MethylationProcessAnimationProps {
  sourceText?: string;
  collectionText?: string;
  detectionText?: string;
  markerText?: string;
  className?: string;
}

const MethylationProcessAnimation: React.FC<MethylationProcessAnimationProps> = ({
  sourceText = "Endometrium",
  collectionText = "Cervical Canal",
  detectionText = "Detection",
  markerText = "CDO1 / CELF4",
  className = ""
}) => {
  const { t } = useLanguage();

  // Animation variants
  const particleVariants = {
    initial: { y: 0, opacity: 0, scale: 0 },
    animate: { 
      y: [0, 60, 140, 220], 
      opacity: [0, 1, 1, 0],
      scale: [0, 1, 1, 0.5],
      transition: { 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut",
        times: [0, 0.2, 0.8, 1]
      } 
    }
  };

  const signalVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1.5, 
        repeat: Infinity, 
        repeatDelay: 1.5,
        ease: "linear"
      } 
    }
  };

  return (
    <div className={`w-full h-full min-h-[400px] flex flex-col items-center justify-between p-6 relative bg-gradient-to-b from-white/50 to-rose-50/30 rounded-[2rem] overflow-hidden ${className}`}>
      
      {/* 1. Endometrium (Source) */}
      <div className="relative z-10 w-full flex justify-center">
        <div className="w-48 h-24 bg-rose-100 rounded-[2rem] border border-rose-200 shadow-sm flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#fecdd3_0%,_transparent_70%)] opacity-50"></div>
          <span className="text-sm font-bold text-rose-800 uppercase tracking-widest z-10">{sourceText}</span>
          
          {/* Tissue Texture */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 60">
             <pattern id="tissue" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#e11d48" />
                <circle cx="7" cy="7" r="1" fill="#e11d48" />
             </pattern>
             <rect width="100%" height="100%" fill="url(#tissue)" />
          </svg>
        </div>
      </div>

      {/* Connection: Fallopian/Uterus to Cervix path */}
      <div className="relative h-16 w-full flex justify-center items-center">
         {/* Moving Particles (Cells/DNA) */}
         {[0, 1, 2].map((i) => (
           <motion.div
             key={i}
             className="absolute top-0 w-3 h-3 bg-rose-500 rounded-full shadow-md z-20"
             variants={particleVariants}
             initial="initial"
             animate="animate"
             style={{ left: `calc(50% + ${(i - 1) * 20}px)` }} // Spread horizontally
             transition={{ delay: i * 0.5 }} // Stagger start
           />
         ))}
         
         {/* Guide Lines */}
         <div className="absolute h-full w-0.5 border-l-2 border-dashed border-rose-200"></div>
         <span className="absolute left-[55%] text-[10px] text-rose-400 font-medium whitespace-nowrap bg-white/80 px-1 rounded">
            Shedding
         </span>
      </div>

      {/* 2. Cervical Canal (Collection Site) */}
      <div className="relative z-10">
        <div className="w-28 h-28 rounded-full border-4 border-dashed border-rose-200 bg-white/60 flex flex-col items-center justify-center relative">
           <span className="text-xs text-slate-500 font-medium mb-1 text-center px-2 leading-tight">{collectionText}</span>
           <div className="w-14 h-1 bg-rose-100 rounded-full overflow-hidden my-1">
              <motion.div 
                className="h-full bg-rose-400"
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
           </div>
           <span className="text-[9px] text-slate-400">Accumulation</span>
        </div>
      </div>

      {/* Connection: Collection to Lab */}
      <div className="relative h-12 w-full flex justify-center items-center">
         <motion.div 
           className="absolute top-0"
           animate={{ y: [0, 30], opacity: [0, 1, 0] }}
           transition={{ duration: 1.5, repeat: Infinity }}
         >
            <Dna className="text-teal-500" size={20} />
         </motion.div>
      </div>

      {/* 3. PCR Detection (Lab) */}
      <div className="relative z-10 w-full flex justify-center">
        <div className="w-48 h-20 bg-teal-50 rounded-xl border border-teal-200 shadow-sm flex items-center justify-between px-4 relative overflow-hidden">
           {/* Background Grid */}
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#0d9488 1px, transparent 1px), linear-gradient(90deg, #0d9488 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
           
           <div className="flex flex-col">
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest flex items-center gap-1">
                 <Activity size={12} /> {detectionText}
              </span>
              <span className="text-[9px] text-teal-600">Methylation Signal</span>
           </div>

           {/* Dynamic Signal Graph */}
           <div className="w-16 h-10 flex items-end justify-around">
              <motion.div className="w-1 bg-teal-400 rounded-t-sm" animate={{ height: ["20%", "80%", "40%"] }} transition={{ duration: 1, repeat: Infinity }} />
              <motion.div className="w-1 bg-teal-500 rounded-t-sm" animate={{ height: ["40%", "90%", "30%"] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.1 }} />
              <motion.div className="w-1 bg-teal-300 rounded-t-sm" animate={{ height: ["30%", "60%", "20%"] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }} />
              <motion.div className="w-1 bg-teal-600 rounded-t-sm" animate={{ height: ["50%", "100%", "60%"] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }} />
           </div>
        </div>
      </div>

      <div className="text-[10px] text-slate-400 font-mono mt-2">
        {markerText}
      </div>

    </div>
  );
};

export default MethylationProcessAnimation;
