export const getFilms = () => {
    return fetch('https://swapi.dev/api/films/').then(response => response.json())
}
export const getFilmsById = (id) => {
    return fetch('https://swapi.dev/api/films/'+id).then(response => response.json())
}

export const getPeople = () => {
    return fetch('https://swapi.dev/api/people/').then(response => response.json())
}
export const getPeopleById = (id) => {
    return fetch('https://swapi.dev/api/people/'+id).then(response => response.json())
}

export const getPlanets = () => {
    return fetch('https://swapi.dev/api/planets/').then(response => response.json())
}
export const getPlanetsById = (id) => {
    return fetch('https://swapi.dev/api/planets/'+id).then(response => response.json())
}

export const getSpecies = () => {
    return fetch('https://swapi.dev/api/species/').then(response => response.json())
}
export const getSpeciesById = (id) => {
    return fetch('https://swapi.dev/api/species/'+id).then(response => response.json())
}

export const getStarships = () => {
    return fetch('https://swapi.dev/api/starships/').then(response => response.json())
}
export const getStarshipsById = (id) => {
    return fetch('https://swapi.dev/api/starships/'+id).then(response => response.json())
}

export const getVehicles = () => {
    return fetch('https://swapi.dev/api/vehicles/').then(response => response.json())
}
export const getVehiclesById = (id) => {
    return fetch('https://swapi.dev/api/vehicles/'+id).then(response => response.json())
}