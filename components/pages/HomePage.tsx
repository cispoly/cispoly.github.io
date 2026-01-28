
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Microscope, Target, Droplet, Heart, Shield, Activity, Sparkles, ChevronRight, FileText } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface Props {
  onNavigate: (product: 'CISCER' | 'CISENDO' | 'CISOVA' | 'GUIDES_CERVICAL' | 'GUIDES_ENDO' | 'GUIDES_OVARIAN') => void;
}

const HomePage: React.FC<Props> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <div>
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

            <div className="grid md:grid-cols-3 gap-8">
                {/* CISCER Card */}
                <div className="glass-card p-8 rounded-3xl border-t-4 border-t-teal-500 hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
                    <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                        <Microscope size={32} />
                    </div>
                    <h3 className="text-2xl font-serif text-slate-900 mb-2">CISCER</h3>
                    <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-4">Cervical Cancer</p>
                    <p className="text-slate-600 font-light mb-8 flex-grow leading-relaxed">
                        {t('home.products.ciscer.desc')}
                    </p>
                    <button onClick={() => onNavigate('CISCER')} className="flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-teal-600 transition-colors uppercase tracking-wider">
                        {t('home.products.learn')} <ArrowRight size={16} />
                    </button>
                </div>

                {/* CISENDO Card */}
                <div className="glass-card p-8 rounded-3xl border-t-4 border-t-rose-500 hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
                    <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                        <Target size={32} />
                    </div>
                    <h3 className="text-2xl font-serif text-slate-900 mb-2">CISENDO</h3>
                    <p className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-4">Endometrial Cancer</p>
                    <p className="text-slate-600 font-light mb-8 flex-grow leading-relaxed">
                        {t('home.products.cisendo.desc')}
                    </p>
                    <button onClick={() => onNavigate('CISENDO')} className="flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-rose-600 transition-colors uppercase tracking-wider">
                        {t('home.products.learn')} <ArrowRight size={16} />
                    </button>
                </div>

                {/* CISOVA Card */}
                <div className="glass-card p-8 rounded-3xl border-t-4 border-t-red-500 hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <Droplet size={32} />
                    </div>
                    <h3 className="text-2xl font-serif text-slate-900 mb-2">CISOVA</h3>
                    <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-4">Ovarian Cancer</p>
                    <p className="text-slate-600 font-light mb-8 flex-grow leading-relaxed">
                        {t('home.products.cisova.desc')}
                    </p>
                    <button onClick={() => onNavigate('CISOVA')} className="flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-red-600 transition-colors uppercase tracking-wider">
                        {t('home.products.learn')} <ArrowRight size={16} />
                    </button>
                </div>
            </div>
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
                    <button onClick={() => onNavigate('GUIDES_CERVICAL')} className="flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-teal-600 transition-colors uppercase tracking-wider">
                        {t('home.guides.read')} <ArrowRight size={16} />
                    </button>
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
                    <button onClick={() => onNavigate('GUIDES_ENDO')} className="flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-rose-600 transition-colors uppercase tracking-wider">
                        {t('home.guides.read')} <ArrowRight size={16} />
                    </button>
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
                    <button onClick={() => onNavigate('GUIDES_OVARIAN')} className="flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-red-600 transition-colors uppercase tracking-wider">
                        {t('home.guides.read')} <ArrowRight size={16} />
                    </button>
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
