export const Error = ({ message }) => {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1>Hiba történt</h1>
        <p>{message}</p>
        <button onClick={() => window.history.back()} className="back-button">
          ← Vissza a járművekhez
        </button>
      </div>
    </div>
  );
};
