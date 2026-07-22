import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, RefreshCw, Info, User, Mail as MailIcon, Phone as PhoneIcon, MessageSquare, Edit2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSiteSettings } from '../hooks/useSiteSettings';
import { useSEO } from '../hooks/useSEO';

export default function ContactPage() {
  useSEO('Contact Us', 'Get in touch with Minar Gold & Diamonds. Visit our flagship store in Omassery, Calicut, or contact us online.');
  const { settings } = useSiteSettings();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <div style={{ background: 'var(--primary-green)', overflowX: 'hidden' }}>

      {/* ─── CONTACT HERO SECTION ─── */}
      <section style={{ 
        position: 'relative', 
        paddingTop: '120px', 
        paddingBottom: '80px'
      }}>
        <div className="container">
          <div style={{ 
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ flex: '1 1 350px', maxWidth: '400px', color: '#f3eee4' }}
            >
              <h1 style={{ fontSize: 'clamp(3.5rem, 5vw, 4.5rem)', color: 'var(--champagne-gold)', lineHeight: 1.1, marginBottom: '24px' }}>
                We're Here<br />For You.
              </h1>
              <p style={{ color: 'rgba(243, 238, 228, 0.8)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '48px' }}>
                Have a question, feedback, or need assistance? Our team would love to hear from you. Reach out to us and we'll get back to you as soon as possible.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {[
                  { Icon: Phone, title: 'Call Us', desc: settings.phone },
                  { Icon: Mail, title: 'Email Us', desc: settings.email },
                  { Icon: MapPin, title: 'Visit Our Store', desc: settings.address },
                  { Icon: Clock, title: 'Store Timings', desc: settings.storeTimings },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ 
                      width: '48px', height: '48px', borderRadius: '50%', 
                      border: '1px solid var(--champagne-gold)', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <item.Icon size={20} color="var(--champagne-gold)" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--champagne-gold)', fontSize: '0.95rem', fontWeight: 500, marginBottom: '4px' }}>{item.title}</h4>
                      <p style={{ color: '#f3eee4', fontSize: '0.85rem', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{item.desc}</p>
                      {item.title === 'Visit Our Store' && (
                        <div style={{ marginTop: '12px' }}>
                          <a href={settings.mapLink} target="_blank" rel="noreferrer" style={{ color: 'var(--champagne-gold)', fontSize: '0.85rem', textDecoration: 'underline' }}>
                            Get Directions
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Center Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', position: 'relative' }}
            >
              <div style={{ 
                width: '100%', maxWidth: '340px', height: '600px',
                borderRadius: '200px 200px 0 0',
                border: '1px solid var(--champagne-gold)',
                padding: '8px',
                position: 'relative'
              }}>
                <img 
                  src="/diamond_pendant.png" 
                  alt="Jewellery" 
                  style={{ 
                    width: '100%', height: '100%', objectFit: 'cover', 
                    borderRadius: '192px 192px 0 0'
                  }} 
                />
                <div style={{ 
                  position: 'absolute', bottom: '-40px', right: '-20px',
                  width: '120px', height: '120px',
                  borderRadius: '50%', border: '1px dashed var(--champagne-gold)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--primary-green)'
                }}>
                   <span style={{ fontSize: '0.65rem', color: 'var(--champagne-gold)', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Crafted with passion worn with pride
                   </span>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ flex: '1 1 350px', maxWidth: '400px' }}
            >
              <h3 style={{ fontSize: '1.8rem', color: 'var(--champagne-gold)', marginBottom: '32px', textAlign: 'center' }}>
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { id: 'name', type: 'text', placeholder: 'Your Name', Icon: User },
                  { id: 'email', type: 'email', placeholder: 'Email Address', Icon: MailIcon },
                  { id: 'phone', type: 'tel', placeholder: 'Phone Number', Icon: PhoneIcon },
                  { id: 'subject', type: 'text', placeholder: 'Subject', Icon: MessageSquare },
                ].map(field => (
                  <div key={field.id} style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '16px', top: '16px', color: 'var(--text-light)' }}>
                      <field.Icon size={18} strokeWidth={1.5} />
                    </div>
                    <input 
                      type={field.type} 
                      placeholder={field.placeholder} 
                      value={form[field.id]}
                      onChange={e => set(field.id, e.target.value)}
                      style={{ 
                        width: '100%', padding: '16px 16px 16px 48px',
                        background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px', color: '#f3eee4', fontSize: '0.9rem', outline: 'none'
                      }} 
                    />
                  </div>
                ))}

                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '16px', top: '16px', color: 'var(--text-light)' }}>
                    <Edit2 size={18} strokeWidth={1.5} />
                  </div>
                  <textarea 
                    placeholder="Your Message" 
                    value={form.message}
                    onChange={e => set('message', e.target.value)}
                    style={{ 
                      width: '100%', padding: '16px 16px 16px 48px', minHeight: '120px', resize: 'vertical',
                      background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px', color: '#f3eee4', fontSize: '0.9rem', outline: 'none'
                    }} 
                  />
                </div>

                <button type="submit" className="btn btn-gold" style={{ width: '100%', padding: '16px', marginTop: '8px', borderRadius: '8px' }}>
                  Send Message <ArrowRight size={18} />
                </button>
              </form>

              <div style={{ display: 'flex', gap: '12px', marginTop: '24px', alignItems: 'flex-start' }}>
                <ShieldCheck size={20} color="var(--text-light)" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                <p style={{ color: 'var(--text-light)', fontSize: '0.8rem', lineHeight: 1.5 }}>
                  Your information is safe with us.<br/>We respect your privacy.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── TRUST BANNER ─── */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ 
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '100px',
            padding: '24px 48px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            {[
              { icon: ShieldCheck, title: 'BIS Hallmarked', desc: '100% Certified Jewellery' },
              { icon: RefreshCw, title: 'Lifetime Exchange', desc: 'Across All Our Stores' },
              { icon: Info, title: 'Transparent Pricing', desc: 'No Hidden Charges' },
            ].map((item, idx, arr) => (
              <React.Fragment key={item.title}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <item.icon size={28} color="var(--champagne-gold)" strokeWidth={1.5} />
                  <div>
                    <h4 style={{ color: '#f3eee4', fontSize: '0.95rem', fontWeight: 600 }}>{item.title}</h4>
                    <p style={{ color: 'rgba(243, 238, 228, 0.6)', fontSize: '0.75rem', marginTop: '2px' }}>{item.desc}</p>
                  </div>
                </div>
                {idx < arr.length - 1 && (
                  <div className="hide-mobile" style={{ width: '1px', height: '40px', background: 'rgba(255, 255, 255, 0.1)' }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
