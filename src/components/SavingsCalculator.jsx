import React, { useState } from 'react';
import { PiggyBank, ArrowRight, ShieldCheck, Award, MessageCircle } from 'lucide-react';

export default function SavingsCalculator() {
  const [monthlyDeposit, setMonthlyDeposit] = useState(5000);
  const tenureMonths = 11;
  const rate22KGram = 6685;

  const totalUserContribution = monthlyDeposit * tenureMonths;
  // Minar Gold bonus: 100% discount on making charges up to 12% + 1 month bonus value
  const bonusValue = monthlyDeposit;
  const totalSchemeValue = totalUserContribution + bonusValue;
  const estimatedGoldGrams = (totalSchemeValue / rate22KGram).toFixed(2);
  const estimatedPavan = (estimatedGoldGrams / 8).toFixed(2);

  const handleEnrollWhatsApp = () => {
    const msg = `Hello Minar Gold & Diamonds! I am interested in joining the Gold Advance Savings Plan with a monthly installment of ₹${monthlyDeposit.toLocaleString()}/month for 11 months. Please guide me on enrollment.`;
    window.open(`https://wa.me/919846211333?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="savings-scheme" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        <div className="glass-card" style={{ padding: '48px', position: 'relative', overflow: 'hidden' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }} className="savings-grid">
            
            {/* Controls */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <PiggyBank size={28} color="#D4AF37" />
                <span style={{ fontSize: '0.8rem', color: '#D4AF37', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700 }}>
                  Smart Gold Savings Scheme
                </span>
              </div>

              <h2 className="font-brand" style={{ fontSize: '2.2rem', color: '#FFF', marginBottom: '16px', lineHeight: 1.2 }}>
                Plan Your Dream Bridal Gold Advance Scheme
              </h2>

              <p style={{ color: '#9CA3AF', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '32px' }}>
                Accumulate 22K Hallmarked gold month by month without worrying about rising market prices. Enjoy 0% making charges benefit upon scheme completion!
              </p>

              {/* Slider Input */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontSize: '0.85rem', color: '#E5E7EB', fontWeight: 600 }}>Monthly Installment Amount:</label>
                  <strong style={{ fontSize: '1.2rem', color: '#F3E5AB' }}>₹{monthlyDeposit.toLocaleString()} / month</strong>
                </div>

                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="1000"
                  value={monthlyDeposit}
                  onChange={(e) => setMonthlyDeposit(parseInt(e.target.value))}
                  style={{ width: '100%', accentColor: '#D4AF37' }}
                />

                <div style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                  {[2000, 5000, 10000, 25000].map(amt => (
                    <button
                      key={amt}
                      onClick={() => setMonthlyDeposit(amt)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '20px',
                        background: monthlyDeposit === amt ? 'var(--gold-metallic)' : 'rgba(255,255,255,0.05)',
                        color: monthlyDeposit === amt ? '#0A0E17' : '#FFF',
                        border: '1px solid rgba(255,255,255,0.1)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      ₹{amt.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.8rem', color: '#10B981' }}>
                <ShieldCheck size={18} />
                <span>Zero Making Charges (VA) Benefit on Maturity</span>
              </div>

            </div>

            {/* Calculations Box */}
            <div style={{
              background: 'rgba(10, 14, 23, 0.7)',
              border: '1px solid var(--border-gold)',
              borderRadius: '20px',
              padding: '32px',
              textAlign: 'center'
            }}>
              
              <span style={{ fontSize: '0.75rem', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>
                11 Months Accumulation Summary
              </span>

              <div style={{ margin: '20px 0' }}>
                <span style={{ fontSize: '0.85rem', color: '#9CA3AF', display: 'block' }}>Estimated 22K Gold Accumulated</span>
                <h3 className="text-gold-gradient font-brand" style={{ fontSize: '2.8rem', fontWeight: 800, marginTop: '4px' }}>
                  {estimatedGoldGrams} Grams
                </h3>
                <p style={{ color: '#F3E5AB', fontSize: '0.95rem', fontWeight: 600, marginTop: '4px' }}>
                  (~{estimatedPavan} Sovereigns / Pavan)
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '16px 0', margin: '20px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#9CA3AF', marginBottom: '8px' }}>
                  <span>Your 11 Month Deposit:</span>
                  <strong style={{ color: '#FFF' }}>₹{totalUserContribution.toLocaleString()}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#9CA3AF' }}>
                  <span>Minar Bonus Benefit:</span>
                  <strong style={{ color: '#10B981' }}>+ ₹{bonusValue.toLocaleString()}</strong>
                </div>
              </div>

              <button
                onClick={handleEnrollWhatsApp}
                className="btn-gold gold-shimmer"
                style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
              >
                <MessageCircle size={18} />
                <span>Enroll in Scheme via WhatsApp</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
