import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function NavHeader(props) {
  return (
    <header className="nav-header" data-testid="nav-header-component">
      <div className="nav-bounds wrapper">
        <Link
          to="/"
          className="nav-header__logo"
          tabIndex="2"
          aria-label="Ir al contenido principal"
          role="button"
          data-testid="logo-link-test"
        >
          Mercado libre - Donde Comprar y vender de todo
          <img
            className="nav-header__logo__image"
            src="/assets/Logo_ML.png"
            srcSet="/assets/Logo_ML@2x.png 2x"
            alt="Mercado libre - Logo"
            data-testid="logo-image-test"
          />
        </Link>
        <div className="nav-header__search">{props.children}</div>
      </div>
    </header>
  );
}
export default NavHeader;
