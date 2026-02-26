
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Construction } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const GuidesOvarianPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative min-h-[50vh] flex flex-col justify-center items-center overflow-hidden pt-20 pb-10 bg-gradient-to-b from-red-50/50 to-white">
        <div className="absolute inset-0 pointer-events-none z-0">
           <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-red-100/30 rounded-full blur-[100px]"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 max-w-4xl px-6 text-center"
        >
          <div className="flex justify-center gap-4 mb-6">
            <span className="flex items-center gap-2 px-5 py-2 bg-white/60 backdrop-blur-md shadow-sm rounded-full text-sm font-semibold text-red-800 border border-red-100">
               <FileText size={16} /> {t('nav.guides.ovarian')}
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

      <main className="max-w-7xl mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[300px]">
        <div className="text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mx-auto mb-6">
                <Construction size={32} />
            </div>
            <h3 className="text-2xl font-serif text-slate-800 mb-2">{t('guides.comingSoon')}</h3>
            <p className="text-slate-500 font-light max-w-md mx-auto">
                {t('guides.ovarian.desc')}
            </p>
        </div>
      </main>
    </>
  );
};

export default GuidesOvarianPage;
