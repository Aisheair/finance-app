
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">FB2</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#login" className="login-btn">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

