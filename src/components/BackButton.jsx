export const BackButton = () => {
  return (
    <button onClick={() => window.history.back()} className="back-button">
      ← Vissza a járművekhez
    </button>
  );
};
