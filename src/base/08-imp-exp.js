import heroes from "../data/heroes";



export const getHeroeById = (id) => heroes.find((item) => item.id === id);


export const getHereosByOwner = ( owner )=> heroes.filter(heroe => heroe.owner === owner)
