import { Link } from '@tanstack/react-router';

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>E-CORE Űrjárművek</h4>
          <p>Az űrutazás következő generációja</p>
        </div>
        <div className="footer-section">
          <h4>Kapcsolat</h4>
          <p>
            Email: <a href="mailto:info@ecore-space.com">info@ecore-space.com</a>
          </p>
          <p>Tel: +36 70 724 3066</p>
          <p>
            HR: <a href="mailto:karrier@ecore-space.com">karrier@ecore-space.com</a>
          </p>
        </div>
        <div className="footer-section">
          <h4>Gyors linkek</h4>
          <ul>
            <li>
              <Link to="/aboutus">Rólunk</Link>
            </li>
            <li>
              <Link to="/careers">Karrier</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 E-CORE Űrjárművek. Minden jog fenntartva.</p>
      </div>
    </div>
  </footer>
);
