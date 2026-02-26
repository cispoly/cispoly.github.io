
import React from 'react';
import { Microscope, Activity, UserCheck, Clock, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ScenarioItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Props {
  items?: ScenarioItem[];
  customTitle?: string;
  customDescription?: string;
}

const ClinicalScenarios: React.FC<Props> = ({ items, customTitle, customDescription }) => {
  const { t } = useLanguage();
  
  const defaultScenarios = [
    {
      icon: <Activity size={24} />,
      title: t('scenarios.ascus.title'),
      description: t('scenarios.ascus.desc')
    },
    {
      icon: <Microscope size={24} />,
      title: t('scenarios.hrhpv.title'),
      description: t('scenarios.hrhpv.desc')
    },
    {
      icon: <UserCheck size={24} />,
      title: t('scenarios.postmeno.title'),
      description: t('scenarios.postmeno.desc')
    },
    {
      icon: <Clock size={24} />,
      title: t('scenarios.postcon.title'),
      description: t('scenarios.postcon.desc')
    },
    {
      icon: <FileText size={24} />,
      title: t('scenarios.self.title'),
      description: t('scenarios.self.desc')
    }
  ];

  const displayScenarios = items || defaultScenarios;

  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif text-slate-800 mb-4 italic">{customTitle || t('scenarios.title')}</h2>
        <p className="text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
          {customDescription || t('scenarios.desc')}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayScenarios.map((item, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group hover:bg-white/90">
            <div className="w-12 h-12 bg-rose-50 text-rose-400 rounded-full flex items-center justify-center mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-500">
              {item.icon}
            </div>
            <h3 className="text-lg font-serif font-medium text-slate-800 mb-2">{item.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicalScenarios;
