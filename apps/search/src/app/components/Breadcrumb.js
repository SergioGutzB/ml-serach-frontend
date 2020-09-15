import React from 'react';
import './Breadcrumb.scss';

function Breadcrumb({ categories }) {
  return (
    <ul className="breadcrumb" data-testid="breadcrumb" role="naviagion">
      {categories?.map((categorie, index) => (
        <li
          key={`index-${categorie.toString()}`}
          className="breadcrumb__item"
          role="item-navigation"
        >
          <span>{categorie}</span>
        </li>
      ))}
    </ul>
  );
}

export default Breadcrumb;
