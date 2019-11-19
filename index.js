const countries = require('./countries');

function getCountries() {
    return countries.map(c => c.name);
}

function getStates(country) {
    let foundCountry = countries.find(c=>c.name === country);    
    if(!foundCountry || !foundCountry.states)
        return [];
    return Object.keys(foundCountry.states)
}

function getCities(country, state) {
    let foundCountry = countries.find(c=>c.name === country);    
    if(!foundCountry || !foundCountry.states)
        return [];
    if(state)
        return foundCountry.states[state];
    let allCities = [];
    for(let state of Object.keys(foundCountry.states))
        allCities = allCities.concat(foundCountry.states[state])
    return allCities;
}

module.exports = {
    getCountries,
    getStates,
    getCities
};