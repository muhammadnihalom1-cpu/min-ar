import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Save, X, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSiteSettings } from '../hooks/useSiteSettings';

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: 'Royal Calicut Emerald Bridal Set',
    category: 'Necklaces', // Changed to match new categories
    purity: '22K (916 BIS)',
    weight: '48 Grams (6 Pavan)',
    image: '/hero_bridal.png',
    description: 'Exquisite 22K gold bridal necklace studded with uncut diamonds and royal emerald drops. Inspired by Kerala heritage design.',
    popular: true
  },
  {
    id: 2,
    name: 'Celestial Solitaire Diamond Pendant',
    category: 'Pendants',
    purity: '18K Gold + VVS1 Diamonds',
    weight: '4.5 Grams',
    image: '/diamond_pendant.png',
    description: 'Certified round brilliant cut solitaire diamond pendant set in 18K dual tone gold chain.',
    popular: true
  },
  {
    id: 3,
    name: 'Traditional Filigree Gold Bangles',
    category: 'Bangles',
    purity: '22K (916 BIS)',
    weight: '32 Grams (4 Pavan)',
    image: '/gold_bangles.png',
    description: 'Handcrafted floral filigree bangles crafted in solid 916 gold. Timeless traditional elegance for weddings.',
    popular: true
  },
  {
    id: 5,
    name: 'Geometric Daily-Wear Diamond Ring',
    category: 'Rings',
    purity: '18K Rose Gold',
    weight: '3.2 Grams',
    image: '/gold_ring_category.png',
    description: 'Modern lightweight diamond band designed for everyday corporate and casual luxury.',
    popular: false
  }
];

export default function AdminPage() {
  const { settings, saveSettings } = useSiteSettings();
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '', category: 'Necklaces', purity: '', weight: '', image: '', description: '', popular: false
  });
  const [siteForm, setSiteForm] = useState(settings);

  useEffect(() => {
    if (settings) {
      setSiteForm(settings);
    }
  }, [settings]);

  useEffect(() => {
    const saved = localStorage.getItem('minar_products');
    if (saved) {
      setProducts(JSON.parse(saved));
    } else {
      setProducts(DEFAULT_PRODUCTS);
      localStorage.setItem('minar_products', JSON.stringify(DEFAULT_PRODUCTS));
    }
  }, []);

  const saveToStorage = (updatedProducts) => {
    setProducts(updatedProducts);
    localStorage.setItem('minar_products', JSON.stringify(updatedProducts));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      saveToStorage(products.map(p => p.id === editingId ? { ...formData, id: editingId } : p));
      setEditingId(null);
    } else {
      saveToStorage([{ ...formData, id: Date.now() }, ...products]);
    }
    setFormData({ name: '', category: 'Necklaces', purity: '', weight: '', image: '', description: '', popular: false });
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setFormData(product);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      saveToStorage(products.filter(p => p.id !== id));
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ name: '', category: 'Necklaces', purity: '', weight: '', image: '', description: '', popular: false });
  };

  const handleSiteSettingChange = (e) => {
    const { name, value } = e.target;
    setSiteForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    saveSettings(siteForm);
    alert('Site Settings Saved!');
  };

  return (
    <div style={{ background: '#F9FAFB', minHeight: '100vh', padding: '60px 20px', fontFamily: 'var(--font-sans)' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#111827', fontSize: '2rem', fontWeight: 700 }}>Minar Catalog Manager</h1>
          <a href="#" onClick={() => window.location.hash = ''} style={{ color: '#6B7280', textDecoration: 'none' }}>Exit Admin</a>
        </div>

        {/* Form Section */}
        <div style={{ background: '#FFF', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', marginBottom: '40px', overflowX: 'hidden' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '24px', color: '#374151' }}>{editingId ? 'Edit Product' : 'Add New Product'}</h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Product Name</label>
              <input required name="name" value={formData.name} onChange={handleInputChange} style={inputStyle} placeholder="e.g. Royal Emerald Ring" />
            </div>
            
            <div>
              <label style={labelStyle}>Category</label>
              <select name="category" value={formData.category} onChange={handleInputChange} style={inputStyle}>
                <option value="Necklaces">Necklaces</option>
                <option value="Earrings">Earrings</option>
                <option value="Bangles">Bangles</option>
                <option value="Rings">Rings</option>
                <option value="Pendants">Pendants</option>
              </select>
            </div>
            
            <div>
              <label style={labelStyle}>Purity</label>
              <input required name="purity" value={formData.purity} onChange={handleInputChange} style={inputStyle} placeholder="e.g. 22K (916 BIS)" />
            </div>

            <div>
              <label style={labelStyle}>Weight</label>
              <input required name="weight" value={formData.weight} onChange={handleInputChange} style={inputStyle} placeholder="e.g. 4.5 Grams" />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Product Image</label>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 200px' }}>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload} 
                    style={{ ...inputStyle, padding: '7px' }} 
                  />
                </div>
                <span style={{ fontSize: '0.85rem', color: '#6B7280', fontWeight: 600 }}>OR</span>
                <div style={{ flex: '1 1 200px' }}>
                  <input 
                    name="image" 
                    value={formData.image} 
                    onChange={handleInputChange} 
                    style={inputStyle} 
                    placeholder="e.g. /gold_ring_category.png or URL" 
                  />
                </div>
              </div>
              {formData.image && (
                <div style={{ marginTop: '12px' }}>
                  <img src={formData.image} alt="Preview" style={{ height: '80px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #E5E7EB' }} />
                </div>
              )}
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Description</label>
              <textarea required name="description" value={formData.description} onChange={handleInputChange} style={{ ...inputStyle, minHeight: '80px' }} placeholder="Brief description of the piece..." />
            </div>

            <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <input type="checkbox" name="popular" id="popular" checked={formData.popular} onChange={handleInputChange} style={{ width: '18px', height: '18px' }} />
              <label htmlFor="popular" style={{ color: '#374151', cursor: 'pointer' }}>Mark as "Featured" (Shows featured badge)</label>
            </div>

            <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
              <button type="submit" style={{ ...btnStyle, background: '#10B981', color: '#FFF', flex: '1 1 auto', justifyContent: 'center' }}>
                <Save size={16} /> {editingId ? 'Save Changes' : 'Add Product'}
              </button>
              {editingId && (
                <button type="button" onClick={cancelEdit} style={{ ...btnStyle, background: '#F3F4F6', color: '#4B5563', flex: '1 1 auto', justifyContent: 'center' }}>
                  <X size={16} /> Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Product List */}
        <div style={{ background: '#FFF', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
          <div style={{ padding: '24px', borderBottom: '1px solid #E5E7EB' }}>
            <h2 style={{ fontSize: '1.25rem', color: '#374151' }}>Current Catalog ({products.length} items)</h2>
          </div>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead style={{ background: '#F9FAFB' }}>
                <tr>
                  <th style={thStyle}>Product</th>
                  <th style={thStyle}>Category</th>
                  <th style={thStyle}>Purity</th>
                  <th style={thStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={tdStyle}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <img src={product.image} alt="" style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '8px' }} />
                        <div>
                          <div style={{ fontWeight: 500, color: '#111827' }}>{product.name}</div>
                          <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>{product.weight}</div>
                        </div>
                      </div>
                    </td>
                    <td style={tdStyle}><span style={{ background: '#EEF2FF', color: '#4F46E5', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem' }}>{product.category}</span></td>
                    <td style={tdStyle}><span style={{ color: '#4B5563', fontSize: '0.85rem' }}>{product.purity}</span></td>
                    <td style={tdStyle}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button onClick={() => handleEdit(product)} style={{ ...iconBtnStyle, color: '#3B82F6', background: '#EFF6FF' }}><Edit2 size={16} /></button>
                        <button onClick={() => handleDelete(product.id)} style={{ ...iconBtnStyle, color: '#EF4444', background: '#FEF2F2' }}><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
                {products.length === 0 && (
                  <tr>
                    <td colSpan="4" style={{ padding: '32px', textAlign: 'center', color: '#6B7280' }}>No products found. Start adding some!</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Site Settings Section */}
        <div style={{ background: '#FFF', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', marginTop: '40px', overflowX: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Settings color="#374151" />
            <h2 style={{ fontSize: '1.25rem', color: '#374151', margin: 0 }}>Global Site Settings</h2>
          </div>
          
          <form onSubmit={handleSaveSettings} style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div>
              <label style={labelStyle}>Phone Number</label>
              <input required name="phone" value={siteForm.phone || ''} onChange={handleSiteSettingChange} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Email Address</label>
              <input required name="email" value={siteForm.email || ''} onChange={handleSiteSettingChange} style={inputStyle} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Store Address (Use \n for line breaks)</label>
              <textarea required name="address" value={siteForm.address || ''} onChange={handleSiteSettingChange} style={{ ...inputStyle, minHeight: '80px' }} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Google Maps Link</label>
              <input required name="mapLink" value={siteForm.mapLink || ''} onChange={handleSiteSettingChange} style={inputStyle} />
            </div>
            
            <div style={{ gridColumn: '1 / -1', marginTop: '12px' }}>
              <button type="submit" style={{ ...btnStyle, background: '#10B981', color: '#FFF' }}>
                <Save size={16} /> Save Site Settings
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

const labelStyle = { display: 'block', fontSize: '0.85rem', fontWeight: 500, color: '#374151', marginBottom: '8px' };
const inputStyle = { width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '8px', fontSize: '0.95rem', fontFamily: 'inherit' };
const btnStyle = { padding: '10px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 500, border: 'none', cursor: 'pointer', fontSize: '0.95rem' };
const thStyle = { padding: '12px 24px', fontSize: '0.75rem', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' };
const tdStyle = { padding: '16px 24px' };
const iconBtnStyle = { width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', border: 'none', cursor: 'pointer' };
