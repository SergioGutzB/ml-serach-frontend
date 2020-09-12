export interface Currency {
  id: string;
  description: string;
  symbol: string;
  decimal_places: number;
}

// TODO: It can be improved, if the data is consumed from an endpoint. but it is not part of the initial requirement.
const data = [
  {
    id: 'ARS',
    description: 'Peso argentino',
    symbol: '$',
    decimal_places: 2,
  },
  {
    id: 'BRL',
    description: 'Real',
    symbol: 'R$',
    decimal_places: 2,
  },
  {
    id: 'CLF',
    description: 'Unidad de Fomento',
    symbol: 'UF',
    decimal_places: 2,
  },
  {
    id: 'CLP',
    description: 'Peso Chileno',
    symbol: '$',
    decimal_places: 0,
  },
  {
    id: 'COP',
    description: 'Peso colombiano',
    symbol: '$',
    decimal_places: 0,
  },
  {
    id: 'CRC',
    description: 'Colones',
    symbol: '¢',
    decimal_places: 2,
  },
  {
    id: 'DOP',
    description: 'Peso Dominicano',
    symbol: '$',
    decimal_places: 2,
  },
  {
    id: 'EUR',
    description: 'Euro',
    symbol: '€',
    decimal_places: 2,
  },
  {
    id: 'MXN',
    description: 'Peso Mexicano',
    symbol: '$',
    decimal_places: 2,
  },
  {
    id: 'PAB',
    description: 'Balboa',
    symbol: 'B/.',
    decimal_places: 2,
  },
  {
    id: 'PEN',
    description: 'Soles',
    symbol: 'S/.',
    decimal_places: 2,
  },
  {
    id: 'USD',
    description: 'Dólar',
    symbol: 'U$S',
    decimal_places: 2,
  },
  {
    id: 'UYU',
    description: 'Peso Uruguayo',
    symbol: '$',
    decimal_places: 2,
  },
  {
    id: 'VEF',
    description: 'Bolivar fuerte',
    symbol: 'Bs.',
    decimal_places: 2,
  },
  {
    id: 'GTQ',
    description: 'Quetzal Guatemalteco',
    symbol: 'Q',
    decimal_places: 2,
  },
  {
    id: 'BOB',
    description: 'Boliviano',
    symbol: 'Bs',
    decimal_places: 2,
  },
  {
    id: 'HNL',
    description: 'Lempira',
    symbol: 'L',
    decimal_places: 0,
  },
  {
    id: 'NIO',
    description: 'Córdoba',
    symbol: 'C$',
    decimal_places: 0,
  },
  {
    id: 'PYG',
    description: 'Guaraní',
    symbol: '₲',
    decimal_places: 0,
  },
  {
    id: 'CUC',
    description: 'Peso Cubano Convertible',
    symbol: '$',
    decimal_places: 2,
  },
];

export function getCurrency(id): Currency {
  const currencies: Currency[] = data.filter((currency) => currency.id === id);
  if (currencies.length) {
    return currencies[0];
  } else {
    return null;
  }
}
