import React from 'react';
import './Header.scss';

function NavHeader(props) {
  return (
    <header className="nav-header">
      <div className="nav-bounds wrapper">
        <a
          href="/"
          className="nav-logo"
          tabIndex="2"
          aria-label="Ir al contenido principal"
          role="button"
        >
          Mercado libre Colombia - Donde Comprar y vender de todo
        </a>
        {props.children}
      </div>
    </header>
  );
}
export default NavHeader;
