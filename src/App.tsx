
import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import BackToTop from './components/BackToTop';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

// Lazy load pages
const HomePage = lazy(() => import('./components/pages/HomePage'));
const CiscerPage = lazy(() => import('./components/pages/CiscerPage'));
const CisendoPage = lazy(() => import('./components/pages/CisendoPage'));
const CisovaPage = lazy(() => import('./components/pages/CisovaPage'));
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const ContactPage = lazy(() => import('./components/pages/ContactPage'));
const GuidesCervicalPage = lazy(() => import('./components/pages/GuidesCervicalPage'));
const GuidesEndoPage = lazy(() => import('./components/pages/GuidesEndoPage'));
const GuidesOvarianPage = lazy(() => import('./components/pages/GuidesOvarianPage'));
const BlogIndexPage = lazy(() => import('./components/pages/BlogIndexPage'));
const BlogPostPage = lazy(() => import('./components/pages/BlogPostPage'));

const PageLoader = () => (
  <div className="min-h-screen flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
  </div>
);

const AppContent: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();

  return (
    <div className="min-h-screen relative">
      <Navigation />

      <Suspense fallback={<PageLoader />}>
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
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </Suspense>
      
      {/* Footer */}
      <footer className="bg-white/50 border-t border-slate-200 py-12 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-slate-400 font-light mb-4">
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
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <AppContent />
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
