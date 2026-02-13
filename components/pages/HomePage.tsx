
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Microscope, Target, Droplet, Shield, Activity, Sparkles, ChevronRight, FileText, Check, Heart, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import SEO from '../SEO';

// Product Data Definition
const products = [
  {
    id: 'ciscer',
    title: 'CISCER',
    subtitle: 'Cervical Cancer',
    path: '/ciscer',
    color: 'teal',
    icon: <Microscope size={32} />,
    secondaryIcon: <Shield size={14} />,
    features: ["PAX1 / JAM3 Dual-Gene", "High Specificity Triage", "Reduces Colposcopy Referrals"],
    detailedFeatures: [
      "Analyzes methylation levels of PAX1 and JAM3 genes to accurately identify high-grade lesions.",
      "Offers superior specificity compared to HPV testing, reducing unnecessary anxiety and overtreatment.",
      "Significantly decreases unnecessary colposcopy referrals by precisely distinguishing true risks."
    ],
    targetAudience: "Primary triage for HPV-positive women & ASC-US cytology results.",
    stats: { sensitivity: "89.6%", specificity: "96.5%" }
  },
  {
    id: 'cisendo',
    title: 'CISENDO',
    subtitle: 'Endometrial Cancer',
    path: '/cisendo',
    color: 'rose',
    icon: <Target size={32} />,
    secondaryIcon: <Activity size={14} />,
    features: ["CDO1 / CELF4 Methylation", "Non-invasive Detection", "Ideal for AUB Triage"],
    detailedFeatures: [
      "Detects epigenetic changes in CDO1 and CELF4 genes, highly associated with endometrial cancer.",
      "Requires only non-invasive sampling methods, improving patient compliance and comfort.",
      "Perfectly suited for triaging women with Abnormal Uterine Bleeding (AUB) to rule out malignancy."
    ],
    targetAudience: "Women with Abnormal Uterine Bleeding (AUB) or endometrial thickening.",
    stats: { sensitivity: "95.51%", specificity: "94.16%" }
  },
  {
    id: 'cisova',
    title: 'CISOVA',
    subtitle: 'Ovarian Cancer',
    path: '/cisova',
    color: 'red',
    icon: <Droplet size={32} />,
    secondaryIcon: <Sparkles size={14} />,
    features: ["CDO1 / HOXA9 Markers", "Liquid Biopsy Innovation", "Early Screening Solution"],
    detailedFeatures: [
      "Targets specific methylation markers CDO1 and HOXA9 for early detection of ovarian cancer.",
      "Leverages cutting-edge liquid biopsy technology for detection from blood or cervical scrapings.",
      "Provides a breakthrough solution for early-stage screening where traditional imaging often fails."
    ],
    targetAudience: "Detection for pelvic masses, family history, or high-risk populations.",
    stats: { sensitivity: "93.19%", specificity: "92.18%" }
  }
];

const InteractiveProductShowcase: React.FC = () => {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);

  const getColorClasses = (color: string) => {
    const map: Record<string, any> = {
      teal: { bg: 'bg-teal-50', border: 'border-teal-500', text: 'text-teal-600', highlight: 'bg-teal-500', soft: 'bg-teal-100' },
      rose: { bg: 'bg-rose-50', border: 'border-rose-500', text: 'text-rose-600', highlight: 'bg-rose-500', soft: 'bg-rose-100' },
      red: { bg: 'bg-red-50', border: 'border-red-500', text: 'text-red-600', highlight: 'bg-red-500', soft: 'bg-red-100' }
    };
    return map[color] || map.teal;
  };

  return (
    <div className="w-full h-[800px] md:h-[600px] flex flex-col md:flex-row gap-4" onMouseLeave={() => setActiveId(null)}>
      {products.map((product) => {
        const isActive = activeId === product.id;
        const isInactive = activeId !== null && activeId !== product.id;
        const c = getColorClasses(product.color);

        return (
          <motion.div
            key={product.id}
            layout
            onMouseEnter={() => setActiveId(product.id)}
            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-colors duration-300 ease-in-out border-t-4 ${c.border} ${isActive ? 'bg-white shadow-2xl z-10' : 'bg-white/60 shadow-md hover:bg-white'} ${isInactive ? 'opacity-80' : 'opacity-100'}`}
            initial={false}
            animate={{
              flex: isActive ? 3 : isInactive ? 0.5 : 1,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {/* Background Decoration */}
            <div className={`absolute -right-10 -top-10 w-64 h-64 rounded-full opacity-10 pointer-events-none ${c.highlight}`} />
            
            <div className="h-full flex flex-col p-4 md:p-6 relative z-10">
              
              {/* Header / Logo Section */}
              <div className={`flex items-center gap-3 md:gap-4 mb-3 md:mb-6 ${isInactive ? 'justify-center md:flex-col md:mt-20' : ''}`}>
                <motion.div layout className={`relative w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 ${c.soft} ${c.text}`}>
                  {React.cloneElement(product.icon as React.ReactElement, { size: isInactive ? 32 : 24, className: "md:w-8 md:h-8" })}
                  <div className={`absolute -bottom-1 -right-1 p-0.5 md:p-1 rounded-full text-white ${c.highlight}`}>
                    {React.cloneElement(product.secondaryIcon as React.ReactElement, { size: 10, className: "md:w-3.5 md:h-3.5" })}
                  </div>
                </motion.div>
                
                {/* Title Wrapper */}
                <motion.div layout className={`${isInactive ? 'md:hidden' : 'block'}`}>
                   <h3 className="text-lg md:text-2xl font-serif text-slate-900 leading-none">{product.title}</h3>
                   <p className={`text-[10px] md:text-xs font-bold uppercase tracking-widest mt-0.5 md:mt-1 ${c.text}`}>{product.subtitle}</p>
                </motion.div>

                {/* Vertical Text for Inactive State */}
                {isInactive && (
                   <motion.div 
                     initial={{ opacity: 0 }} 
                     animate={{ opacity: 1 }} 
                     className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap -rotate-90 origin-center"
                   >
                      <h3 className="text-2xl font-serif text-slate-800 tracking-widest">{product.title}</h3>
                   </motion.div>
                )}
              </div>

              {/* Content Section - Hidden when inactive */}
              <AnimatePresence mode='wait'>
                {!isInactive && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-grow flex flex-col"
                  >
                    <p className="text-slate-600 font-light leading-relaxed mb-4 max-w-lg">
                      {t(`home.products.${product.id}.desc`)}
                    </p>

                    {/* Features List - Hidden on mobile default state */}
                    <div className={`space-y-3 mb-4 ${!isActive ? 'hidden md:block' : ''}`}>
                       {(isActive && product.detailedFeatures ? product.detailedFeatures : product.features).map((feat, i) => (
                         <div key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                            <Check size={16} className={`flex-shrink-0 ${c.text}`} />
                            <span className="leading-snug">{feat}</span>
                         </div>
                       ))}
                    </div>

                    {/* Target Audience Block (Only Visible in Default State to fill gap, Hidden on mobile) */}
                    {!isActive && product.targetAudience && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`hidden md:block mt-4 mb-4 p-4 rounded-2xl ${c.bg} border ${c.border} border-opacity-30`}
                      >
                         <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2 ${c.text}`}>
                            <Users size={14} />
                            <span>Target Population</span>
                         </div>
                         <p className="text-sm text-slate-600 font-medium leading-relaxed">
                            {product.targetAudience}
                         </p>
                      </motion.div>
                    )}

                    {/* CISCER Clinical Pathway Diagram */}
                    {product.id === 'ciscer' && isActive && (
                      <div className="mb-2 bg-slate-900 rounded-2xl p-2 md:p-4 border border-white/10 animate-in fade-in zoom-in duration-300 overflow-hidden">
                        <h3 className="text-[10px] uppercase tracking-widest text-teal-400 mb-2 text-center font-bold">Clinical Pathway</h3>
                        <div className="flex justify-center w-full">
                          <svg width="100%" viewBox="0 0 800 280" className="w-full h-auto max-h-[120px]">
                            <defs>
                              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8"></polygon></marker>
                              <marker id="arrowhead-pos" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#fb7185"></polygon></marker>
                              <marker id="arrowhead-neg" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#2dd4bf"></polygon></marker>
                            </defs>
                            <rect x="250" y="0" width="300" height="50" rx="25" fill="#1e293b" stroke="#475569" strokeWidth="1"></rect>
                            <text x="400" y="30" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="400" fontFamily="serif">HPV (+) / Cytology (ASC-US)</text>
                            <line x1="400" y1="50" x2="400" y2="90" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#arrowhead)"></line>
                            <rect x="300" y="90" width="200" height="50" rx="25" fill="#0f766e" stroke="#2dd4bf" strokeWidth="1"></rect>
                            <text x="400" y="120" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="600" fontFamily="serif">PAX1/JAM3 Methylation</text>
                            <path d="M300 115 L150 115 L150 180" stroke="#fb7185" strokeWidth="1" fill="none" markerEnd="url(#arrowhead-pos)" strokeDasharray="5,5"></path>
                            <path d="M500 115 L650 115 L650 180" stroke="#2dd4bf" strokeWidth="1" fill="none" markerEnd="url(#arrowhead-neg)" strokeDasharray="5,5"></path>
                            <rect x="50" y="180" width="200" height="60" rx="12" fill="#881337" stroke="#fb7185" strokeWidth="1"></rect>
                            <text x="150" y="205" textAnchor="middle" fill="#fecaca" fontSize="14" fontWeight="bold">Positive (+)</text>
                            <text x="150" y="225" textAnchor="middle" fill="#fecaca" fontSize="12">Refer to Colposcopy</text>
                            <rect x="550" y="180" width="200" height="60" rx="12" fill="#134e4a" stroke="#2dd4bf" strokeWidth="1"></rect>
                            <text x="650" y="205" textAnchor="middle" fill="#ccfbf1" fontSize="14" fontWeight="bold">Negative (-)</text>
                            <text x="650" y="225" textAnchor="middle" fill="#ccfbf1" fontSize="12">Follow-up</text>
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* CISENDO Clinical Performance (Compact) */}
                    {product.id === 'cisendo' && isActive && (
                       <div className="mb-2 bg-slate-50 rounded-2xl p-3 border border-slate-200 animate-in fade-in zoom-in duration-300">
                          <h3 className="text-[10px] uppercase tracking-widest text-rose-600 mb-3 text-center font-bold">Clinical Performance</h3>
                          <div className="grid grid-cols-3 gap-2">
                             {/* Missed by Imaging */}
                             <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-sm text-center">
                                <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Missed by Imaging</div>
                                <div className="text-xl font-serif text-slate-700 font-bold">~55%</div>
                                <div className="mt-2 w-full bg-slate-100 rounded-full h-1">
                                   <div className="bg-slate-400 h-1 rounded-full" style={{ width: '55%' }}></div>
                                </div>
                             </div>

                             {/* Rescued by Methylation */}
                             <div className="bg-white p-2 rounded-xl border border-rose-100 shadow-sm text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-8 h-8 bg-rose-50 rounded-bl-xl -mr-2 -mt-2"></div>
                                <div className="text-[10px] text-rose-500 font-bold uppercase mb-1">Rescued</div>
                                <div className="text-xl font-serif text-rose-600 font-bold">50%</div>
                                <div className="mt-2 w-full bg-rose-100 rounded-full h-1">
                                   <div className="bg-rose-500 h-1 rounded-full" style={{ width: '50%' }}></div>
                                </div>
                             </div>

                             {/* Follow-up Success */}
                             <div className="bg-white p-2 rounded-xl border border-teal-100 shadow-sm text-center">
                                <div className="text-[10px] text-teal-600 font-bold uppercase mb-1">Follow-up</div>
                                <div className="flex items-center justify-center gap-1">
                                   <span className="text-lg font-serif text-teal-600 font-bold">3</span>
                                   <span className="text-[8px] text-slate-400 font-bold">EC</span>
                                   <span className="text-lg font-serif text-teal-400 font-bold ml-1">+2</span>
                                   <span className="text-[8px] text-slate-400 font-bold">EIN</span>
                                </div>
                                <div className="mt-2 flex justify-center items-center gap-1 text-[8px] text-slate-400">
                                   <Activity size={8} /> <span>Cohort ~1000</span>
                                </div>
                             </div>
                          </div>
                       </div>
                    )}

                    {/* CISOVA Clinical Performance (Compact) */}
                    {product.id === 'cisova' && isActive && (
                       <div className="mb-2 bg-slate-50 rounded-2xl p-3 border border-slate-200 animate-in fade-in zoom-in duration-300">
                          <h3 className="text-[10px] uppercase tracking-widest text-red-600 mb-3 text-center font-bold">Clinical Performance</h3>
                          <div className="grid grid-cols-2 gap-3">
                             {/* Superior Accuracy */}
                             <div className="bg-white p-3 rounded-xl border border-red-100 shadow-sm">
                                <div className="text-[10px] text-red-500 font-bold uppercase mb-2 flex items-center gap-1">
                                   <Target size={10} /> Superior Accuracy
                                </div>
                                <div className="space-y-2">
                                   <div className="flex justify-between items-center text-[9px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-1">
                                      <span>Method</span>
                                      <span>Sen. / Spe.</span>
                                   </div>
                                   <div className="flex justify-between items-center">
                                      <span className="text-[10px] font-bold text-red-700">CISOVA</span>
                                      <span className="text-[10px] font-serif text-slate-800">93.2% / 92.8%</span>
                                   </div>
                                   <div className="flex justify-between items-center opacity-60">
                                      <span className="text-[10px] text-slate-600">Ultrasound</span>
                                      <span className="text-[10px] font-serif text-slate-500">58.2% / 94.7%</span>
                                   </div>
                                   <div className="flex justify-between items-center opacity-60">
                                      <span className="text-[10px] text-slate-600">CA125</span>
                                      <span className="text-[10px] font-serif text-slate-500">69.9% / 67.4%</span>
                                   </div>
                                </div>
                             </div>

                             {/* Rescue Rate */}
                             <div className="bg-gradient-to-br from-teal-50 to-white p-3 rounded-xl border border-teal-100 shadow-sm flex flex-col justify-center text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-2 opacity-10">
                                   <Shield size={40} className="text-teal-800" />
                                </div>
                                <div className="text-[10px] text-teal-600 font-bold uppercase mb-1 z-10">Rescue Rate</div>
                                <div className="flex items-baseline justify-center gap-1 z-10">
                                   <span className="text-2xl font-serif text-teal-700 font-bold">38%</span>
                                   <span className="text-[8px] text-slate-400 font-light max-w-[60px] leading-tight text-left">of missed cases detected</span>
                                </div>
                                <div className="w-full mt-2 relative h-1.5 bg-slate-200 rounded-full overflow-hidden z-10">
                                   <div className="absolute left-0 top-0 h-full bg-teal-500 w-[38%]"></div>
                                </div>
                             </div>
                          </div>
                       </div>
                    )}

                    {/* Stats Area (Only visible when active/default) */}
                    <div className="mt-auto p-3 md:p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-2">
                       <div className="flex gap-4 md:gap-8 min-w-0">
                          <div className="flex-shrink-0">
                             <div className={`text-xl md:text-2xl font-bold ${c.text}`}>{product.stats.sensitivity}</div>
                             <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wide">Sensitivity</div>
                          </div>
                          <div className="flex-shrink-0">
                             <div className={`text-xl md:text-2xl font-bold ${c.text}`}>{product.stats.specificity}</div>
                             <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wide">Specificity</div>
                          </div>
                       </div>
                       <Link to={product.path} className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110 ${c.highlight}`}>
                          <ArrowRight size={16} className="md:w-5 md:h-5" />
                       </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  const baseUrl = import.meta.env.VITE_APP_URL || 'https://cispoly.netlify.app';

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "CISPOLY",
    "alternateName": ["Beijing OriginPoly Bio-Tec Co.,Ltd.", "北京起源聚禾生物科技有限公司", "OriginPoly", "起源聚禾", "聚禾生物"],
    "url": baseUrl,
    "logo": `${baseUrl}/favicon/android-chrome-512x512.png`,
    "description": "CISPOLY focuses on methylation-based cancer triage and women's health, providing advanced solutions like CISCER, CISENDO, and CISOVA.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Beijing",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@cispoly.com"
    }
  };

  return (
    <div>
      <SEO 
        title="CISPOLY - Methylation-Based Cancer Triage & Women's Health"
        description="CISPOLY (Beijing OriginPoly Bio-Tec) provides advanced methylation-based cancer triage solutions for Cervical (CISCER), Endometrial (CISENDO), and Ovarian (CISOVA) cancers."
        keywords={[
          'Cervical Cancer', 'Endometrial Cancer', 'Ovarian Cancer', 'Methylation',
          '宫颈癌', '子宫内膜癌', '卵巢癌', '甲基化',
          'CISPOLY', 'OriginPoly', 'CISCER', 'CISENDO', 'CISOVA',
          '北京起源聚禾', '聚禾生物', '禾蔻安', '禾宫康', '禾薇益'
        ]}
        schema={organizationSchema}
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden pt-20 pb-10">
        <div className="absolute inset-0 pointer-events-none z-0">
           {/* Abstract Background - blending all product colors (Teal, Rose, Red) */}
           <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-[100px] animate-pulse"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-100/30 rounded-full blur-[100px] animate-pulse delay-700"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 max-w-5xl px-6 text-center"
        >
          <div className="flex justify-center gap-4 mb-8">
            <span className="flex items-center gap-2 px-5 py-2 bg-white/60 backdrop-blur-md shadow-sm rounded-full text-sm font-semibold text-slate-800 border border-slate-200">
               <Heart size={16} className="text-rose-500" /> CISPOLY Biotech
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-slate-900 leading-[1.1] mb-8 tracking-tight">
            {t('home.hero.title')}
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-rose-700 mb-8">
            {t('home.hero.subtitle')}
          </h2>

          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            {t('home.hero.desc')}
          </p>

          <button 
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-serif text-lg hover:bg-slate-800 transition-all shadow-lg overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t('home.hero.btn')} <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </span>
          </button>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-32">
        
        {/* Mission Statement */}
        <section className="text-center">
            <div className="inline-block p-10 rounded-[3rem] bg-white/50 backdrop-blur-md border border-white shadow-xl max-w-4xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 via-rose-400 to-red-400"></div>
                <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">{t('home.mission.title')}</h3>
                <p className="text-3xl md:text-4xl font-serif text-slate-800 leading-snug italic">
                    "{t('home.mission.desc')}"
                </p>
            </div>
        </section>

        {/* Products Overview */}
        <section id="products">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-serif text-slate-800 mb-4">{t('home.products.title')}</h2>
                <div className="w-24 h-1 bg-slate-200 mx-auto rounded-full"></div>
            </div>

            <InteractiveProductShowcase />
        </section>

        {/* Guides Overview */}
        <section id="guides">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-serif text-slate-800 mb-4">{t('home.guides.title')}</h2>
                <div className="w-24 h-1 bg-slate-200 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Cervical Guide */}
                <div className="glass-card p-8 rounded-3xl border-t-4 border-t-teal-500 hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
                    <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                        <FileText size={32} />
                    </div>
                    <h3 className="text-2xl font-serif text-slate-900 mb-2">{t('nav.guides.cervical')}</h3>
                    <p className="text-slate-600 font-light mb-8 flex-grow leading-relaxed line-clamp-4">
                        {t('guides.cervical.desc')}
                    </p>
                    <Link to="/guides/cervical" className="flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-teal-600 transition-colors uppercase tracking-wider">
                        {t('home.guides.read')} <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Endometrial Guide */}
                <div className="glass-card p-8 rounded-3xl border-t-4 border-t-rose-500 hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
                    <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                        <FileText size={32} />
                    </div>
                    <h3 className="text-2xl font-serif text-slate-900 mb-2">{t('nav.guides.endo')}</h3>
                    <p className="text-slate-600 font-light mb-8 flex-grow leading-relaxed line-clamp-4">
                        {t('guides.endo.desc')}
                    </p>
                    <Link to="/guides/endo" className="flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-rose-600 transition-colors uppercase tracking-wider">
                        {t('home.guides.read')} <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Ovarian Guide */}
                <div className="glass-card p-8 rounded-3xl border-t-4 border-t-red-500 hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <FileText size={32} />
                    </div>
                    <h3 className="text-2xl font-serif text-slate-900 mb-2">{t('nav.guides.ovarian')}</h3>
                    <p className="text-slate-600 font-light mb-8 flex-grow leading-relaxed line-clamp-4">
                        {t('guides.ovarian.desc')}
                    </p>
                    <Link to="/guides/ovarian" className="flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-red-600 transition-colors uppercase tracking-wider">
                        {t('home.guides.read')} <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>

        {/* Technology Brief */}
        <section className="bg-white/40 backdrop-blur-md rounded-[3rem] p-8 md:p-16 border border-white">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-600 text-xs font-bold uppercase tracking-widest mb-6">
                        <Activity size={14} /> {t('home.tech.title')}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-6 leading-tight">
                        {t('home.tech.subtitle')}
                    </h2>
                    <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                        <p>{t('home.tech.p1')}</p>
                        <p>{t('home.tech.p2')}</p>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="relative w-80 h-80">
                        {/* Visual Metaphor for Methylation */}
                        <div className="absolute inset-0 bg-slate-900 rounded-full opacity-5 scale-90"></div>
                        <div className="absolute inset-0 border border-slate-200 rounded-full animate-[spin_20s_linear_infinite]"></div>
                        <div className="absolute inset-4 border border-slate-200 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                             <div className="text-center">
                                <Sparkles className="mx-auto mb-2 text-slate-400" size={32} />
                                <span className="block font-serif text-2xl text-slate-700">Epigenetic</span>
                                <span className="block text-xs uppercase tracking-widest text-slate-400">Marker</span>
                             </div>
                        </div>

                        {/* Orbiting Icons */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-white p-3 rounded-full shadow-md">
                            <Shield size={24} className="text-teal-500" />
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-white p-3 rounded-full shadow-md">
                            <Activity size={24} className="text-rose-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
};

export default HomePage;
