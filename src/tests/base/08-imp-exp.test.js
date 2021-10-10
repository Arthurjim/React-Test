import { getHereosByOwner, getHeroeById } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en ufnciones de Heroes", () => {
   test("Debe de retornar un hereo por id", () => {
      const id = 5;
      const heroe = getHeroeById(id);
      const heroeTest = heroes.find((h) => h.id === id);

      expect(heroe).toEqual(heroeTest);
   });

   test("Debe de retornar undefined si Héroe un existe ", () => {
      const id = 10;
      const heroe = getHeroeById(id);

      expect(heroe).toBe(undefined);
   });

   test("Debe retornar un arreglo de solo herores de DC", () => {
      const owner = "DC";
      const ownerArrayTest = heroes.filter((h)  => h.owner === owner);
      const ownerArray = getHereosByOwner(owner);
      expect(ownerArray).toEqual(ownerArrayTest);
   });

   test("Debe de retornar un arreglo con la cantidad de héroes de Marvel ", () => {
      // const cantidad = 2;
      const owner = "Marvel";
      const ownerArrayTest = getHereosByOwner(owner)

      expect(ownerArrayTest.length).toBe(2);
   });
});
