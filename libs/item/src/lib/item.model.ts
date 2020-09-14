import { Author } from '@ml-search/author';

export interface ItemDetail {
  author: Author;
  item: LargeItem;
}

export interface ItemsResult {
  author: Author;
  categories: string[];
  items: Item[];
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  state_name?: string;
}

export interface LargeItem extends Item {
  sold_quantity: number;
  description: string;
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}
