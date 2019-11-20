const countries = require('./countries.json');

function getCountries() {
    try {
        return countries.map(c => {
            return {
                name: c.name,
                iso2: c.iso2
            };
        });
    } catch (error) {
        return [];
    }
}

function getStates(country) {
    try {
        let foundCountry = countries.find(c => `${c.name}`.toLowerCase() === `${country}`.toLowerCase());
        if (!foundCountry || !foundCountry.states)
            return [];
        return Object.keys(foundCountry.states)
    } catch (error) {
        return [];
    }
}

function getCities(country, state) {
    try {
        let foundCountry = countries.find(c => `${c.name}`.toLowerCase() === `${country}`.toLowerCase());
        if (!foundCountry || !foundCountry.states)
            return [];
        if (state)
            return foundCountry.states[state];
        let allCities = [];
        for (let state of Object.keys(foundCountry.states))
            allCities = allCities.concat(foundCountry.states[state])
        return allCities;
    } catch (error) {
        return [];
    }
}

module.exports = {
    getCountries,
    getStates,
    getCities
};