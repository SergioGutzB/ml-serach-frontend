import { environment } from '../../environments/environment';
import React, { useState, useEffect } from 'react';
import NavHeader from './Header';
import Search from './Search';
import { useLocation, useParams } from 'react-router-dom';
import './ItemDetail.scss';
import Breadcrumb from './Breadcrumb';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function ItemDetail() {
  const [result, setResult] = useState({ item: {} });
  const { id } = useParams();
  const { item } = result;
  const condition = item?.condition === 'new' ? 'Nuevo' : 'Usado';

  const requestItemDetail = async () => {
    if (id) {
      // const res = await fetch(`${environment.api_url}/items/${id}`);
      // const resJson = await res.json();
      // setResult(resJson);
      setResult({
        author: { name: 'Sergio', lastname: 'Gutierrez' },
        item: {
          id: 'MLA875707455',
          title:
            'Samsung Galaxy A31 Dual Sim 128 Gb Prism Crush Black 4 Gb Ram',
          price: { currency: '$', amount: 61600, decimals: 2 },
          picture:
            'http://http2.mlstatic.com/D_647428-MLA42951187725_072020-O.jpg',
          condition: 'new',
          free_shipping: true,
          sold_quantity: 0,
          description:
            'Enfocate en lo importante\nEl novedoso sistema operativo Android 10 incorpora respuestas inteligentes y acciones sugeridas para todas tus aplicaciones. Además, incluye la función de Bienestar Digital y el Tema Oscuro, para que evites distracciones y logres una mayor concentración.\n\nMayor rendimiento\nSu memoria RAM de 4 GB te permitirá ejecutar varias aplicaciones al mismo tiempo, jugar y navegar con gran rapidez y sin inconvenientes.\n\nExperiencia visual increíble\nMirá tus series y películas favoritas con la mejor definición a través de su pantalla Super AMOLED de 6.4". Disfrutá de colores brillantes y detalles precisos en todos tus contenidos.\n\nGran capacidad de almacenamiento\nCon su memoria interna de 128 GB podrás almacenar archivos y aplicaciones de gran tamaño sin necesidad de subirlos a la nube. Disfrutá de tus contenidos favoritos en todo momento.\n\nBatería superior\n¡Desenchufate! Con la súper batería de 5000 mAh, tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de recargar tu teléfono.\n\nFotografía profesional en tu bolsillo\nDescubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Gracias a la cámara teleobjetivo capturarás detalles casi imperceptibles, con la de ángulo amplio sacarás fotos nítidas y la ultra gran angular te permitirá obtener imágenes panorámicas excepcionales. ¿Amás los fondos difuminados? Vas a conseguirlos con el famoso modo retrato de la cuarta cámara.\n\n Además, el dispositivo cuenta con cámara frontal de 20 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas.\n\nTecnología premium\nMaximizá tu seguridad y asegurate de que solo vos puedas desbloquear el equipo. Gracias al sensor de huella dactilar, podrás habilitar tu dispositivo con solo un toque. Además, cuenta con reconocimiento facial que se activa rápidamente al colocar la pantalla frente a tu rostro.',
        },
      });
    }
  };

  useEffect(() => {
    requestItemDetail();
  }, [id]);

  return (
    <>
      <NavHeader className="nav-header" data-test="nav-header-component">
        <Search className="nav-search"></Search>
      </NavHeader>
      <Breadcrumb categories={item.categories} />
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
                {condition} - {item.sold_quantity} vendidos
              </span>
              <h2 className="search-item-detail__title">{item.title}</h2>
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
                aria-label={`Descripción - ${item.title}`}
              >
                {item.description}
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
export default ItemDetail;
