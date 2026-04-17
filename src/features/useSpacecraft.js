import { useState, useEffect } from 'react';
import { API_URL } from '../config';

export const useSpacecraft = id => {
  const [craft, setCraft] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/spacecrafts/${id}`, {
      credentials: 'omit',
      headers: {
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => setCraft(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { craft, loading, error };
};
