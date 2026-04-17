import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { API_URL } from '../../config';
import { useAuthUnlock } from '../../context/AuthUnlockContext';
import { NotFound } from '../NotFound';

export const Login = () => {
  const { isUnlocked, setIsLoggedIn } = useAuthUnlock();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  if (!isUnlocked) {
    return <NotFound />;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Bejelentkezés sikertelen');
        return;
      }

      setIsLoggedIn(true);
      navigate({ to: '/admin' });
    } catch {
      setError('Hiba történt a bejelentkezés során');
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin Bejelentkezés</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="username">Felhasználónév</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Jelszó</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Belépés</button>
      </form>
    </div>
  );
};
