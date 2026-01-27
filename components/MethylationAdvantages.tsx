import React from 'react';
import { Target, Cpu, TrendingDown, ShieldCheck, Microscope, Layers } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const MethylationAdvantages: React.FC = () => {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: <Target className="w-6 h-6 text-teal-600" />,
      title: t('adv.specificity.title'),
      description: t('adv.specificity.desc'),
      color: "bg-teal-50 border-teal-100"
    },
    {
      icon: <Cpu className="w-6 h-6 text-rose-500" />,
      title: t('adv.objective.title'),
      description: t('adv.objective.desc'),
      color: "bg-rose-50 border-rose-100"
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-blue-500" />,
      title: t('adv.referrals.title'),
      description: t('adv.referrals.desc'),
      color: "bg-blue-50 border-blue-100"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
      title: t('adv.npv.title'),
      description: t('adv.npv.desc'),
      color: "bg-purple-50 border-purple-100"
    },
    {
      icon: <Microscope className="w-6 h-6 text-amber-500" />,
      title: t('adv.precision.title'),
      description: t('adv.precision.desc'),
      color: "bg-amber-50 border-amber-100"
    },
    {
      icon: <Layers className="w-6 h-6 text-slate-500" />,
      title: t('adv.pan.title'),
      description: t('adv.pan.desc'),
      color: "bg-slate-50 border-slate-100"
    }
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <span className="inline-block py-1 px-3 rounded-full bg-teal-50 text-teal-800 text-[10px] font-bold uppercase tracking-widest mb-3 border border-teal-100">
          {t('advantages.badge')}
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-slate-800 italic mb-4">{t('advantages.title')}</h2>
        <p className="text-slate-600 font-light max-w-2xl mx-auto">
          {t('advantages.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {advantages.map((adv, idx) => (
          <div 
            key={idx} 
            className={`p-8 rounded-2xl border ${adv.color} bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
          >
            <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
              {adv.icon}
            </div>
            <h3 className="text-xl font-serif text-slate-800 mb-3">{adv.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-light">
              {adv.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MethylationAdvantages;