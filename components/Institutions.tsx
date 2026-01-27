
import React from 'react';
import { Building2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Props {
  institutions?: string[];
}

const DEFAULT_INSTITUTIONS = [
  "Xiangya Hospital, Central South University",
  "Tongji Hospital, Tongji Medical College, HUST",
  "Qilu Hospital, Shandong University",
  "Peking Union Medical College Hospital",
  "West China Second University Hospital, Sichuan University",
  "Peking University Shenzhen Hospital",
  "The First Affiliated Hospital of Zhengzhou University",
  "Women's Hospital, Zhejiang University"
];

const Institutions: React.FC<Props> = ({ institutions = DEFAULT_INSTITUTIONS }) => {
  const { t } = useLanguage();

  return (
    <div className="py-8">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 backdrop-blur border border-white text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-3">
          <Building2 size={12} /> {t('inst.collab')}
        </span>
        <h2 className="text-3xl font-serif text-slate-800 italic">{t('inst.title')}</h2>
        <p className="text-slate-500 mt-2 font-light">{t('inst.desc')}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {institutions.map((inst, i) => (
          <div key={i} className="glass-card p-6 rounded-xl hover:shadow-md hover:border-teal-100 transition-all duration-300 flex flex-col items-center text-center group h-full justify-center">
            <div className="w-12 h-12 rounded-full bg-slate-50 text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-600 flex items-center justify-center mb-4 transition-colors">
              <Building2 size={20} />
            </div>
            <p className="text-slate-600 font-medium text-sm leading-snug group-hover:text-slate-900 font-serif">
              {inst}
            </p>
            <div className="w-8 h-1 bg-slate-100 mt-4 rounded-full group-hover:bg-teal-200 transition-colors"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Institutions;
