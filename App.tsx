
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

const AppContent: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();

  return (
    <div className="min-h-screen relative">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ciscer" element={<CiscerPage />} />
        <Route path="/cisendo" element={<CisendoPage />} />
        <Route path="/cisova" element={<CisovaPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/guides/cervical" element={<GuidesCervicalPage />} />
        <Route path="/guides/endo" element={<GuidesEndoPage />} />
        <Route path="/guides/ovarian" element={<GuidesOvarianPage />} />
      </Routes>
      
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
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;
