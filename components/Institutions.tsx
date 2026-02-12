
import React from 'react';
import { Building2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import InstitutionMap from './map/InstitutionMap';

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

      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left: Map */}
        <div className="w-full lg:w-1/2 min-h-[400px]">
          <InstitutionMap institutions={institutions} className="h-full" />
        </div>

        {/* Right: Institution List */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-3 h-full content-start overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
            {institutions.map((inst, i) => (
              <div key={i} className="glass-card p-3 rounded-lg hover:shadow-sm hover:border-teal-100 transition-all duration-300 flex flex-col items-center text-center group justify-center min-h-[80px]">
                <p className="text-slate-600 font-medium text-xs leading-snug group-hover:text-slate-900 font-serif">
                  {inst}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institutions;
