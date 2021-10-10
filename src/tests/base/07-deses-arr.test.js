import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pueba en desetructuracion", () => {
   test("Debe de retornar un string y un numero", () => {
      const [letras,numeros] = retornaArreglo();
    //   expect(arr).toEqual(["ABC", 123]);
    expect( typeof letras ).toBe('string')

    expect( typeof numeros ).toBe('number')
   });
});
