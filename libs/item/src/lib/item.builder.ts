import { ItemsResult, ItemDetail } from './item.model';
import { getAuthor } from '@ml-search/author';
import { getCurrency } from '@ml-search/currencies';

export const getItems = (json: any): ItemsResult => {
  return {
    author: getAuthor(),
    categories: json?.filters[0]?.values[0]?.path_from_root.map(
      (categorie) => categorie.name
    ),
    items: json.results.map((item) => {
      const currency = getCurrency(item.currency_id);
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: currency.symbol,
          amount: item.price,
          decimals: currency.decimal_places,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        state_name: item.address.state_name,
      };
    }),
  };
};

export const getItem = (detail: any, description: any): ItemDetail => {
  const currency = getCurrency(detail.currency_id);
  return {
    author: getAuthor(),
    item: {
      id: detail.id,
      title: detail.title,
      price: {
        currency: currency.symbol,
        amount: detail.price,
        decimals: currency.decimal_places,
      },
      picture: detail?.pictures[0].url,
      condition: detail?.condition,
      free_shipping: detail?.shipping.free_shipping,
      sold_quantity: detail?.sold_quantity,
      description: description?.plain_text,
    },
  };
};
