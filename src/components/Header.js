
import "../css/Header.css";

const Header = () => (
  <header className="main-header" role="banner" aria-label="Site Header">
    <h1 tabIndex={0}>🛒 E-Kart</h1>
    <nav aria-label="Main Navigation">
      <ul className="nav-list">
        <li><a href="#cart" tabIndex={0}>Cart</a></li>
        <li><a href="#products" tabIndex={0}>Products</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
