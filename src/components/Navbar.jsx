import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const go = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Collections', id: 'collections' },
    { label: 'About Us', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          background: scrolled ? 'var(--primary-green)' : 'transparent',
          borderBottom: `1px solid ${scrolled ? 'rgba(255, 255, 255, 0.05)' : 'transparent'}`,
          transition: 'background 0.4s ease, border 0.4s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '90px' }}>

          {/* Logo */}
          <button
            onClick={() => go('home')}
            style={{ display: 'flex', flexDirection: 'column', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <div style={{ fontSize: '2rem', fontFamily: 'var(--font-sans)', fontWeight: 300, color: '#f3eee4', letterSpacing: '-0.5px', lineHeight: 1 }}>
              minar
            </div>
            <div style={{ fontSize: '0.55rem', color: 'var(--champagne-gold)', letterSpacing: '2.5px', textTransform: 'uppercase', fontWeight: 500, marginTop: '2px' }}>
              Gold & Diamonds
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '32px' }} aria-label="Main Navigation">
            {navLinks.map(link => (
              <div key={link.id} style={{ position: 'relative' }}>
                <button
                  onClick={() => go(link.id)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: 400,
                    color: '#f3eee4',
                    padding: '8px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} color="#f3eee4" />}
                </button>
                {activePage === link.id && (
                  <motion.div
                    layoutId="navbar-indicator"
                    style={{
                      position: 'absolute',
                      bottom: -4, left: 0, right: 0,
                      height: '1px',
                      background: 'var(--champagne-gold)',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f3eee4' }}>
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f3eee4' }}>
              <Heart size={20} strokeWidth={1.5} />
            </button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f3eee4' }}>
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Hamburger Mobile */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''} hide-desktop`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span style={{ background: '#f3eee4' }} /><span style={{ background: '#f3eee4' }} /><span style={{ background: '#f3eee4' }} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 1999,
              background: 'var(--primary-green)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '40px'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => go(link.id)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: '1.5rem', fontFamily: 'var(--font-serif)',
                    color: activePage === link.id ? 'var(--champagne-gold)' : '#f3eee4',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
