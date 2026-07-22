import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HomePage from './pages/HomePage';
import CollectionsPage from './pages/CollectionsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';
import Footer from './components/Footer';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

export default function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#admin') {
        setActivePage('admin');
      } else if (activePage === 'admin' && window.location.hash !== '#admin') {
        setActivePage('home');
      }
    };
    
    // Check initially
    checkHash();
    
    // Listen for changes
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, [activePage]);

  const handleNavigate = (page) => {
    if (window.location.hash === '#admin') {
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
    }
    setActivePage(page); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (activePage === 'admin') {
    return <AdminPage />;
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-white)' }}>
      
      {/* Sticky Glass Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* Dynamic Page Views with Framer Motion Page Transitions */}
      <main style={{ flex: 1, position: 'relative' }}>
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div key="home" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <HomePage onNavigate={handleNavigate} />
            </motion.div>
          )}
          {activePage === 'collections' && (
            <motion.div key="collections" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <CollectionsPage />
            </motion.div>
          )}
          {activePage === 'contact' && (
            <motion.div key="contact" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <ContactPage />
            </motion.div>
          )}
          {activePage === 'about' && (
            <motion.div key="about" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <AboutPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Brand Footer */}
      <Footer 
        showNewsletter={activePage !== 'about' && activePage !== 'collections'}
        onNavigate={handleNavigate} 
      />

    </div>
  );
}
