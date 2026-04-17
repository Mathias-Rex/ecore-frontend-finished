import { useState } from 'react';

export const INITIAL_FORM_DATA = {
  name: '',
  type: '',
  category: '',
  tagline: '',
  description: {
    overview: '',
    additional: '',
    applications: '',
  },
  features: [''],
  specs: {
    performance: { maxSpeed: '', acceleration: '', range: '', engine: '' },
    extraction: { extraction: '', processing: '', chamber: '', dock: '' },
    cargo: { space: '', maxLoad: '', type: '', docking: '' },
    capacity: { hangar: '', logistics: '', docking: '', warehouse: '' },
    armament: { lasers: '', missiles: '', drones: '', attack: '' },
    laboratory: { laboratory: '', scanner: '', documentation: '', data: '' },
    crew: { crew: '', security: '', comfort: '', communication: '' },
    dimensions: { length: '', width: '', height: '', emptyMass: '' },
  },
  pricing: { price: '', availability: '' },
  image: null,
};

export const useSpacecraftForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (path, value) => {
    setFormData(prev => {
      const keys = path.split('.');
      const newData = { ...prev };
      let obj = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        obj[keys[i]] = { ...obj[keys[i]] };
        obj = obj[keys[i]];
      }
      obj[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const handleFeatureChange = (index, value) => {
    setFormData(prev => {
      const newFeatures = [...prev.features];
      newFeatures[index] = value;
      return { ...prev, features: newFeatures };
    });
  };

  const addFeature = () =>
    setFormData(prev => ({ ...prev, features: [...prev.features, ''] }));

  const removeFeature = index =>
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }));

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) setFormData(prev => ({ ...prev, image: file }));
  };

  const getNestedValue = path => {
    const keys = path.split('.');
    let value = formData;
    for (const key of keys) value = value?.[key];
    return value || '';
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleFeatureChange,
    addFeature,
    removeFeature,
    handleImageChange,
    getNestedValue,
  };
};
