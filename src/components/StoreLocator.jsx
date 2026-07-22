import React from 'react';
import { MapPin, Phone, Mail, Clock, CalendarX, Navigation, Instagram, Star, ShieldCheck } from 'lucide-react';
import { useSiteSettings } from '../hooks/useSiteSettings';

export default function StoreLocator() {
  const { settings } = useSiteSettings();
  return (
    <section id="store-locator" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px auto' }}>
          <span style={{ fontSize: '0.8rem', color: '#D4AF37', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700 }}>
            Visit Our Showroom
          </span>
          <h2 className="font-brand" style={{ fontSize: '2.4rem', color: '#FFF', marginTop: '8px', marginBottom: '16px' }}>
            Minar Gold & Diamonds Showroom
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1rem', lineHeight: 1.6 }}>
            Experience personalized hospitality and explore hundreds of gold & diamond ornaments in person.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'stretch'
        }} className="store-grid">
          
          {/* Store Info Card */}
          <div className="glass-card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>
                    Flagship Store
                  </span>
                  <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#FFF', marginTop: '4px' }}>
                    Omassery, Calicut
                  </h3>
                </div>

                <div style={{
                  background: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#FCA5A5',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}>
                  <CalendarX size={14} />
                  <span>Sunday Closed</span>
                </div>
              </div>

              {/* Info Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={iconBoxStyle}>
                    <MapPin size={20} color="#D4AF37" />
                  </div>
                  <div>
                    <strong style={{ color: '#FFF', display: 'block', fontSize: '0.95rem' }}>Address</strong>
                    <p style={{ color: '#9CA3AF', fontSize: '0.85rem', lineHeight: 1.5, marginTop: '2px', whiteSpace: 'pre-line' }}>
                      {settings.address}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={iconBoxStyle}>
                    <Phone size={20} color="#D4AF37" />
                  </div>
                  <div>
                    <strong style={{ color: '#FFF', display: 'block', fontSize: '0.95rem' }}>Phone & WhatsApp</strong>
                    <p style={{ color: '#F3E5AB', fontSize: '0.9rem', marginTop: '2px', fontWeight: 700 }}>
                      {settings.phone}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={iconBoxStyle}>
                    <Mail size={20} color="#D4AF37" />
                  </div>
                  <div>
                    <strong style={{ color: '#FFF', display: 'block', fontSize: '0.95rem' }}>Email</strong>
                    <p style={{ color: '#9CA3AF', fontSize: '0.85rem', marginTop: '2px' }}>
                      {settings.email}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={iconBoxStyle}>
                    <Clock size={20} color="#D4AF37" />
                  </div>
                  <div>
                    <strong style={{ color: '#FFF', display: 'block', fontSize: '0.95rem' }}>Operating Hours</strong>
                    <p style={{ color: '#9CA3AF', fontSize: '0.85rem', marginTop: '2px' }}>
                      Monday – Saturday: 9:30 AM – 8:00 PM<br />
                      <span style={{ color: '#FCA5A5' }}>Sunday: Weekly Holiday</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href={settings.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <Navigation size={16} />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                className="btn-outline-gold"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <Phone size={16} />
                <span>Call Store</span>
              </a>
            </div>

          </div>

          {/* Map Preview & Instagram Widget */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Map Frame Card */}
            <div className="glass-card" style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
              <iframe
                title="Minar Gold Omassery Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15648.749539328405!2d75.976527!3d11.321458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba642d400000001%3A0x889812975916035d!2sOmassery%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Instagram Profile Teaser */}
            <div className="glass-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Instagram size={28} color="#FFF" />
                </div>
                <div>
                  <h4 style={{ color: '#FFF', fontSize: '1rem', fontWeight: 700 }}>@minar_gold_diamonds</h4>
                  <p style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>13,000+ Followers • 283 Posts</p>
                </div>
              </div>

              <a
                href="https://www.instagram.com/minar_gold_diamonds/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
                style={{ padding: '8px 16px', fontSize: '0.78rem' }}
              >
                Follow Profile
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

const iconBoxStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '10px',
  background: 'rgba(212, 175, 55, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0
};
