# Mercado Libre Test Front - Project Ml-Search

The project is a monorepo that contains two applications, search and api, built in React and NodeJs respectively.

The Search app is a site to search for articles and view the detail of the article. The app consumes the api exposed by the app API which in turn consumes the public API of mercadolibre.com and works as a mildelware to adjust the structure of the data returned by the endpoins.

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="250"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Build

#### Install dependencies

```
yarn install
```

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Build frontend project `Search`

```
nx serve search
```

```
yarn nx serve search
```

#### Build Backend project `Api`

```
nx serve api
```

```
yarn nx serve api
```

## Running unit tests for Search app (ReactJs)

Run `nx test search` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:search` to execute the unit tests affected by a change.

## Understand workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

### Structure

- **apps**
  - **api**
    - src
      - app
        - items
          - items.router.ts
        - main.ts
        - assets
        - environment
      - \*.config.ts|.js
  - **search**
    - src
      - app
        - components
        - scss
        - utils
        - App.js
      - assets
      - environments
      - main.tsx
      - \*.config.ts|.js

### Practices

- Support write code in javascript or typescript files
  **Frontend - Search app**
  _ Use of Sass to write css code with the BEM methodology to name class.
  _ Use of @media queries to add responsive styles to components.
  _ Use of flex box to help the page responsive
  _ Use of a 12-column grid with grid-layout to create the layout with a maximum width of 1200px to contain all the views and organize the components, according to the requirements.
  _ Use of @mixing to generate responsive sources with media queries.
  _ Use of arial-label, alt, role attributes to add accessibility meta information.
  _ Use of data-testid attributes to be used and called by tests.
  _ Using `@testing-library/jest-dom|react` to create the tests
  _ Use `useState` to store component data.
  _ Use `useEffects` to control API calls.
  _ Use `useEffects` to dynamically add attributes to the document like title and contribute to SEO.
  _ Use of meta tags to contribute to SEO.
