// import { owners } from './data/heroes'
import superHeroes from "../data/heroes";

// ==============================================
export const getHeroById = (id) => superHeroes.find((h) => h.id === id);

// ==============================================
export const getHeroByOwner = (owner) =>
  superHeroes.filter((h) => h.owner === owner);
