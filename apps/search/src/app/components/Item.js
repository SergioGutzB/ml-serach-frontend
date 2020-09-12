import React from 'react';
import './Item.scss';

function Item({ result }) {
  return (
    <div className="search-item">
      <div className="search-card search-card--thumbnail">
        <a
          className="search-link"
          src={`/item/${result.id}`}
          title={result.title}
        >
          <div className="search-image">
            <img
              className="search-image__element"
              src={result.thumbnail}
              alt={result.title}
            />
          </div>
        </a>
      </div>
      <div className="search-item__content">
        <div className="search-item__price">
          <span className="search-item__symbol">$</span>
          <span className="search-item__amount">{result.price}</span>
          {result.shipping.free_shipping && (
            <img
              className="search-item__shipping"
              src="/assets/ic_shipping.png"
              alt="Envio gratis"
            />
          )}
        </div>
        <h2 className="search-item__title">{result.title}</h2>
      </div>
      <p className="search-item__state-address">{result.address.state_name}</p>
    </div>
  );
}

export default Item;
