import React from 'react';
import { ShieldCheck, RefreshCw, Truck, Info, Award, Heart, Sparkles, Diamond, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';

export default function AboutPage() {
  useSEO('About Us', 'Learn about the legacy of Minar Gold & Diamonds, serving Calicut with purity and trust for generations.');
  return (
    <div style={{ background: 'var(--primary-green)', overflowX: 'hidden' }}>

      {/* ─── ABOUT HERO SECTION ─── */}
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
              <span style={{ 
                display: 'flex', alignItems: 'center', gap: '8px', 
                fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px', 
                color: 'var(--champagne-gold)', textTransform: 'uppercase', marginBottom: '24px' 
              }}>
                ABOUT US <Star size={10} fill="currentColor" />
              </span>
              <h1 style={{ fontSize: 'clamp(3.5rem, 5vw, 4.5rem)', color: 'var(--champagne-gold)', lineHeight: 1.1, marginBottom: '24px' }}>
                More Than<br />Jewellery.<br />
                <span style={{ fontStyle: 'italic', color: '#f3eee4' }}>It's a Legacy.</span>
              </h1>
              <p style={{ color: 'rgba(243, 238, 228, 0.8)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                At Minar Gold & Diamonds, we believe every piece of jewellery holds a story, a memory, and a promise for generations to come. Crafted with passion. Worn with pride.
              </p>
            </motion.div>

            {/* Center Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', position: 'relative' }}
            >
              <div style={{ 
                width: '100%', maxWidth: '340px', height: '500px',
                borderRadius: '200px 200px 0 0',
                border: '1px solid var(--champagne-gold)',
                padding: '8px'
              }}>
                <img 
                  src="/diamond_pendant.png" 
                  alt="Jewellery" 
                  style={{ 
                    width: '100%', height: '100%', objectFit: 'cover', 
                    borderRadius: '192px 192px 0 0'
                  }} 
                />
              </div>
            </motion.div>

            {/* Right Stats */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ flex: '1 1 300px', maxWidth: '350px', display: 'flex', flexDirection: 'column', gap: '40px' }}
            >
              {[
                { Icon: Award, title: 'Trusted Since', stat: '1998', desc: 'Over two decades of trust and tradition.' },
                { Icon: Diamond, title: 'Pure & Certified', stat: '100% BIS Hallmarked', desc: 'gold and certified diamonds.' },
                { Icon: Heart, title: 'Happy Customers', stat: '50,000+', desc: 'Families who trust us for life\'s special moments.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ 
                    width: '56px', height: '56px', borderRadius: '50%', 
                    border: '1px dashed var(--champagne-gold)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <item.Icon size={24} color="var(--champagne-gold)" strokeWidth={1} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--champagne-gold)', fontSize: '0.9rem', fontWeight: 400 }}>{item.title}</h4>
                    <div style={{ color: '#f3eee4', fontSize: '1.4rem', fontFamily: 'var(--font-serif)', marginBottom: '4px' }}>{item.stat}</div>
                    <p style={{ color: 'rgba(243, 238, 228, 0.6)', fontSize: '0.8rem', lineHeight: 1.4 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── OUR STORY SECTION ─── */}
      <section style={{ background: 'var(--bg-beige)', padding: '100px 0', borderTopLeftRadius: '40px', borderTopRightRadius: '40px' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '60px' }}>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span style={{ 
                display: 'flex', alignItems: 'center', gap: '8px', 
                fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px', 
                color: 'var(--text-mid)', textTransform: 'uppercase', marginBottom: '24px' 
              }}>
                <Star size={10} fill="var(--champagne-gold)" color="var(--champagne-gold)" /> OUR STORY
              </span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'var(--primary-green)', lineHeight: 1.1, marginBottom: '24px' }}>
                A Tradition<br />Built on Trust
              </h2>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '40px', maxWidth: '400px' }}>
                What began as a small dream has grown into a legacy of trust, quality and craftsmanship. From traditional designs to contemporary masterpieces, our journey is inspired by you.
              </p>
              <button className="btn btn-outline-dark" style={{ background: 'var(--primary-green)', color: '#fff', borderRadius: '4px' }}>
                Our Journey <ArrowRight size={16} />
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <img src="/hero_bridal.png" alt="Our Store" style={{ width: '100%', borderRadius: '24px', height: '400px', objectFit: 'cover' }} />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── OUR VALUES SECTION ─── */}
      <section style={{ padding: '0 24px' }}>
        <div className="container" style={{ 
          background: 'var(--primary-green)', 
          borderRadius: '24px', 
          padding: '80px 40px',
          marginTop: '-40px',
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '12px', 
              fontSize: '0.8rem', fontWeight: 600, letterSpacing: '2px', 
              color: 'var(--champagne-gold)', textTransform: 'uppercase' 
            }}>
              <Star size={10} fill="currentColor" /> OUR VALUES <Star size={10} fill="currentColor" />
            </span>
          </div>

          <div className="grid-4" style={{ textAlign: 'center' }}>
            {[
              { Icon: Diamond, title: 'Purity', desc: 'We ensure the highest standards of purity in every piece.' },
              { Icon: Heart, title: 'Craftsmanship', desc: 'Intricate designs crafted by skilled artisans with unmatched attention to detail.' },
              { Icon: ShieldCheck, title: 'Trust', desc: 'Transparency and honesty are the foundation of our relationships.' },
              { Icon: Sparkles, title: 'Timeless Beauty', desc: 'Pieces that celebrate your moments and become a part of your legacy.' },
            ].map((v, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ marginBottom: '24px', color: 'var(--champagne-gold)' }}>
                  <v.Icon size={40} strokeWidth={1} />
                </div>
                <h4 style={{ color: '#f3eee4', fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '16px' }}>{v.title}</h4>
                <p style={{ color: 'rgba(243, 238, 228, 0.7)', fontSize: '0.85rem', lineHeight: 1.6, maxWidth: '200px' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CRAFTED WITH PASSION SECTION ─── */}
      <section style={{ background: 'var(--bg-beige)', padding: '100px 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '40px' }}>
            
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span style={{ 
                display: 'flex', alignItems: 'center', gap: '8px', 
                fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px', 
                color: 'var(--text-mid)', textTransform: 'uppercase', marginBottom: '24px' 
              }}>
                <Star size={10} fill="var(--champagne-gold)" color="var(--champagne-gold)" /> CRAFTED WITH PASSION
              </span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'var(--primary-green)', lineHeight: 1.1, marginBottom: '24px' }}>
                Where Art<br />Meets Excellence
              </h2>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '40px', maxWidth: '400px' }}>
                Every Minar creation goes through a meticulous process of design, selection and craftsmanship to ensure it becomes as precious as the moments you cherish.
              </p>
              <button className="btn btn-outline-dark" style={{ borderRadius: '4px' }}>
                The Crafting Process <ArrowRight size={16} />
              </button>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
              {[
                { title: 'Thoughtful Design', desc: 'Inspired by tradition, designed for tomorrow.' },
                { title: 'Expert Craftsmanship', desc: 'Skilled artisans bring designs to life.' },
                { title: 'Quality Assurance', desc: 'Every piece is checked for perfection.' },
                { title: 'Timeless Creation', desc: 'Made to be cherished for generations.' }
              ].map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div style={{ position: 'relative', height: '240px', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px' }}>
                    <img src={`/gold_bangles.png`} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ 
                      position: 'absolute', bottom: '-15px', left: '50%', transform: 'translateX(-50%)',
                      width: '30px', height: '30px', borderRadius: '50%', background: 'var(--champagne-gold)',
                      color: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.7rem', fontWeight: 'bold'
                    }}>
                      0{i+1}
                    </div>
                  </div>
                  <h4 style={{ color: 'var(--primary-green)', fontSize: '0.9rem', fontFamily: 'var(--font-serif)', marginBottom: '8px', textAlign: 'center' }}>{step.title}</h4>
                  <p style={{ color: 'var(--text-mid)', fontSize: '0.75rem', textAlign: 'center', lineHeight: 1.4 }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─── TRUST BANNER ─── */}
      <section style={{ padding: '60px 0', background: 'var(--primary-green)' }}>
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
