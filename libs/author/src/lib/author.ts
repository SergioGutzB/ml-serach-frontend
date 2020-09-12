export interface Author {
  name: string;
  lastname: string;
}

export function getAuthor(): Author {
  return {
    name: 'Sergio',
    lastname: 'Gutierrez',
  };
}
