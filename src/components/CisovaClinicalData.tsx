
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ShieldCheck, BarChart3, Layers, Activity, Microscope, User } from 'lucide-react';

const CisovaClinicalData: React.FC = () => {
  const { t } = useLanguage();

  const stageData = [
    { label: "Stage I", sens: "94.29%", spec: "92.78%" },
    { label: "Stage II", sens: "94.44%", spec: "92.78%" },
    { label: "Stage III", sens: "95.24%", spec: "92.78%" },
    { label: "Stage IV", sens: "98.11%", spec: "92.78%" }
  ];

  const pathologyData = [
    { label: "Serous", sens: "95.59%", spec: "92.78%" },
    { label: "Endometrioid", sens: "93.75%", spec: "92.78%" },
    { label: "Clear Cell", sens: "94.12%", spec: "92.78%" },
    { label: "Mucinous", sens: "95.45%", spec: "92.78%" }
  ];

  const demographicsData = [
    { label: "< 40 Years", sens: "89.47%", spec: "91.70%" },
    { label: "40 - 60 Years", sens: "93.58%", spec: "93.92%" },
    { label: "> 60 Years", sens: "95.45%", spec: "92.62%" },
    { label: "Pre-meno", sens: "91.33%", spec: "91.52%" },
    { label: "Post-meno", sens: "94.71%", spec: "95.56%" }
  ];

  const SubgroupSection = ({ title, icon: Icon, data }: { title: string, icon: any, data: any[] }) => (
    <div className="bg-white/60 p-5 rounded-2xl border border-purple-100/50">
       <div className="flex items-center gap-2 mb-4 text-purple-800">
          <Icon size={18} />
          <span className="font-bold text-xs uppercase tracking-widest">{title}</span>
       </div>
       <div className="space-y-3">
          {data.map((d, i) => (
             <div key={i} className="flex justify-between items-center text-sm border-b border-slate-100 pb-2 last:border-0 last:pb-0 last:mb-0">
                <span className="text-slate-600 font-medium text-xs">{d.label}</span>
                <div className="flex gap-3 text-right">
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] text-slate-400 uppercase leading-none mb-0.5">Sens</span>
                    <span className="font-serif font-bold text-purple-800 leading-none">{d.sens}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] text-slate-400 uppercase leading-none mb-0.5">Spec</span>
                    <span className="font-serif font-bold text-teal-600 leading-none">{d.spec}</span>
                  </div>
                </div>
             </div>
          ))}
       </div>
    </div>
  );

  return (
    <div className="py-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif text-slate-800 mb-3 italic">{t('data.cisova.title')}</h2>
        <p className="text-slate-500 font-light">{t('data.cisova.subtitle')}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
        
        {/* Left: Superior Assessment Tool Table */}
        <div className="bg-white/70 backdrop-blur-md p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-rose-50 text-rose-600 rounded-full">
                    <BarChart3 size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-serif text-slate-800 font-medium">{t('data.cisova.superior')}</h3>
                    <p className="text-xs text-slate-400 mt-1">{t('data.cisova.superior.desc')}</p>
                </div>
            </div>

            <div className="space-y-4 flex-grow justify-center flex flex-col">
                {/* Header */}
                <div className="grid grid-cols-3 text-xs uppercase tracking-widest text-slate-400 font-bold mb-2 text-center">
                    <div className="text-left">Method</div>
                    <div>Sensitivity</div>
                    <div>Specificity</div>
                </div>

                {/* Row 1: Cisova */}
                <div className="grid grid-cols-3 items-center p-4 bg-gradient-to-r from-rose-50 to-white rounded-xl border border-rose-100 shadow-sm relative overflow-hidden">
                    <div className="font-bold text-rose-700 z-10 text-sm">CISOVA</div>
                    <div className="text-center font-serif text-lg text-slate-800 z-10">93.19%</div>
                    <div className="text-center font-serif text-lg text-slate-800 z-10">92.78%</div>
                    <div className="absolute right-0 top-0 h-full w-1 bg-rose-500"></div>
                </div>

                {/* Row 2: Imaging */}
                <div className="grid grid-cols-3 items-center p-4 bg-white rounded-xl border border-slate-100">
                    <div className="font-medium text-slate-600 text-sm">Ultrasound</div>
                    <div className="text-center font-serif text-lg text-slate-500">58.24%</div>
                    <div className="text-center font-serif text-lg text-slate-500">94.68%</div>
                </div>

                {/* Row 3: CA125 */}
                <div className="grid grid-cols-3 items-center p-4 bg-white rounded-xl border border-slate-100">
                    <div className="font-medium text-slate-600 text-sm">CA125</div>
                    <div className="text-center font-serif text-lg text-slate-500">69.90%</div>
                    <div className="text-center font-serif text-lg text-slate-500">67.37%</div>
                </div>
            </div>
        </div>

        {/* Right: Rescue Rate Visualization */}
        <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-[2rem] border border-teal-100 shadow-sm hover:shadow-lg transition-all h-full flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5">
                <ShieldCheck size={120} className="text-teal-800" />
            </div>
            
            <div className="flex items-center gap-3 mb-8 z-10">
                <div className="p-3 bg-teal-100 text-teal-700 rounded-full">
                    <ShieldCheck size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-serif text-slate-800 font-medium">{t('data.cisova.rescue.title')}</h3>
                    <p className="text-xs text-slate-400 mt-1">{t('data.cisova.rescue.desc')}</p>
                </div>
            </div>

            <div className="flex-grow flex flex-col justify-center items-center relative z-10">
                <div className="flex items-end gap-2 mb-2">
                    <span className="text-7xl font-serif text-teal-700 leading-none">38%</span>
                    <span className="text-sm font-bold text-teal-500 uppercase tracking-widest mb-2">Rescued</span>
                </div>
                <p className="text-center text-slate-500 text-sm font-light max-w-xs leading-relaxed">
                    of Ovarian Cancer cases missed by atypical imaging results were detected by CISOVA.
                </p>

                <div className="w-full max-w-sm mt-8 relative h-4 bg-slate-200 rounded-full overflow-hidden">
                    {/* The missed part */}
                    <div className="absolute left-0 top-0 h-full bg-slate-300 w-full"></div>
                    {/* The rescued part */}
                    <div className="absolute left-0 top-0 h-full bg-teal-500 w-[38%] animate-pulse"></div>
                </div>
                <div className="flex justify-between w-full max-w-sm mt-2 text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                    <span>Detected by CISOVA</span>
                    <span>Missed by Imaging</span>
                </div>
            </div>
        </div>
      </div>

      {/* Subgroups Efficacy Banner */}
      <div className="glass-card p-8 rounded-[2rem] border-t-4 border-t-purple-500 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-6 opacity-5">
            <Layers size={100} className="text-purple-900" />
         </div>
         <div className="relative z-10 mb-8">
            <h3 className="text-2xl font-serif text-purple-900 mb-2 text-center md:text-left">{t('data.cisova.subgroups.title')}</h3>
            <p className="text-sm text-slate-500 leading-relaxed text-center md:text-left max-w-2xl">
                {t('data.cisova.subgroups.desc')}
            </p>
         </div>

         <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <SubgroupSection title="Early Detection (Stage)" icon={Activity} data={stageData} />
            <SubgroupSection title="Pathology Types" icon={Microscope} data={pathologyData} />
            <SubgroupSection title="Age & Status" icon={User} data={demographicsData} />
         </div>
      </div>
    </div>
  );
};

export default CisovaClinicalData;
