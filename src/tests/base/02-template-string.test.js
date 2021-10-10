import '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string';

describe('Puebas en 02-template-string.js', () => {
    
    // test('El nombre que llevara la prueba')

    test('getSaludo debe de retornar hola Arturo',()=>{
        const nombre = 'Arturo';
        const saludo = getSaludo(nombre)

        expect(saludo).toBe('hola '+nombre)
    })

    test('getSaludo debe retornar hola Invitado, cuando no se le pasa ningun parametro',()=>{
        const saludo = getSaludo()
        expect(saludo).toBe('hola Invitado')
    })
})
