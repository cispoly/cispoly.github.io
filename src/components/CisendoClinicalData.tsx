
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { AlertCircle, CheckCircle2, TrendingUp, Users } from 'lucide-react';

const CisendoClinicalData: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-slate-800 mb-3 italic">{t('data.title')}</h2>
        <p className="text-slate-500 font-light">{t('data.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1: Imaging Miss Rate */}
        <div className="glass-card p-8 rounded-2xl border-t-4 border-t-slate-400 relative overflow-hidden group hover:shadow-lg transition-all">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <AlertCircle size={80} className="text-slate-800" />
          </div>
          <h3 className="text-lg font-bold text-slate-600 mb-2 uppercase tracking-wide">{t('data.missed.title')}</h3>
          <div className="text-5xl font-serif text-slate-800 mb-4">
            ~55%
          </div>
          <p className="text-sm text-slate-500 font-light leading-relaxed">
            {t('data.missed.desc')}
          </p>
          <div className="mt-6 w-full bg-slate-100 rounded-full h-2">
            <div className="bg-slate-400 h-2 rounded-full" style={{ width: '55%' }}></div>
          </div>
        </div>

        {/* Card 2: Cisendo Rescue */}
        <div className="glass-card p-8 rounded-2xl border-t-4 border-t-rose-500 relative overflow-hidden group hover:shadow-lg transition-all">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <CheckCircle2 size={80} className="text-rose-500" />
          </div>
          <h3 className="text-lg font-bold text-rose-600 mb-2 uppercase tracking-wide">{t('data.rescue.title')}</h3>
          <div className="text-5xl font-serif text-rose-600 mb-4">
            50%
          </div>
          <p className="text-sm text-slate-500 font-light leading-relaxed">
            {t('data.rescue.desc')}
          </p>
          <div className="mt-6 w-full bg-rose-100 rounded-full h-2">
            <div className="bg-rose-500 h-2 rounded-full" style={{ width: '50%' }}></div>
          </div>
        </div>

        {/* Card 3: Follow-up Data */}
        <div className="glass-card p-8 rounded-2xl border-t-4 border-t-teal-500 relative overflow-hidden group hover:shadow-lg transition-all">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <TrendingUp size={80} className="text-teal-500" />
          </div>
          <h3 className="text-lg font-bold text-teal-600 mb-2 uppercase tracking-wide">{t('data.followup.title')}</h3>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-5xl font-serif text-teal-600">3</span>
            <span className="text-sm text-slate-400 uppercase font-bold">EC</span>
            <span className="text-3xl font-serif text-teal-400 ml-2">+ 2</span>
            <span className="text-sm text-slate-400 uppercase font-bold">EIN</span>
          </div>
          <p className="text-sm text-slate-500 font-light leading-relaxed">
            {t('data.followup.desc')}
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
            <Users size={14} />
            <span>Cohort ~1000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CisendoClinicalData;
