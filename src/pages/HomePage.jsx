import React, { useState } from 'react';
import { ArrowRight, Play, ShieldCheck, RefreshCw, Truck, Info, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';

export default function HomePage({ onNavigate }) {
  useSEO('Home', 'Welcome to Minar Gold & Diamonds. Explore our premium gold and diamond jewellery collections crafted in Calicut.');

  const [currentSignature, setCurrentSignature] = useState(0);

  const signatureItems = [
    {
      title: "Radiant Bloom Diamond Necklace",
      image: "/diamond_pendant.png",
      details: ["18K Gold", "SI Clarity Diamonds", "BIS Hallmarked"]
    },
    {
      title: "Eternity Gold Bangles",
      image: "/gold_bangles.png",
      details: ["22K Pure Gold", "Traditional Design", "Handcrafted"]
    },
    {
      title: "Royal Emerald Ring",
      image: "/gold_ring_category.png",
      details: ["18K Gold", "VVS Diamonds", "Certified Emerald"]
    }
  ];

  const nextSignature = () => {
    setCurrentSignature((prev) => (prev + 1) % signatureItems.length);
  };

  const prevSignature = () => {
    setCurrentSignature((prev) => (prev - 1 + signatureItems.length) % signatureItems.length);
  };

  return (
    <div style={{ background: 'var(--bg-white)', overflowX: 'hidden' }}>

      {/* ─── HERO SECTION ─── */}
      <section style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        background: 'var(--primary-green)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '90px', // offset for navbar
        paddingBottom: '60px'
      }}>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, height: '100%' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', height: '100%', gap: '40px' }}>
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ flex: '1 1 500px', maxWidth: '600px', color: '#f3eee4', paddingRight: '40px' }}
            >
              <h1 style={{ 
                fontSize: 'clamp(4rem, 8vw, 6rem)', 
                lineHeight: 1.1, 
                marginBottom: '24px', 
                color: '#f3eee4' 
              }}>
                <span style={{ color: 'var(--champagne-gold)' }}>Timeless</span><br />
                Elegance,<br />
                Crafted for You.
              </h1>
              <p style={{ 
                color: 'rgba(243, 238, 228, 0.8)', 
                fontSize: '1.1rem', 
                lineHeight: 1.6, 
                marginBottom: '40px',
                maxWidth: '400px'
              }}>
                Exquisite gold and diamond jewellery, meticulously crafted to celebrate your most precious moments.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
                <button onClick={() => onNavigate('collections')} className="btn btn-gold">
                  Explore Collection
                </button>
              </div>

              {/* Trust Avatars */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex' }}>
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i} 
                      src={`https://i.pravatar.cc/100?img=${i+10}`} 
                      alt="Customer" 
                      style={{ 
                        width: '40px', height: '40px', 
                        borderRadius: '50%', 
                        border: '2px solid var(--primary-green)',
                        marginLeft: i !== 1 ? '-12px' : '0'
                      }} 
                    />
                  ))}
                </div>
                <span style={{ fontSize: '0.85rem', color: 'rgba(243, 238, 228, 0.9)' }}>
                  Trusted by 10,000+ happy customers
                </span>
              </div>
            </motion.div>

            {/* Right Image Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ flex: '1 1 500px', position: 'relative', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
            >
              <div style={{ 
                width: '100%', 
                maxWidth: '700px',
                height: '75vh',
                maxHeight: '800px',
                position: 'relative'
              }}>
                <img 
                  src="/hero_bridal.png" 
                  alt="Model wearing Minar jewellery" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    borderRadius: '250px 0 0 250px' 
                  }} 
                />

                {/* Play Story Button */}
                <div style={{ 
                  position: 'absolute', 
                  top: '40%', 
                  right: '10%',
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '8px'
                }}>
                  <button className="btn-circle" style={{ 
                    background: 'transparent',
                    border: '1px solid #f3eee4',
                    color: '#f3eee4',
                    width: '64px', height: '64px'
                  }}>
                    <Play size={20} fill="currentColor" style={{ marginLeft: '4px' }} />
                  </button>
                  <span style={{ color: '#f3eee4', fontSize: '0.85rem' }}>Play Story</span>
                </div>

                {/* Floating Badge */}
                <div style={{ 
                  position: 'absolute',
                  bottom: '40px',
                  right: '-20px',
                  background: 'rgba(5, 46, 38, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '16px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}>
                  <div style={{ color: 'var(--champagne-gold)' }}>
                    <ShieldCheck size={28} strokeWidth={1.5} />
                  </div>
                  <div style={{ color: '#f3eee4', fontSize: '0.9rem', lineHeight: 1.3 }}>
                    Crafted with Trust<br/>Since Generations
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── TRUST BANNER ─── */}
      <section style={{ 
        position: 'relative', 
        zIndex: 10,
        marginTop: '-50px',
        background: 'transparent'
      }}>
        <div className="container">
          <div style={{ 
            background: 'var(--primary-green)',
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

      {/* ─── COLLECTIONS SECTION ─── */}
      <section className="section" style={{ background: 'var(--bg-beige)', paddingBottom: '120px' }}>
        <div className="container">
          
          <div className="grid-2" style={{ alignItems: 'flex-end', marginBottom: '60px' }}>
            <div>
              <span style={{ 
                display: 'flex', alignItems: 'center', gap: '8px', 
                fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px', 
                color: 'var(--text-mid)', textTransform: 'uppercase', marginBottom: '16px' 
              }}>
                <Star size={12} fill="var(--champagne-gold)" color="var(--champagne-gold)" /> OUR COLLECTIONS
              </span>
              <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', color: 'var(--primary-green)' }}>
                Beauty in Every<br />Detail
              </h2>
            </div>
            
            <div style={{ paddingBottom: '12px' }}>
              <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem', maxWidth: '300px', marginBottom: '24px' }}>
                Discover jewellery that speaks your story. Handcrafted with precision and passion.
              </p>
              <button onClick={() => onNavigate('collections')} className="btn btn-outline-dark" style={{ borderRadius: '0', padding: '12px 24px' }}>
                View All Collections <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid-3">
            {[
              { img: '/gold_bangles.png', title: 'Gold\nCollection' },
              { img: '/diamond_pendant.png', title: 'Diamond\nCollection' },
              { img: '/gold_ring_category.png', title: 'New\nArrivals' },
            ].map((col, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                style={{ 
                  background: 'var(--primary-green)',
                  borderRadius: '32px',
                  overflow: 'hidden',
                  position: 'relative',
                  height: '480px',
                  cursor: 'pointer'
                }}
                onClick={() => onNavigate('collections')}
              >
                <img 
                  src={col.img} 
                  alt={col.title} 
                  style={{ width: '100%', height: '70%', objectFit: 'cover' }} 
                />
                <div style={{ 
                  padding: '32px', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-end',
                  height: '30%'
                }}>
                  <h3 style={{ color: '#f3eee4', fontSize: '1.8rem', whiteSpace: 'pre-line' }}>{col.title}</h3>
                  <button className="btn-circle" style={{ background: 'var(--champagne-gold)', color: 'var(--primary-green)' }}>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SIGNATURE PIECES SECTION ─── */}
      <section className="section" style={{ background: 'var(--bg-beige)', paddingTop: '0' }}>
        <div className="container">
          <div style={{ 
            background: 'var(--primary-green)',
            borderRadius: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            overflow: 'hidden'
          }}>
            
            {/* Left Box */}
            <div style={{ flex: '1 1 400px', padding: '80px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ 
                display: 'flex', alignItems: 'center', gap: '8px', 
                fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px', 
                color: 'var(--champagne-gold)', textTransform: 'uppercase', marginBottom: '24px' 
              }}>
                <Star size={12} fill="currentColor" /> SIGNATURE PIECES
              </span>
              
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#f3eee4', marginBottom: '24px' }}>
                Made to Be<br />Remembered
              </h2>
              
              <p style={{ color: 'rgba(243, 238, 228, 0.7)', fontSize: '1rem', marginBottom: '40px', maxWidth: '300px' }}>
                Our signature designs blend tradition with modern elegance.
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <button className="btn btn-outline-light" style={{ borderRadius: '0' }}>
                  Explore Now
                </button>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#f3eee4' }}>
                  <button onClick={prevSignature} style={{ background: 'none', border: 'none', color: '#f3eee4', cursor: 'pointer' }}><ChevronLeft size={20} /></button>
                  <span style={{ fontSize: '0.85rem', letterSpacing: '2px' }}>0{currentSignature + 1} <span style={{ opacity: 0.5 }}>/ 0{signatureItems.length}</span></span>
                  <button onClick={nextSignature} style={{ background: 'none', border: 'none', color: '#f3eee4', cursor: 'pointer' }}><ChevronRight size={20} /></button>
                </div>
              </div>
            </div>

            {/* Right Box (Image + Details) */}
            <div style={{ flex: '1 1 500px', position: 'relative' }}>
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentSignature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  src={signatureItems[currentSignature].image} 
                  alt={signatureItems[currentSignature].title}
                  style={{ width: '100%', height: '100%', minHeight: '500px', objectFit: 'cover', position: 'absolute', inset: 0 }} 
                />
              </AnimatePresence>
              
              {/* Product Info Overlay */}
              <div style={{
                position: 'relative',
                width: '320px',
                height: '100%',
                minHeight: '500px',
                background: 'linear-gradient(270deg, rgba(5,46,38,0.95) 0%, rgba(5,46,38,0) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '40px',
                float: 'right'
              }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSignature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 style={{ color: '#f3eee4', fontSize: '1.4rem', marginBottom: '8px' }}>
                      {signatureItems[currentSignature].title.split(' ').map((word, i, arr) => 
                        i === arr.length - 2 ? <React.Fragment key={i}>{word}<br/></React.Fragment> : <React.Fragment key={i}>{word} </React.Fragment>
                      )}
                    </h3>
                    <p style={{ color: 'var(--champagne-gold)', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>
                      Signature Collection
                    </p>
                    
                    <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '24px' }} />
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                      {signatureItems[currentSignature].details.map((detail, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(243, 238, 228, 0.8)', fontSize: '0.85rem' }}>
                          <ShieldCheck size={16} /> {detail}
                        </div>
                      ))}
                    </div>

                    <div>
                      <button style={{ 
                        background: 'none', border: 'none', color: '#f3eee4', 
                        display: 'flex', alignItems: 'center', gap: '12px',
                        fontSize: '0.9rem', cursor: 'pointer'
                      }}>
                        View Details
                        <div className="btn-circle" style={{ background: 'var(--champagne-gold)', color: 'var(--primary-green)', width: '32px', height: '32px' }}>
                          <ArrowRight size={14} />
                        </div>
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── FOOTER STATS SECTION ─── */}
      <section style={{ background: 'var(--bg-beige)', padding: '60px 0 100px' }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '40px',
            borderTop: '1px solid rgba(5,46,38,0.1)',
            paddingTop: '60px'
          }}>
            
            {/* Logo/Tagline */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ fontSize: '6rem', color: 'rgba(5,46,38,0.05)', lineHeight: 0.8, fontFamily: 'var(--font-serif)' }}>
                m
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-green)', marginBottom: '4px' }}>
                  More Than Jewellery,
                </h3>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-green)' }}>
                  It's Your Legacy.
                </h3>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '2rem', color: 'var(--primary-green)', fontFamily: 'var(--font-serif)' }}>25+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-mid)', marginTop: '4px' }}>Years of Trust</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', color: 'var(--primary-green)', fontFamily: 'var(--font-serif)' }}>50,000+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-mid)', marginTop: '4px' }}>Happy Customers</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', color: 'var(--primary-green)', fontFamily: 'var(--font-serif)' }}>10+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-mid)', marginTop: '4px' }}>Stores Across Kerala</div>
              </div>
            </div>

            {/* Circular Badge */}
            <div style={{ 
              width: '120px', height: '120px', 
              borderRadius: '50%', 
              border: '1px dashed var(--primary-green)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
              animation: 'spin 20s linear infinite'
            }}>
              <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
              <div style={{ position: 'absolute', inset: '10px', borderRadius: '50%', border: '1px solid rgba(5,46,38,0.1)' }} />
              <Star size={24} fill="var(--champagne-gold)" color="var(--champagne-gold)" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
