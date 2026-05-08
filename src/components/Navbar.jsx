import { useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { useAuthUnlock } from '../context/AuthUnlockContext';

const CORRECT_CODE = '041322';

const NAV_LINKS = [
  { to: '/', label: 'Home', exact: true },
  { to: '/category/commercial', label: 'Kereskedelem' },
  { to: '/category/mining', label: 'Bányászat' },
  { to: '/category/research', label: 'Kutatás' },
  { to: '/category/battleships', label: 'Harcászat' },
  { to: '/aboutus', label: 'Rólunk' },
];

const logoLetters = [
  { letter: 'E', id: 0 },
  { letter: '-', id: 'dash' },
  { letter: 'C', id: 1 },
  { letter: 'O', id: 2 },
  { letter: 'R', id: 3 },
  { letter: 'E', id: 4 },
];

const isLinkActive = (to, exact, pathname) => {
  if (exact) return pathname === to;
  return pathname.startsWith(to);
};

export const Navbar = () => {
  const [clickedValues, setClickedValues] = useState('');
  const { isUnlocked, setIsUnlocked, isLoggedIn } = useAuthUnlock();
  const { pathname } = useLocation();

  const handleLetterClick = (letter, id) => {
    if (letter === '-') return;

    if (isUnlocked) {
      setIsUnlocked(false);
      setClickedValues('');
      return;
    }

    const nextValue = clickedValues + id;

    if (CORRECT_CODE.startsWith(nextValue)) {
      setClickedValues(nextValue);
      if (nextValue === CORRECT_CODE) {
        setIsUnlocked(true);
        setClickedValues('');
      }
    } else {
      // Ha rontás van, megnézzük, hogy az aktuális kattintás-e a kód kezdete
      if (CORRECT_CODE.startsWith(String(id))) {
        setClickedValues(String(id));
      } else {
        setClickedValues('');
      }
    }
  };

  const allLinks = isUnlocked
    ? [...NAV_LINKS, { to: isLoggedIn ? '/admin' : '/login', label: isLoggedIn ? 'Admin' : 'Login' }]
    : NAV_LINKS;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="E-CORE logo" />
            <span className="logo-text">
              {logoLetters.map(({ letter, id }) => (
                <span
                  key={id}
                  className="logo-letter"
                  onClick={e => {
                    e.preventDefault();
                    handleLetterClick(letter, id);
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </Link>
        </div>
        <div className="hamburger" id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="nav-menu" id="nav-menu">
          {allLinks.map(({ to, label, exact }) => {
            const active = isLinkActive(to, exact, pathname);
            return (
              <li key={to}>
                <Link to={to} activeProps={{ className: 'active' }} activeOptions={exact ? { exact: true } : undefined}>
                  {label}
                  {active && (
                    <span className="nav-active-indicator" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
