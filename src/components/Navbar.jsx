import { useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { motion } from 'framer-motion';
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

    let newValue = clickedValues + id;
    const lastSix = newValue.slice(-6);

    if (!lastSix.startsWith(CORRECT_CODE.slice(0, lastSix.length))) {
      newValue = id;
    }

    setClickedValues(newValue);

    if (newValue === CORRECT_CODE) {
      setIsUnlocked(true);
      setClickedValues('');
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
                  onClick={() => handleLetterClick(letter, id)}
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
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="nav-active-indicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
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
