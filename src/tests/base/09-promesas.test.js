import { getHeroeByIAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Puebas con promesas", () => {
   // done le dice al test cuando debe de terminar la prueba
   test("getHeroeByIdAsync debe retornar un hreo async", (done) => {
      const id = 1;
      getHeroeByIAsync(id)
         .then((heroe) => {
            expect(heroe).toBe(heroes[0]);
            done();
         })
         .catch(done);
   });

   test("Debe de obtener un erro si el héore por id no existe", (done) => {
      const id = 10;
      getHeroeByIAsync(id).catch((error) => {
         expect(error).toBe("No se pudo encontrar el hereo");
         done()
      });
   });
});
