import { getHeroeById } from "./08-imp-exp";

export const getHeroeByIAsync = (id) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const heroe = getHeroeById(id);
         heroe ? resolve(heroe) : reject("No se pudo encontrar el hereo");
      }, 1500);
   });
};
