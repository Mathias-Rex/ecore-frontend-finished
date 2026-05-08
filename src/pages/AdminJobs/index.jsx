import { useState, useEffect } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { API_URL } from '../../config';
import { useAuthUnlock } from '../../context/AuthUnlockContext';

const API_KEY = import.meta.env.VITE_API_KEY || 'titkos-api-kulcs-amit-csak-a-viktortud-1';

export const AdminJobs = () => {
  const { isLoggedIn } = useAuthUnlock();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate({ to: '/login' });
      return;
    }

    const fetchJobs = async () => {
      try {
        const response = await fetch(`${API_URL}/api/jobs`);
        if (response.ok) {
          const data = await response.json();
          setJobs(data);
        }
      } catch (err) {
        console.error('Error fetching jobs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isLoggedIn, navigate]);

  const handleDelete = async id => {
    if (!confirm('Biztosan törölni szeretnéd ezt az állást?')) return;

    try {
      const response = await fetch(`${API_URL}/api/jobs/${id}`, {
        method: 'DELETE',
        headers: {
          'x-api-key': API_KEY,
        },
        credentials: 'include',
      });

      if (response.ok) {
        setJobs(prev => prev.filter(j => j.id !== id));
      } else {
        const error = await response.json();
        console.error('Delete error:', error);
      }
    } catch (err) {
      console.error('Error deleting job:', err);
    }
  };

  const handleEdit = id => {
    navigate({ to: '/admin/edit-job/$id', params: { id } });
  };

  if (loading) {
    return (
      <div className="admin-page-wrapper">
        <p>Betöltés...</p>
      </div>
    );
  }

  return (
    <div className="admin-page-wrapper" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1>Állások kezelése</h1>
      <table className="spacecrafts-table">
        <thead>
          <tr>
            <th>Pozíció</th>
            <th>Osztály</th>
            <th>Helyszín</th>
            <th>Típus</th>
            <th>Műveletek</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.department}</td>
              <td>{job.location}</td>
              <td>{job.type}</td>
              <td>
                <button onClick={() => handleEdit(job.id)} className="edit-btn">
                  Szerkesztés
                </button>
                <button onClick={() => handleDelete(job.id)} className="delete-btn">
                  Törlés
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
