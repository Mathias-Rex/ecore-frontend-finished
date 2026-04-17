import { useState } from 'react';
import { getImage } from '../../utils/getImage';

const SPACECRAFT_TYPES = [
  { value: 'commercial', label: 'Kereskedelmi' },
  { value: 'mining', label: 'Bányászat' },
  { value: 'battleship', label: 'Harcászat' },
  { value: 'research', label: 'Kutatás' },
];

const getNestedValue = (formData, path) => {
  const keys = path.split('.');
  let value = formData;
  for (const key of keys) value = value?.[key];
  return value || '';
};

export const SpacecraftFormFields = ({
  formData,
  handleChange,
  handleFeatureChange,
  addFeature,
  removeFeature,
  handleImageChange,
  currentImage,
}) => {
  const [fileName, setFileName] = useState('');

  const onImageChange = e => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
    handleImageChange(e);
  };

  return (
  <>
    <fieldset className="form-section">
      <legend>Alapadatok</legend>
      <div className="form-group">
        <label htmlFor="name">Név</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={e => handleChange('name', e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="type">Típus</label>
        <select
          id="type"
          value={formData.type}
          onChange={e => handleChange('type', e.target.value)}
          required
        >
          <option value="">Válassz típust</option>
          {SPACECRAFT_TYPES.map(type => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="category">Katagória</label>
        <input
          type="text"
          id="category"
          value={formData.category}
          onChange={e => handleChange('category', e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="tagline">Rövid leírás</label>
        <input
          type="text"
          id="tagline"
          value={formData.tagline}
          onChange={e => handleChange('tagline', e.target.value)}
        />
      </div>
    </fieldset>

    <fieldset className="form-section">
      <legend>Leírás</legend>
      <div className="form-group">
        <label htmlFor="overview">Áttekintés</label>
        <textarea
          id="overview"
          value={formData.description.overview}
          onChange={e => handleChange('description.overview', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="additional">További információk</label>
        <textarea
          id="additional"
          value={formData.description.additional}
          onChange={e => handleChange('description.additional', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="applications">Felhasználási területek</label>
        <textarea
          id="applications"
          value={formData.description.applications}
          onChange={e => handleChange('description.applications', e.target.value)}
        />
      </div>
    </fieldset>

    <fieldset className="form-section">
      <legend>Jellemzők</legend>
      {formData.features.map((feature, index) => (
        <div key={index} className="feature-row">
          <input
            type="text"
            value={feature}
            onChange={e => handleFeatureChange(index, e.target.value)}
            placeholder={`Jellemző ${index + 1}`}
          />
          {formData.features.length > 1 && (
            <button
              type="button"
              className="remove-feature-btn"
              onClick={() => removeFeature(index)}
            >
              ✕
            </button>
          )}
        </div>
      ))}
      <button type="button" className="add-feature-btn" onClick={addFeature}>
        + Jellemző hozzáadása
      </button>
    </fieldset>

    <fieldset className="form-section">
      <legend>Teljesítmény</legend>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="maxSpeed">Maximális sebesség</label>
          <input
            type="text"
            id="maxSpeed"
            value={getNestedValue(formData, 'specs.performance.maxSpeed')}
            onChange={e => handleChange('specs.performance.maxSpeed', e.target.value)}
            placeholder="0.12c"
          />
        </div>
        <div className="form-group">
          <label htmlFor="acceleration">Gyorsulás</label>
          <input
            type="text"
            id="acceleration"
            value={getNestedValue(formData, 'specs.performance.acceleration')}
            onChange={e => handleChange('specs.performance.acceleration', e.target.value)}
            placeholder="2.0 G"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="range">Hatótávolság</label>
          <input
            type="text"
            id="range"
            value={getNestedValue(formData, 'specs.performance.range')}
            onChange={e => handleChange('specs.performance.range', e.target.value)}
            placeholder="28 fényév"
          />
        </div>
        <div className="form-group">
          <label htmlFor="engine">Hajtómű</label>
          <input
            type="text"
            id="engine"
            value={getNestedValue(formData, 'specs.performance.engine')}
            onChange={e => handleChange('specs.performance.engine', e.target.value)}
            placeholder="Dual-ion + graviton lift"
          />
        </div>
      </div>
    </fieldset>

    {formData.type === 'mining' && (
      <fieldset className="form-section">
        <legend>Kitermelés/Munka</legend>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="extraction">Kitermelés</label>
            <input
              type="text"
              id="extraction"
              value={getNestedValue(formData, 'specs.extraction.extraction')}
              onChange={e => handleChange('specs.extraction.extraction', e.target.value)}
              placeholder="500 tonna/nap"
            />
          </div>
          <div className="form-group">
            <label htmlFor="processing">Feldolgozás</label>
            <input
              type="text"
              id="processing"
              value={getNestedValue(formData, 'specs.extraction.processing')}
              onChange={e => handleChange('specs.extraction.processing', e.target.value)}
              placeholder="98% hatékonyságú"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="chamber">Kamra</label>
            <input
              type="text"
              id="chamber"
              value={getNestedValue(formData, 'specs.extraction.chamber')}
              onChange={e => handleChange('specs.extraction.chamber', e.target.value)}
              placeholder="3000 m³"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dock">Dokk</label>
            <input
              type="text"
              id="dock"
              value={getNestedValue(formData, 'specs.extraction.dock')}
              onChange={e => handleChange('specs.extraction.dock', e.target.value)}
              placeholder="2 konvoj + 1 töltő"
            />
          </div>
        </div>
      </fieldset>
    )}

    {formData.type === 'commercial' && (
      <fieldset className="form-section">
        <legend>Rakomány</legend>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cargoSpace">Tér</label>
            <input
              type="text"
              id="cargoSpace"
              value={getNestedValue(formData, 'specs.cargo.space')}
              onChange={e => handleChange('specs.cargo.space', e.target.value)}
              placeholder="5000 m³"
            />
          </div>
          <div className="form-group">
            <label htmlFor="maxLoad">Max terhelés</label>
            <input
              type="text"
              id="maxLoad"
              value={getNestedValue(formData, 'specs.cargo.maxLoad')}
              onChange={e => handleChange('specs.cargo.maxLoad', e.target.value)}
              placeholder="8500 tonna"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cargoType">Típus</label>
            <input
              type="text"
              id="cargoType"
              value={getNestedValue(formData, 'specs.cargo.type')}
              onChange={e => handleChange('specs.cargo.type', e.target.value)}
              placeholder="Moduláris"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cargoDocking">Dokkolás</label>
            <input
              type="text"
              id="cargoDocking"
              value={getNestedValue(formData, 'specs.cargo.docking')}
              onChange={e => handleChange('specs.cargo.docking', e.target.value)}
              placeholder="4 standard"
            />
          </div>
        </div>
      </fieldset>
    )}

    {formData.type === 'battleship' && (
    <fieldset className="form-section">
      <legend>Szállító kapacitás</legend>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="hangar">Hangár</label>
          <input
            type="text"
            id="hangar"
            value={getNestedValue(formData, 'specs.capacity.hangar')}
            onChange={e => handleChange('specs.capacity.hangar', e.target.value)}
            placeholder="120 vadászgép"
          />
        </div>
        <div className="form-group">
          <label htmlFor="logistics">Logisztika</label>
          <input
            type="text"
            id="logistics"
            value={getNestedValue(formData, 'specs.capacity.logistics')}
            onChange={e => handleChange('specs.capacity.logistics', e.target.value)}
            placeholder="5 moduláris"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="capacityDocking">Dokkolás</label>
          <input
            type="text"
            id="capacityDocking"
            value={getNestedValue(formData, 'specs.capacity.docking')}
            onChange={e => handleChange('specs.capacity.docking', e.target.value)}
            placeholder="10 multiport"
          />
        </div>
        <div className="form-group">
          <label htmlFor="warehouse">Raktár</label>
          <input
            type="text"
            id="warehouse"
            value={getNestedValue(formData, 'specs.capacity.warehouse')}
            onChange={e => handleChange('specs.capacity.warehouse', e.target.value)}
            placeholder="9000 tonna"
          />
        </div>
      </div>
    </fieldset>
    )}

    {formData.type === 'battleship' && (
    <fieldset className="form-section">
      <legend>Fegyverzet</legend>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="lasers">Lézerek</label>
          <input
            type="text"
            id="lasers"
            value={getNestedValue(formData, 'specs.armament.lasers')}
            onChange={e => handleChange('specs.armament.lasers', e.target.value)}
            placeholder="2x medium laser"
          />
        </div>
        <div className="form-group">
          <label htmlFor="missiles">Rakéták</label>
          <input
            type="text"
            id="missiles"
            value={getNestedValue(formData, 'specs.armament.missiles')}
            onChange={e => handleChange('specs.armament.missiles', e.target.value)}
            placeholder="3x vectored"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="drones">Drónok</label>
          <input
            type="text"
            id="drones"
            value={getNestedValue(formData, 'specs.armament.drones')}
            onChange={e => handleChange('specs.armament.drones', e.target.value)}
            placeholder="6 intercept"
          />
        </div>
        <div className="form-group">
          <label htmlFor="attack">Támadás</label>
          <input
            type="text"
            id="attack"
            value={getNestedValue(formData, 'specs.armament.attack')}
            onChange={e => handleChange('specs.armament.attack', e.target.value)}
            placeholder="EMP + railgun"
          />
        </div>
      </div>
    </fieldset>
    )}

    {formData.type === 'research' && (
    <fieldset className="form-section">
      <legend>Laboratórium</legend>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="laboratory">Labor</label>
          <input
            type="text"
            id="laboratory"
            value={getNestedValue(formData, 'specs.laboratory.laboratory')}
            onChange={e => handleChange('specs.laboratory.laboratory', e.target.value)}
            placeholder="4 holografikus"
          />
        </div>
        <div className="form-group">
          <label htmlFor="scanner">Szkanner</label>
          <input
            type="text"
            id="scanner"
            value={getNestedValue(formData, 'specs.laboratory.scanner')}
            onChange={e => handleChange('specs.laboratory.scanner', e.target.value)}
            placeholder="Multi-spectral"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="documentation">Dokumentáció</label>
          <input
            type="text"
            id="documentation"
            value={getNestedValue(formData, 'specs.laboratory.documentation')}
            onChange={e => handleChange('specs.laboratory.documentation', e.target.value)}
            placeholder="AR + quantum"
          />
        </div>
        <div className="form-group">
          <label htmlFor="data">Adat</label>
          <input
            type="text"
            id="data"
            value={getNestedValue(formData, 'specs.laboratory.data')}
            onChange={e => handleChange('specs.laboratory.data', e.target.value)}
            placeholder="Exabyte vault"
          />
        </div>
      </div>
    </fieldset>
    )}

    <fieldset className="form-section">
      <legend>Személyzet</legend>
      <div className="form-group">
        <label htmlFor="crew">Személyzet</label>
        <input
          type="text"
          id="crew"
          value={getNestedValue(formData, 'specs.crew.crew')}
          onChange={e => handleChange('specs.crew.crew', e.target.value)}
          placeholder="10 fő"
        />
      </div>
      <div className="form-group">
        <label htmlFor="crewSecurity">Biztonság</label>
        <input
          type="text"
          id="crewSecurity"
          value={getNestedValue(formData, 'specs.crew.security')}
          onChange={e => handleChange('specs.crew.security', e.target.value)}
          placeholder="Sugaras védőpajzs"
        />
      </div>
      <div className="form-group">
        <label htmlFor="crewComfort">Kényelem</label>
        <input
          type="text"
          id="crewComfort"
          value={getNestedValue(formData, 'specs.crew.comfort')}
          onChange={e => handleChange('specs.crew.comfort', e.target.value)}
          placeholder="Automatikus rezonancia"
        />
      </div>
      <div className="form-group">
        <label htmlFor="crewCommunication">Kommunikáció</label>
        <input
          type="text"
          id="crewCommunication"
          value={getNestedValue(formData, 'specs.crew.communication')}
          onChange={e => handleChange('specs.crew.communication', e.target.value)}
          placeholder="Quantum relay + Mesh"
        />
      </div>
    </fieldset>

    <fieldset className="form-section">
      <legend>Méretek</legend>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="length">Hossz</label>
          <input
            type="text"
            id="length"
            value={getNestedValue(formData, 'specs.dimensions.length')}
            onChange={e => handleChange('specs.dimensions.length', e.target.value)}
            placeholder="150 méter"
          />
        </div>
        <div className="form-group">
          <label htmlFor="width">Szélesség</label>
          <input
            type="text"
            id="width"
            value={getNestedValue(formData, 'specs.dimensions.width')}
            onChange={e => handleChange('specs.dimensions.width', e.target.value)}
            placeholder="54 méter"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="height">Magasság</label>
          <input
            type="text"
            id="height"
            value={getNestedValue(formData, 'specs.dimensions.height')}
            onChange={e => handleChange('specs.dimensions.height', e.target.value)}
            placeholder="38 méter"
          />
        </div>
        <div className="form-group">
          <label htmlFor="emptyMass">Üres tömeg</label>
          <input
            type="text"
            id="emptyMass"
            value={getNestedValue(formData, 'specs.dimensions.emptyMass')}
            onChange={e => handleChange('specs.dimensions.emptyMass', e.target.value)}
            placeholder="3100 tonna"
          />
        </div>
      </div>
    </fieldset>

    <fieldset className="form-section">
      <legend>Árazás</legend>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="price">Ár</label>
          <input
            type="text"
            id="price"
            value={formData.pricing.price}
            onChange={e => handleChange('pricing.price', e.target.value)}
            placeholder="71.000.000 CR"
          />
        </div>
        <div className="form-group">
          <label htmlFor="availability">Elérhetőség</label>
          <input
            type="text"
            id="availability"
            value={formData.pricing.availability}
            onChange={e => handleChange('pricing.availability', e.target.value)}
            placeholder="Elérhető, 2 hónap"
          />
        </div>
      </div>
    </fieldset>

    <fieldset className="form-section">
      <legend>Kép</legend>
      {currentImage && (
        <div className="current-image">
          <img src={getImage(currentImage, 700, 700)} alt="Jelenlegi kép" />
        </div>
      )}
      <div className="form-group">
        <label>{currentImage ? 'Új kép feltöltése' : 'Kép feltöltése'}</label>
        <div className="file-input-wrapper">
          <label className="file-input-label" htmlFor="image">
            <span className="file-input-btn">Fájl kiválasztása</span>
            <span className={`file-input-name${fileName ? ' has-file' : ''}`}>
              {fileName || 'Nincs fájl kiválasztva'}
            </span>
          </label>
          <input type="file" id="image" accept="image/*" onChange={onImageChange} />
        </div>
      </div>
    </fieldset>
  </>
  );
};
