import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from '@tanstack/react-router';
import { API_URL } from '../../config';
import { useAuthUnlock } from '../../context/AuthUnlockContext';

const API_KEY = import.meta.env.VITE_API_KEY || 'titkos-api-kulcs-amit-csak-a-viktortud-1';

export const AdminEditJob = () => {
  const { isLoggedIn } = useAuthUnlock();
  const navigate = useNavigate();
  const { id } = useParams({ from: '/admin/edit-job/$id' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    count: '',
    description: '',
    requirements: '',
    type: '',
    location: '',
    salary: '',
    isFeatured: false,
  });

  useEffect(() => {
    if (!isLoggedIn) {
      navigate({ to: '/login' });
      return;
    }

    const fetchJob = async () => {
      try {
        const response = await fetch(`${API_URL}/api/jobs/${id}`);
        if (response.ok) {
          const data = await response.json();
          setFormData({
            title: data.title || '',
            department: data.department || '',
            count: data.count || '',
            description: data.description || '',
            requirements: data.requirements || '',
            type: data.type || '',
            location: data.location || '',
            salary: data.salary || '',
            isFeatured: !!data.isFeatured,
          });
        }
      } catch (err) {
        console.error('Error fetching job:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id, isLoggedIn, navigate]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/api/jobs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'x-api-key': API_KEY },
        body: JSON.stringify(formData),
        credentials: 'include',
      });

      if (response.ok) navigate({ to: '/admin/jobs' });
      else console.error('Failed to update job');
    } catch (err) {
      console.error('Error updating job:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <div className="admin-page-wrapper"><p>Betöltés...</p></div>;

  return (
    <div className="admin-page-wrapper">
      <Link to="/admin/jobs" className="back-link">
        ← Vissza az állásokhoz
      </Link>
      <div className="admin-add-page">
        <h1>Állás szerkesztése</h1>
        <form className="admin-add-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Pozíció megnevezése</label>
            <input name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Részleg / Osztály</label>
            <input name="department" value={formData.department} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Pozíciók száma</label>
            <input name="count" value={formData.count} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Leírás</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Elvárások</label>
            <textarea name="requirements" value={formData.requirements} onChange={handleChange} />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Munkavégzés típusa</label>
              <input name="type" value={formData.type} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Helyszín</label>
              <input name="location" value={formData.location} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label>Fizetés</label>
            <input name="salary" value={formData.salary} onChange={handleChange} />
          </div>
          <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
            <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} id="isFeatured" />
            <label htmlFor="isFeatured">Kiemelt pozíció</label>
          </div>
          <button type="submit" className="form-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Mentés...' : 'Állás frissítése'}
          </button>
        </form>
      </div>
    </div>
  );
};
