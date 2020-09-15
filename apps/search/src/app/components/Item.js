import React from 'react';
import './Item.scss';
import { Link } from 'react-router-dom';

function Item({ item }) {
  return (
    <div className="search-item" data-testid="search-item-test">
      <div className="search-card search-card--thumbnail">
        <Link
          className="search-link"
          title={item.title}
          to={`/items/${item.id}`}
          aria-label={item.title}
          data-testid="a-image-test"
        >
          <div className="search-image">
            <img
              className="search-image__element"
              src={item.picture}
              alt={item.title}
              data-testid="image-test"
            />
          </div>
        </Link>
      </div>
      <div className="search-item__content">
        <div className="search-item__content__primary">
          <div className="search-item__price">
            <span
              className="search-item__symbol"
              data-testid="price-symbol-test"
            >
              {item?.price?.currency}
            </span>
            <span
              className="search-item__amount"
              data-testid="price-amount-test"
            >
              {item?.price?.amount}
            </span>
            {item.free_shipping && (
              <img
                className="search-item__shipping"
                src="/assets/ic_shipping.png"
                srcSet="/assets/ic_shipping@2x.png 2x"
                alt="Envio gratis"
                data-testid="shipping-test"
              />
            )}
          </div>
          <Link
            className="search-link"
            title={item.title}
            to={`/items/${item.id}`}
            aria-label={item.title}
            data-testid="a-title-test"
          >
            <h2 className="search-item__title" data-testid="title-test">
              {item.title}
            </h2>
          </Link>
        </div>
        <div className="search-item__content__secondary">
          <p className="search-item__state-address" data-testid="state-test">
            {item.state_name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
