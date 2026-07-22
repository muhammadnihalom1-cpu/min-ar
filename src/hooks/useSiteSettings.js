import { useState, useEffect } from 'react';

const DEFAULT_SETTINGS = {
  phone: '+91 6235 123 456',
  email: 'hello@minargoldanddiamonds.com',
  address: 'Minar Gold & Diamonds\\nCalicut Road, Kozhikode,\\nKerala, India - 673002',
  mapLink: 'https://maps.app.goo.gl/n7cvE6qKR3Jnb4647'
};

export function useSiteSettings() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  useEffect(() => {
    const loadSettings = () => {
      const saved = localStorage.getItem('minar_settings');
      if (saved) {
        setSettings(JSON.parse(saved));
      } else {
        localStorage.setItem('minar_settings', JSON.stringify(DEFAULT_SETTINGS));
      }
    };
    
    loadSettings();

    // Listen for custom event to update settings across components instantly
    const handleStorageChange = () => loadSettings();
    window.addEventListener('minar_settings_updated', handleStorageChange);
    return () => window.removeEventListener('minar_settings_updated', handleStorageChange);
  }, []);

  const saveSettings = (newSettings) => {
    setSettings(newSettings);
    localStorage.setItem('minar_settings', JSON.stringify(newSettings));
    window.dispatchEvent(new Event('minar_settings_updated'));
  };

  return { settings, saveSettings };
}
