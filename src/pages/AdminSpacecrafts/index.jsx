import { useState, useEffect } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { API_URL } from '../../config';
import { useAuthUnlock } from '../../context/AuthUnlockContext';

const API_KEY = import.meta.env.VITE_API_KEY || 'titkos-api-kulcs-amit-csak-a-viktortud-1';

const SPACECRAFT_TYPES = {
  commercial: 'Kereskedelmi',
  mining: 'Bányászat',
  battleship: 'Harcászat',
  research: 'Kutatás',
};

const TYPE_FILTERS = [
  { value: '', label: 'Összes' },
  { value: 'commercial', label: 'Kereskedelmi' },
  { value: 'mining', label: 'Bányászat' },
  { value: 'battleship', label: 'Harcászat' },
  { value: 'research', label: 'Kutatás' },
];

export const AdminSpacecrafts = () => {
  const { isLoggedIn } = useAuthUnlock();
  const navigate = useNavigate();
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate({ to: '/login' });
      return;
    }

    const fetchSpacecrafts = async () => {
      try {
        const url = filter
          ? `${API_URL}/api/spacecrafts/type/${filter}`
          : `${API_URL}/api/spacecrafts`;
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setSpacecrafts(data);
        }
      } catch (err) {
        console.error('Error fetching spacecrafts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSpacecrafts();
  }, [isLoggedIn, navigate, filter]);

  const handleDelete = async id => {
    if (!confirm('Biztosan törölni szeretnéd ezt az űrhajót?')) return;

    try {
      const response = await fetch(`${API_URL}/api/spacecrafts/${id}`, {
        method: 'DELETE',
        headers: {
          'x-api-key': API_KEY,
        },
        credentials: 'include',
      });

      if (response.ok) {
        const { spacecrafts } = await response.json();
        setSpacecrafts(spacecrafts);
      } else {
        const error = await response.json();
        console.error('Delete error:', error);
      }
    } catch (err) {
      console.error('Error deleting spacecraft:', err);
    }
  };

  const handleRestore = async id => {
    if (!confirm('Biztosan visszaállítani szeretnéd ezt az űrhajót?')) return;

    try {
      const response = await fetch(`${API_URL}/api/spacecrafts/${id}/restore`, {
        method: 'POST',
        headers: {
          'x-api-key': API_KEY,
        },
        credentials: 'include',
      });

      if (response.ok) {
        const { spacecrafts } = await response.json();
        setSpacecrafts(spacecrafts);
      } else {
        const error = await response.json();
        console.error('Restore error:', error);
      }
    } catch (err) {
      console.error('Error restoring spacecraft:', err);
    }
  };

  const handleEdit = id => {
    navigate({ to: '/admin/edit-spacecraft/$id', params: { id } });
  };

  if (loading) {
    return (
      <div className="admin-spacecrafts-page">
        <p>Betöltés...</p>
      </div>
    );
  }

  return (
    <div className="admin-spacecrafts-page">
      <div className="filter-bar">
        <label htmlFor="typeFilter">Szűrő: </label>
        <select
          id="typeFilter"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          {TYPE_FILTERS.map(f => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>
      </div>
      <table className="spacecrafts-table">
        <thead>
          <tr>
            <th>Kép</th>
            <th>Név</th>
            <th>Típus</th>
            <th>Státusz</th>
            <th>Műveletek</th>
          </tr>
        </thead>
        <tbody>
          {spacecrafts.map(spacecraft => (
            <tr key={spacecraft.id}>
              <td>
                <img
                  src={spacecraft.image}
                  alt={spacecraft.name}
                  className="spacecraft-thumb"
                />
              </td>
              <td>
                <Link to="/spacecraft/$id" params={{ id: spacecraft.id }}>
                  {spacecraft.name}
                </Link>
              </td>
              <td>{SPACECRAFT_TYPES[spacecraft.type] || spacecraft.type}</td>
              <td>{spacecraft.active === false ? '❌' : '✅'}</td>
              <td>
                <button
                  onClick={() => handleEdit(spacecraft.id)}
                  className="edit-btn"
                >
                  Szerkesztés
                </button>
                {spacecraft.active === false ? (
                  <button
                    onClick={() => handleRestore(spacecraft.id)}
                    className="restore-btn"
                  >
                    Visszaállítás
                  </button>
                ) : (
                  <button
                    onClick={() => handleDelete(spacecraft.id)}
                    className="delete-btn"
                  >
                    Törlés
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};