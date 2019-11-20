# city-state.js

> Get the a list of countries, states & cities

## Installation

```bash
npm install --save cities-states-countries
yarn add cities-states-countries
```

## Usage

```js

import { getCountries, getStates, getCities } from 'cities-states-countries';

const listOfCountries = getCountries();
const listCities = getCountries('contry-name');
const listOfCitiesOfCountry = getCountries('country-name');
const listOfCitiesOfCountryAndState = getCountries('country-name', 'state-name');

```