
describe('Pruebas en el archivo demo.test.js',()=>{

    test('deben de ser iguales los string',()=>{
    
        // 1. Inicializacion (preparacion de lo que queremos hacer)
        const mensaje = 'Hola Mundo';
    
        // 2. Estimulo/Actuar 
        let mensaje2 = `Hola Mundo`;
    
        // 3. Observar el comportamiento
        expect( mensaje).toBe(mensaje2)// debe ser iguales
     
    })
})
