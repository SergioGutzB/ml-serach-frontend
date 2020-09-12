import React from 'react';
import './Item.scss';

function Item({ item }) {
  return (
    <div className="search-item">
      <div className="search-card search-card--thumbnail">
        <a className="search-link" src={`/item/${item.id}`} title={item.title}>
          <div className="search-image">
            <img
              className="search-image__element"
              src={item.picture}
              alt={item.title}
            />
          </div>
        </a>
      </div>
      <div className="search-item__content">
        <div className="search-item__price">
          <span className="search-item__symbol">{item?.price?.currency}</span>
          <span className="search-item__amount">{item?.price?.amount}</span>
          {item.free_shipping && (
            <img
              className="search-item__shipping"
              src="/assets/ic_shipping.png"
              alt="Envio gratis"
            />
          )}
        </div>
        <h2 className="search-item__title">{item.title}</h2>
      </div>
      <p className="search-item__state-address">{item.state_name}</p>
    </div>
  );
}

export default Item;
