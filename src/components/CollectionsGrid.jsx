import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, Eye, MessageCircle, ShieldCheck, Check, Filter, Search } from 'lucide-react';

export default function CollectionsGrid({ filterCategory }) {
  const [collectionsData, setCollectionsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(filterCategory || 'All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('minar_products');
    if (saved) {
      setCollectionsData(JSON.parse(saved));
    }
  }, []);

  // Update selectedCategory when filterCategory prop changes
  useEffect(() => {
    if (filterCategory) {
      setSelectedCategory(filterCategory);
    }
  }, [filterCategory]);

  const categories = ['All', 'Necklaces', 'Earrings', 'Bangles', 'Rings', 'Pendants'];

  const filteredItems = collectionsData.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || (item.description || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppInquiry = (itemName) => {
    const message = `Hello Minar Gold & Diamonds! I am interested in inquiring about "${itemName}" from your website catalog. Could you please share current price details and availability?`;
    window.open(`https://wa.me/919846211333?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="collections" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px auto' }}>
          <span style={{ fontSize: '0.8rem', color: '#D4AF37', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700 }}>
            Curated Masterpieces
          </span>
          <h2 className="font-brand" style={{ fontSize: '2.5rem', color: '#FFF', marginTop: '8px', marginBottom: '16px' }}>
            Our Fine Jewellery Catalog
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1rem', lineHeight: 1.6 }}>
            Explore our handcrafted collections certified with BIS 916 Purity Hallmark. Every design is crafted with passion and precision.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '40px',
          background: 'rgba(18, 24, 36, 0.6)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '16px',
          padding: '16px 24px'
        }}>
          
          {/* Category Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '25px',
                  background: selectedCategory === cat ? 'var(--gold-metallic)' : 'transparent',
                  color: selectedCategory === cat ? '#0A0E17' : '#E5E7EB',
                  border: selectedCategory === cat ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '280px' }}>
            <Search size={18} color="#9CA3AF" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search jewellery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 16px 10px 42px',
                borderRadius: '25px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-gold)',
                color: '#FFF',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
          </div>

        </div>

        {/* Grid Display */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '32px'
        }}>
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="glass-card"
              style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              
              {/* Image Box */}
              <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
                
                {/* Popular Tag */}
                {item.popular && (
                  <span style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'var(--garnet-accent)',
                    color: '#FFF',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Featured
                  </span>
                )}

                {/* Quick View Button Overlay */}
                <button
                  onClick={() => setActiveItem(item)}
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    background: 'rgba(10, 14, 23, 0.8)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--border-gold)',
                    color: '#F3E5AB',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease'
                  }}
                >
                  <Eye size={18} />
                </button>
              </div>

              {/* Card Details */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.75rem', color: '#D4AF37', fontWeight: 700, textTransform: 'uppercase' }}>
                      {item.purity}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>
                      {item.weight}
                    </span>
                  </div>

                  <h3 className="font-serif" style={{ fontSize: '1.2rem', color: '#FFF', marginBottom: '8px', lineHeight: 1.3 }}>
                    {item.name}
                  </h3>

                  <p style={{ color: '#9CA3AF', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '20px' }}>
                    {item.description}
                  </p>
                </div>

                {/* Card Action */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>

                  <button
                    onClick={() => handleWhatsAppInquiry(item.name)}
                    className="btn-gold"
                    style={{ padding: '8px 16px', fontSize: '0.78rem' }}
                  >
                    <MessageCircle size={14} />
                    <span>Inquire</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Modal View */}
        {activeItem && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(12px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}>
            <div className="glass-card modal-grid" style={{ width: '100%', maxWidth: '800px', padding: '32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', position: 'relative' }}>
              
              <img src={activeItem.image} alt={activeItem.name} style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: '12px' }} />

              <div>
                <span style={{ fontSize: '0.75rem', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 700 }}>{activeItem.category} • {activeItem.purity}</span>
                <h2 className="font-serif" style={{ fontSize: '1.6rem', color: '#FFF', marginTop: '6px', marginBottom: '16px' }}>{activeItem.name}</h2>
                <p style={{ color: '#D1D5DB', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '24px' }}>{activeItem.description}</p>
                
                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '16px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
                    <span style={{ color: '#9CA3AF' }}>Gold Weight:</span>
                    <strong style={{ color: '#FFF' }}>{activeItem.weight}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                    <span style={{ color: '#9CA3AF' }}>Certification:</span>
                    <strong style={{ color: '#10B981' }}>100% BIS Hallmarked</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button onClick={() => handleWhatsAppInquiry(activeItem.name)} className="btn-gold" style={{ flex: 1 }}>
                    <MessageCircle size={16} />
                    <span>Inquire via WhatsApp</span>
                  </button>
                  <button onClick={() => setActiveItem(null)} className="btn-outline-gold" style={{ padding: '12px 20px' }}>
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
