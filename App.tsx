
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import CiscerPage from './components/pages/CiscerPage';
import CisendoPage from './components/pages/CisendoPage';
import CisovaPage from './components/pages/CisovaPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import HomePage from './components/pages/HomePage';
import GuidesCervicalPage from './components/pages/GuidesCervicalPage';
import GuidesEndoPage from './components/pages/GuidesEndoPage';
import GuidesOvarianPage from './components/pages/GuidesOvarianPage';
import BackToTop from './components/BackToTop';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

type ProductPage = 'HOME' | 'CISCER' | 'CISENDO' | 'CISOVA' | 'ABOUT' | 'CONTACT' | 'GUIDES_CERVICAL' | 'GUIDES_ENDO' | 'GUIDES_OVARIAN';

const AppContent: React.FC = () => {
  const { t } = useLanguage();
  // Set default page to HOME
  const [activeProduct, setActiveProduct] = useState<ProductPage>('HOME');

  return (
    <div className="min-h-screen relative">
      <Navigation onProductChange={setActiveProduct} activeProduct={activeProduct} />

      {activeProduct === 'HOME' && <HomePage onNavigate={setActiveProduct} />}
      {activeProduct === 'CISCER' && <CiscerPage />}
      {activeProduct === 'CISENDO' && <CisendoPage />}
      {activeProduct === 'CISOVA' && <CisovaPage />}
      {activeProduct === 'ABOUT' && <AboutPage />}
      {activeProduct === 'CONTACT' && <ContactPage />}
      {activeProduct === 'GUIDES_CERVICAL' && <GuidesCervicalPage />}
      {activeProduct === 'GUIDES_ENDO' && <GuidesEndoPage />}
      {activeProduct === 'GUIDES_OVARIAN' && <GuidesOvarianPage />}
      
      {/* Footer */}
      <footer className="bg-white/50 border-t border-slate-200 py-12 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-slate-400 font-light">
            {t('footer.disclaimer')}
          </p>
        </div>
      </footer>
      
      <BackToTop />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
