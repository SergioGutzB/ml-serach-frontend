import React from 'react';
import './Breadcrumb.scss';

function Breadcrumb({ categories }) {
  return (
    <>
      <ul className="breadcrumb">
        {categories?.map((categorie, index) => (
          <li
            key={`index-${categorie.toString()}`}
            className="breadcrumb__item"
          >
            {categorie}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Breadcrumb;
