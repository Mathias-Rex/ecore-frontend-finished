import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from '@tanstack/react-router';
import { API_URL } from '../../config';
import { useAuthUnlock } from '../../context/AuthUnlockContext';
import { useSpacecraftForm, INITIAL_FORM_DATA } from '../../hooks/useSpacecraftForm';
import { SpacecraftFormFields } from '../../components/SpacecraftForm';
import { useLoading } from '../../context/LoadingContext';

const API_KEY = import.meta.env.VITE_API_KEY || 'titkos-api-kulcs-amit-csak-a-viktortud-1';

export const AdminEditSpacecraft = () => {
  const { id } = useParams({ from: '/admin/edit-spacecraft/$id' });
  const { isLoggedIn } = useAuthUnlock();
  const navigate = useNavigate();
  const { showLoading, hideLoading } = useLoading();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState('');
  const { formData, setFormData, handleChange, handleFeatureChange, addFeature, removeFeature, handleImageChange } =
    useSpacecraftForm();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate({ to: '/login' });
      return;
    }

    const fetchSpacecraft = async () => {
      showLoading();
      try {
        const response = await fetch(`${API_URL}/api/spacecrafts/${id}`);
        if (response.ok) {
          const data = await response.json();
          setCurrentImage(data.image || '');
          setFormData({
            name: data.name || '',
            type: data.type || '',
            category: data.category || '',
            tagline: data.tagline || '',
            description: data.description || { overview: '', additional: '', applications: '' },
            features: data.features?.length ? data.features : [''],
            specs: data.specs || INITIAL_FORM_DATA.specs,
            pricing: data.pricing || { price: '', availability: '' },
            image: null,
          });
        }
      } catch (err) {
        console.error('Error fetching spacecraft:', err);
      } finally {
        hideLoading();
        setLoading(false);
      }
    };

    fetchSpacecraft();
  }, [id, isLoggedIn, navigate]);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      let imageUrl = currentImage;
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

      const response = await fetch(`${API_URL}/api/spacecrafts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'x-api-key': API_KEY },
        body: JSON.stringify(spacecraftData),
        credentials: 'include',
      });

      if (response.ok) navigate({ to: '/admin/spacecrafts' });
      else console.error('Failed to update spacecraft');
    } catch (err) {
      console.error('Error updating spacecraft:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return null;

  return (
    <div className="admin-page-wrapper">
      <Link to="/admin/spacecrafts" className="back-link">
        ← Vissza az űrhajók listájára
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
            currentImage={currentImage}
          />
          <button type="submit" className="form-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Küldés...' : 'Űrhajó módosítása'}
          </button>
        </form>
      </div>
    </div>
  );
};
