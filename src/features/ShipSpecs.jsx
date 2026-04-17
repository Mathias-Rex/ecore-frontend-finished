const formatCrew = crew => {
  if (!crew) return 'N/A';
  if (typeof crew === 'string') return crew;
  return crew.crew || crew.crewCount || crew.personnel || 'N/A';
};

export const ShipSpecs = ({ specs, pricing }) => (
  <div className="ship-specs-detailed">
    <h2>Műszaki specifikációk</h2>

    {specs?.performance && (
      <div className="spec-section">
        <h4>Teljesítmény</h4>
        <table className="specs-table">
          {specs.performance.maxSpeed && (
            <tr>
              <td>Maximális sebesség</td>
              <td>{specs.performance.maxSpeed}</td>
            </tr>
          )}
          {specs.performance.acceleration && (
            <tr>
              <td>Gyorsulás</td>
              <td>{specs.performance.acceleration}</td>
            </tr>
          )}
          {specs.performance.range && (
            <tr>
              <td>Hatótáv</td>
              <td>{specs.performance.range}</td>
            </tr>
          )}
          {specs.performance.propulsion && (
            <tr>
              <td>Hajtómű</td>
              <td>{specs.performance.propulsion}</td>
            </tr>
          )}
        </table>
      </div>
    )}

    {specs?.capacity && (
      <div className="spec-section">
        <h4>Kapacitás</h4>
        <table className="specs-table">
          {specs.capacity.hangar && (
            <tr>
              <td>Hangárkapacitás</td>
              <td>{specs.capacity.hangar}</td>
            </tr>
          )}
          {specs.capacity.logistics && (
            <tr>
              <td>Logisztika</td>
              <td>{specs.capacity.logistics}</td>
            </tr>
          )}
          {specs.capacity.docking && (
            <tr>
              <td>Dokkolás</td>
              <td>{specs.capacity.docking}</td>
            </tr>
          )}
          {specs.capacity.storage && (
            <tr>
              <td>Raktár</td>
              <td>{specs.capacity.storage}</td>
            </tr>
          )}
        </table>
      </div>
    )}

    {specs?.crew && (
      <div className="spec-section">
        <h4>Legénység és parancsnokság</h4>
        <table className="specs-table">
          <tr>
            <td>Legénység</td>
            <td>{formatCrew(specs.crew)}</td>
          </tr>
          {specs.crew.command && (
            <tr>
              <td>Parancsnok</td>
              <td>{specs.crew.command}</td>
            </tr>
          )}
          {specs.crew.operations && (
            <tr>
              <td>Operatív</td>
              <td>{specs.crew.operations}</td>
            </tr>
          )}
          {specs.crew.support && (
            <tr>
              <td>Támogatás</td>
              <td>{specs.crew.support}</td>
            </tr>
          )}
        </table>
      </div>
    )}

    {specs?.dimensions && (
      <div className="spec-section">
        <h4>Dimenzió és tömeg</h4>
        <table className="specs-table">
          {specs.dimensions.length && (
            <tr>
              <td>Hossz</td>
              <td>{specs.dimensions.length}</td>
            </tr>
          )}
          {specs.dimensions.width && (
            <tr>
              <td>Szélesség</td>
              <td>{specs.dimensions.width}</td>
            </tr>
          )}
          {specs.dimensions.height && (
            <tr>
              <td>Magasság</td>
              <td>{specs.dimensions.height}</td>
            </tr>
          )}
          {specs.dimensions.emptyMass && (
            <tr>
              <td>Üres tömeg</td>
              <td>{specs.dimensions.emptyMass}</td>
            </tr>
          )}
        </table>
      </div>
    )}

    {pricing && (
      <div className="price-section">
        <h3>Ár és elérhetőség</h3>
        <p className="price">{pricing.price}</p>
        {pricing.availability && <p className="availability">{pricing.availability}</p>}
        <button className="cta-button">Ajánlatot kérek</button>
      </div>
    )}
  </div>
);
