import React from 'react';
import './NavComponent.css';

const NavComponent = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-text">Challenge 11 David Thorp</span>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <a className="nav-link" href="/">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">Acerca de</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavComponent;
