import { Link, Outlet, useNavigate } from '@tanstack/react-router';
import { API_URL } from '../config';
import { useAuthUnlock } from '../context/AuthUnlockContext';

export const AdminLayout = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuthUnlock();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch(`${API_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      setIsLoggedIn(false);
      navigate({ to: '/' });
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  if (!isLoggedIn) {
    navigate({ to: '/login' });
    return null;
  }

  return (
    <>
      <nav className="admin-header">
        <div className="admin-header-container">
          <div className="admin-header-links">
            <Link to="/admin/add-spacecraft" className="admin-header-link">
              Űrhajó hozzáadása
            </Link>
            <Link to="/admin/spacecrafts" className="admin-header-link">
              Űrhajók kezelése
            </Link>
            <Link to="/admin/add-job" className="admin-header-link">
              Állás hozzáadása
            </Link>
            <Link to="/admin/jobs" className="admin-header-link">
              Állások kezelése
            </Link>
          </div>
          <button onClick={handleLogout} className="admin-header-logout">
            Kijelentkezés
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
