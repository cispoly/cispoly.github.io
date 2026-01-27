
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Sparkles } from 'lucide-react';
import GuidelineCard from '../GuidelineCard';
import { CERVICAL_GUIDELINES } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';

const GuidesCervicalPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative min-h-[50vh] flex flex-col justify-center items-center overflow-hidden pt-20 pb-10 bg-gradient-to-b from-teal-50/50 to-white">
        <div className="absolute inset-0 pointer-events-none z-0">
           <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-[100px]"></div>
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

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-slate-600 font-light text-lg">
                {t('guides.cervical.desc')}
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {CERVICAL_GUIDELINES.map(guideline => (
                <GuidelineCard key={guideline.id} guideline={guideline} />
            ))}
        </div>
      </main>
    </>
  );
};

export default GuidesCervicalPage;
