export const ShipDescription = ({ description, features }) => (
  <div className="ship-description">
    <h2>Áttekintés</h2>
    {description?.overview && (
      <>
        <p>{description.overview}</p>
        {description.additional && <p>{description.additional}</p>}
      </>
    )}

    {features && features.length > 0 && (
      <>
        <h3>Főbb jellemzők</h3>
        <ul className="features-list">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </>
    )}

    {description?.applications && (
      <>
        <h3>Alkalmazási területek</h3>
        <p>{description.applications}</p>
      </>
    )}
  </div>
);
