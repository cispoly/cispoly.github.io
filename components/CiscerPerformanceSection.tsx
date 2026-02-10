import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList 
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, CheckCircle2, Info, Activity, FileText } from 'lucide-react';
import { CISCER_COMPARISON_CATEGORIES, CISCER_CLINICAL_TRIAL } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const CustomBarLabel = (props: any) => {
  const { x, y, width, height, value, labelPrefix } = props;
  const threshold = 100; // Minimum width to fit label inside
  const isInside = width >= threshold;
  
  return (
    <text 
      x={isInside ? x + width - 6 : x + width + 6} 
      y={y + height / 2} 
      dy=".35em"
      fill={isInside ? '#1e293b' : '#475569'} 
      textAnchor={isInside ? 'end' : 'start'} 
      fontSize={10} 
      fontWeight="bold"
    >
      {labelPrefix}: {value}%
    </text>
  );
};

const CiscerPerformanceSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>(CISCER_COMPARISON_CATEGORIES[0].id);

  const activeCategory = CISCER_COMPARISON_CATEGORIES.find(c => c.id === activeTab) || CISCER_COMPARISON_CATEGORIES[0];
  
  // Find CISCER data for the highlight card
  const ciscerData = activeCategory.data.find(d => d.highlight) || activeCategory.data[0];

  const getLocalizedText = (obj: any, field: string) => {
    if (language === 'zh' && obj[`${field}_zh`]) {
      return obj[`${field}_zh`];
    }
    return obj[field];
  };

  return (
    <div className="py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-sm font-bold uppercase tracking-wider mb-4">
            <Users size={16} />
            {t('charts.badge.clinical')}
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-3">
            {t('charts.title')}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base">
            {t('charts.subtitle')}
          </p>
        </div>

        {/* 1. Clinical Trial Highlights (New Prominent Section) */}
        <div className="mb-10">
          <div className="glass-card rounded-2xl p-6 border border-teal-100/50 shadow-lg bg-gradient-to-r from-teal-50/80 to-white/90 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Activity size={100} className="text-teal-600" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative z-10">
              <div className="md:col-span-1">
                <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <FileText className="text-teal-600" size={18}/>
                  {t('charts.trial.title')}
                </h3>
                <p className="text-slate-500 text-sm mb-3 leading-relaxed">
                  {t('charts.trial.description')}
                </p>
                <div className="inline-flex items-center gap-2 text-xs text-slate-400 bg-white/50 px-3 py-1 rounded-full border border-teal-100">
                  <Users size={12} />
                  N = {CISCER_CLINICAL_TRIAL.n}
                </div>
              </div>

              <div className="md:col-span-2 grid grid-cols-2 gap-4">
                <div className="bg-white/60 rounded-xl p-4 border border-teal-100 shadow-sm text-center">
                  <div className="text-teal-600 font-bold text-3xl md:text-4xl mb-1">
                    {CISCER_CLINICAL_TRIAL.sensitivity}<span className="text-xl">%</span>
                  </div>
                  <div className="text-slate-600 font-medium text-xs uppercase tracking-wide">
                    {t('charts.sensitivity')}
                  </div>
                </div>
                <div className="bg-white/60 rounded-xl p-4 border border-teal-100 shadow-sm text-center">
                  <div className="text-teal-600 font-bold text-3xl md:text-4xl mb-1">
                    {CISCER_CLINICAL_TRIAL.specificity}<span className="text-xl">%</span>
                  </div>
                  <div className="text-slate-600 font-medium text-xs uppercase tracking-wide">
                    {t('charts.specificity')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Population Comparison (Tabbed & Compact) */}
        <div className="space-y-6">
          <div className="flex flex-wrap justify-center gap-2">
            {CISCER_COMPARISON_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 border ${
                  activeTab === category.id
                    ? 'bg-teal-600 text-white border-teal-600 shadow-md transform scale-105'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-teal-200 hover:text-teal-600'
                }`}
              >
                {getLocalizedText(category, 'label')}
              </button>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-5 border border-white/50 shadow-xl bg-white/60 backdrop-blur-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                {/* Left Column: Context */}
                <div className="lg:col-span-4 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">
                      {getLocalizedText(activeCategory, 'label')}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {getLocalizedText(activeCategory, 'description')}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div className="flex items-center gap-2 mb-2 text-teal-800 font-bold text-[10px] uppercase tracking-wider">
                      <CheckCircle2 size={12} className="text-teal-500" />
                      CISCER Performance
                    </div>
                    <div className="flex justify-between items-center px-2">
                      <div className="text-center">
                        <div className="text-xl font-bold text-slate-800">{ciscerData.sensitivity}%</div>
                        <div className="text-[10px] text-slate-500 font-medium uppercase">{t('charts.sensitivity')}</div>
                      </div>
                      <div className="h-6 w-px bg-slate-200" />
                      <div className="text-center">
                        <div className="text-xl font-bold text-slate-800">{ciscerData.specificity}%</div>
                        <div className="text-[10px] text-slate-500 font-medium uppercase">{t('charts.specificity')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5 text-[10px] text-slate-400">
                    <Info size={12} className="mt-0.5 shrink-0" />
                    {t('charts.source')}: {ciscerData.study}
                  </div>
                </div>

                {/* Right Column: Visualization (Compacted) */}
                <div className="lg:col-span-8 h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={activeCategory.data}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
                      barGap={6}
                      barCategoryGap={24}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                      <XAxis type="number" domain={[0, 100]} hide />
                      <YAxis 
                        dataKey={language === 'zh' ? 'method_zh' : 'method'}
                        type="category" 
                        width={130}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#475569', fontSize: 11, fontWeight: 600, width: 120 }}
                      />
                      <Tooltip 
                        cursor={{ fill: '#f1f5f9', opacity: 0.5 }}
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload;
                            const methodName = language === 'zh' ? (data.method_zh || data.method) : data.method;
                            return (
                              <div className="bg-slate-800/90 text-white p-2.5 rounded-lg shadow-xl text-xs backdrop-blur-sm">
                                <div className="font-bold mb-1.5 text-teal-300 border-b border-slate-600 pb-1">{methodName}</div>
                                <div className="flex gap-3">
                                  <div>
                                    <span className="text-slate-400 block text-[10px]">{t('charts.sensitivity')}</span>
                                    <span className="font-bold text-sm">{data.sensitivity}%</span>
                                  </div>
                                  <div>
                                    <span className="text-slate-400 block text-[10px]">{t('charts.specificity')}</span>
                                    <span className="font-bold text-sm">{data.specificity}%</span>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar dataKey="sensitivity" name={t('charts.sensitivity')} radius={[0, 4, 4, 0]} barSize={24}>
                        {activeCategory.data.map((entry, index) => (
                          <Cell key={`sen-${index}`} fill={entry.highlight ? '#0d9488' : '#cbd5e1'} />
                        ))}
                        <LabelList 
                          dataKey="sensitivity" 
                          content={(props) => <CustomBarLabel {...props} labelPrefix={t('charts.sensitivity')} />}
                        />
                      </Bar>
                      <Bar dataKey="specificity" name={t('charts.specificity')} radius={[0, 4, 4, 0]} barSize={24}>
                        {activeCategory.data.map((entry, index) => (
                          <Cell key={`spec-${index}`} fill={entry.highlight ? '#5eead4' : '#e2e8f0'} />
                        ))}
                        <LabelList 
                          dataKey="specificity" 
                          content={(props) => <CustomBarLabel {...props} labelPrefix={t('charts.specificity')} />}
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="text-center mt-6 text-[10px] text-slate-400">
          {t('charts.footer')}
        </div>
      </div>
    </div>
  );
};

export default CiscerPerformanceSection;
