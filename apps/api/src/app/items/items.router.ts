import express, { Request, Response } from 'express';
import fetch from 'node-fetch';

export const itemsRouter = express.Router();

function searilizerItems(json: any) {
  return {
    author: {
      name: '',
      lastname: '',
    },
    categories: json.filters[0].values[0].path_from_root.map(
      (categorie) => categorie.name
    ),
    items: json.results.map((item) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: item.installments.rate,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    })),
  };
}

function serializerItem(detail, description) {
  return {
    author: {
      name: '',
      lastname: '',
    },
    item: {
      id: detail.id,
      title: detail.title,
      price: {
        currency: detail.currency_id,
        amount: detail.price,
        decimals: detail.installments.rate,
      },
      picture: detail.thumbnail,
      condition: detail.condition,
      free_shipping: detail.shipping.free_shipping,
      sold_quantity: detail.sold_quantity,
      description: description.plain_text,
    },
  };
}

itemsRouter.get('/', async (req: Request, res: Response) => {
  const query = req.query.q;
  const api_url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  if (json?.results?.length) {
    res.status(200).send(searilizerItems(json));
  } else {
    res.status(404).send('Not found');
  }
});

itemsRouter.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const apiUrlDetail = `https://api.mercadolibre.com/items/${id}`;
  const apiUrlDescription = `https://api.mercadolibre.com/items/${id}/description`;
  const detailResponse = await fetch(apiUrlDetail);
  const descriptionResponse = await fetch(apiUrlDescription);
  const detailJson = await detailResponse.json();
  console.log(descriptionResponse);
  const descriptionJson = await descriptionResponse.json();
  res.status(200).send(serializerItem(detailJson, descriptionJson));
});
