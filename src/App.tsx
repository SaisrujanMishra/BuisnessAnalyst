import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';
import PageMotion from './components/PageMotion';

const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ResumePage = lazy(() => import('./pages/ResumePage'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageMotion />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="site-shell">
        <Navigation />
        <main id="main-content">
          <Suspense fallback={<div className="route-loading" role="status">Loading page...</div>}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
