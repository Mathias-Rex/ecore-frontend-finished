import { useState, useEffect } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { API_URL } from '../../config';
import { useAuthUnlock } from '../../context/AuthUnlockContext';

const API_KEY = import.meta.env.VITE_API_KEY || 'titkos-api-kulcs-amit-csak-a-viktortud-1';

export const AdminAddJob = () => {
  const { isLoggedIn } = useAuthUnlock();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    if (!isLoggedIn) navigate({ to: '/login' });
  }, [isLoggedIn, navigate]);

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
      const response = await fetch(`${API_URL}/api/jobs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': API_KEY },
        body: JSON.stringify(formData),
        credentials: 'include',
      });

      if (response.ok) navigate({ to: '/admin/jobs' });
      else console.error('Failed to create job');
    } catch (err) {
      console.error('Error creating job:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="admin-page-wrapper">
      <Link to="/admin/jobs" className="back-link">
        ← Vissza az állásokhoz
      </Link>
      <div className="admin-add-page">
        <h1>Új állás hozzáadása</h1>
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
            <label>Pozíciók száma (pl: "1 pozíció")</label>
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
              <label>Munkavégzés típusa (pl: "Teljes munkaidő")</label>
              <input name="type" value={formData.type} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Helyszín</label>
              <input name="location" value={formData.location} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label>Fizetés (opcionális)</label>
            <input name="salary" value={formData.salary} onChange={handleChange} />
          </div>
          <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
            <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} id="isFeatured" />
            <label htmlFor="isFeatured">Kiemelt pozíció</label>
          </div>
          <button type="submit" className="form-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Küldés...' : 'Állás létrehozása'}
          </button>
        </form>
      </div>
    </div>
  );
};
