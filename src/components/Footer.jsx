import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, MapPin, ArrowRight } from 'lucide-react';
import { useSiteSettings } from '../hooks/useSiteSettings';

export default function Footer({ onNavigate, showNewsletter = true }) {
  const { settings } = useSiteSettings();
  return (
    <footer style={{ background: 'var(--primary-green)', color: '#FFF' }}>
      
      {/* Pre-Footer Newsletter Section */}
      {showNewsletter && (
        <div style={{ display: 'flex', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        
        {/* Left Side (Beige Card) */}
        <div style={{ 
          flex: '1 1 300px', 
          background: 'var(--bg-beige)', 
          padding: 'clamp(40px, 8vw, 80px) clamp(20px, 6vw, 60px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTopRightRadius: '100px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ maxWidth: '300px', position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', color: 'var(--primary-green)', lineHeight: 1.1, marginBottom: '24px' }}>
              More Than Jewellery, It's Your Legacy.
            </h2>
            <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', marginBottom: '32px' }}>
              At Minar, every piece is thoughtfully crafted to celebrate life's most precious moments.
            </p>
            <button className="btn btn-outline-dark" style={{ background: 'var(--primary-green)', color: '#fff', borderRadius: '4px' }}>
              Explore Collections <ArrowRight size={16} />
            </button>
          </div>
          <div style={{ width: '250px', position: 'relative', zIndex: 1 }}>
            <img src="/gold_ring_category.png" alt="Ring" style={{ width: '100%', objectFit: 'contain' }} />
          </div>
        </div>

        {/* Right Side (Stay Connected) */}
        <div style={{ 
          flex: '1 1 300px', 
          padding: 'clamp(40px, 8vw, 80px) clamp(20px, 6vw, 60px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--champagne-gold)', marginBottom: '16px' }}>
            Stay Connected
          </h3>
          <p style={{ color: 'rgba(243, 238, 228, 0.8)', fontSize: '0.95rem', marginBottom: '32px', maxWidth: '400px' }}>
            Be the first to know about our new collections, offers and exclusive events.
          </p>
          
          <div style={{ display: 'flex', maxWidth: '400px', marginBottom: '40px' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{ 
                flex: 1, padding: '16px 20px', 
                background: 'transparent', border: '1px solid rgba(255,255,255,0.2)',
                borderRight: 'none', borderRadius: '4px 0 0 4px',
                color: '#fff', outline: 'none'
              }}
            />
            <button style={{ 
              background: 'var(--champagne-gold)', color: 'var(--primary-green)',
              border: 'none', padding: '0 24px', borderRadius: '0 4px 4px 0',
              cursor: 'pointer'
            }}>
              <ArrowRight size={20} />
            </button>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" style={{ 
                width: '40px', height: '40px', borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--champagne-gold)'
              }}>
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
        </div>
      )}

      {/* Main Footer Links */}
      <div className="container" style={{ paddingTop: 'clamp(40px, 8vw, 80px)', paddingBottom: '40px' }}>
        <div className="grid-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 'clamp(30px, 6vw, 60px)', gap: '40px' }}>
          
          {/* Logo & Tagline */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '24px' }}>
              <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-sans)', fontWeight: 300, color: 'var(--champagne-light)', letterSpacing: '-0.5px', lineHeight: 1 }}>
                minar
              </div>
              <div style={{ fontSize: '0.6rem', color: 'var(--champagne-gold)', letterSpacing: '2.5px', textTransform: 'uppercase', fontWeight: 500, marginTop: '2px' }}>
                Gold & Diamonds
              </div>
            </div>
            <p style={{ color: 'rgba(243, 238, 228, 0.7)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Crafted with passion.<br/>Worn with pride.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#f3eee4', fontSize: '1rem', fontWeight: 500, fontFamily: 'var(--font-serif)', marginBottom: '24px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Home', id: 'home' },
                { label: 'Collections', id: 'collections' },
                { label: 'About Us', id: 'about' },
                { label: 'Contact', id: 'contact' }
              ].map(link => (
                <li key={link.id}>
                  <button 
                    onClick={() => onNavigate(link.id)} 
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'rgba(243, 238, 228, 0.7)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 style={{ color: '#f3eee4', fontSize: '1rem', fontWeight: 500, fontFamily: 'var(--font-serif)', marginBottom: '24px' }}>Customer Care</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['FAQ', 'Returns & Exchange', 'Terms & Conditions', 'Privacy Policy'].map(link => (
                <li key={link}><a href="#" style={{ color: 'rgba(243, 238, 228, 0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Visit Our Store */}
          <div>
            <h4 style={{ color: '#f3eee4', fontSize: '1rem', fontWeight: 500, fontFamily: 'var(--font-serif)', marginBottom: '24px' }}>Visit Our Store</h4>
            <p style={{ color: 'rgba(243, 238, 228, 0.7)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '24px', whiteSpace: 'pre-line' }}>
              {settings.address}
            </p>
            <a href={settings.mapLink} target="_blank" rel="noreferrer" style={{ 
              background: 'transparent', border: '1px solid rgba(255,255,255,0.2)',
              color: '#f3eee4', padding: '12px 24px', borderRadius: '4px',
              display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', textDecoration: 'none'
            }}>
              <MapPin size={16} /> Get Directions
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div style={{ textAlign: 'center', paddingTop: '32px', color: 'rgba(243, 238, 228, 0.5)', fontSize: '0.85rem' }}>
          © 2024 Minar Gold & Diamonds. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
