
import React from 'react';
import { motion } from 'framer-motion';
import { Dna, Clock, Zap, Feather, ShieldCheck, LayoutGrid, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: t('about.point1.title'),
      desc: t('about.point1.desc'),
      detail: t('about.point1.detail'),
      color: "bg-amber-50 border-amber-100"
    },
    {
      icon: <Zap className="w-6 h-6 text-rose-500" />,
      title: t('about.point2.title'),
      desc: t('about.point2.desc'),
      detail: t('about.point2.detail'),
      color: "bg-rose-50 border-rose-100"
    },
    {
      icon: <Feather className="w-6 h-6 text-teal-500" />,
      title: t('about.point3.title'),
      desc: t('about.point3.desc'),
      detail: t('about.point3.detail'),
      color: "bg-teal-50 border-teal-100"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      title: t('about.point4.title'),
      desc: t('about.point4.desc'),
      detail: null,
      color: "bg-blue-50 border-blue-100"
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-purple-500" />,
      title: t('about.point5.title'),
      desc: t('about.point5.desc'),
      detail: null,
      color: "bg-purple-50 border-purple-100"
    }
  ];

  return (
    <div className="pt-20 pb-20">
      {/* Hero Header */}
      <section className="relative px-6 py-20 text-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <img src="/favicon/apple-touch-icon.png" alt="CISPOLY Logo" className="w-20 h-20 mb-8 mx-auto" />
          <h1 className="text-5xl md:text-6xl font-serif font-medium text-slate-800 mb-6 italic">
            {t('about.title')}
          </h1>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 space-y-24">
        
        {/* 1. Company Intro */}
        <section className="glass-card p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
             <div className="flex-1">
                <h2 className="text-3xl font-serif text-slate-800 mb-6">{t('about.intro.title')}</h2>
                <div className="text-slate-600 leading-relaxed font-light space-y-4 text-justify">
                   <p>{t('about.intro.desc')}</p>
                </div>
             </div>
             <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-slate-100 to-white rounded-full flex items-center justify-center shadow-inner border border-white">
                   <div className="text-center">
                      <span className="block text-4xl font-serif text-slate-800 mb-1">2020</span>
                      <span className="text-xs uppercase tracking-widest text-slate-400">Established</span>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 2. Technology Section */}
        <section>
          <div className="text-center mb-16 max-w-4xl mx-auto">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full text-teal-800 text-xs font-bold uppercase tracking-widest mb-6 border border-teal-100">
                <Dna size={14} /> {t('about.tech.title')}
             </div>
             <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-6 leading-tight">
                {t('about.tech.subtitle')}
             </h2>
             <p className="text-slate-600 font-light leading-relaxed">
                {t('about.tech.desc')}
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {advantages.map((adv, idx) => (
               <div 
                 key={idx}
                 className={`glass-card p-8 rounded-2xl border-t-4 ${adv.color.replace('bg-', 'border-t-').split(' ')[0].replace('50', '500')} hover:shadow-xl transition-all duration-300 group`}
               >
                 <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${adv.color}`}>
                    {adv.icon}
                 </div>
                 <h3 className="text-xl font-serif text-slate-800 mb-4 font-medium">{adv.title}</h3>
                 <p className="text-sm text-slate-600 leading-relaxed font-light mb-4">
                    {adv.desc}
                 </p>
                 {adv.detail && (
                   <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 bg-white/50 p-3 rounded-lg">
                      <strong className="block mb-1 text-slate-700">Application:</strong>
                      {adv.detail}
                   </div>
                 )}
               </div>
             ))}
          </div>
        </section>

        {/* Footer Statement */}
        <section className="text-center py-12">
            <div className="inline-block p-8 rounded-3xl bg-slate-800 text-white shadow-2xl relative overflow-hidden max-w-3xl">
               <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-rose-900 opacity-50"></div>
               <div className="relative z-10">
                  <CheckCircle className="mx-auto mb-4 text-teal-300" size={32} />
                  <p className="text-lg md:text-xl font-serif italic">
                     "{t('about.footer')}"
                  </p>
               </div>
            </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;
