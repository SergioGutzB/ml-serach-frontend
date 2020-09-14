import { environment } from '../../environments/environment';
import React, { useState, useEffect } from 'react';
import './ItemDetail.scss';

function ItemDetail(props) {
  const { item, setItemId } = props;
  const condition = item?.condition === 'new' ? 'Nuevo' : 'Usado';

  const id = props.match.params.id;
  useEffect(() => {
    setItemId(id);
  }, [id]);

  const showDetail = () => {
    if (item?.id) {
      return (
        <section className="search-item-detail">
          <div className="wrapper">
            <article className="search-item-detail__container">
              <div className="search-item-detail__images">
                <div className="search-card search-card--picture">
                  <div className="search-image">
                    <img
                      className="search-image__element"
                      src={item?.picture}
                      alt={item?.title}
                    />
                  </div>
                </div>
              </div>
              <div className="search-item-detail__data">
                <span
                  className="search-item-detail__condition"
                  aria-label={`Condición - ${condition}`}
                >
                  {condition} - {item?.sold_quantity} vendidos
                </span>
                <h2 className="search-item-detail__title">{item?.title}</h2>
                <div
                  className={`search-item-detail__price ${
                    item?.price?.amount > 9999999
                      ? ' search-item-detail__price--small'
                      : ' '
                  }`}
                >
                  <span className="search-item-detail__price__symbol">
                    {item?.price?.currency}
                  </span>
                  <span className="search-item-detail__price__amount">
                    {item?.price?.amount}
                  </span>
                  <span className="search-item-detail__price__decimals">
                    {'0'.repeat(item?.price?.decimals)}
                  </span>
                </div>
                <button className="search-item-detail__buy-btn">Comprar</button>
              </div>
              <div className="search-item-detail__description">
                <h2 className="search-item-detail__description__title">
                  Descripción del producto
                </h2>
                <p
                  className="search-item-detail__description__text"
                  aria-label={`Descripción - ${item?.title}`}
                >
                  {item?.description}
                </p>
              </div>
            </article>
          </div>
        </section>
      );
    } else {
      return <p className="loading">Cargando...</p>;
    }
  };
  return showDetail();
}
export default ItemDetail;
