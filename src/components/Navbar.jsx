import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import odon from '../img/odon.png';
import './Navbar.css';
const links = "https://calendly.com/odontoart/consulta-online-gratuita-clone-1?fbclid=PAZXh0bgNhZW0CMTEAAaYCzkccqbN-SDoACIXT5RKPsYk5hJ4TYKBnC9QIS1Ii9BFqBzt_rNKM78k_aem_1irkA4Jr1v8158I9fYNwaw";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo"><img src={odon} alt='logo' /></Link>
        
        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>Início</Link>
          </li>
          <li className="nav-item">
            <Link to="/sobre" className="nav-link" onClick={toggleMenu}>Sobre</Link>
          </li>
          <li className="nav-item">
            <Link to="/servicos" className="nav-link" onClick={toggleMenu}>Serviços</Link>
          </li>
          <li className="nav-item">
            <Link to={links} className="nav-link" onClick={toggleMenu}>Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;