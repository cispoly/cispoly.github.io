
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import { ChartDataPoint } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface Props {
  data: ChartDataPoint[];
  title?: string;
  subtitle?: string;
}

const InteractiveCharts: React.FC<Props> = ({ data, title, subtitle }) => {
  const { t } = useLanguage();

  return (
    <div className="glass-card p-6 md:p-8 rounded-[2rem] shadow-sm h-full flex flex-col justify-center">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-serif text-slate-800 mb-2 italic">{title || t('charts.title')}</h2>
        <p className="text-slate-500 font-light text-sm">{subtitle || t('charts.subtitle')}</p>
      </div>
      
      <div className="h-[500px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 30, right: 30, left: 30, bottom: 20 }}
            barGap={8}
          >
            <defs>
               <linearGradient id="colorSen" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="5%" stopColor="#cbd5e1" stopOpacity={0.9}/>
                 <stop offset="95%" stopColor="#cbd5e1" stopOpacity={0.5}/>
               </linearGradient>
               <linearGradient id="colorSpec" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.9}/>
                 <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.5}/>
               </linearGradient>
               <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="5%" stopColor="#0d9488" stopOpacity={0.9}/>
                 <stop offset="95%" stopColor="#0f766e" stopOpacity={0.6}/>
               </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis 
              dataKey="name" 
              axisLine={{ stroke: '#cbd5e1' }} 
              tickLine={false} 
              tick={{fill: '#475569', fontSize: 12, fontFamily: 'Inter, sans-serif', fontWeight: 500}} 
              dy={10}
              interval={0}
              angle={0}
              textAnchor="middle"
              height={40}
              tickFormatter={(value) => {
                if (value === 'Cytology (LBC)') return 'Cytology';
                if (value === 'HPV 16/18 Genotyping') return 'HPV 16/18';
                if (value === 'PAX1/JAM3 Methylation') return 'CISCER';
                if (value === 'CISENDO (Meth)') return 'CISENDO';
                if (value === 'Ultrasound (TVS)') return 'Ultrasound';
                return value;
              }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 12}} 
              domain={[0, 100]}
              unit="%"
            />
            <Tooltip 
              cursor={{fill: '#f0fdfa', opacity: 0.6}}
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-teal-100 font-serif">
                      <p className="text-teal-900 font-bold mb-2 text-lg border-b border-teal-50 pb-1">{label}</p>
                      <div className="space-y-2">
                        {payload.map((entry: any, index: number) => (
                          <div key={index} className="flex items-center justify-between gap-6 text-sm">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></div>
                              <span className="text-slate-600 font-light">{entry.name}</span>
                            </div>
                            <span className="font-bold text-slate-800">{entry.value}%</span>
                          </div>
                        ))}
                      </div>
                      {label === 'CISCER' && (
                        <div className="mt-3 pt-2 border-t border-teal-50 text-[10px] text-teal-600 italic">
                          * Clinical Trial N=1968
                        </div>
                      )}
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend 
              wrapperStyle={{paddingTop: '10px', fontFamily: 'Inter, sans-serif', fontSize: '12px'}} 
              iconType="circle"
              verticalAlign="top"
              align="right"
            />
            
            {/* Sensitivity */}
            <Bar 
              dataKey="Sensitivity" 
              name={t('charts.sensitivity')} 
              fill="url(#colorSen)" 
              radius={[6, 6, 0, 0]} 
              maxBarSize={40}
              animationBegin={0}
              animationDuration={1500}
              animationEasing="ease-out"
            >
               <LabelList dataKey="Sensitivity" position="top" fill="#64748b" fontSize={10} formatter={(val: number) => `${val}%`} />
            </Bar>

            {/* Specificity */}
            <Bar 
              dataKey="Specificity" 
              name={t('charts.specificity')} 
              fill="url(#colorSpec)" 
              radius={[6, 6, 0, 0]} 
              maxBarSize={40}
              animationBegin={200}
              animationDuration={1500}
              animationEasing="ease-out"
            >
               <LabelList dataKey="Specificity" position="top" fill="#64748b" fontSize={10} formatter={(val: number) => `${val}%`} />
            </Bar>

            {/* Reduction - Conditionally Rendered if data exists */}
            {data.some(d => d.ReferralReduction !== undefined && d.ReferralReduction > 0) && (
              <Bar 
                dataKey="ReferralReduction" 
                name={t('charts.reduction')} 
                fill="url(#colorRed)" 
                radius={[6, 6, 0, 0]} 
                maxBarSize={40}
                animationBegin={400}
                animationDuration={1500}
                animationEasing="ease-out"
              >
                 <LabelList dataKey="ReferralReduction" position="top" fill="#0f766e" fontSize={10} fontWeight="bold" formatter={(val: number) => val > 0 ? `${val}%` : ''} />
              </Bar>
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-[10px] text-slate-400 text-center max-w-2xl mx-auto italic leading-tight">
        * Data aggregated from Multi-center Clinical Trials (N=1968) & Systematic Reviews.
      </div>
    </div>
  );
};

export default InteractiveCharts;
