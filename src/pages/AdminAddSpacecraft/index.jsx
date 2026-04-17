import { useState, useEffect } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { API_URL } from '../../config';
import { useAuthUnlock } from '../../context/AuthUnlockContext';
import { useSpacecraftForm } from '../../hooks/useSpacecraftForm';
import { SpacecraftFormFields } from '../../components/SpacecraftForm';

const API_KEY = import.meta.env.VITE_API_KEY || 'titkos-api-kulcs-amit-csak-a-viktortud-1';

export const AdminAddSpacecraft = () => {
  const { isLoggedIn } = useAuthUnlock();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { formData, handleChange, handleFeatureChange, addFeature, removeFeature, handleImageChange } =
    useSpacecraftForm();

  useEffect(() => {
    if (!isLoggedIn) navigate({ to: '/login' });
  }, [isLoggedIn, navigate]);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      let imageUrl = '';
      if (formData.image) {
        const imageFormData = new FormData();
        imageFormData.append('image', formData.image);
        const imageResponse = await fetch(`${API_URL}/api/upload/image`, {
          method: 'POST',
          headers: { 'x-api-key': API_KEY },
          body: imageFormData,
          credentials: 'include',
        });
        if (imageResponse.ok) {
          const imageData = await imageResponse.json();
          imageUrl = imageData.url;
        }
      }

      const spacecraftData = {
        name: formData.name,
        type: formData.type,
        category: formData.category,
        tagline: formData.tagline,
        description: formData.description,
        features: formData.features.filter(f => f.trim() !== ''),
        specs: formData.specs,
        pricing: formData.pricing,
        image: imageUrl,
      };

      const response = await fetch(`${API_URL}/api/spacecrafts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': API_KEY },
        body: JSON.stringify(spacecraftData),
        credentials: 'include',
      });

      if (response.ok) navigate({ to: '/admin' });
      else console.error('Failed to create spacecraft');
    } catch (err) {
      console.error('Error creating spacecraft:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="admin-page-wrapper">
      <Link to="/admin" className="back-link">
        ← Vissza az admin oldalra
      </Link>
      <div className="admin-add-page">
        <form className="admin-add-form" onSubmit={handleSubmit}>
          <SpacecraftFormFields
            formData={formData}
            handleChange={handleChange}
            handleFeatureChange={handleFeatureChange}
            addFeature={addFeature}
            removeFeature={removeFeature}
            handleImageChange={handleImageChange}
          />
          <button type="submit" className="form-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Küldés...' : 'Űrhajó létrehozása'}
          </button>
        </form>
      </div>
    </div>
  );
};
