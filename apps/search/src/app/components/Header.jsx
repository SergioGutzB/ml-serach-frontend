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
          Mercado libre - Donde Comprar y vender de todo
          <img
            className="nav-logo__image"
            src="/assets/Logo_ML.png"
            srcSet="Logo_ML@2x.png 2x"
            alt="Mercado libre - Logo"
          />
        </a>
        {props.children}
      </div>
    </header>
  );
}
export default NavHeader;
