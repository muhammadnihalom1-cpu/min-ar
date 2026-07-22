import React, { useState } from 'react';
import { TrendingUp, Calculator, ShieldCheck, X, RefreshCw } from 'lucide-react';

export default function GoldRateTicker({ isOpen, onClose }) {
  // Rates in INR for Kozhikode / Calicut market
  const rate22KGram = 6685;
  const rate24KGram = 7292;
  const rate18KGram = 5470;
  const rateSilverGram = 92;

  const rate22KPavan = rate22KGram * 8; // 1 Pavan = 8 Grams

  const [weightGrams, setWeightGrams] = useState(8); // Default 1 Pavan (8g)
  const [purity, setPurity] = useState('22K');
  const [makingChargePercent, setMakingChargePercent] = useState(8); // Average 8%

  const selectedGramRate = purity === '22K' ? rate22KGram : purity === '24K' ? rate24KGram : rate18KGram;
  const basePrice = weightGrams * selectedGramRate;
  const makingCharge = (basePrice * makingChargePercent) / 100;
  const subtotal = basePrice + makingCharge;
  const gstAmount = (subtotal * 3) / 100; // 3% GST on Gold in India
  const totalPrice = Math.round(subtotal + gstAmount);

  return (
    <>
      {/* Ticker Bar */}
      <section style={{ marginTop: '84px', background: 'rgba(212, 175, 55, 0.08)', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', padding: '12px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', animation: 'pulse 1.5s infinite' }}></span>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#D4AF37', fontWeight: 700 }}>
              Live Kozhikode Rate Today:
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '0.85rem' }}>
            <div>
              <span style={{ color: '#9CA3AF' }}>22K Gold (1g): </span>
              <strong style={{ color: '#FFF' }}>₹{rate22KGram.toLocaleString()}</strong>
            </div>
            <div>
              <span style={{ color: '#9CA3AF' }}>22K Gold (1 Sovereign/8g): </span>
              <strong style={{ color: '#F3E5AB' }}>₹{rate22KPavan.toLocaleString()}</strong>
            </div>
            <div>
              <span style={{ color: '#9CA3AF' }}>Silver (1g): </span>
              <strong style={{ color: '#E5E7EB' }}>₹{rateSilverGram}</strong>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid var(--gold-primary)',
              color: '#F3E5AB',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Calculator size={14} />
            Calculate Price
          </button>
        </div>
      </section>

      {/* Price Calculator Modal */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div className="glass-card" style={{ width: '100%', maxWidth: '520px', padding: '32px', position: 'relative' }}>
            
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                color: '#9CA3AF',
                cursor: 'pointer'
              }}
            >
              <X size={24} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <Calculator size={24} color="#D4AF37" />
              <h2 className="font-serif" style={{ fontSize: '1.5rem', color: '#FFF' }}>Gold Rate Calculator</h2>
            </div>
            <p style={{ color: '#9CA3AF', fontSize: '0.85rem', marginBottom: '24px' }}>
              Instant price estimate based on today's official Calicut bullion market rate.
            </p>

            {/* Inputs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#D4AF37', marginBottom: '6px', textTransform: 'uppercase', fontWeight: 600 }}>
                  Select Purity
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                  {['22K', '24K', '18K'].map((p) => (
                    <button
                      key={p}
                      onClick={() => setPurity(p)}
                      style={{
                        padding: '10px',
                        borderRadius: '8px',
                        background: purity === p ? 'var(--gold-metallic)' : 'rgba(255,255,255,0.05)',
                        color: purity === p ? '#0A0E17' : '#FFF',
                        border: purity === p ? 'none' : '1px solid rgba(255,255,255,0.1)',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      {p} BIS Hallmarked
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#D4AF37', marginBottom: '6px', textTransform: 'uppercase', fontWeight: 600 }}>
                  Gold Weight (Grams)
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="number"
                    min="0.5"
                    step="0.5"
                    value={weightGrams}
                    onChange={(e) => setWeightGrams(parseFloat(e.target.value) || 0)}
                    style={{
                      flex: 1,
                      padding: '12px 16px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--border-gold)',
                      color: '#FFF',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button onClick={() => setWeightGrams(8)} style={chipStyle}>8g (1 Pavan)</button>
                    <button onClick={() => setWeightGrams(16)} style={chipStyle}>16g (2 Pavan)</button>
                  </div>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#D4AF37', marginBottom: '6px', textTransform: 'uppercase', fontWeight: 600 }}>
                  Estimated Making Charge (%)
                </label>
                <input
                  type="range"
                  min="4"
                  max="18"
                  value={makingChargePercent}
                  onChange={(e) => setMakingChargePercent(parseInt(e.target.value))}
                  style={{ width: '100%', accentColor: '#D4AF37' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#9CA3AF', marginTop: '4px' }}>
                  <span>Lightweight (4%)</span>
                  <span style={{ color: '#F3E5AB', fontWeight: 700 }}>{makingChargePercent}%</span>
                  <span>Intricate Bridal (18%)</span>
                </div>
              </div>

            </div>

            {/* Calculations Summary */}
            <div style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px dashed var(--gold-primary)', borderRadius: '12px', padding: '16px', marginBottom: '24px' }}>
              <div style={calcRow}>
                <span>Base Gold Value ({weightGrams}g @ ₹{selectedGramRate}):</span>
                <span>₹{basePrice.toLocaleString()}</span>
              </div>
              <div style={calcRow}>
                <span>Making Charges ({makingChargePercent}%):</span>
                <span>₹{makingCharge.toLocaleString()}</span>
              </div>
              <div style={calcRow}>
                <span>GST (3%):</span>
                <span>₹{gstAmount.toLocaleString()}</span>
              </div>
              <hr style={{ borderColor: 'rgba(212, 175, 55, 0.3)', margin: '8px 0' }} />
              <div style={{ ...calcRow, fontSize: '1.1rem', fontWeight: 800, color: '#F3E5AB' }}>
                <span>Estimated Total Price:</span>
                <span className="text-gold-gradient">₹{totalPrice.toLocaleString()}</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: '#9CA3AF' }}>
              <ShieldCheck size={16} color="#10B981" />
              <span>100% BIS 916 Hallmarked Gold Guarantee at Minar Gold & Diamonds</span>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

const chipStyle = {
  padding: '0 12px',
  borderRadius: '8px',
  background: 'rgba(255,255,255,0.1)',
  color: '#FFF',
  border: '1px solid rgba(255,255,255,0.1)',
  fontSize: '0.75rem',
  cursor: 'pointer'
};

const calcRow = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '0.85rem',
  color: '#E5E7EB',
  marginBottom: '6px'
};
