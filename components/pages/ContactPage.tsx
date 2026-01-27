
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageSquare, Loader2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xvzavrrw", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert("There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem submitting your form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 pb-20">
      {/* Header */}
      <section className="relative px-6 py-20 text-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/50 backdrop-blur-md shadow-lg mb-8 border border-white">
            <MessageSquare size={32} className="text-teal-700" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-medium text-slate-800 mb-6 italic">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-slate-600 font-light">
            {t('contact.subtitle')}
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group">
             <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                <MapPin size={28} />
             </div>
             <h3 className="text-lg font-serif font-bold text-slate-800 mb-2">{t('contact.address.label')}</h3>
             <p className="text-slate-600 font-light text-sm leading-relaxed max-w-xs">
                {t('contact.address.value')}
             </p>
          </div>

          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group">
             <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <Mail size={28} />
             </div>
             <h3 className="text-lg font-serif font-bold text-slate-800 mb-2">{t('contact.email.label')}</h3>
             <a href="mailto:OPBT@cispoly.com" className="text-slate-600 font-light text-sm hover:text-rose-600 transition-colors">
                OPBT@cispoly.com
             </a>
          </div>

          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group">
             <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Phone size={28} />
             </div>
             <h3 className="text-lg font-serif font-bold text-slate-800 mb-2">{t('contact.tel.label')}</h3>
             <a href="tel:01052208820" className="text-slate-600 font-light text-sm hover:text-blue-600 transition-colors">
                010-52208820
             </a>
          </div>
        </div>

        {/* Map & Form Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
           {/* Map Section */}
           <div className="h-full min-h-[500px] glass-card rounded-[2rem] overflow-hidden p-2 shadow-lg">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                 <iframe 
                   title="CISPOLY Location"
                   width="100%" 
                   height="100%" 
                   frameBorder="0" 
                   scrolling="no" 
                   marginHeight={0} 
                   marginWidth={0} 
                   src="https://maps.google.com/maps?q=Huatuo+Road,+Daxing+District,+Beijing&t=&z=13&ie=UTF8&iwloc=&output=embed"
                   className="grayscale hover:grayscale-0 transition-all duration-500"
                 ></iframe>
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-md text-xs font-bold text-slate-600">
                    CISPOLY Biotech
                 </div>
              </div>
           </div>

           {/* Form Section */}
           <div className="glass-card p-8 md:p-12 rounded-[2rem] shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
               
               <div className="relative z-10">
                  <h2 className="text-3xl font-serif text-slate-800 mb-8 italic">{t('contact.form.title')}</h2>
                  
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                        <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-6">
                            <CheckCircle2 size={40} />
                        </div>
                        <h3 className="text-2xl font-serif text-slate-800 mb-2">{t('contact.form.success')}</h3>
                        <p className="text-slate-500 font-light">We will get back to you shortly.</p>
                        <button 
                          onClick={() => setIsSubmitted(false)}
                          className="mt-8 px-6 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 text-sm font-medium transition-colors"
                        >
                          Send another message
                        </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">{t('contact.form.name')}</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    required 
                                    className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white transition-all text-slate-800"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">{t('contact.form.phone')}</label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white transition-all text-slate-800"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">{t('contact.form.org')}</label>
                            <input 
                                type="text" 
                                name="organization"
                                className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white transition-all text-slate-800"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">{t('contact.form.email')}</label>
                            <input 
                                type="email" 
                                name="email"
                                required 
                                className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white transition-all text-slate-800"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">{t('contact.form.message')}</label>
                            <div className="relative">
                                <textarea 
                                    name="message"
                                    className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white transition-all text-slate-800 resize-none"
                                    rows={4}
                                    placeholder={t('contact.form.defaultMessage')}
                                ></textarea>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-slate-800 text-white rounded-xl py-4 font-bold text-sm uppercase tracking-widest hover:bg-slate-900 hover:shadow-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>Sending... <Loader2 size={16} className="animate-spin" /></>
                            ) : (
                                <>{t('contact.form.submit')} <Send size={16} className="group-hover:translate-x-1 transition-transform" /></>
                            )}
                        </button>
                    </form>
                  )}
               </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
