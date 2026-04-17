import { Link } from '@tanstack/react-router';

export const NotFound = () => (
  <div className="not-found-page">
    <div className="not-found-content">
      <div className="not-found-graphic">
        <span className="error-code">404</span>
      </div>
      <h1>Az oldal nem található</h1>
      <p>A keresett oldal nem létezik vagy már nem elérhető.</p>
      <Link to="/" className="cta-button">
        Vissza a főoldalra
      </Link>
    </div>
  </div>
);
