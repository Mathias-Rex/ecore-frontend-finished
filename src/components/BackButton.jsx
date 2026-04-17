import { Link } from '@tanstack/react-router';

const typeMap = {
  commercial: 'commercial',
  mining: 'mining',
  research: 'research',
  battleship: 'battleships',
  battleships: 'battleships',
};

export const BackButton = ({ type }) => {
  const backLink = typeMap[type] || 'battleships';
  return (
    <Link to={`/${backLink}`} className="back-button">
      ← Vissza a járművekhez
    </Link>
  );
};
