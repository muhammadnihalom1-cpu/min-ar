import React, { useState } from 'react';
import { Sparkles, Send, CheckCircle2, Upload, MessageCircle, HelpCircle } from 'lucide-react';

export default function CustomDesignStudio({ isOpen, onClose }) {
  const [jewelryType, setJewelryType] = useState('Bridal Necklace');
  const [metalPurity, setMetalPurity] = useState('22K (916 BIS Gold)');
  const [budgetRange, setBudgetRange] = useState('₹1,00,000 - ₹2,50,000');
  const [customDescription, setCustomDescription] = useState('');
  const [contactName, setContactName] = useState('');

  const jewelryTypes = [
    'Bridal Necklace Set',
    'Custom Engagement Ring',
    'Traditional Gold Bangles',
    'Solitaire Diamond Pendant',
    'Earrings & Studs',
    'Custom Silver Article'
  ];

  const metalOptions = [
    '22K (916 BIS Yellow Gold)',
    '18K Rose Gold with Diamonds',
    '18K White Gold',
    'Antique Finish 22K Gold'
  ];

  const budgetOptions = [
    'Under ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹2,50,000',
    '₹2,50,000 - ₹5,00,000',
    'Above ₹5,00,000'
  ];

  const handleSendCustomInquiry = (e) => {
    e.preventDefault();
    const message = `✨ *New Bespoke Custom Design Request - Minar Gold & Diamonds* ✨\n\n` +
      `👤 *Customer Name:* ${contactName || 'Valued Customer'}\n` +
      `💎 *Jewelry Type:* ${jewelryType}\n` +
      `🥇 *Preferred Metal:* ${metalPurity}\n` +
      `💰 *Estimated Budget:* ${budgetRange}\n` +
      `📝 *Design Notes:* ${customDescription || 'No extra notes specified.'}\n\n` +
      `Please connect me with your master craftsman at Omassery store to discuss this custom design!`;

    window.open(`https://wa.me/919846211333?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="custom-studio" style={{ padding: '80px 0', background: 'rgba(212, 175, 55, 0.03)', position: 'relative' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: '48px',
          alignItems: 'center'
        }} className="studio-grid">
          
          {/* Left Info Column */}
          <div>
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
              marginBottom: '20px'
            }}>
              <Sparkles size={14} color="#D4AF37" />
              <span>Bespoke Artisan Studio</span>
            </div>

            <h2 className="font-brand" style={{ fontSize: '2.4rem', color: '#FFF', lineHeight: 1.2, marginBottom: '20px' }}>
              Turn Your Vision Into Pure Gold.
            </h2>

            <p style={{ color: '#D1D5DB', fontSize: '1rem', lineHeight: 1.7, marginBottom: '32px' }}>
              At <strong>Minar Gold & Diamonds</strong>, we believe every piece of jewellery tells a unique story. Share your custom ideas, bridal vision, or heritage patterns, and our master goldsmiths will craft them to perfection.
            </p>

            {/* Workflow steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={stepNumberStyle}>1</div>
                <div>
                  <h4 style={{ color: '#F3E5AB', fontSize: '1rem', fontWeight: 700 }}>Choose Your Concept</h4>
                  <p style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>Select metal purity, style, and estimated weight preference.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={stepNumberStyle}>2</div>
                <div>
                  <h4 style={{ color: '#F3E5AB', fontSize: '1rem', fontWeight: 700 }}>Consultation & CAD 3D Render</h4>
                  <p style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>Review 3D visual previews before gold casting begins.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={stepNumberStyle}>3</div>
                <div>
                  <h4 style={{ color: '#F3E5AB', fontSize: '1rem', fontWeight: 700 }}>Handcrafted & Hallmarked</h4>
                  <p style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>Crafted with 100% BIS 916 purity stamp and delivered safely.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Form Card */}
          <div className="glass-card" style={{ padding: '36px' }}>
            <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#FFF', marginBottom: '8px' }}>
              Custom Design Inquiry Form
            </h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.85rem', marginBottom: '28px' }}>
              Fill out your preferences below to instantly generate a custom quote request via WhatsApp.
            </p>

            <form onSubmit={handleSendCustomInquiry} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div>
                <label style={labelStyle}>Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anjali Nair"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Jewelry Type</label>
                <select
                  value={jewelryType}
                  onChange={(e) => setJewelryType(e.target.value)}
                  style={inputStyle}
                >
                  {jewelryTypes.map(t => <option key={t} value={t} style={{ background: '#0A0E17', color: '#FFF' }}>{t}</option>)}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-2">
                <div>
                  <label style={labelStyle}>Metal & Purity</label>
                  <select
                    value={metalPurity}
                    onChange={(e) => setMetalPurity(e.target.value)}
                    style={inputStyle}
                  >
                    {metalOptions.map(m => <option key={m} value={m} style={{ background: '#0A0E17', color: '#FFF' }}>{m}</option>)}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Estimated Budget</label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    style={inputStyle}
                  >
                    {budgetOptions.map(b => <option key={b} value={b} style={{ background: '#0A0E17', color: '#FFF' }}>{b}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Design Notes / Custom Details</label>
                <textarea
                  rows={3}
                  placeholder="Describe your design inspiration, preferred pattern, stone color, or size requirements..."
                  value={customDescription}
                  onChange={(e) => setCustomDescription(e.target.value)}
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </div>

              <button
                type="submit"
                className="btn-gold gold-shimmer"
                style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '0.95rem', marginTop: '8px' }}
              >
                <MessageCircle size={18} />
                <span>Submit Custom Inquiry via WhatsApp</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: '0.8rem',
  color: '#D4AF37',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  marginBottom: '6px'
};

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '8px',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid var(--border-gold)',
  color: '#FFF',
  fontSize: '0.9rem',
  outline: 'none'
};

const stepNumberStyle = {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  background: 'var(--gold-metallic)',
  color: '#0A0E17',
  fontWeight: 800,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.9rem',
  flexShrink: 0
};
