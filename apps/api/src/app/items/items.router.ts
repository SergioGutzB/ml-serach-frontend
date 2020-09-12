import express, { Request, Response } from 'express';
import fetch from 'node-fetch';
import { environment } from '../../environments/environment';
import { getItems, getItem } from '@ml-search/item';

export const itemsRouter = express.Router();

itemsRouter.get('/', async (req: Request, res: Response) => {
  const query = req.query.q;
  const apiUrl = `${environment.api_url}/sites/MLA/search?q=${query}&limit=4`;
  const response = await fetch(apiUrl);
  const json = await response.json();
  if (json?.results?.length) {
    res.status(200).send(getItems(json));
  } else {
    res.status(404).send('Not found');
  }
});

itemsRouter.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const apiUrlDetail = `${environment.api_url}/items/${id}`;
  const apiUrlDescription = `https://api.mercadolibre.com/items/${id}/description`;
  const detailResponse = await fetch(apiUrlDetail);
  const descriptionResponse = await fetch(apiUrlDescription);
  const detailJson = await detailResponse.json();
  console.log(descriptionResponse);
  const descriptionJson = await descriptionResponse.json();
  res.status(200).send(getItem(detailJson, descriptionJson));
});

itemsRouter.get('/currency/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const apiUrl = `${environment.api_url}/currencies/CLP/${id}`;
  const response = await fetch(apiUrl);
  const json = await response.json();
  res.status(200).send(json);
});
