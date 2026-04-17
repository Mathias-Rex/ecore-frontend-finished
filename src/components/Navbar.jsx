import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { useAuthUnlock } from '../context/AuthUnlockContext';

const SEQUENCE = ['E', 'E', 'C', 'R', 'O', 'O'];

export const Navbar = () => {
  const [clickedLetters, setClickedLetters] = useState([]);
  const { isUnlocked, setIsUnlocked, isLoggedIn } = useAuthUnlock();

  const logoLetters = [
    { letter: 'E', id: 0 },
    { letter: '-', id: 'dash' },
    { letter: 'C', id: 1 },
    { letter: 'O', id: 2 },
    { letter: 'R', id: 3 },
    { letter: 'E', id: 4 },
  ];

  const handleLetterClick = letter => {
    if (letter === '-') return;

    if (isLoggedIn) {
      setIsUnlocked(false);
      return;
    }

    const nextIndex = clickedLetters.length;
    const expectedLetter = SEQUENCE[nextIndex];

    if (letter === expectedLetter) {
      const newClicked = [...clickedLetters, letter];
      setClickedLetters(newClicked);

      const lastSix = newClicked.slice(-6);
      if (lastSix.join('') === SEQUENCE.join('')) {
        setIsUnlocked(true);
        console.log('ok');
      }
    } else {
      if (clickedLetters.length >= 6) {
        setClickedLetters([]);
      } else {
        setClickedLetters([letter]);
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="E-CORE logo" />
            <span className="logo-text">
              {logoLetters.map(({ letter, id }) => (
                <span key={id} className="logo-letter" onClick={() => handleLetterClick(letter)}>
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category/commercial">Kereskedelem</Link>
          </li>
          <li>
            <Link to="/category/mining">Bányászat</Link>
          </li>
          <li>
            <Link to="/category/research">Kutatás</Link>
          </li>
          <li>
            <Link to="/category/battleships">Harcászat</Link>
          </li>
          <li>
            <Link to="/aboutus">Rólunk</Link>
          </li>
          {isUnlocked && (
            <li>
              <Link to={isLoggedIn ? '/admin' : '/login'}>{isLoggedIn ? 'Admin' : 'Login'}</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
