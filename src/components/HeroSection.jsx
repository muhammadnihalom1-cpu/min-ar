import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Instagram, Award, Heart } from 'lucide-react';

export default function HeroSection({ onOpenCustomStudio }) {
  return (
    <section style={{ position: 'relative', padding: '80px 0 100px 0', overflow: 'hidden' }}>
      
      {/* Background Glow Orbs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(10, 14, 23, 0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '60px', alignItems: 'center' }} className="hero-grid">
          
          {/* Text Content */}
          <div>
            
            {/* Tagline Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '20px',
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              color: '#F3E5AB',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '24px'
            }}>
              <Sparkles size={14} color="#D4AF37" />
              <span>Design with Purity</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-brand" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.15, marginBottom: '24px', fontWeight: 800 }}>
              Crafting Timeless <br />
              <span className="text-gold-gradient">Gold & Diamond</span> <br />
              Masterpieces.
            </h1>

            <p style={{ color: '#D1D5DB', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '36px', maxWidth: '540px' }}>
              Welcome to <strong>Minar Gold & Diamonds</strong> (Omassery, Calicut). Explore BIS 916 Hallmarked 22K gold jewellery, certified solitaire diamonds, and bespoke handcrafted bridal collections designed for life's most precious celebrations.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <a href="#collections" className="btn-gold gold-shimmer" style={{ padding: '16px 32px', fontSize: '0.95rem' }}>
                <span>Explore Collections</span>
                <ArrowRight size={18} />
              </a>

              <button
                onClick={onOpenCustomStudio}
                className="btn-outline-gold"
                style={{ padding: '16px 32px', fontSize: '0.95rem' }}
              >
                <Sparkles size={18} />
                <span>Custom Order Studio</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '28px', flexWrap: 'wrap' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={28} color="#D4AF37" />
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#FFF', fontWeight: 700 }}>BIS 916 Hallmarked</h4>
                  <p style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>100% Purity Certified</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Instagram size={28} color="#E1306C" />
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#FFF', fontWeight: 700 }}>13K+ Followers</h4>
                  <p style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>@minar_gold_diamonds</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Heart size={28} color="#D4AF37" />
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#FFF', fontWeight: 700 }}>Bespoke Designs</h4>
                  <p style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>Customized for You</p>
                </div>
              </div>

            </div>

          </div>

          {/* Visual Showcase Card */}
          <div style={{ position: 'relative' }}>
            
            <div className="glass-card" style={{ padding: '16px', position: 'relative', overflow: 'hidden' }}>
              <img
                src="/hero_bridal.png"
                alt="Minar Gold & Diamonds Bridal Heritage Necklace"
                style={{
                  width: '100%',
                  height: '480px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  display: 'block'
                }}
              />
              
              {/* Overlay Badge */}
              <div style={{
                position: 'absolute',
                bottom: '32px',
                left: '32px',
                right: '32px',
                background: 'rgba(10, 14, 23, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid var(--border-gold)',
                borderRadius: '12px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <span style={{ fontSize: '0.7rem', color: '#D4AF37', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 700 }}>
                    Featured Collection
                  </span>
                  <h3 className="font-serif" style={{ fontSize: '1.1rem', color: '#FFF', marginTop: '2px' }}>
                    Royal Emerald Bridal Set
                  </h3>
                </div>
                <span className="btn-gold" style={{ padding: '6px 14px', fontSize: '0.75rem' }}>
                  22K Gold
                </span>
              </div>
            </div>

            {/* Decorative Gold Frame Accent */}
            <div style={{
              position: 'absolute',
              top: '-16px',
              right: '-16px',
              width: '120px',
              height: '120px',
              borderTop: '2px solid var(--gold-primary)',
              borderRight: '2px solid var(--gold-primary)',
              borderRadius: '0 16px 0 0',
              pointerEvents: 'none'
            }} />

          </div>

        </div>
      </div>
    </section>
  );
}
