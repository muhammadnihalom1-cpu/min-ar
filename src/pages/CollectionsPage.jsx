import React, { useState, useRef } from 'react';
import { ArrowRight, Star, ShieldCheck, RefreshCw, Truck, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import CollectionsGrid from '../components/CollectionsGrid';

const Icons = {
  Necklace: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 6C4 12 9 18 12 18C15 18 20 12 20 6" />
      <circle cx="12" cy="19" r="2" />
    </svg>
  ),
  Earrings: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="8" cy="14" r="3" />
      <circle cx="16" cy="14" r="3" />
      <path d="M8 11V7L12 3L16 7V11" />
      <circle cx="8" cy="19" r="1.5" fill="currentColor" />
      <circle cx="16" cy="19" r="1.5" fill="currentColor" />
    </svg>
  ),
  Bangles: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="12" cy="10" rx="8" ry="3" />
      <ellipse cx="12" cy="14" rx="8" ry="3" />
    </svg>
  ),
  Rings: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="15" r="5" />
      <path d="M12 10L10 6L12 4L14 6L12 10Z" fill="currentColor" />
    </svg>
  ),
  Pendants: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 4V10" />
      <path d="M12 20C10 20 9 18 9 15L12 10L15 15C15 18 14 20 12 20Z" />
      <circle cx="12" cy="15" r="1.5" fill="currentColor" />
    </svg>
  )
};

const collectionCategories = [
  { name: 'Necklaces', img: '/hero_bridal.png', icon: Icons.Necklace },
  { name: 'Earrings', img: '/diamond_pendant.png', icon: Icons.Earrings },
  { name: 'Bangles', img: '/gold_bangles.png', icon: Icons.Bangles },
  { name: 'Rings', img: '/gold_ring_category.png', icon: Icons.Rings },
  { name: 'Pendants', img: '/diamond_pendant.png', icon: Icons.Pendants },
];

export default function CollectionsPage() {
  useSEO('Collections', 'Explore our exquisite gold and diamond jewellery collections including necklaces, rings, earrings, and bangles.');
  const [activeCategory, setActiveCategory] = useState(null);
  const gridRef = useRef(null);

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ background: 'var(--bg-beige)', overflowX: 'hidden' }}>
      
      {/* ─── HERO SECTION ─── */}
      <section style={{ 
        background: 'var(--primary-green)',
        paddingTop: '140px',
        paddingBottom: '100px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
              style={{ flex: '1 1 400px', maxWidth: '500px', position: 'relative', zIndex: 2 }}
            >
              <div style={{ color: 'var(--champagne-gold)', marginBottom: '16px' }}>
                <Star size={16} fill="currentColor" />
              </div>
              <h1 style={{ 
                fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--champagne-gold)', 
                lineHeight: 1.1, marginBottom: '24px' 
              }}>
                Our Collections
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <div style={{ width: '60px', height: '1px', background: 'var(--champagne-gold)' }} />
                <Star size={10} color="var(--champagne-gold)" fill="var(--champagne-gold)" />
              </div>
              <p style={{ color: 'rgba(243, 238, 228, 0.8)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '400px' }}>
                Thoughtfully crafted gold and diamond jewellery inspired by Kerala's heritage and made for your most precious moments.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}
              style={{ 
                flex: '1 1 500px', 
                position: 'absolute',
                right: '-10%',
                top: '-20%',
                height: '140%',
                width: '60%',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img 
                src="/diamond_pendant.png" 
                alt="Collection"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, maskImage: 'linear-gradient(to right, transparent, black 30%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%)' }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── EXPLORE COLLECTIONS GRID ─── */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--primary-green)', marginBottom: '16px' }}>
              Explore Our Collections
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--champagne-gold)' }} />
              <Star size={12} color="var(--champagne-gold)" fill="var(--champagne-gold)" />
              <div style={{ width: '40px', height: '1px', background: 'var(--champagne-gold)' }} />
            </div>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '24px' 
          }}>
            {collectionCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div 
                  key={cat.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{ 
                    background: 'var(--bg-white)', 
                    borderRadius: '24px', 
                    boxShadow: '0 10px 30px rgba(5,46,38,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '12px',
                    paddingBottom: '32px',
                    cursor: 'pointer'
                  }}
                  whileHover={{ y: -10 }}
                  onClick={() => handleCategoryClick(cat.name)}
                >
                  <div style={{ 
                    background: 'var(--primary-green)', 
                    width: '100%', 
                    height: '240px', 
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={cat.img} 
                      alt={cat.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  
                  <div style={{ 
                    width: '64px', height: '64px', borderRadius: '50%', background: 'var(--primary-green)',
                    border: '1px solid var(--champagne-gold)', marginTop: '-32px', zIndex: 2,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--champagne-gold)'
                  }}>
                    <Icon />
                  </div>
                  
                  <h3 style={{ marginTop: '20px', color: 'var(--primary-green)', fontSize: '1.2rem', fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                    {cat.name}
                  </h3>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <div style={{ width: '20px', height: '1px', background: 'var(--champagne-gold)' }} />
                    <Star size={8} color="var(--champagne-gold)" fill="var(--champagne-gold)" />
                    <div style={{ width: '20px', height: '1px', background: 'var(--champagne-gold)' }} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Banner */}
          <div style={{ 
            background: 'var(--primary-green)', 
            borderRadius: '16px',
            padding: '32px 48px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            marginTop: '80px',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <Star size={16} color="var(--champagne-gold)" fill="var(--champagne-gold)" style={{ marginTop: '4px' }} />
              <div>
                <p style={{ color: 'rgba(243, 238, 228, 0.7)', fontSize: '0.85rem', marginBottom: '8px' }}>
                  Can't find what you're looking for?
                </p>
                <h3 style={{ color: 'var(--champagne-gold)', fontSize: '1.4rem', fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                  Explore our complete jewellery range.
                </h3>
              </div>
            </div>
            <button style={{ 
              background: 'transparent', border: '1px solid var(--champagne-gold)', color: 'var(--champagne-gold)',
              padding: '12px 24px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer'
            }}>
              View All Products <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

      {/* ─── DYNAMIC COLLECTIONS GRID ─── */}
      <div ref={gridRef} style={{ paddingBottom: '60px' }}>
        <CollectionsGrid filterCategory={activeCategory} />
      </div>

      {/* ─── TRUST BANNER (Beige Theme) ─── */}
      <section style={{ padding: '60px 0', background: 'var(--bg-beige)' }}>
        <div className="container">
          <div style={{ 
            borderTop: '1px solid rgba(5,46,38,0.1)',
            borderBottom: '1px solid rgba(5,46,38,0.1)',
            padding: '40px 0',
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
                  <item.icon size={36} color="var(--primary-green)" strokeWidth={1} />
                  <div>
                    <h4 style={{ color: 'var(--primary-green)', fontSize: '0.95rem', fontWeight: 600 }}>{item.title}</h4>
                    <p style={{ color: 'rgba(5, 46, 38, 0.7)', fontSize: '0.75rem', marginTop: '2px' }}>{item.desc}</p>
                  </div>
                </div>
                {idx < arr.length - 1 && (
                  <div className="hide-mobile" style={{ width: '1px', height: '40px', background: 'rgba(5, 46, 38, 0.1)' }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
