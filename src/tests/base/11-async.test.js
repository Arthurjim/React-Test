import { getImage } from "../../base/11.async"

describe('Pruebas con async-await y Fetch',()=>{
    test('Debe de retonrar el url de la imagen', async () => {

        // const url = getImage() //No se puede por que el async convierte a la funcion en una promesa
        
        const url = await getImage();
        expect( url.includes('https://') ).toBe(true)
    })
    
})